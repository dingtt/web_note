// todo  手写 call  apply  bind instanceof  深拷贝 浅拷贝
// 高阶  promise axios
// 其他 webpack-loader webpack-plugin

const { set } = require("lodash");

// 手写new
// 1.以 F.prototype 为原型创建一个对象。
// 2. 执行构造函数并将this绑定到新创建的对象上。
// 3. 判断构造函数执行返回的结果是否是引用数据类型，若是则返回构造函数执行的结果，否则返回创建的对象。
function newOperator(ctor, ...args) {
  if (typeof ctor !== 'function') {
    throw new TypeError('Type Error');
  }
  const obj = Object.create(ctor.prototype);
  const res = ctor.apply(obj, args);
  return res !== null && (typeof res === 'object' || res === 'function') ? res : obj;
}


// function myNew(ctor, ...args) {
//   const obj = Object.create(ctor.prototype);
//   const res = ctr.apply(obj, args);
//   return typeof res === 'object' && res !== null ? res : obj
// }

const Dog = function (name) {
  this.name = name
}
Dog.prototype.sayName = function () {
  console.log(`name${this.name}`)
}

const da = newOperator(Dog, 'dahuang')
da.sayName()

// Object.create()
const myCreate = function (obj) {
  function F() { }
  F.prototype = obj;
  return new F();
};

// const myCreate2 = function (obj){
//   const F = function(){}
//   F.prototype = obj;
//   return new F()
// }

// instanceof
const myInstanceof = function (O, i) {
  const left = O.prorotype;
  const right = i.__proto__;
  while (true) {
    if (right == left) {
      return true;
    }
    if (right === null) {
      return false;
    }
    right == right.__proto__;
  }
};

// apply
Function.prototype.apply = function (context = window, args) {
  if (typeof this !== 'function') {
    throw new TypeError('Type Error');
  }
  const fn = Symbol('fn');
  context[fn] = this;
  const res = context[fn](...args);
  delete context[fn];
  return res;
}

Function.prototype.call = function (context = window, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('Type Error');
  }
  const fn = Symbol('fn');
  context[fn] = this;
  const res = context[fn](...args);
  delete context[fn];
  return res;
}

//bind
// bind() 方法会创建一个新函数
// bind() 的第一个参数将作为它运行时的 this，之后的一序列参数将会在传递的实参前传入作为它的参数。

Object.prototype.bind = function (context) {
  var args = Array.prototype.slice.call(arguments, 1);
  var self = this;
  var FNOP = function () { };
  var fbound = function () {
    var bindArgs = Array.prototype.slice.call(arguments);
    self.apply(this instanceof self ? this : context, args.concat(bindArgs));
  };
  FNOP.prototype = this.prorotype;
  fbound.prorotype = new FNOP();
  // fbound.prototype = this.prototype;
  return fbound;
};

Function.prototype.bind = function (ctx, ...args) {
  if (typeof this !== 'function') {
    throw new Error("Type Error");
  }
  // 保存this的值
  var self = this;
  return function F() {
    // 考虑new的情况
    if (this instanceof F) {
      return new self(...args, ...arguments)
    }
    return self.apply(context, [...args, ...arguments])
  }
}

// 实现filter
Array.prototype.filter = function (callback, thisArg) {
  if (this == undefined) {
    throw new TypeError('this is null or not undefined');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + 'is not a function');
  }
  const res = [];
  // 让O成为回调函数的对象传递（强制转换对象）
  const O = Object(this);
  // >>>0 保证len为number，且为正整数
  const len = O.length >>> 0;
  for (let i = 0; i < len; i++) {
    // 检查i是否在O的属性（会检查原型链）
    if (i in O) {
      // 回调函数调用传参
      if (callback.call(thisArg, O[i], i, O)) {
        res.push(O[i]);
      }
    }
  }
  return res;
}

Array.prototype._map = function (callback, thisArg) {
  if (typeof callback !== 'function') throw Error('callback is not fucntion')
  if (this === null) throw new Error('array is null')
  const res = []
  const obj = Object(this);
  for (let i = 0; i < obj.length; i++) {
    if (i in obj) {
      const r = callback.call(thisArg, obj[i], i, obj);
      res.push(r)
    }
  }
  return res
}


Array.prototype.forEach = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError('this is null or not defined');
  }
  if (typeof callback !== "function") {
    throw new TypeError(callback + ' is not a function');
  }
  const O = Object(this)
  const len = O.length >>> 0
  let k = 0;
  while (k < len) {
    if (k in O) {
      callback.call(thisArg, O[k], k, O);
    }
    k++;
  }
}

