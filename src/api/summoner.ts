import { PATH } from "@/constant"
import type { ISummonerInfo } from "@/models/summoner"
import type { AxiosInstance, AxiosResponse } from "axios"

export interface ISummonerAPI {
  getSummonerByNickname: (nickname: string) => Promise<AxiosResponse<ISummonerInfo>>
  getSummonerByPUUID: (puuid: string) => Promise<AxiosResponse<ISummonerInfo>>
}



class SummonerAPI implements ISummonerAPI {
  constructor(readonly axios: AxiosInstance) {}


  async getSummonerByNickname(nickname: string): Promise<AxiosResponse<ISummonerInfo>> {
    const response = await this.axios({
      method: 'get',
      url: PATH.getSummonerByNickname.replace('{nickname}', nickname),
    })
    return response
  }

  async getSummonerByPUUID(puuid: string): Promise<AxiosResponse<ISummonerInfo>> {
    const response = await this.axios({
      method: 'get',
      url: PATH.getSummonerByPUUID.replace('{puuid}', puuid),
    })
    return response
  }
}

export default SummonerAPI