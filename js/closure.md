# 闭包和面向对象

## 01-闭包

### 1. 什么是闭包?

- 闭包实际上是一种函数，所以闭包技术也是函数技术的一种；闭包能做的事情函数几乎都能做。
- 闭包技术花式比较多，用法也比较灵活，一般开发人员在学习闭包的时候都会遇到瓶颈，主要是因为闭包技术的分界线并不明显。几乎无法用一个特点去区分。
- 当一个嵌套的内部(子)函数引用了嵌套的外部(父)函数的变量(函数)时, 就产生了闭包

### 2. 产生闭包的条件?

- 函数嵌套
- 内部函数引用了外部函数的数据(变量/函数)

### 3. 常见的闭包使用形式?

- 1. 将函数作为另一个函数的返回值
- 2. 将函数的形参作为实参传递给另一个函数调用

### 4. 为什么要用闭包?

- 局部变量无法共享和长久的保存，而全局变量可能造成变量污染，所以我们希望有一种机制既可以长久的保存变量又不会造成全局污染。
- 1. 使函数内部的变量在函数执行完后, 仍然存活在内存中(延长了局部变量的生命周期)
- 2. 让函数外部可以操作(读写)到函数内部的数据(变量/函数)
- 思考?

	-  1. 函数执行完后, 函数内部声明的局部变量是否还存在?
	-  2. 在函数外部能直接访问函数内部的局部变量吗?
	- 回顾

		- 垃圾回收

			- 定义

				- 现实

					- 1. 房间几天不打扫, 有很多垃圾
					- 2. 经常不学习, 肚子里有很多垃圾
					- .......

				- 编程

					- 程序运行过程中也会产生垃圾
					- 垃圾积攒过多以后，会导致程序运行的速度过慢，所以我们需要一个垃圾回收的机制，来处理程序运行过程中产生垃圾

			- 使用

				- 1. 当一个对象没有任何的变量或属性对它进行引用，我们无法操作该对象，此时这种对象就是一个垃圾，这种对象过多会占用大量的内存空间，导致程序运行变慢，所以这种垃圾必须进行清理;
				- 2. 在JS中拥有自动的垃圾回收机制，会自动将这些垃圾对象从内存中销毁，我们不需要也不能进行垃圾回收的操作;
				- 3. 我们需要做的是将不再使用的对象设置null
				- var obj = new Object();
// 各种对象操作逻辑
obj = null;

- 图示?

### 5. 闭包的生命周期?

- 产生:  在嵌套内部函数定义执行完时就产生了(不是在调用)
- 死亡:  在嵌套的内部函数成为垃圾对象时
- 图示?

### 6. 闭包应用-同步和异步

- 借助小闭包, 把每次循环的i值都封闭起来; 当在事件函数中顺着作用域链中从内到外查找变量i, 会先找到被封闭在闭包环境中的i, 如果有3个按钮, 这里的i的值分别为0, 1, 2

### 7. 闭包应用-封装全局变量

- 作用域链条

	- JS中有很多作用域, 比如: 全局作用域 和  局部作用域
	- 1. 凡是存在作用域的地方一定有作用域链条, 变量的查找都是沿着这条链条自内而外的;
	- 2. 寻找变量都是递归遍历寻找, 当前作用域找不到, 就跳到上一个作用域遍历寻找, 直至顶层;
	- 3. 作用域链条太长, 会影响程序运行效率

- 把一些不需要暴露在全局的变量封装成"私有变量"

### 8. 闭包的应用-定义JS模块

- 将所有的数据和功能都封装在一个函数内部(私有的)
- 只向外暴露一个包含多个方法的对象或函数
- 模块的使用者, 只需要通过模块暴露的对象调用方法来实现对应的功能

### 9. 闭包和内存管理(了解)

- 1. 误解

	- 闭包是非常强大的特性, 但行业内有种说法

		- 闭包会造成内存泄漏, 所以尽量减少闭包的使用!

- 2. 误解产生的原因

	- 局部变量本应该在函数退出时被解除引用, 但如果局部变量被封闭在闭包形成的环境中, 那么这个局部变量就能一直生存下去

		- 闭包会造成一些局部变量无法被及时销毁

	- 但

		- 因为可能在其它的场景中需要经常使用这些变量, 所以我们主动把一些变量放入闭包中

			- 此时, 这些变量无论放在闭包中或者放在全局, 对内存的影响是一致的

	- 所以

		- 不能说闭包会造成内存泄漏
		- 我们可以在需要回收这些变量时, 手动把这些变量设为null;

- 3. 存在的问题

	- 使用闭包的同时容易形成循环引用
	- 如果闭包的作用域中保存的是DOM节点, 这时就可能造成内存泄漏
	- 但这不是闭包的问题, 也不是js的问题; 而是垃圾回收机制采用的是引用计数策略

- 4. 解决方案

	- 把造成循环引用的变量设为null
	- 不用的变量及时释放

## 面向对象

### 1. 原型链

JavaScript并不真的去复制一个原型对象，而是使得新对象持有一个原型的引用；

- 如果所有对象都有私有字段[[prototype]]，就是对象的原型；

