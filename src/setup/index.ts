import { QueryClient } from '@tanstack/react-query'

import type { IAxiosGroup } from './axios'
import AxiosGroup from '@/setup/axiosSetup'
import type { IAPIFactory } from '@/api'
import APIs from './apiSetup'
import type { IRepositories } from '@/repositories'
import Repositories from './repositories'
import type { IServices } from '@/services'
import Services from './services'

export interface IAppSettings {
  readonly axiosGroup: IAxiosGroup
  readonly queryClient: QueryClient
  readonly repositories: IRepositories
  APIs: IAPIFactory
  services: IServices
}

class AppSettings implements IAppSettings {
  readonly axiosGroup: IAxiosGroup
  readonly queryClient: QueryClient
  readonly repositories: IRepositories
  private _APIs: IAPIFactory
  private _services: IServices

  get APIs() {
    return this._APIs
  }

  get services() {
    return this._services
  }

  constructor() {
    this.axiosGroup = new AxiosGroup()
    this.queryClient = new QueryClient()
    this.repositories = new Repositories(this.queryClient)
    this._APIs = new APIs(
      this.axiosGroup,
    )
    this._services = new Services(
      this.repositories,
      this._APIs,
      this.queryClient
    )

  }
}

const appSettings = new AppSettings()

export default appSettings
