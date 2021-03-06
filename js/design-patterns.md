# JS设计模式

## 设计模式简介

设计模式是为了解决在开发中可能遇到的需求相似，而提出的一套解决办法，其根本目的是减少项目变化所导致的影响

### 常用设计模式

工厂模式 单例模式 命令模式 模板模式 策略模式 观察者模式  命名空间模式

### 设计模式原则

### 设计模式目的

高内聚，低耦合；提高重用性，减少代码冗余；扩展性，稳定性；



## 概览

| 名称         | 分类   |                                                              |                              |
| ------------ | ------ | ------------------------------------------------------------ | ---------------------------- |
| 单例模式     | 创建型 | 一个类只能构造出唯一实例                                     |                              |
| 原型模式     | 创建型 |                                                              |                              |
| 工厂模式     | 创建型 | 简单工厂 根据参数创建不同的产品，复杂工厂根据类型（生产线）参数创建不同的产品，并且可添加生产线 |                              |
| 抽象工厂模式 | 创建型 |                                                              |                              |
| 建造者模式   | 创建型 |                                                              |                              |
| 适配器模式   | 结构型 | 一个类转化为另一个类（另一个类的属性存储第一个类的实例），一种数据结构转化为另一种数据结构 （适配是存原类一个实例改方法结果，装饰器是接收原类的实例加方法） |                              |
| 装饰器模式   |        |                                                              |                              |
| 代理模式     |        |                                                              |                              |
| 外观模式     |        |                                                              |                              |
| 桥接模式     |        |                                                              |                              |
| 组合模式     |        |                                                              |                              |
| 享元模式     | 结构型 | 减少创建实例的个数，内部状态，外部状态，几个内部状态定义几个实例，将外部状态抽出来作为参数 | 男女模具试装，  驾考考生与车 |
| 观察者模式   | 行为型 |                                                              |                              |
| 迭代器模式   |        | 迭代器按一定的顺序去调用对象内部的方法，能获得聚合对象的顺序和元素 |                              |
| 策略模式     |        | 定义一个策略类或者策略对象，包含算法的实现，调用的时候根据参数不同，可以命中不同策略，从而实现将算法的使用和算法的分离 |                              |
| 模板方法模式 |        | 父类中定义公共部分或不可变部分，将可变部分写好形参，设置调用及顺序，子类传入具体执行函数 |                              |
| 职责链模式   |        |                                                              |                              |
| 命令模式     |        |                                                              |                              |
| 备忘录模式   |        |                                                              |                              |
| 状态模式     |        | 每个状态会建立一个类，状态改变会产生不同行为 ？？？          |                              |
| 访问者模式   |        |                                                              |                              |
| 中介者模式   |        | 对象和对象之间，借助一个中介进行通信                         |                              |
| 解释器模式   |        |                                                              |                              |



### 订阅/发布模式（观察者模式）

~~一个对象订阅另外一个对象的特定活动，并在状态改变后获得通知。订阅者因此也成为观察者，而被观察的对象成为发布者，当发生特定活动的时候，发布者会通知所有的订阅者~~

定义了一种一对多的关系，让多个观察者对象同时监听某一个主体对象，这个主体对象的状态发生变化的时候，就会通知所有的订阅者，使它能够自动更新自己，当一个对象的改变需要同时改变其它对象，并且不知道具体有多少对象需要改变的时候，就应该考虑使用观察者模式。

发布/订阅

有人发布，有人订阅，还可以取消订阅，一旦有人发布，订阅者就可以收到消息，主动权在发布者手中。

一对多

适用场景

案例  Vue $emit $on

```javascript
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
```

事件侦听  EventBus

```javascript
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

```



### 单例模式

确保一个类仅有一个实例，并提供一个访问它的全局访问点，实现的方法为判断实例是否存在，存在直接返回当前实例，不存在就创建新的实例返回。

适用场景  弹窗 loading  登录框  vuex和redux中的store

案例  elementUI 弹窗

