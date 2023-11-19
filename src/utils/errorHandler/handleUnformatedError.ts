import { ErrorHandlerResponse } from './types'

export const handleUnformatedError = (
  error: Error | any
): ErrorHandlerResponse => {
  console.error('HandleUnformatedError: ', error)

  let message = 'Por favor entre em contato com o nosso suporte.'
  if (error?.message === 'Network error') {
    message = 'Você está sem conexão com a internet.'
  } else if (error?.message) {
    message = error?.message
  }

  return {
    title: error?.title || 'Algo deu errado do nosso lado',
    message
  }
}
