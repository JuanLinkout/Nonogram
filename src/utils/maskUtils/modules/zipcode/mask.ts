import { SMaskMasks } from '../../types'

export function mask(input?: string): string {
  if (!input) return ''

  const response = input
    .replace(/\D/g, '')
    .replace(/(^\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1')

  return response
}

export function unmask(input?: string): string {
  if (!input) return ''

  return input.replace('-', '')
}

export const masks: SMaskMasks = {
  mask,
  unmask
}
