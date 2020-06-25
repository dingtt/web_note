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
    if (this.state === 'show') {
      console.log('已经显示')
      return
    }
    this.state = 'show'
  }
  hide() {
    if (this.state === 'hide') {
      console.log('已经隐藏')
      return
    }
  }
}
Loading.createInstance = (function () {
  let loadingInstance = null
  return function () {
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
var calculateBonus = function (perfomanceLevel, salary) {
  if (perfomanceLevel === 'S') {
    return salary * 4
  } else if (perfomanceLevel === 'A') {
    return salary * 3
  } else if (perfomanceLevel === "B") {
    return salary * 2
  }
}
console.log(calculateBonus('S', 10000))

// 策略模式

var strategies = {
  S: function (salary) {
    return salary * 4
  },
  A: function (salary) {
    return salary * 3
  },
  B: function (salary) {
    return salary * 2
  }
}
var calculateBonus = function (level, salary) {
  return strategies[level](salary)
}
console.log(calculateBonus('S', 10000))

//工厂模式
class Procuct {
  constructor(name) {
    this.name = name
  }
  init() {
    console.log('init')
  }
  fun() {
    console.log('fun')
  }
}

class Factory {
  create(name) {
    return new Procuct(name)
  }
}
var factory = new Factory()
var p1 = factory.create('p1')
p1.init()
p1.fun()

// 适配器模式
class Base {
  getName() {
    return 'base'
  }
}

class Adapter {
  constructor() {
    this.base = new Base()
  }
  getName() {
    return this.base.getName() + '适配后'
  }
}

let adapter = new Adapter()
console.log(adapter.getName())

var aisMap = {
  show: function() {
  }
}
var baiduMap = {
  display: function() {

  }
}

var adapterBaiduMap = {
  show: function() {
    return baiduMap.display()
  }
}
console.log(aisMap.show(), adapterBaiduMap.show())

// 建造者模式
var Person = function(name, work) {
  // 创建应聘者缓存对象
  var _person = new Human()
  // 创建应聘者姓名解析对象
  _person.name = new NamedNodeMap(name)
  // 创建应聘者期望职位
  _person.work = new Worker(work)
  return _person
}

var person = new Person('xiaobai', 'desgin')
console.log(person)

// 装饰器模式
class Developer {
  init() {
    console.log('我是前端开发')
  }
}

class Decorator {
  constructor(developer) {
    this.developer = developer
  }
  init() {
    this.developer.init()
    this.add(this.developer)
  }
  add() {
    console.log('传授你后台之道')
  }
}

// 安静的写前端
var dep = new Developer()
console.log(dep.init())

// 前端架构之路
var d = new Decorator(dep)
console.log(d.init())

const withLog = Component => {
  class NewComponent extends React.Component{
    //  16.4 shouldReceiveProps shouldUpdate componentUpdate
    // 
    componentWillMount() {
      console.time(`ComponentRender`)
    }
    render() {
      return <Component>{ ...this.props }</Component>
    }
    componentDidMount() {
      console.time(`componentRenderEnd`)
    }
  }
  return NewComponent
}

// @withLog
// class XX
// react-redux 中的@contect
export const connect = (mapStateToProps = state => state, mapDispatchToProps = {}) => (WarpComponent) => {
  return class ConnectComponent extends React.Component {
    static contextTypes = {
      store: PropTypes.object
    }
    constructor(props, context){
      super(props, context)
      this.state = {
        props: {}
      }
    }
    componentWillMount() {
      const { store } = this.context
      // 当状态 update 后，放入监听器中，用于下一次的更新， 每次 dispatch 后会执行 subscribe 中的函数
      store.subscribe(() => this.update())
      this.update()
    }
    update() {
      const { store } = this.context
      const stateProps = mapStateToProps(store.getState())
      const dispatchProps = bindActionCreators(mapDispatchToProps, sotre.dispatch)
      this.setState({
        props: {
          ...this.state.props,
          ...stateProps,
          ...dispatchProps
        }
      })
    }
    render() {
    return <WarpComponent>{...this.state.props}</WarpComponent>
    }
  }
}

// 装饰器模式  原型链方法
Function.prototype.before = function(beforefn) {
  var _self = this // 保存原函数的引用
  return function() { // 返回包含原函数和新函数的 装饰函数
    beforefn.apply(this, arguments) // 执行新函数，且保证 this 不被劫持，新函数接收的参数，也会元丰不动地传入原函数，新韩淑在原函数之前执行
    return _self.apply(this, arguments) // z执行原函数，并返回原函数的执行结果，并保证this不被劫持
  }
}
Function.prototype.after = function(afterfn) {
  var _self = this
  return function() {
    var ret = _self.apply(this, arguments)
    afterfn.apply(this, arguments)
    return ret
  }
}
// 使用装饰器
var showLogin = function(){
  console.log('打开登录框')
}
var log = function(){
  console.log('上报日志')
}
var dicoratorShowlogin = showLogin.after(log)

// 外观模式 兼容浏览器事件绑定
let addMyEvent = function(el, ev, fn) {
  if(el.addEventListener){
    length.addEventListener(ev, fn, false)
  }else if(el.attachEvent) {
    el.attachEvent('on' + ev, fn)
  }else{
    el['on' + ev] = fn
  }
}
// 封装接口