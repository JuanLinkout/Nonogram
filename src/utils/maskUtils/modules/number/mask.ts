import { SMaskMasks } from '@utils/maskUtils/types'

export function mask(input?: string): string {
  if (!input) return ''

  return input.replace(/\D/g, '')
}

export function unmask(input?: string): string {
  return input || ''
}

export const masks: SMaskMasks = {
  mask,
  unmask
}
