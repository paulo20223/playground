import { APIStoreModule } from '@/services'
import type { IServiceData } from '~/models'
import { ServiceModel } from '~/models'

export function serviceService() {
  const { api, list, retrieve } = APIStoreModule<IServiceData, ServiceModel>('service/', ServiceModel)

  async function suggest(payload: { name: string; triggers: string }) {
    return await api('suggest/', { method: 'POST', body: payload })
  }

  return { api, list, retrieve, suggest }
}
