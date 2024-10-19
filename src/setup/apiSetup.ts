import { IAPIFactory } from './../api/index';
import type { IAxiosGroup } from './axios'
import type { ISummonerAPI } from '@/api/summoner'
import SummonerAPI from '@/api/summoner'


export default class APIFactory implements IAPIFactory {
  summoner: ISummonerAPI
  
  constructor(
    readonly axiosGroup: IAxiosGroup,
  ) {
    this.summoner = new SummonerAPI(axiosGroup.riotAxios)
  }
}


