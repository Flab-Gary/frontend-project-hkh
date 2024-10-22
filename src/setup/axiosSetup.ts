import axios, { AxiosInstance, AxiosError, AxiosResponse } from 'axios';
import { CustomError } from '@/types'; 
import type { IRiotError } from '@/models';


export default class AxiosGroup {
  riotAxios: AxiosInstance;

  constructor() {
    const defaultConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    this.riotAxios = axios.create({
      ...defaultConfig,
      baseURL: process.env.NEXT_PUBLIC_RIOT_URL_PLATFORM,
      headers: {
        'X-Riot-Token': process.env.NEXT_PUBLIC_RIOT_API_KEY,
      },
    });

    // Interceptor 설정
    this.setupInterceptors(this.riotAxios);
  }

  // 공통 Interceptor 설정
  setupInterceptors(axiosInstance: AxiosInstance) {
    axiosInstance.interceptors.request.use(
      (config) => {
        return config;
      },
      (err: AxiosError) => {
        return Promise.reject(this.handleErrorResponse(err));
      }
    );

    axiosInstance.interceptors.response.use(
      (res: AxiosResponse) => {
        return res;
      },
      (err: AxiosError) => {
        return Promise.reject(this.handleErrorResponse(err));
      }
    );
  }

  isErrorResponse(data: any): data is IRiotError {
    return data && data.status && typeof data.status.status_code === 'number';
  }

  handleErrorResponse(err: AxiosError) {
    const responseData = err.response?.data;

    if (this.isErrorResponse(responseData)) {
      const statusCode = responseData.status.status_code;
      const url = err.config?.url || '';

      if (url.includes('spectator/v4/active-games/by-summoner') && statusCode === 404) {
        return this.createError(404, '유저가 게임중이지 않습니다', '404Error');
      }

      switch (statusCode) {
        case 404:
          return this.createError(404, '찾을 수 있는 데이터가 없습니다', '404Error');
        case 403:
        case 401:
          return this.createError(403, '서버 접근 권한 확인이 필요합니다', '403Error');
        case 429:
          return this.createError(429, '허용 검색량을 초과하였습니다. 3분 후 다시 시도해 주세요', 'LimitError');
        default:
          return this.createError(500, '서버에 장애가 있어 잠시 후 시도해주세요', 'UnhandledError');
      }
    }

    return this.createError(500, '알 수 없는 오류가 발생했습니다', 'UnknownError');
  }

  // 커스텀 에러 생성
  createError(status: number, message: string, name: string): CustomError {
    return { status, message, name };
  }
}
