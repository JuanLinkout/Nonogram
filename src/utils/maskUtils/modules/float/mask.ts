import { SMaskMasks } from '@utils/maskUtils/types'

export function mask(input?: string): string {
  if (!input) return ''

  const cleanedInput = input.replace(/[^0-9.]/g, '')

  const hasMultipleDecimals = cleanedInput.split('.').length > 2
  const startsWithDecimal = cleanedInput.startsWith('.')
  const endsWithDecimal = cleanedInput.endsWith('.')
  const hasOnlyDecimal = cleanedInput === '.'
  const hasOnlyZeroBeforeDecimal = cleanedInput === '0.'

  const isValidNumber =
    !hasMultipleDecimals &&
    !startsWithDecimal &&
    !endsWithDecimal &&
    !hasOnlyDecimal &&
    !hasOnlyZeroBeforeDecimal

  if (isValidNumber) {
    return cleanedInput
  }

  return ''
}

export function unmask(input?: string): string {
  return input || ''
}

export const masks: SMaskMasks = {
  mask,
  unmask
}
