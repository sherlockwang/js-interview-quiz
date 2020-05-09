function call2(fn, context, ...args) {
  // context设为对象
  if (context === null || typeof context === 'undefined') {
    context = window
  }

  if (typeof context !== 'object') {
    context = Object(context)
  }

  let result

  context.fn = fn
  
  result = context.fn(...args)

  // es3
  // var args = [];
  // for(var i = 1, len = arguments.length; i < len; i++) {
  //     args.push('arguments[' + i + ']');
  // }
   // var result = eval('context.fn(' + args +')');

  delete context.fn

  return result
}