
import type { IAPIs } from '@/api';
import type { IRepositories } from '@/repositories';
import type { IServices } from '@/services'
import type { QueryClient } from '@tanstack/react-query';

export default class Services implements IServices {
  constructor(
    readonly repositories: IRepositories,
    readonly APIs: IAPIs,
    readonly queryClient: QueryClient,
  ) {
  }
}
