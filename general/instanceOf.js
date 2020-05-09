function instanceOf2(source, target) {
  // 初始化结果为false
  let result = false

  // 当source有原型时
  while (source.__proto__) {
    if (source.__proto__ === target.prototype) {
      result = true
      break
    }
    // 否则改变source为source的原型
    source = source.__proto__
  }

  return result
}