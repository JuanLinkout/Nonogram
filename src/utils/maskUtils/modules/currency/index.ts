import { SMaskModule } from '@utils/maskUtils/types'
import { constants } from './constants'
import { masks } from './mask'
import { validators } from './validator'

export const CurrencyModule: SMaskModule = {
  ...constants,
  ...masks,
  ...validators
}
