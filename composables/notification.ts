import { debounce } from 'lodash'
import { useOruga } from './oruga'

export const notifyError = debounce(async (error: string | unknown, position = 'bottom') => {
  useOruga().notification.open({
    duration: 3000,
    message: `${error?.message || error}`,
    position,
    variant: 'danger',
    rootClass: 'notification-error',
  })
}, 500)

export function notifySuccess(message: string | unknown, position = 'top') {
  useOruga().notification.open({
    duration: 3000,
    message: `${message}`,
    position,
    variant: 'primary',
    rootClass: 'notification-error',
  })
}