```javascript
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
```

```javascript
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
```



### 策略模式

定义：定义一系列的算法，把他们一个个封装成函数，也可以统一封装进一个对象，然后再定义一个方法，该方法可根据参数

说人话：策略模式的目的就是将**算法的使用**和**算法的实现**分离开。一个基于策略模式的程序至少有两部分组成，一部分是（可变）策略类，封装了具体的算法，并负责具体的计算过程；第二个部分是（不可变）坏境类Context，Context接受客户的请求，随后将请求委托给某一个策略类。

应用场景 

如果一个系统里面有许多类，他们之间的区别仅在于他们的行为，那么使用策略模式可以动态地让一个对象在许多行为中选择一种行为。

一个系统需要动态地在几种算法中选择一种

案例

奖金计算：奖⾦金金计算，绩效为 S 的⼈人年年 终奖有 4 倍⼯工资，绩效为 A 的⼈人年年终奖有 3 倍⼯工资，⽽而绩效为 B 的⼈人年年终 奖是 2 倍⼯工资

普通写法

```javascript
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
 
```

策略模式

```javascript
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
```

表单验证

```

```

小球运动

一个小球从A点运动到B点，运动效果可以有很多种，例如快进快出，慢进快出，线性运动...

### 代理模式

为一个对象提供一个代理品或占位符，以便控制对它的访问。显示原有功能，但是是经过限制之后的。

适用场景：花销很大的操作，可以通过虚拟代理的方式，延迟到需要它的时候才去创建，例如**虚拟代理实现图片懒加载**。

案例

**图片懒加载** 

先用一张Loading图占位，然通过异步的方式加载图片，等图片加载完成再赋值到img标签

```javascript
// 代理模式  图片懒加载

var imgLoad = (function() {
  var img = document.createElement('img')
  document.append(img)
  return {
    setSrc : function (src){
      img.src = src
    }
  }
})()

var layzLoadImg = (function() {
  var img = new Image()
  img.onload = function(){
    imgLoad.src = img
  }
  return {
    setStr: function(src) {
      imgLoad.setSrc('loading.gif')
      img.src = src
    }
  }
})()
layzLoadImg('realyImg.jpg')

```

收集一段实践内的请求，一次性发送给给服务器。

```javascript
// 上报
var sendLog = function(id) {
  console.log('开始发送请求' + id )
}

var proxySendLog = (function() {
  var cache = [] // 保存需要发送的请求
  var timer
  return function(id) {
    cache.push(id)
    if(timer) return
    timer = setTimeout(function(){
      sendLog(cache.join(','))
      clearTimeout(timer)
      timer = null
      cache.length = 0 // 清空缓存合集
    },1000) //每1秒集中上报一次
  }
})()
```

**捎信**

```javascript
// 隐秘的角落中，严良找朝阳给张东升传信
let Message = function(content){
  this.content = content
}

let yanliang = {
  call: function(target) {
    let message = new Message('30万')
    target.receiveMsg(message)
  }
}

let chaoyang = {
  receiveMsg: function(message) {
    zhang.listen(function() {
      zhang.receiveMsg(message)
    })
  }
}

let zhang = {
  receiveMsg: function(message) {
    console.log('收到消息' + message.content)
  },
  listen: function(fn) {
    setTimeout(function(){
      fn()
    },2000)
  }
}
yanliang.call(chaoyang)
```

**优点**

- 代理模式能将代理对象和被调用对象分离，起到降低系统耦合度的作用。
- 代理模式再客户端和目标对象之间起到一个中介的作用，可以起到保护目标对象的作用。
- 代理对象可以

### 中介者模式 

中介模式定义：通过一个中介者对象，其他所有的相关对象都通过该中介者对象来通信，而不是相互引用。当其中一个对象发生改变时，只需要通知中介者对象即可。通过中介者模式可以解除对象与对象之间的耦合关系。（类似于调度，机场塔台）

**应用场景**