-  读一个属性，如果对象本身没有，则会继续访问对象的原型，直到原型为空或者找到为止。

ES6

- Object.create 根据指定的原型创建新对象，原型可以是null； （手写）
- Object.getPrototypeOf 获得一个对象的原型；
-  Object.setPrototypeOf 设置一个对象的原型。

**早期版本中的类与原型** 

在早期版本的JavaScript中，“类”的定义是一个私有属性 [[class]]，语言标准为内置类型诸如Number、 String、Date等指定了[[class]]属性，以表示它们的类。语言使用者唯一可以访问[[class]]属性的方式是 Object.prototype.toString。

在ES5开始，[[class]] 私有属性被 Symbol.toStringTag 代替。Symbol.toStringTag来自定义 Object.prototype.toString 的行为：

```
var o = { [Symbol.toStringTag]: "MyObject" }
console.log(o + ""); // [object MyObject]
```

new 运算接受一个构造器和一组调用参数，实际上做了几件事：  new T()   手写new

1. 以构造器的 prototype 属性（注意与私有字段[[prototype]]的区分）为原型，创建新对象； 
2. 将 this 和调用参数传给构造器，执行；
3.  如果构造器返回的是对象，则返回，否则返回第一步创建的对象。

用构造器模拟类的两种方法:****

1. 直接在构造器中修改this，给this添加属性。

   ```
   function c1(){
   this.p1 = 1;
   this.p2 = function(){
   console.log(this.p1);
   }
   }
   var o1 = new c1;
   o1.p2();
   ```

2. 是修改构造器的prototype属性指向的对象，它是从这个构造器构造出来的所有对象的原型

```
function c2(){
}
c2.prototype.p1 = 1;
c2.prototype.p2 = function(){
console.log(this.p1);
}
var o2 = new c2;
o2.p2();
```

没有Object.create、Object.setPrototypeOf 的早期版本中，new 运算是唯一一个可以指定[[prototype]]的方法

## 面向对象-构造函数使用

### 构造函数设置属性和方法

- 实例属性/实例方法

  -  都是绑定在使用构造函数创建出来的对象p上; 最终使用的时候也是使用对象p来进行访问;
  - 案例

  	- ```
  	  function Person(name, age, doFunc) {
  	    this.name = name;
  	    this.doFunc = doFunc;
  	      }}
  	  ```
  	
  	  

- 静态属性/静态方法

  - 绑定在函数身上的属性和方法
  - 注意: 

  	- 函数本质也是一个对象, 既然是个对象, 那么就可以动态的添加属性和方法
  	- 只要函数存在, 那么绑定在它身上的属性和方法, 也会一直存在

  - 应用场景

    - 记录总共创建了多少个人对象

      - 方案1

      	- 全局变量

      - 方案2

        - 实例属性❌

      - 方案3

      	- 静态属性/静态方法

- 概念补充

	- 实例化

		- 通过构造函数, 构造出对象这个过程

	- 实例

		- 被构造出来的对象

### 创建出来的对象类型获取

- 01 获得内置对象的类型

	- {}
	- [1,2,3]

- 02 获取根据自己声明的构造函数创建的对象

	- p.constructor.name
	- constructor

		- 对象的构造器

### 创建出来的对象类型验证

- instanceof

### 构造函数的调用

- 标准调用

	- var p = new Person();
	- var p = new Person

		- 针对无参数的情况

- 错误调用

	- var p = Person();

		- this会变

### 实例方法的调用

- p.run();
- var tmp = p.run;

	- tmp();
	- ❌

### 总结:

- 针对于函数内部的this
- 如果这个函数当做一般函数来调用

	- this则代表这个函数的调用者

- 如果这个函数, 被当做构造函数来使用

	- this, 代表构造出来的对象

## 面向对象-访问函数原型对象的方式

### 1. 通过  函数名.prototype

### 2. 通过对象中的__proto属性访问

### 注意点说明

-     __proto__是一个非标准属性
-     即ECMAScript中并不包含该属性,这只是某些浏览器为了方便开发人员开发和调试而提供的一个属性,不具备通用性
-     建议:在调试的时候可以使用该属性,但不能出现在正式的代码中

## hasOwnProperty和in属性操作

### in 判断一个对象, 是否拥有某个属性(如果对象身上没有, 会到原型对象里面查找)

### hasOwnProperty: 只到对象自身查找

### 思考

- 怎样判断一个属性仅仅是原型对象属性

## -isPrototypeOf和instanceOf

### isPrototypeOf: 判断一个对象, 是否是某个实例的原型对象

- Person.prototype.isPrototypeOf(p)

### instanceOf : 判断一个对象, 是否是某个构造函数的原型链上

## 原型完善-constructor

### 用于获取一个对象的真实类型

#### ES6中的类

们通过get/set关键字来创建getter，通过括号和大括号来创建方法，数据型成员最好写在构造器里面。



## 提问

### 画出构造函数, 实例, 原型对象之间的关系

### 怎样给原型对象扩展属性和方法?

- 1. 直接借助对象的动态特性

	- 拿到原型对象

### 函数的宿主可以有哪些?根据不同的宿主可以称为什么方法?

### 对象分类

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