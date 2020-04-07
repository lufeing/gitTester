function observe (obj) {
  Object.keys(obj).forEach(key => {
    let internalValue = obj[key]
    // 每个属性分配一个Dep实例
    const dep = new Dep()
    Object.defineProperty(obj, key, {
      get () {
        console.log(`getting key "${key}": ${internalValue}`)
        dep.depend()
        return internalValue
      },
      set (newValue) {
        const changed = internalValue !== newVal
        internalValue = newValue

        if (changed) {
          dep.notify()
        }
      }
    })
  })
}

class Dep {
  // 初始化
  constructor() {
    this.subscribers = new Set()
  }
  // 订阅update函数列表
  depend () {
    if (activeUpdate) {
      this.subscribers.add(activeUpdate)
    }
  }
  // 所有update函数重新运行
  notify () {
    this.subscribers.forEach(sub => sub())
  }
}