// 主题对象 保存状态 ，保存观察者，状态变化之后触发所有的观察者对象
class Sub {
  constructor(){
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
  constructor(name, sub){
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
  $emit(name,args) {
    let cbs = this.callbacks[name]
    if(cbs){
      cbs.forEach(cb => {
        // cb && cb(args)
        cb.call(this, args)
      })
    }
  }
  $on(name,callback) {
    (this.callbacks[name] || (this.callbacks[name] = [])).push(callback)
  }
}

let event = new Event()
event.$on('event1', function(arg) {
  console.log('event1', arg)
})

event.$on('event1', function(arg) {
  console.log('又一个事件1', arg)
})

event.$on('event2', function(arg) {
  console.log('event2', arg)
})

event.$emit('event1', '触发侦听的事件1')
event.$emit('event2', '触发侦听的事件2')

event.$off('event1')
event.$emit('event1', 'event1事件侦听被干掉了')