- 系统中存在比较复杂的引用关系，导致它们之间的依赖关系结构混乱而且难以复用
- 想通过一个中间类来封装多个类中的行为，而又不想生成太多的子类

当购物车的场景，存在商品选择表单，颜色选择表单，购买数量表单等等时，都会触发change事件，那么可以通过中介者来转发处理这些事件，实现各个事件间的解耦，仅仅维护中介者对象即可。

redux，vuex都属于中介者模式的实际应用，把共享的数据，抽离出一个单独的store，每个都通过store这个中介来操作对象

```javascript
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
  constructor(){
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
  constructor(a, b){
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
```

**优点**

- 使各对象之间解耦，而且可以独立地改变它们之间的交互
- 中介者和对象一对多的关系，取代了对象之间网状多对多的关系
- 如果对象之间的复杂耦合导致维护很困难，而且耦合度随着项目变化增速很快，就需要中介者重构代码

**缺点**

- 系统中会新增一个中介者对象，对象之间交互的复杂性，转移成了中介者对象的复杂性



### 装饰器模式

动态的给对象添加一些额外的方法，是一种实现继承的替代方式。

在不改变原对象的基础上，通过对其进行包装扩展，在程序运行期间给对象动态地添加方法，使原有对象能满足更复杂的要求，而又不影响原对象派生的其他对象

适用场景

案例 react的高阶组件 ，react-redux中的@connect

```javascript
// 装饰器模式
class Developer {
  init() {
    console.log('我是前端开发')
  }
}

class Decorator {
  constructor(developer) { // 传入被装饰的
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
```

```javascript
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

@withLog
class XX
```

```javascript
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
```

**不同**

装饰器模式和代理模式

- 相同点：都描述了怎样为对象提供一定程度上的间接引用，他们的实现部分都保留了对原对象的引用，并且向元对象发送请求。

- 区别：代理模式的目的是，直接访问本体不方便或者不符合需求时，这时为本地提供一个替代者，本体定义了关键功能，而代理提供或拒绝对它的访问，或者在访问本体之前做一些额外的事情。
  - 装饰器模式的作用就是为对象动态加入行为，不影响不改变原对象再生成的实例

### 外观模式

外观模式即让多个方法一起被调用，定义了一个高层接口，这个接口使

涉及到兼容性，参数支持多格式，对外暴露统一的api,对内只用一个函数，内部判断实现

**应用场景**

```javascript
// 兼容浏览器事件绑定
let addMyEvent = function (el, ev, fn) {
    if (el.addEventListener) {
        el.addEventListener(ev, fn, false)
    } else if (el.attachEvent) {
        el.attachEvent('on' + ev, fn)
    } else {
        el['on' + ev] = fn
    }
}; 
```



### 工厂模式

es5：提供创建对象的接口，把成员对象的创建工作转交给一个外部对象，好处在于消除对象之间的耦合。

es6：工厂模式定义一个用于创建对象的接口，这个接口由子类决定实例化哪一个类，该模式试一个类的实例化延迟到了子类，而子类可以重写接口方法以便创建的时候指定自己的对象类型。

- **简单工厂模式**

给定不同的材料，生成不同属性值的产品，并把产品返回；批量生产，具备相同属性的产品。

步骤

1. 声明工厂函数（接收原材料），创建对象，设置对象属性，返回对象
2. 使用工厂函数，传递参数，接收对象

- **复杂工厂模式**

  可以根据不同的**类型**和**原材料**，创建不同的产品

   步骤

1. 声明工厂函数（可以根据需求，自己添加相关工厂属性）
2. 让工厂具备两个能力：根据不同的类型（type）和原材料，找到生产线，生成产品并返回；扩展生产线的能力
3. 根据需求扩展生产线
4. 用户开始使用

**应用场景**

需要创建的对象较少，客户端不关心对象的创建过程

es6

```javascript
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
```

**应用场景**

