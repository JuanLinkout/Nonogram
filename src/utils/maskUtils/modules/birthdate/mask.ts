import { SMaskMasks } from '@utils/maskUtils/types'

export function mask(input?: string): string {
  if (!input) return ''

  return input
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, (_, group1, group2) => {
      const group1parsed = Number(group1)
      if (group1parsed > 31) {
        group1 = '31'
      } else if (group1parsed < 1) {
        group1 = '01'
      }
      return `${group1}/${group2}`
    })
    .replace(/(\/\d{2})(\d)/, (_, group1, group2) => {
      const group1parsed = Number(group1.replace('/', ''))
      if (group1parsed > 12) {
        group1 = '/12'
      } else if (group1parsed < 1) {
        group1 = '/01'
      }
      return `${group1}/${group2}`
    })
    .replace(/(\/\d{4})(\d+?$)/, (_, group1) => {
      const group1parsed = Number(group1.replace('/', ''))
      if (group1parsed < 0) {
        group1 = '/0000'
      }
      return group1
    })
}

export function unmask(input?: string): string {
  if (!input) return ''

  return input.replace('-', '')
}

export const masks: SMaskMasks = {
  mask,
  unmask
}
