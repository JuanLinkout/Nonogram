import { SMaskValidators } from '@utils/maskUtils/types'
import { format, isAfter, parseISO } from 'date-fns'

const isValid = (value: string) => {
  const regex = /\d{2}\/\d{2}\/\d{4}/
  if (regex.test(value)) {
    const date = value.split('/')
    const day = parseInt(date[0])
    const month = parseInt(date[1])
    const year = parseInt(date[2])
    const dateFormated = parseISO(
      format(new Date(year, month, day), 'yyyy-MM-dd')
    )
    const today = parseISO(format(new Date(), 'yyyy-MM-dd'))
    if (isAfter(dateFormated, today)) return false
    else return true
  } else return false
}
export const validators: SMaskValidators = { isValid }
