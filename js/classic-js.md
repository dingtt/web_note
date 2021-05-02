

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
Function.prototype.call2 = function () {
  if(typeof this !== 'function') throw 'caller must be a function'
  // 没有传参，及window
  var context = arguments[0] || window
  // 调用call的函数
  context.fn = this
  // 函数参数
  var argsArr = [...arguments].slice(1) 
  var result = context.fn(argsArr)
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
  // Reflect.deleteproperty(context.fn)
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

```javascript
// 定时器防抖
// 指触发事件后函数不会立即执行 
// 第一次触发创建定时器delay，如果这段时间（delay）内又触发了事件，则会删除定时器重新定时
// 最后一次触发事件，在 delay 时间后执行
const debounce = (fn,delay) => {
 	const timer = null
 	return function(...args){
    const ctx = this
 		if(timer){
 		  clearTimeout(timer)
 		}
 		timer = setTimeout(function(){
 		   fn.apply(ctx, args)
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
// 防抖  立即执行 callNow
// 指触发事件后函数会立即执行，然后一定时间（秒）内不触发事件才能继续执行函数的效果
const debounceImmediate = (fn, delay) => {
  let timer = null
  return function (...args) {
    let ctx = this
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
// flag
  immediateDebounce(fn, delay) {
        let timer = null
        let flag = true
        return function (...args) {
          const ctx = this
          if (timer) {
            clearInterval(timer)
          }
          if (flag) {
            fn.apply(ctx, args)
            flag = false
          }
          timer = setTimeout(() => {
            flag = true
          }, delay)
        }
      },
        // 合并防抖
      commonDebounce(fn, delay, immediate) {
        let timer = null
        let flag = true
        return function (...args) {
          const ctx = this
          if (timer) clearTimeout(timer)
          if (immediate && flag) {
            fn.apply(ctx, args)
            flag = false
          }
          timer = setTimeout(() => {
            if (immediate) {
              flag = true
            } else {
              fn.apply(ctx, args)
            }
          })
        }
      },
```

```javascript
// 定时器节流
// 定时器实现的节流函数在第一次触发时【不会执行】，而是在 intervel 秒之后才执行，
// 当最后一次停止触发后，还会再执行一次函数。
const throttle = (fn, intervel) => {
  let timer = null
  return function (...args) {
    let ctx = this
    if (timer) return
    timer = setTimeout(() => {
      fn.apply(ctx, args)
      clearTimeout(timer)
    }, intervel)
  }
}
```

```javascript
// 时间戳节流
// 时间戳实现的节流函数会在第一次触发事件时【立即执行】，以后每过 intervel 秒之后才执行一次
// 缺点：最后一次触发事件可能不会被执行
const throttle2 = (fn, intervel) => {
  let last = 0
  return function (...args) {
    let ctx = this
    let now = Date.now()
    if (now - last > intervel) {
      fn.apply(ctx, args)
      last = now
    }
  }
}
// resize scroll keypress mousedown
// 防抖  搜索请求
// 节流 
```

```javascript
 // 合并节流防抖  解决防抖频率太快，一直没响应的问题, 防抖配合的是时间戳节流

      debounceThrottle(fn, delay) {
        let timer = null
        let last = 0
        return function (...args) {
          const ctx = this
          let now = Date.now()
          // 节流时间内  防抖
          if (now - last < delay) {
            if (timer) clearTimeout(timer)
            timer = setTimeout(() => {
              fn.apply(ctx, args)
            }, delay)
          } else {
            fn.apply(ctx, args)
            last = now
          }
        }
      },
```



### todo异步防抖 ?



### 函数的 compose

### 柯里化

实现`add(1)(2)(3)(4)=10;` 、 `add(1)(1,2,3)(2)=9;`

```javascript
// `add(1)(2)(3)(4)=10;` 、 `add(1)(1,2,3)(2)=9;`
function add(){
   let _args = [...arguments]  // 箭头函数没有arguments 不能用new
    function fn(){
      _args =  _args.concat([...arguments])
        return fn
    }
    fn.toString = function(){
       return  _args.reduce((sum,cur) => sum + cur)
    }
    return fn
}

console.log(add(1)(2)(3)(4),add(1)(1,2,3)(2))
```

```js
function curry (fn, args = []){
    return function (){
        let newArgs = args.concat(arguments)
        if(newArgs.length < fn.length){
            return curry.call(this, fn, newArgs)
        }else{
            return fn.apply(this,newArgs)
        }
    }
}
```



### 继承

```javascript
// 原型继承  继承自同一个实例，指向同一个内存地址，一改全改
function Parent(){	
}
function Child(){
}
Child.prototype = new Parent()
```

```javascript
// 构造函数继承
function Parent(){
}
function Child(){
  Parent.call(this)  // 继承父类的属性
}
```

```js
// 寄生组合继承
function Parent () {
  this.name = 'parent'
}

function Child() {
  Parent.call(this)  // 继承父类的属性
}
Child.prototype = Object.create(Parent.prototype) // 继承父类原型
Object.setPrototypeOf(Child, Parent) // 继承父类的静态方法
Child.prototype.constructor = Child // 重新指向Child

```

### Object.is

主要用来解决

```
+0 === -0 true
NaN === NaN false
```

```javascript
const is = (x,y) => {
  if(x === y ){
    return x !==0 || y !== 0 || 1/x === 1/y
  }else {
    return x !== x && y !== y
  }
}
```

## 常见的关于`async`的笔试题

[`async` 函数原理](https://mp.weixin.qq.com/s/eCkVvW_3iyqM_MtEYYtP-A)就是 `Generator`函数 和 自动执行器包装了一下。

- 实现一个`sleep`

  ```javascript
  function sleep(interval) {
      return new Promise(resolve => {
          setTimeout(resolve, interval);
      })
  }
  
  // 用法
  async function one2FiveInAsync() {
      for (let i = 1; i <= 5; i++) {
          console.log(i);
          await sleep(1000);
      }
  }
  one2FiveInAsync();
  ```

- 实现一个红绿灯：红灯2秒，黄灯1秒，绿灯3秒

  ```js
  async function changeColor(color, duration) {
      console.log('当前颜色', color);
      await sleep(duration);
  }
  async function main() {
      await changeColor('红色', 2000);
      await changeColor('黄色', 1000);
      await changeColor('绿色', 3000);
  }
  main();
  ```

- 使用 `async` 实现`Promise.all()`的效果

  ```
  
  ```

```js


const PENDDING = 'pendding'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class Promise {
    constructor(executor){
        this.status = PENDDING
        this.value = undefined
        this.reason = undefined
        this.onFulfilledCallbacks = []
        this.onRejectedCallbacks = []

        const resolve = value => {
            if(this.status === PENDDING){
                this.status = FULFILLED
                this.value = value
                this.onFulfilledCallbacks.forEach(cb => {
                    cb(this.value)
                })
            }
        }

        const reject = reason => {
            if(this.status === PENDDING){
                this.status = REJECTED
                this.reason = reason
                this.onRejectedCallbacks.forEach(cb => {
                    cb(reason)
                })
            }
        }

        try{
            executor(resolve, reject)
        }catch(e){
            reject(e)
        }

    }

    then(onFulfilled, onRejected){
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {
            throw new Error( reason instanceof Error ? reason.message :reason)
        }
        const self = this
        return new Promise((resolve, reject) => {
            if(self.status === PENDDING){
                self.onFulfilledCallbacks.push(() => {
                    try{
                        // 模拟微任务
                        setTimeout(() => {
                            const result = onFulfilled(self.value)
                            // 回调函数返回值是Promise,执行then操作
                            // 如果不是Promise, 调用新的promise.resolve
                            result instanceof Promise ? result.then(resolve, reject):
                            resolve(result)
                        })
                    }catch(e){
                        reject(e)
                    }
                })
                slef.onRejectedCallbacks.push(() => {
                    
                })
            }else if(self.status === FULFILLED){
                try{
                   const result = onFulfilled(self.value)
                 result instanceof Promise ? result.then(resolve, reject)  : resolve(result)    
                }catch(e){

                }
            } // rejected
        })
    }
    static resolve(value){
        if(value instanceof Promise){
            return value
        }else{
            return new Promise((resolve, reject) => {
                resolve(value)
            })
        }
    }
    // static reject
   
}
Promise.prototype.finally = function(callback) {
    this.then(value => {
        return new Promise.resolve(callback()).then(() => {
            return value
        })
    }, error => {
        return new Promise.resolve(callback()).then(() => {
            return error
        })
    })
}
```



```js
Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
        let result = [],  // 存储结果
            index = 0, // 计数
            len = promises.length
        if (len === 0) {
            resolve(result)
            return
        }
        for (let i = 0; i < len; i++) {
            Promise.resolve(promises[i]).then(data => {
                result[i] = data
                index++
                if (index === len) resolve(result)
            }, error => {
                reject(error)
            })
        }

    })
}
```

```js
Promise.race = function (promises) {
    let len = promises.length
    if(len === 0 ) return
    for (let i = 0; i < len; i++) {
        Promise.resolve(promises[i]).then(data => {
            resolve(data)
        }, err => {
            reject(err)
        })
    }
}
```

setTimeout实现setInterval

```js
function timerFun(){
	let timer = setTimeout(() => {
	console.log(1000)
		clearTimeout(timer)
		timerFun()
	},1000)
}
timerFun()
```

setInterval准时执行

```

```

es5实现私有变量

```js
function Person(name) {
  this.name = name
  this.getName = function(){
    return this.name
  }
}
const person = new Person('xiaoliu')
console.log(person.getName())
```

Vue2响应式原理

```js
function observe(obj) {
    if(obj && typeof obj === 'object'){
        for(let key in obj){
            defineReactive(obj,key, obj[key])
        }
    }
    // walk 
}

function defineReactive(obj, key, val){
    const dep = new Dep()
    observe(val)
    Object.defineproperty(obj,key,{
        enumerable:true,
        configurable:true,
        get:function(){
            dep.addSub(Dep.target)
            return val
        },
        set:function(){
            dep.notify()
        }
    })
}

class Dep{
    constructor(){
        this.subs = []
    }
    addSub(watcher){
        this.subs.push(watcher)
    }
    notify(){
        this.subs.forEach(sub => {
            sub.update()
        })
    }
}
```

let const 的es5实现

```js
(function(){var a = 1;})()

function _const(key,value){
	window[key] = value
	Object.defineProperty(window,key,{
			configurable:false,
			enumerable:false,
			get:function(){
				return value
			}
			set:function(newValue){
			  if(newValue !==value){
			    throw new TypeError('只读变量')
			  }else{
			    return value
			  }
			}
	})
}
```

获取页面最大嵌套深度，最大子元素个数

```js
function getMaxNestLevel() {
    var i = 1, sel = '* > *'; /* html > body is always present */
    var max = 0
    while(document.querySelector(sel)) {
        var node = document.querySelector(sel)
        if(node && node.children){
            max = node.children.length> max ? node.children.length: max
        }
        sel += ' > *';
        i++;
    }
    return i + ' ' + max;
};
function getMaxLength(){
  var max = 0
  var allNodes = document.querySelector('html')
  function tra(node){
    if(node && node.children){
       
      max = node.children.length > max ? node.children.length : max
      Array.from(node.children).forEach(item => {
        tra(item)
      })
    }
  }
  tra(allNodes);
  console.log(max) 
};

```

对象寻址

```js
// 方法一
var obj = {
    a:{
        b:{
            c:1
        }
    }
}
 
var str = 'a.b.c';

const find = (obj,str) => {
    const arr = str.split('.')
    let result = obj[arr[0]]
    for(let k of arr.slice(1)){
        if(!result) break
        result = result[k] 
    }
    return result
}
console.log(find(obj,str))

// 方法二  parsePath
function parsePath(exp){
    const segments = exp.split('.')
    return function(obj){
        for(let i = 0; i < segments.length; i++){
            if(!obj) return
            obj = obj[segments[i]]
        }
        return obj
    }
}
console.log(parsePath(str)(obj))

```