- 不想让某个子系统与较大的那个对象之间形成强耦合，而是想运行时从许多子系统中进行挑选，那么工厂模式是一个理想的选择

- 将new操作简单封装，当遇到new操作时，就应该考虑是否使用工厂模式
- 需要依赖具体坏境创建不同实例，这些实例都有相同的行为

**优点**

- 创建对象的过程可能很复杂，但我们只需要关系创建的结果
- 构造函数和创建者分类，符合“开闭原则”
- 一个调用者想创建一个对象，只需要知道其名称就可以了。
- 扩展性搞，如果想增加一个产品，只要扩展一个工厂类就可以

**缺点**

- 添加新产品时，需要编写新的具体产品类，一定程度上增加了系统的复杂度
- 考虑到系统的可扩展性，需要引入抽象层，在客户端代码中均使用抽象层进行定义，增加了系统的抽象性和理解难度



**案例**

 弹窗 message  

网页Token存储 在浏览器支持H5的时候，存储于localStorage，在不支持H5的浏览器中存于cookie

### 建造者模式

参与了更多创建的过程，或者更复杂

```javascript
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
```

### 状态模式 ？？？

允许一个对象在其内部状态改变的时候，改变它的行为 

```javascript
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
```



### 迭代器模式

> 迭代器模式是指提供一种方法，顺序访问一个聚合对象中的各个元素，而又不需要暴露该对象的内部表示。迭代器模式可以把迭代的过程从业务逻辑中分离出来，在使用迭代器模式之后，即使不关心对象内部的构造，也可以按顺序访问其中的每个元素。

**优点**

- 访问一个聚合对象的内容，而无需暴露它的内部表示

**案例**

Array.prototype.forEach()

each

```javascript
// 迭代器es5
var each = function(arr, callback){
  for(var i = 0, len = arr.length; i < len; i++){
    callback.call(arr[i], i, arr[i])
  }
}
each([1, 2, 3],function(i, val){
  console.log(i, val)
})
```

ES6 iterator

```javascript
// 迭代器模式 es6
class Iterator {
  constructor(container){
    this.index = 0
    this.list = container.list
  }
  next() {
    if(this.hasNext()){
      return this.list[this.index++]
    }
  }
  hasNext() {
    if(this.index <= (this.list.length - 1)){
      return true
    }else{
      return false
    }
  }
}
class Container {
  constructor(list){
    this.list = list
  }
  getIterator() {
    return new Iterator(this)
  }
}

let container = new Container(['aaa', 'bbb', 'ccc'])
let iteartor = container.getIterator()
while(iteartor.hasNext()){
  console.log(iteartor.next())
}
```



### 享元模式

运用共享技术有效地支持大量细粒度对象的复用，系统只使用少量的对象，而这些对象都很相似，状态变化很小，可以实现对象的多次复用。由于享元模式要求能够共享的对象必须是细粒度对象，因此它又被称为轻量模式，它是一种对象结构型模式。

内部状态存储与内部对象，内部状态可以被一些对象共享

内部状态独立于具体的场景，通常不会改变

外部状态取决于应用场景，并根据场景的变化而变化，外部状态不能被共享

**优点**

通过区分内部外部状态，内部状态共享，来大大减少需要创建的对象数量。通常来讲，内部有多少种组合，系统中便有多少对象。

**应用场景**

- 文件上传需要创建多个文件实例的时候

**案例**

男女模具试装

```javascript
// 享元模式
// 普通写法
var model = function(sex, underwear) {
  this.sex = sex
  this.underwear = underwear
}
Model.prototype.takePhoto = function(){
}
for(var i = 1; i < 50; i++){
  var maleModel = new Model('male', 'underwear' + i)
  maleModel.takePhoto()
}
for(var i = 0; i < 100; i++){
  var femaleModel = new Model('female', 'underwear' + i)
  femaleModel.takePhoto()
}
// 享元写法
var model = function(sex){
  this.sex = sex
}
Model.prototype.takePhoto = function() {
}
for(var i = 0; i < 50; i ++ ){
  var maleModel = new Model('male')
  maleModel.underwear = 'underwear' + 1
  maleModel.takePhoto()
}
```

