import { AmplifyError, ErrorHandlerResponse, HttpError } from './types'
import { handleAmplifyError } from './handleAmplifyError'
import { handleFormatedError } from './handleFormatedError'
import { handleUnformatedError } from './handleUnformatedError'

export const errorHandler = (
  error: unknown,
  isAmplify?: boolean
): ErrorHandlerResponse => {
  const httpError = error as HttpError
  let response: ErrorHandlerResponse

  if (isAmplify) {
    response = handleAmplifyError(error as AmplifyError)
  } else if (httpError?.response?.data) {
    response = handleFormatedError(httpError)
  } else {
    response = handleUnformatedError(error as Error)
  }

  return response
}
