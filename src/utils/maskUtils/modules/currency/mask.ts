import { SMaskMasks } from '@utils/maskUtils/types'
import { formatIntegerToFloat } from '@utils/functions/formatIntegerToFloat'

export function mask(data: string) {
  const formatedData = formatIntegerToFloat(data)
  return formatedData
    .replace(/\D/g, '')
    .replace(/(\d)(\d{2})$/, '$1,$2')
    .replace(/(\d)(\d{3},)/g, '$1.$2')
    .replace(/(\d)(\d{3}\.)/g, '$1.$2')
    .replace(/(\d)(\d{3}\.)/g, '$1.$2')
    .replace(/(\w)/, 'R$ $1')
}

export function unmask(input?: string): string {
  if (!input) return ''

  return input?.replace('R$', '').replace(/\./g, '').replace(',', '.').trim()
}

export const masks: SMaskMasks = {
  mask,
  unmask
}
