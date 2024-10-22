import { QueryClient } from '@tanstack/react-query'
import { IRepositories } from '@/repositories'

export default class Repositories implements IRepositories {
  constructor(readonly queryClient: QueryClient) {
  }
}
