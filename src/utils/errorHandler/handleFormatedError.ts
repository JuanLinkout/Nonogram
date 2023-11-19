import { HttpError, ErrorHandlerResponse } from './types'

export const handleFormatedError = (error: HttpError): ErrorHandlerResponse => {
  const message =
    error?.response?.data?.displayMessage ||
    'Por favor entre em contato com o nosso suporte.'
  const title = error?.response?.data?.displayTitle || 'Algum erro aconteceu'
  const code = error?.response?.data?.errorCode || undefined

  return {
    title,
    message,
    code
  }
}
