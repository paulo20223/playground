export interface IListResponse<T> {
  count: number
  next: number | null
  previous: number | null
  results: T[]
}

export interface IFilterQuery {
  page_size: number
  page: number
  ordering: string
  search: string
}

export type FetchQuery = Record<string, any>
