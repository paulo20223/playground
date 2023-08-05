import type { FetchRequest } from 'ofetch'
import type { IFilterQuery, IListResponse } from './index.types'
export * from './index.types'

export interface Newable<T> { new(...args: any[]): T }

export function APIStoreModule<
  IGet,
  TGetModel,
  IFiltersInit = Partial<IGet>,
  TKey = number,
  IRead = IGet,
  TReadModel = TGetModel,
  ICreate = IGet,
  IUpdate = IGet,
>(appUri: string, Model: Newable<TGetModel>, ReadModel: Newable<TGetModel | TReadModel> = Model) {
  const config = useRuntimeConfig()
  const nuxtApp = useNuxtApp()

  const { locale } = nuxtApp.$i18n

  const headers = {
    'Accept': 'application/json',
    'Cache-Control': 'no-cache',
    'Accept-Language': locale.value,
  }
  const apiConfig = {
    baseURL: `${config.public.baseAPI}/api/v1/${appUri}/`,
    headers,
  }

  const apiBase = $fetch.create({
    ...apiConfig,

    // async onRequest({ options }) {
    //   const store = authStore()
    //   const { user } = storeToRefs(store)

    //   const jwt = user.value?.jwt

    //   if (jwt?.access) {
    //     options.headers = {
    //       ...options.headers,
    //       Authorization: `Bearer ${jwt.access}`,
    //     }
    //   }
    // },
  })

  const api = async <T>(request: FetchRequest, options?: {}): Promise<T> => {
    try {
      const response = await apiBase.raw<T>(request, options)
      return response._data as T
    } catch (e) {
      throw error.data
    }

    // try {
    //   const response = await apiBase.raw<T>(request, options)
    //   return response._data as T
    // } catch (error: any) {
    //   const store = authStore()
    //   const { user } = storeToRefs(store)

    //   if (error.response?.status !== 401) {
    //     const errorMessage = error.response ? parseError(error.data) : error.message
    //     notifyError(errorMessage)
    //     throw error.data
    //   }

    //   if (!user.value) {
    //     throw error
    //   }

    //   const jwt = user.value.jwt
    //   if (!jwt?.access) {
    //     await store.logout()
    //     throw error.data
    //   }

    //   // Update JWT
    //   try {
    //     const refreshedJWT = await $fetch<ITokenModelData>(
    //     `${config.public.baseAPI}/api/v1/user/refresh-token/`,
    //     {
    //       method: 'POST',
    //       body: { refresh: jwt.refresh },
    //       headers: {
    //         ...headers,
    //         Authorization: `Bearer ${jwt.access}`,
    //       },
    //     })
    //     user.value.jwt = refreshedJWT
    //   } catch (error) {
    //     user.value = undefined
    //   }

    //   // Request again
    //   try {
    //     const response = await apiBase.raw(request, options)
    //     return response._data as T
    //   } catch {
    //     throw error.response
    //   }
    // }
  }

  type IFilters = Partial<IFiltersInit & IFilterQuery>
  type TListResponse = IListResponse<TGetModel | IRead>

  const listQuery: Ref<IFilters> = ref({})
  const items: Ref<IListResponse<TGetModel | TReadModel> | undefined> = ref()

  async function retrieve(pk: TKey) {
    const response = await api<IGet>(`${pk}/`, { method: 'GET', query: listQuery.value })
    return new Model(response)
  }

  async function list(params: IFilters = {}, route = '') {
    listQuery.value = { ...listQuery.value, ...params }
    const response = await api<TListResponse>(route, {
      method: 'GET',
      query: listQuery.value,
    })

    items.value = {
      ...response,
      results: response.results.map(item => new ReadModel(item)),
    }
    return items
  }

  async function create(data: ICreate) {
    return await api<IGet>('', {
      method: 'POST',
      body: data as Record<string, any>,
    })
  }

  async function update(id: TKey, data: IUpdate) {
    return await api<Partial<IGet>>(`${id}/`, {
      method: 'PATCH',
      body: data as Record<string, any>,
    })
  }

  async function remove(pk: TKey) {
    return await api<void>(`${pk}/`, { method: 'DELETE' })
  }

  async function updateItem(pk: TKey) {
    const objIndex = items.value?.results.findIndex(obj => obj && obj?.id === pk)
    if (typeof objIndex === 'undefined' || !items.value) {
      return
    }

    try {
      const item = await retrieve(pk)
      items.value.results[objIndex] = new ReadModel(item)
    } catch {
      delete items.value.results[objIndex]
    }
  }

  return { api, apiBase, items, retrieve, list, updateItem, listQuery, create, update, remove }
}
