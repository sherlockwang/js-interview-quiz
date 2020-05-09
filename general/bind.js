function bind2(fn, context, ...args) {
  if (typeof fn !== 'function') {
    throw new Error('fn needs to be function')
  }

  const fnToBind = fn

  let newFn = function(...params) {
    // 判断是否为构造调用
    const newContext = this instanceof fnToBind ? this : context

    newFn.call(newContext, ...args, ...params)
  }

  // 原型关系
  if (fnToBind.prototype) {
    newFn.prototype = Object.create(fnToBind.prototype)

    // es3
    // const fnForPrototype = function() {};
    // fnForPrototype.prototype = fn.prototype;
    // newFn.prototype = new fnForPrototype()
  }

  return newFn
}