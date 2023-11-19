import { SMaskModule } from '@utils/maskUtils/types'
import { masks } from './mask'
import { validators } from './validator'

export const FloatModule: SMaskModule = {
  ...masks,
  ...validators
}