Array.prototype.reduce = function (callback, initialValue) {
  // if (this == undefined) {
  //   throw new TypeError('this is null or not defined');
  // }
  // if (typeof callback !== 'function') {
  //   throw new TypeError(callbackfn + ' is not a function');
  // }
  const O = Object(this);
  const len = this.length >>> 0;
  let accumulator = initialValue;
  let k = 0;
  // 如果第二个参数为undefined的情况下
  // 则数组的第一个有效值作为累加器的初始值
  if (accumulator === undefined) {
    while (k < len && !(k in O)) {
      k++;
    }
    // 如果超出数组界限还没有找到累加器的初始值，则TypeError
    if (k >= len) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
    accumulator = O[k++];
  }
  while (k < len) {
    if (k in O) {
      accumulator = callback.call(undefined, accumulator, O[k], k, O);
    }
    k++;
  }
  return accumulator;
}



// 深拷贝与浅拷贝
// 浅拷贝是创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址 ，所以如果其中一个对象改变了这个地址，就会影响到另一个对象。
// 浅 Object.assgin() lodash 展开运输算符 Array.prototype.concat() Array.prototype.slice()
function shallowClone(obj) {
  let newObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key]
    }
  }
}

// 深拷贝是将一个对象从内存中完整的拷贝一份出来,从堆内存中开辟一个新的区域存放新对象,且修改新对象不会影响原对象。
// JSON.parse(JSON.stringify()) loadsh query.extend() 手写递归
const _completeDeepClone = (target, map = new Map()) => {
  // 补全代码
  if (typeof target !== 'object' || !target) return target
  const constructor = target.constructor
  if (/^(Function|RegExp|Date|Map|Set)$/i.test(constructor.name)) return new constructor(target)
  // if(/^(Function|RegExp|Date|Map|Set)$/i.test(constructor.name)) return new constructor(target);

  if (map.has(target)) {
    return map.get(target)
  }
  let newObj = new target.constructor()
  map.set(target, newObj)
  for (let key in target) {
    if (target.hasOwnProperty(key)) {
      newObj[key] = _completeDeepClone(target[key], map)
    }
  }
  return newObj
}

// 防抖
// 最后一次触发事件，在 delay 时间后执行
// 指触发事件后函数不会立即执行，而是在一定时间（比如 3 秒）后执行，
// 如果这段时间（3 秒）内又触发了事件，则会重新计算函数执行时间
const debounce = (fn, delay) => {
  let timer;
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.call(this, argruments)
    }, delay)

  }
}

// 防抖  立即执行
// 指触发事件后函数会立即执行，然后一定时间（秒）内不触发事件才能继续执行函数的效果
const debounceCallNow = (fn, delay) => {
  let timer = null;
  let callNow = true;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }

    if (callNow) {
      fn.apply(this, [...arguments]);
      callNow = false;
    }

    timer = setTimeout(() => {
      callNow = true; // timer 只起到锁定作用
    }, delay);
  };
};


// 异步防抖

// 节流
// 定时器实现的节流函数在第一次触发时不会执行，而是在 delay 秒之后才执行，
// 当最后一次停止触发后，还会再执行一次函数。
// const throttle = (fn, delay) => {
//   let timer = null;
//   return function () {
//     if (timer) return;
//     timer = setTimeout(() => {
//       fn.apply(this, arguments);
//       clearTimeout(timer);
//     }, delay);
//   };
// };
const throttle = (fn, time) => {
  let flag = true;
  return function () {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this, arguments);
      flag = true;
    }, time);
  }
}

// 时间戳实现的节流函数会在第一次触发事件时【立即执行】，以后每过 delay 秒之后才执行一次
// 最后一次触发事件可能不会被执行
const throttle2 = (fn, delay) => {
  let beginTime = Date.now();
  return function () {
    let time = Date.now();
    if (time - beginTime >= delay) {
      fn.apply(this, arguments);
      beginTime = Date.now();
    }
  };
};

// resize scroll keypress mousedown
// 防抖  搜索请求
// 节流
// 科利华  
function createCurry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args)
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2))
      }
    }
  }
}

function add(a, b, c, d) {
  return a + b + c + d
}
console.log(createCurry(add)(1)(2)(3)(4))


/**
 * 该函数用于替换字符串中的占位符（用花括号包裹的部分）为对应的对象属性值。
 * @param {string} str - 需要进行替换的字符串。
 * @param {object} obj - 用于提供替换值的对象。
 * @returns {string} - 替换后的字符串。
 */
const fn1 = (str, obj) => {
  let res = '';
  // 标志位，标志前面是否有{
  let flag = false;
  let start; // 开始下标
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '{') {
      flag = true;
      start = i + 1;
      continue;
    }
    if (!flag) res += str[i];
    else {
      if (str[i] === '}') {
        flag = false;
        res += match(str.slice(start, i), obj);
      }
    }
  }
  return res;
}


replace(/(?:^|\s)\w/g)
// -ddd-eee
replace(/-/, function () {

})




const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const obj3 = deepCopy(obj1);
for (let key in obj2) {
  obj3[key] = deepCopy(obj2[key]);
}
