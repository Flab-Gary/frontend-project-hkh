import type { IAPIs } from '@/api'
import type { IAxiosGroup } from './axios'
import type { ISummonerAPI } from '@/api/summoner'
import SummonerAPI from '@/api/summoner'


export default class APIs implements IAPIs {
  summoner: ISummonerAPI
  
  constructor(
    readonly axiosGroup: IAxiosGroup,
  ) {
    this.summoner = new SummonerAPI(axiosGroup.riotAxios)
  }
}


