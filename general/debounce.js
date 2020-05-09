function debounce(fn, delay) {
  // 闭包设定定时器
  let timer = null
  // 返回普通函数在event listener中可以接受正常的this

  // ...args接受额外参数
  return function (...args) {
    // 每次触发event 清空计时器
    clearTimeout(timer)
    // 重新设定计时器，最后一次触发event后，delay毫秒后运行
    timer = setTimeout(() => {
      // * 绑定正确this和额外参数给debounce的目标函数
      fn.apply(this, args)
    }, delay)
  }
}