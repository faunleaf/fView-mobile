export default function (value, list, delimiter) {
  if (value && !list.length) {
    return ''
  }
  if (!delimiter) {
    delimiter = ' '
  }

  let rs = value.map((one, index) => {
    if (list.length && Object.prototype.toString.call(list[0]) === '[object Array]') {
      return list[index].find(item => {
        return item.value === one
      })
    } else {
      return list.find(item => {
        return item.value === one
      })
    }
  })

  return rs.map(one => {
    return one ? one.name : ''
  }).join(delimiter).replace('--', '')
}
