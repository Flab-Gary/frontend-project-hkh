import appSettings from '@/setup'
import type { ISummonerAPI } from './summoner'


export interface IAPIFactory {
  summoner: ISummonerAPI
  
}

export default appSettings.APIs