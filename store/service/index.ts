import { defineStore } from 'pinia'

import { APIStoreModule } from '@/store'
import type { IServiceData } from '~/models'
import { ServiceModel } from '~/models'

export const serviceStore = defineStore('service', () => {
  const { api, list, retrieve } = APIStoreModule<IServiceData, ServiceModel>(
    'service/',
    ServiceModel,
  )

  async function suggest(payload: { name: string; triggers: string }) {
    return await api('suggest/', { method: 'POST', body: payload })
  }

  return { api, list, retrieve, suggest }
})
