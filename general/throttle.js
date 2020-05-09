function throttle(fn, delay) {
  // 闭包设定定时器
  let timer = null
  // 最后一次节流函数运行时间
  let last

  return function (...args) {
    // 本次事件触发时间
    let now = Date.now()
    // 上次触发时间与本次触发时间是否小于间隔
    if (last && now < last + delay) {
      clearTimeout(timer)
      // 重新设定计时器
      timer = setTimeout(() => {
        // 触发时记录触发时间
        last = Date.now()
        fn.apply(this, args)
      }, delay - (now - last))
      // 新计时器间隔减去已过去时间
    } else {
      // 不小于，直接触发，记录触发时间
      last = now
      fn.apply(this, args)
    }
  }
}