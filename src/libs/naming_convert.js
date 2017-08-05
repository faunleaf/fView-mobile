export function camelcaseToHyphen (str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

export function camelCase (input) {
  let str = input.toLowerCase().replace(/-(.)/g, function (match, group1) {
    return group1.toUpperCase()
  })

  str = str.replace(/_(.)/g, function (match, group1) {
    return group1.toUpperCase()
  })
  return str.slice(0, 1).toUpperCase() + str.slice(1)
}
