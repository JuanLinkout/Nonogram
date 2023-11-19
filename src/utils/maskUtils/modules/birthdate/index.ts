import { SMaskModule } from '@utils/maskUtils/types'
import { constants } from './constants'
import { masks } from './mask'
import { validators } from './validator'

export const BirthdateModule: SMaskModule = {
  ...constants,
  ...masks,
  ...validators
}