**消息组件**

消息可以有很多各，但是只有固定的分类，弹窗逻辑一样，四种类型info success  warning error 图标 颜色不同，接收文案

```javascript

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
```



### 职责链模式

职责链模式的定义是：使多个对象都有机会处理请求，从而避免请求的发送者和接收者之间的耦合关系，并将这些对象连成一条链，并沿着这条链接传递该请求，直到有一个对象处理它为止。



### 适配器模式

适配器模式的作用是解决两个软件实体间的接口不兼容的问题。使用适配器模式之后，原本由于接口不兼容而不能

将一个类的接口转化为另外一个接口，以满足用户需求，使类之间接口不兼容的问题通过适配器得以解决。

**优点**

可以让两个没有任何关联的类一起运行，提高了类的复用，适配对象，适配库，适配数据。（不能修改原对象，又需要复用，新增的时候）

**缺点**

- 额外对象的创建，非直接调用，存在一定的开销
- 如果没有必要使用适配器模式，可以考虑重构

**应用场景**

- 整合第三方SDK

- 封装旧接口

- vue中的computed

  原有数据并没有改变，只改变了原有数据的表现形式
  
  ```javascript
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
  ```
  
  

```javascript
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
```

**适配器与代理模式区别**

- 适配器模式提供一个不同的接口
- 代理模式 提供一模一样的接口

#### 适配器模式 装饰器模式 代理模式 外观模式

适配器模式主要用来解决两个已有接口之间不匹配的问题，不考虑接口是如何实现的，也不考虑将来会如何演化，适配器模式不改变原来的接口，使它们协同作用。

装饰器模式和代理模式也不会改变原有对象的接口，但装饰器模式的作用是为了给对象增加功能，装饰器模式通常形成一条长的装饰链，

适配器模式通常只包装一次。

代理模式是为了控制对**对象**的访问，通常也只包装一次。

### 模式方法模式

> 模板方法模式再一个方法中定义一个算法的骨架，而将一些步骤的实现延迟到子类中。模板方法模式使得子类可以再不改变算法结构的情况下，重新定义算法中某些步骤的具体实现。

模板方法模式由两部分构成，第一部分是抽象父类，第二部分是具体的实现子类，通常在抽象的父类中封装了子类的算法框架，包括实现一些公共方法和封装子类中所有方法的执行顺序。子类通过继承这个抽象父类，也继承了整个算法结构，并且可以选择重写父类的方法。 （父类接收方法形参，并在一定的位置执行；子类继承父类，定义传入方法）

应用场景

一次性实现算法的不可变部分，将可变部分留给子类实现

流程步骤都是一模一样，只是部分细节不同，此时可以在父类型定义这个模板，封装这些固定的操作，子类重写部分方法

```javascript
class Common {
  constructor(abstractMethod){
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

const children = new Common(function(){
  console.log('子类具体的执行')
})
children.init()
```

案例

vue中的slot， react中的children

### 备忘录模式

可以恢复到对象之前的某个状态。

在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象之外保存这各状态，这样以后就可以将该对象恢复到保存的状态。

~~提供一个全局的对象（缓存对象），当我们传递参数需要进行计算的时候，先检查缓存对象中是否有对应的结果。如果有缓存数据，那么就直接使用。如果没有缓存数据，那么再执行这个计算操作，处理得到的结果之后，把这个数据保存起来。~~

**优点**

给用户提供了一种可恢复状态的机制，可以使用户能够比较方便地回到某个历史状态。

**应用场景**

分页控件

撤销组件

案例

react或者redux的，时间旅行的功能，就算是备忘模式的一个应用。

### 命令模式

降低对象之间的耦合度，新的命令可以很容易的加入到系统中，调用同一方法实现不同的功能





**应用场景**

一个对象的行为取决于它的状态

```

```

