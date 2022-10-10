const formatCurrency = (nominal) => {
  const formatCurrency = nominal.toString().split('').reverse().join('')
  const convert = formatCurrency.match(/\d{1,3}/g)
  const priceInRupiah = `Rp ${convert.join('.').split('').reverse().join('')}`
  return priceInRupiah
  
}

export default formatCurrency