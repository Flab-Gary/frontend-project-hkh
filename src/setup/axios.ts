import { AxiosInstance } from 'axios'
import appSettings from '@/setup'

export interface IAxiosGroup {
  riotAxios: AxiosInstance
}

export default appSettings.axiosGroup.riotAxios

