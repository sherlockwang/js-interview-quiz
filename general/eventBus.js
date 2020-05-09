class EventBus {
  constructor(limit) {
    // 用对象存储注册事件
    this._events = {}
    // 设定最多可注册事件
    this._limit = limit
  }

  addListener(type, func) {
    if (!this._events[type]) {
      // 如果还未注册该类型事件
      // 初始化handler数组
      this._events[type] = [func]
    } else if (this._events[type].length < this._limit) {
      // 添加handler
      this._events[type].push(func)
    } else {
      throw new Error('cannot add more')
    }
  }

  emit(type, ...args) {
    if (!this._events[type]) {
      throw new Error('no listener added')
    } else {
      // 触发注册的每个handler，通过apply绑定this和emit的传入参数
      this._events[type].forEach(func => func.apply(this, args))
    }
  }

  removeListener(type, funcName) {
    if (!this._events[type]) {
      throw new Error('no listener')
    } else if (this._events[type].length === 1) {
      // 如果类型只有一个handler，则直接删掉属性
      delete this._events[type]
    } else if (funcName) {
      // 如果有funcName传入，则去注册的handler数组中寻找要删除的funcName，只支持命名函数
      const deleteIndex = this._events[type].findIndex(
        func => func.name === funcName
      )
      this._events[type].splice(deleteIndex, 1)
    }
  }
}