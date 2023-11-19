function cnpjNumberMultiplier(numbers: string, size: number, position: number) {
  let sum = 0
  for (let i = size; i >= 1; i--) {
    sum += Number(numbers.charAt(size - i)) * position--
    if (position < 2) {
      position = 9
    }
  }

  return sum
}

function getCnpjVerifyDigit(sum: number) {
  const result = sum % 11 < 2 ? 0 : 11 - (sum % 11)
  return result
}

export function isCpfValid(inputCPF: string) {
  const cpfJustNumber = inputCPF.replace(/[\s.-]*/gim, '')
  let soma = 0
  let resto

  if (cpfJustNumber === '00000000000') return false
  for (let i = 1; i <= 9; i++)
    soma = soma + parseInt(cpfJustNumber.substring(i - 1, i)) * (11 - i)
  resto = (soma * 10) % 11

  if (resto === 10 || resto === 11) resto = 0
  if (resto !== parseInt(cpfJustNumber.substring(9, 10))) return false

  soma = 0
  for (let i = 1; i <= 10; i++)
    soma = soma + parseInt(cpfJustNumber.substring(i - 1, i)) * (12 - i)
  resto = (soma * 10) % 11

  if (resto === 10 || resto === 11) resto = 0
  if (resto !== parseInt(cpfJustNumber.substring(10, 11))) return false
  return true
}

export function isCnpjValid(cnpj: string): boolean {
  cnpj = cnpj.replace(/[^\d]+/g, '')

  const sumTwelve = cnpjNumberMultiplier(cnpj, 12, 5)
  const sumThirteen = cnpjNumberMultiplier(cnpj, 13, 6)
  const modTwelve = getCnpjVerifyDigit(sumTwelve)
  const modThirteen = getCnpjVerifyDigit(sumThirteen)
  const size = cnpj.length - 2
  const digits = cnpj.substr(size)

  if (cnpj === '') {
    return false
  }

  if (cnpj.length !== 14 || !!cnpj.match(/(\d)\1{13}/)) {
    return false
  }

  if (modTwelve !== Number(digits.charAt(0))) {
    return false
  }
  if (modThirteen !== Number(digits.charAt(1))) {
    return false
  }

  return true
}

function isValid(document: string) {
  if (document.length <= 14) return isCpfValid(document)
  else return isCnpjValid(document)
}

export const validators = { isValid }
