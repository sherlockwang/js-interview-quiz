function apply2(fn, context, args) {
  // context设为对象
  if (context === null || typeof context === 'undefined') {
    context = window
  }

  if (typeof context !== 'object') {
    context = Object(context)
  }

  // 记录运行结果
  let result
  
  // context上挂载待运行fn
  context.fn = fn

  if (args.length === 0) {
    result = context.fn()
  } else {
    result = context.fn(...args)
    // ES3方法
    // var args = [];
    // for (var i = 0, len = arr.length; i < len; i++) {
    //     args.push('arr[' + i + ']');
    // }
    // result = eval('context.fn(' + args + ')')
  }

  // 删除刚加入的fn
  delete context.fn

  return result
}