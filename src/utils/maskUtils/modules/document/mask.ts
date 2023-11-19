function mask(input?: string, type?: 'cpf' | 'cnpj'): string {
  if (!input) return ''

  let response = input.replace(/\D/g, '')

  if (type) {
    if (type === 'cpf') {
      response = response.replace(/(\d{3})(\d)/, '$1.$2')
      response = response.replace(/(\d{3})(\d)/, '$1.$2')
      response = response.replace(/(\d{3})(\d{1,2})$/, '$1-$2')
    } else if (type === 'cnpj') {
      response = response.replace(/(\d{2})(\d)/, '$1.$2')
      response = response.replace(/(\d{3})(\d)/, '$1.$2')
      response = response.replace(/(\d{3})(\d)/, '$1/$2')
      response = response.replace(/(\d{4})(\d{1,2})$/, '$1-$2')
    }

    return response
  }

  if (input.length <= 14) {
    response = response.replace(/(\d{3})(\d)/, '$1.$2')
    response = response.replace(/(\d{3})(\d)/, '$1.$2')
    response = response.replace(/(\d{3})(\d{1,2})$/, '$1-$2')
    response = response.replace(/(\d{3})(\d{1,2})\d+$/, '$1-$2')
  } else {
    response = response.replace(/(\d{2})(\d)/, '$1.$2')
    response = response.replace(/(\d{3})(\d)/, '$1.$2')
    response = response.replace(/(\d{3})(\d)/, '$1/$2')
    response = response.replace(/(\d{4})(\d{1,2})$/, '$1-$2')
    response = response.replace(/(\d{4})(\d{1,2})\d+$/, '$1-$2')
  }

  return response
}

function unmask(input?: string): string {
  if (!input) return ''

  return input.replace(/\D+/g, '')
}

export const masks = {
  mask,
  unmask
}
