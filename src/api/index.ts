import appSettings from '@/setup'
import type { ISummonerAPI } from './summoner'


export interface IAPIs {
  summoner: ISummonerAPI
  
}

export default appSettings.APIs