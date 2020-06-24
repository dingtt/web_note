// 主题对象 保存状态 ，保存观察者，状态变化之后触发所有的观察者对象
class Sub {
  constructor() {
    this.state = 0
    this.observers = []
  }
  getState() {
    return this.state
  }
  setState(state) {
    this.state = state
    this.notify()
  }
  notify() {
    this.observers.forEach(observer => {
      observer.update()
    })
  }
  attach(obs) {
    this.observers.push(obs)
  }
}
// 观察者
class Observer {
  constructor(name, sub) {
    this.name = name
    this.sub = sub
    this.sub.attach(this)
  }
  update() {
    console.log(`${this.name} update , state:${this.sub.getState()}`);
  }
}

let sub = new Sub()
let ob1 = new Observer('ob1', sub)
let ob2 = new Observer('ob2', sub)
sub.setState(12)

class Event {
  constructor() {
    this.callbacks = {}
  }
  $off(name) {
    this.callbacks[name] = null
  }
  $emit(name, args) {
    let cbs = this.callbacks[name]
    if (cbs) {
      cbs.forEach(cb => {
        // cb && cb(args)
        cb.call(this, args)
      })
    }
  }
  $on(name, callback) {
    (this.callbacks[name] || (this.callbacks[name] = [])).push(callback)
  }
}
// 观察者模式
let event = new Event()
event.$on('event1', function (arg) {
  console.log('event1', arg)
})

event.$on('event1', function (arg) {
  console.log('又一个事件1', arg)
})

event.$on('event2', function (arg) {
  console.log('event2', arg)
})

event.$emit('event1', '触发侦听的事件1')
event.$emit('event2', '触发侦听的事件2')

event.$off('event1')
event.$emit('event1', 'event1事件侦听被干掉了')

// 单例模式

// 单例模式创建弹窗
var getSingle = function (fn) {
  var result
  return function () {
    return result || (result = fn.apply(this, arguments))
  }
}
var createLoginLayer = function () {
  // var d = document.createDocumentFragment()
  var box = document.createElement('div')
  box.innerHTML = '我是个弹窗'
  box.style.display = 'none'
  document.body.appendChild(box)
  return box
}
var createSingleLoginLayer = getSingle(createLoginLayer)
document.getElementById('loginBtn').onclick = function () {
  var loginLayer = createSingleLoginLayer()
  loginLayer.style.display = 'block'
}

// loading
class Loading {
  constructor() {
    this.state = 'hide'
  }
  show() {
    if(this.state === 'show'){
      console.log('已经显示')
      return
    }
    this.state = 'show'
  }
  hide(){
    if(this.state === 'hide'){
      console.log('已经隐藏')
      return
    }
  }
}
Loading.createInstance = (function() {
  let loadingInstance = null
  return function(){
    return loadingInstance || (loadingInstance = new Loading())
  }
})()

let loading1 = Loading.createInstance()
loading1.show()
let loading2 = Loading.createInstance()
loading2.hide()
console.log(loading1 === loading2)


//防抖
const dounce = ((fn, step) => {
  let begin = Date.now()

})()

//节流

//策略模式 
// 算奖金,绩效为 S 的⼈人年年 终奖有 4 倍⼯工资，绩效为 A 的⼈人年年终奖有 3 倍⼯工资，⽽而绩效为 B 的⼈人年年终 奖是 2 倍⼯工资
// 普通方法
var calculateBonus = function(perfomanceLevel, salary) {
  if(perfomanceLevel === 'S'){
    return salary * 4
  }else if(perfomanceLevel === 'A'){
    return salary * 3
  }else if(perfomanceLevel === "B"){
    return salary * 2
  }
}
console.log(calculateBonus('S', 10000))

// 策略模式

var strategies = {
  S: function(salary) {
    return salary * 4
  },
  A: function(salary) {
    return salary * 3
  },
  B: function(salary) {
    return salary * 2
  }
}
var calculateBonus = function(level, salary) {
  return strategies[level](salary)
}
console.log(calculateBonus('S', 10000))

