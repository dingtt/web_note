# 基础

## JavaScript对象

### 基础知识

### 分类

- 宿主对象（host	Objects）：由JavaScript宿主环境提供的对象，它们的行为完全由宿主环境决定。

- 内置对象（Built-in	Objects）：由JavaScript语言提供的对象。 
  - 固有对象（Intrinsic	Objects	）：由标准规定，随着JavaScript运行时创建而自动创建的对象实例。
  - 原生对象（Native	Objects）：可以由用户通过Array、RegExp等内置构造器或者特殊语法创建的对 象。
  - 普通对象（Ordinary	Objects）：由{}语法、Object构造器或者class关键字定义类创建的对象，它能够 被原型继承。

#### 宿主对象

浏览器环境中的全局对象window，属性一部分雷子JavaScript，一部分来自浏览器环境。也分区固有和用户可创建两种。

#### 内置对象

##### 固有对象

固有对象是由标准规定，随着JavaScript运行时创建而自动创建的对象实例。固有对象在JS代码执行前就已经存在。

###### 三个值

 Infinity、NaN、undefined

###### **九个函数**

eval
isFinite
isNaN
parseFloat
parseInt
decodeURI
decodeURIComponent
encodeURI
encodeURIComponen

###### **构造器**

Array、Date、RegExp、Promise、Proxy、Map、WeakMap、Set、WeapSet、Function、Boolean、 String、Number、Symbol、Object、Error、EvalError、RangeError、ReferenceError、SyntaxError、TypeError URIError、ArrayBuffer、SharedArrayBuffer、DataView、Typed	Array、Float32Array、Float64Array、 Int8Array、Int16Array、Int32Array、UInt8Array、UInt16Array、UInt32Array、UInt8ClampedArray

###### 四个用于当作命名空间的对象

Atomics
JSON
Math
Reflect

##### 原生对象

能够通过语言本身的构造器创建的对象称为原生对象，在JavaScript标准中，提供了30 多个构造器

| 基本类型 | 基础功能和数据结构 | 错误类型       | 二进制操作        | 带类型的数组      |
| -------- | ------------------ | -------------- | ----------------- | ----------------- |
| Boolean  | Array              | Error          | ArrayBuffer       | Float32Array      |
| String   | Date               | EvalError      | SharedArrayBuffer | Float64Array      |
| Number   | RegExp             | RangeError     | DataView          | Int8Array         |
| Symbol   | Promise            | ReferenceError |                   | Int16Array        |
| Object   | Proxy              | SyntaxError    |                   | Int32Array        |
|          | Map                | TypeError      |                   | UInt8Array        |
|          | WeakMap            | URLError       |                   | UInt16Array       |
|          | Set                |                |                   | UInt32Array       |
|          | WeakSet            |                |                   | UInt8ClampedArray |
|          | Function           |                |                   |                   |

##### 函数对象和构造器对象

用对象来模拟函数和构造器

函数对象的定义是：具有[[call]]私有字段的对象，构造器对象的定义是：具有私有字段[[construct]]的对 象。

任何对象只需要实现[[call]]，它就是一个函数对象，可以去作为函数被调用。而如果它能 实现[[construct]]，它就是一个构造器对象，可以作为构造器被调用。

> [[call]]私有字段必须是一个引擎中定义的函数，需要接受this值和调用参数，并且会产生域的 切换

对于宿主和内置对象来说，它们实现[[call]]（作为函数被调用）和[[construct]]（作为构造器被调用）不总 是一致的。比如内置对象	Date	在作为构造器调用时产生新的对象，作为函数时，则产生字符串。

而浏览器宿主环境中，提供的Image构造器，则根本不允许被作为函数调用。

基本类型（String、Number、Boolean），它们的构造器被当作函数调用，则产生类型转换的效果。

如基本类型（String、Number、Boolean），它们的构造器被当作函数调用，则产生类型转换的效果。

```
new( a => 0 ) // error
```

如基本类型（String、Number、Boolean），它们的构造器被当作函数调用，则产生类型转换的效果。

对于用户使用	function	语法或者Function构造器创建的对象来说，[[call]]和[[construct]]行为总是相似的。

```
function f(){
  return 1
}
var v1 = f()
var v2 = new f()
```

构造器实例化，[[contruct]]的执行过程

1. 以Object.protope为原型创建一个对象
2. 以新对象为this，执行函数的[[call]]
3. 如果[[call]]的返回值是对象，那么返回这个对象，否则返回第一步的对象

#### 特殊行为的对象

Array：Array的length属性根据最大的下标自动发生变化。
Object.prototype：作为所有正常对象的默认原型，不能再给它设置原型了。
String：为了支持下标运算，String的正整数属性访问会去字符串里查找。
Arguments：arguments的非负整数型下标属性跟对应的变量联动。

