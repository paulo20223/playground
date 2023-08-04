import Oruga from '@oruga-ui/oruga-next'

import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Oruga, {
    modal: { scroll: 'clip', closeIcon: '', trapFocus: true, width: '100%' },
    loading: { icon: 'ri-loader-2-line ri-xl' },
    iconPack: 'ri',
  })
})
