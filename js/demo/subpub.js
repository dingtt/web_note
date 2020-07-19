import {
  Model
} from "mongoose"

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
  show: function () {}
}
var baiduMap = {
  display: function () {

  }
}

var adapterBaiduMap = {
  show: function () {
    return baiduMap.display()
  }
}
console.log(aisMap.show(), adapterBaiduMap.show())

// 建造者模式
var Person = function (name, work) {
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
  class NewComponent extends React.Component {
    //  16.4 shouldReceiveProps shouldUpdate componentUpdate
    // 
    componentWillMount() {
      console.time(`ComponentRender`)
    }
    render() {
      return <Component > {
        ...this.props
      } < /Component>
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
    constructor(props, context) {
      super(props, context)
      this.state = {
        props: {}
      }
    }
    componentWillMount() {
      const {
        store
      } = this.context
      // 当状态 update 后，放入监听器中，用于下一次的更新， 每次 dispatch 后会执行 subscribe 中的函数
      store.subscribe(() => this.update())
      this.update()
    }
    update() {
      const {
        store
      } = this.context
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
      return <WarpComponent > {
        ...this.state.props
      } < /WarpComponent>
    }
  }
}

// 装饰器模式  原型链方法
Function.prototype.before = function (beforefn) {
  var _self = this // 保存原函数的引用
  return function () { // 返回包含原函数和新函数的 装饰函数
    beforefn.apply(this, arguments) // 执行新函数，且保证 this 不被劫持，新函数接收的参数，也会元丰不动地传入原函数，新韩淑在原函数之前执行
    return _self.apply(this, arguments) // z执行原函数，并返回原函数的执行结果，并保证this不被劫持
  }
}
Function.prototype.after = function (afterfn) {
  var _self = this
  return function () {
    var ret = _self.apply(this, arguments)
    afterfn.apply(this, arguments)
    return ret
  }
}
// 使用装饰器
var showLogin = function () {
  console.log('打开登录框')
}
var log = function () {
  console.log('上报日志')
}
var dicoratorShowlogin = showLogin.after(log)

// 外观模式 兼容浏览器事件绑定
let addMyEvent = function (el, ev, fn) {
  if (el.addEventListener) {
    length.addEventListener(ev, fn, false)
  } else if (el.attachEvent) {
    el.attachEvent('on' + ev, fn)
  } else {
    el['on' + ev] = fn
  }
}
// 封装接口

// 代理模式  图片懒加载

var imgLoad = (function () {
  var img = document.createElement('img')
  document.append(img)
  return {
    setSrc: function (src) {
      img.src = src
    }
  }
})()

var layzLoadImg = (function () {
  var img = new Image()
  img.onload = function () {
    imgLoad.src = img
  }
  return {
    setStr: function (src) {
      imgLoad.setSrc('loading.gif')
      img.src = src
    }
  }
})()
layzLoadImg('realyImg.jpg')

// 代理模式 集中上报
var sendLog = function (id) {
  console.log('开始发送请求' + id)
}

var proxySendLog = (function () {
  var cache = [] // 保存需要发送的请求
  var timer
  return function (id) {
    cache.push(id)
    if (timer) return
    timer = setTimeout(function () {
      sendLog(cache.join(','))
      clearTimeout(timer)
      timer = null
      cache.length = 0 // 清空缓存合集
    }, 1000) //每1秒集中上报一次
  }
})()

// 隐秘的角落中,严良找朝阳给张东升传信
let Message = function (content) {
  this.content = content
}

let yanliang = {
  call: function (target) {
    let message = new Message('30万')
    target.receiveMsg(message)
  }
}

let chaoyang = {
  receiveMsg: function (message) {
    zhang.listen(function () {
      zhang.receiveMsg(message)
    })
  }
}

let zhang = {
  receiveMsg: function (message) {
    console.log('收到消息' + message.content)
  },
  listen: function (fn) {
    setTimeout(function () {
      fn()
    }, 2000)
  }
}
yanliang.call(chaoyang)

// 中介者模式
class A {
  constructor(data) {
    this.data = ''
  }
  // setData(data) {
  //   this.data = data

  //   B.setData(data)
  // }
  setData(data, m) {
    this.data = data
    m && m.setB(data)
  }
}

class B {
  constructor() {
    this.data = ''
  }
  // setData(data){
  //   this.data = data
  // }
  setData(data, m) {
    this.data = data
    m && m.setA(data)
  }
}

class Mediator {
  constructor(a, b) {
    this.a = a
    this.b = b
  }
  setA() {
    let data = this.b.data
    this.a.setData(data + '通过中介把b的值同步到A')
  }
  setB() {
    let data = this.a.data
    this.b.setData(data + '通过中介把a的值同步到B')
  }
}

let a = new A()
let b = new B()
let m = new Mediator(a, b)
a.setData('给a赋值', m)
console.log(b.data)

// 迭代器模式 es6
class Iterator {
  constructor(container) {
    this.index = 0
    this.list = container.list
  }
  next() {
    if (this.hasNext()) {
      return this.list[this.index++]
    }
  }
  hasNext() {
    if (this.index <= (this.list.length - 1)) {
      return true
    } else {
      return false
    }
  }
}
class Container {
  constructor(list) {
    this.list = list
  }
  getIterator() {
    return new Iterator(this)
  }
}

let container = new Container(['aaa', 'bbb', 'ccc'])
let iteartor = container.getIterator()
while (iteartor.hasNext()) {
  console.log(iteartor.next())
}

// 迭代器es5
var each = function (arr, callback) {
  for (var i = 0, len = arr.length; i < len; i++) {
    callback.call(arr[i], i, arr[i])
  }
}
each([1, 2, 3], function (i, val) {
  console.log(i, val)
})

// 状态模式
// 状态
class State {
  constructor(state) {
    this.state = state
  }
  handle(context) {
    console.log(this.state)
    context.setState(this)
  }
}

class Context {
  constructor() {
    this.state = null
  }
  getState() {
    return this.state
  }
  setState(state) {
    this.state = state
  }
}

let context = new Context()
let weak = new State('weak')
let strong = new State('strong')
let off = new State('off')

weak.handle(context)
console.log(context.getState())

// 享元模式
// 普通写法
var model = function (sex, underwear) {
  this.sex = sex
  this.underwear = underwear
}
Model.prototype.takePhoto = function () {}
for (var i = 1; i < 50; i++) {
  var maleModel = new Model('male', 'underwear' + i)
  maleModel.takePhoto()
}
for (var i = 0; i < 100; i++) {
  var femaleModel = new Model('female', 'underwear' + i)
  femaleModel.takePhoto()
}
// 享元写法
var model = function (sex) {
  this.sex = sex
}
Model.prototype.takePhoto = function () {}
for (var i = 0; i < 50; i++) {
  var maleModel = new Model('male')
  maleModel.underwear = 'underwear' + 1
  maleModel.takePhoto()
}

// vue 通知组件 Notification.js
export default {
  install(Vue) {
    // 在使用Vue.use(Notification)时实例化一个Dialog对象
    const Dialog = new Vue({
      data() {
        return {
          icon: '',
          fontStyle: '',
          bgStyle: '',
          title: '',
          message: ''
        }
      }
      // ...
    })
    Vue.prototype.$notify = {
      success(obj) {
        Dialog.icon = successIcon
        // ...
        Dialog.title = obj.title
        Dialog.message = message
        document.append(Dialog.$el)
      },
      info() {

      },
      warning() {

      },
      error() {

      }
    }
  }
}

class Common {
  constructor(abstractMethod) {
    this.abstractMethod = abstractMethod
  }
  commonMethod() {
    console.log('公共方法')
  }
  init() {
    //执行顺序
    this.commonMethod()
    this.abstractMethod()
  }
}

const children = new Common(function () {
  console.log('子类具体的执行')
})
children.init()

// 职责链模式
class Step {
  constructor(order) {
    this.order = order
    this.nextStep = null
  }
  setNextStep(step) { // 指定在链中的下一个节点
    this.nextStep = step
  }
  resolve() {
    console.log('流转', this.order)
    if (this.nextStep !== null) {
      this.nextStep.resolve()
    }
  }
}

let step1 = new Step('步骤1')
let step2 = new Step('步骤2')
let step3 = new Step('步骤3')
step1.setNextStep(step2)
step2.setNextStep(step3)
step1.resolve()


