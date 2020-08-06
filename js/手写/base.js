// todo  手写 call  apply  bind instanceof  深拷贝 浅拷贝
// 高阶  promise axios  
// 其他 webpack-loader webpack-plugin


// 手写new
const myNew = function () {
  //
  let Constructor = Array.prorotype.shift(arguments)
  let obj = {}
  obj.__proto__ = Constructor.prorotype
  let res = Constructor.apply(obj, arguments)
  return res instanceof Constructor ? res : obj
}

// Object.create()
const myCreate = function (obj) {
  function F() {}
  F.prototype = obj
  return new F()
}


// instanceof
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

// call

// appaly


//bind

// 深拷贝与浅拷贝
// 浅拷贝是创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址 ，所以如果其中一个对象改变了这个地址，就会影响到另一个对象。
// 浅 Object.assgin() lodash 展开运输算符 Array.prototype.concat() Array.prototype.slice()
function shallowClone(obj){
  let newObj = {}
  for(let k in obj){
    if(obj.hasOwnProperty(k)){
       newObj[k] = obj[k]
    }
  }
  return newObj
}
// 深拷贝是将一个对象从内存中完整的拷贝一份出来,从堆内存中开辟一个新的区域存放新对象,且修改新对象不会影响原对象。
// JSON.parse(JSON.stringify()) loadsh query.extend() 手写递归
function deepClone(obj) {
   if(obj === null) return obj
   if(obj instanceof Date) return new Date(obj)
   if(obj instanceof RegExp) return new RegExp(obj) 
   if(typeof obj !== 'object') return obj
   const newObj = {}
   for(let k in obj){
     if(obj.hasOwnproperty(k)){
       newObj[k] = deepClone(obj[k])
     }
   }
   return newObj
}
