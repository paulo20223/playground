import { storeToRefs } from 'pinia'
import { authStore } from '~/store'

export function isAuthorized() {
  const userStore = authStore()
  const { user } = storeToRefs(userStore)
  return !!user.value
}

export function currentUser() {
  const userStore = authStore()
  const { user } = storeToRefs(userStore)
  return user.value
}
