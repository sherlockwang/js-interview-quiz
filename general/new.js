function new2(func, ...args) {
  // 链接原型链，生成new中的this
  const obj = Object.create(func.prototype)
  // 在this上运行func
  const ret = func.apply(obj, args)
  // 返回新生成的object
  return typeof ret === 'object' ? ret : obj
}