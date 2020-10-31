

# 手写JS

## 模拟实现

### 实现new

```javascript
// 手写new
const newByCreate = function (Fn, ...args) {
  const obj = Object.create(Fn.prototype)
  const res = Fn.apply(obj,args)
  return res instanceof Fn ? res : obj
}

const myNew = function () {
  let Constructor = [...arguments].shift()
  const obj = {}
  obj.__proto__ = Constructor.prototype
  let res = Constructor.apply(obj, [...arguments].slice(1))
  return res instanceof Constructor ? res : obj
}

const Dog = function(name){
  this.name = name
}
Dog.prototype.sayName = function(){
  console.log(`name${this.name}`)
}

const da = myNew(Dog,'dahuang')
const xiao = newByCreate(Dog,'xiaohuang')
da.sayName()
xiao.sayName()
```

### 实现Object.create()

```javascript
// Object.create()
const myCreate = function (obj) {
  function F() {}
  F.prototype = obj
  return new F()
}
```

### 实现*instanceof*

```javascript
const myInstanceof = function (O, i) {
  const left = O.prorotype
  const right = i.__proto__
  while (true) {
    if (right == left) {
      return true
    }
    if (right === null) {
      return false
    }
    right == right.__proto__
  }
}
```

### call

```javascript
// eval
Function.prototype.call2 = function (context) {
  // 没有传参，及window
  var context = context || window
  // 调用call的函数
  context.fn = this
  // 函数参数
  var argsArr = Array.prototype.slice.call(arguments, 1) // 这里按说不应该使用call，偷个懒
  // var args = argsArr.slice(1, argsArr.length - 1)
  var result = eval("context.fn(" + argsArr.join(",") + ")")
  delete context.fn
  return result
}
// object隐式绑定
```

```javascript
// 测试一下
var value = 2
var obj = {
  value: 1,
}
function bar(name, age) {
  console.log(this.value)
  return {
    value: this.value,
    name: name,
    age: age,
  }
}
bar.call(null) // 2
console.log(bar.call2(obj, "kevin", 18))
```

### apply

```javascript
Function.prototype.apply = function (context, arr) {
     context = new Object(context) || window
 if(typeof arr === 'undefined' || arr === null){
   arr = []
 }
  const fn = this
  const symbol = Symbol(fn)
  context[symbol] = fn
  const result = context[symbol](...arr)
  delete context.fn
  return result
}

// 测试Symbol
const fn2 = function(){}
const obj = {}
const a = Symbol(fn2)
obj[a] = 1
console.log(obj[a])

// 测试一下
var value = 2
var obj = {
  value: 1,
}
function bar([name, age]) {
  console.log(this.value)
  return {
    value: this.value,
    name: name || 'default',
    age: age || 18,
  }
}
 // console.log(bar.apply(window)) // 2
console.log(bar.apply(obj, ["kevin", 18]))

```

### *bind*

```javascript
// bind() 方法会创建一个新函数
// bind() 的第一个参数将作为它运行时的 this，之后的一序列参数将会在传递的实参前传入作为它的参数。

Object.prototype.bind2 = function (context) {
  var args = Array.prototype.slice.call(arguments, 1)
  var self = this
  var FNOP = function () {}
  var fbound = function () {
    var bindArgs = Array.prototype.slice.call(arguments)
    self.apply(this instanceof self ? this : context, args.concat(bindArgs))
  }
  FNOP.prototype = this.prorotype
  fbound.prorotype = new FNOP()
  // fbound.prototype = this.prototype;
  return fbound
}
```

## 方法

### 拷贝

```javascript
// 深拷贝与浅拷贝
// 浅拷贝是创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址 ，所以如果其中一个对象改变了这个地址，就会影响到另一个对象。
// 浅 Object.assgin() lodash 展开运输算符 Array.prototype.concat() Array.prototype.slice()
function shallowClone(obj) {
  let newObj = {}
  for (let k in obj) {
    if (obj.hasOwnProperty(k)) {
      newObj[k] = obj[k]
    }
  }
  return newObj
}
// 深拷贝是将一个对象从内存中完整的拷贝一份出来,从堆内存中开辟一个新的区域存放新对象,且修改新对象不会影响原对象。
// JSON.parse(JSON.stringify()) loadsh query.extend() 手写递归
function deepClone(obj) {
  if (obj === null) return obj
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)
  if (typeof obj !== "object") return obj
  const newObj = {}
  for (let k in obj) {
    if (obj.hasOwnproperty(k)) {
      newObj[k] = deepClone(obj[k])
    }
  }
  return newObj
}
```

### 防抖与节流

```
const debounce = (fn,delay) => {
 	const timer = null
 	return function(){
 		if(timer){
 		  clearTimeout(timer)
 		}
 		const args = arguments
 		const ctx = this
        let flag = false
 		timer = setTimeout(function(){
 		   fn.apply(ctx, [...args])
 		},delay)
 	}
}
// 测试
let beginTime = Date.now()
window.requestAnimationFrame = debounce(function(){
 	console.log('实际执行')
 	console.log(Date.now() - beginTime)
 		beginTime = Date.now()
},2000)
```



```javascript
// 最后一次触发事件，在 delay 时间后执行
// 指触发事件后函数不会立即执行，而是在一定时间（比如 3 秒）后执行，
// 如果这段时间（3 秒）内又触发了事件，则会重新计算函数执行时间
const debounce = (fn, delay) => {
  let timer = null
  return function () {
    let ctx = this
    let args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(ctx, [...args])
    }, delay)
  }
}
```

```javascript
// 防抖  立即执行
// 指触发事件后函数会立即执行，然后一定时间（秒）内不触发事件才能继续执行函数的效果
const debounce2 = (fn, delay) => {
  let timer = null
  return function () {
    let ctx = this
    let args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    let callNow = !timer
    timer = setTimeout(() => {
      timer = null // timer 只起到锁定作用
    }, delay)
    if (callNow) {
      fn.apply(ctx, args)
    }
  }
}
```

```
// 节流
// 定时器实现的节流函数在第一次触发时不会执行，而是在 delay 秒之后才执行，
// 当最后一次停止触发后，还会再执行一次函数。
const throttle = (fn, delay) => {
  let timer = null
  return function () {
    let ctx = this
    let args = arguments
    if (timer) return
    timer = setTimeout(() => {
      fn.apply(ctx, args)
      clearTimeout(timer)
    }, delay)
  }
}
```

```
// 时间戳实现的节流函数会在第一次触发事件时【立即执行】，以后每过 delay 秒之后才执行一次
// 最后一次触发事件可能不会被执行
const throttle2 = (fn, delay) => {
  let beginTime = Date.now()
  return function () {
    let ctx = this
    let args = arguments
    let time = Date.now()
    if (time - beginTime > delay) {
      fn.apply(ctx, args)
      beginTime = Date.now()
    }
  }
}
// resize scroll keypress mousedown
// 防抖  搜索请求
// 节流 
```

### todo异步防抖

