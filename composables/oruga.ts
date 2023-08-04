import { useProgrammatic } from '@oruga-ui/oruga-next'

export function useOruga() {
  const { oruga } = useProgrammatic()
  return oruga
}
