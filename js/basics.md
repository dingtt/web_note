# JavaScript基础

程序 = 算法 + 数据结构

// 记录到wt第5章

## JavaScript的组成

- 词法
  - 直接量，关键字，运算符，标识符，保留字，操作符

- 语法语义 
  - 表达式，语句，函数，对象，模块

## 数据类型

### **基本(简单)数据类型**

- **null**

  - null是基本类型中唯一一个假值，**判断null** `!n && typeof n === "object"`，null	是	JavaScript	关键字

- **undefined**

  - Undefined	类型表示未定义，它的类型只有一个值，就是	undefined
  - `typeof undefined === "undefined"`，undefined是一个变量 ，undefined不是关键字，可以作为标识符，**测试chrome80下为， 全局、局部对 undefined 直接赋值已无效，全局 var undefined 无效，局部  `var undefined = 1`**有效
  - 已声明还未赋值的变量，是undefined的；没有声明的变量（有的语言中称为undeclared），是`ReferenceError: b is not defined`，但是typeof仍为undefined；使用typeof检查变量是否被声明，防止直接if()判断报错，也可以使用全局对象`if(window.atob)`。
  - void	运算来把任一一个表达式变成	undefined	

- **boolean**

- **number**

  - **指数**  toExponential() 5e+10 ; toFixed()指定小数部分显示位数，52.toFiex()会报Syntax错误，.运算符会优先识别为数字常量的一部分；toPrecision() 方法指定有效数位的显示位数

    ```
    var a = 52.55; a.toPrecision(1) // 5e+1 a.roPrecision(2); // 52 不足补0
    ```

  - **整数** 最大安全整数 **2^53 -1**，ES6中为Number.MAX_SAFE_INTEGER，最小为最大的负值 -2^53 +1，ES6中定义为Number.MAX_SAFE_INTEGER；ES6整数检测，isInteger，isSafeInteger，polyfill用Mach.abs()和MAX_SAFE_INTEGER比大小

  - **浮点数** 机器精度 二进制存储位权引起的，**浮点数不等差值 Math.pow(2, -52)，ES6中 Number.EPSION**，最大浮点数Number.MAX_VALUE约为1.798e+308，最小浮点数Number.MIN_VALUE大约5e-324

  - 进制

    - 十进制
    - 二进制 0b01
    - 八进制 0o77
    - 十六进制  0x1F

  - JavaScript中的Number类型有	18437736874454810627(即2^64-2^53+3)	个值。

  - 0 === -0 ，ES5区分	+0	和	-0	的方式，正是 检测	1/x	是	Infinity	还是	-Infinity

- **NaN**   设计NaN的操作，都会返回NaN;NaN与任何值都不相等;isNaN 会尝试把类型转换为数字类型。

  ```
   typeof NaN; // number NaN != NaN;  isNaN();// true  isNaN(''); // false 
   isNaN(false); // false isNaN(true); // false 
  ```
  
  全局isNaN会把字符串转化为true，ES6中的新增方法Number.isNaN()
  
  ```
  Number.isNaN() // flase    Number.isNaN('') // false
  ```
  
- **string**

  - 属性方法：length indexof() concat()  toUpperCase()

  - 借用数组的方法

    ```
    Array.prototype.join.call(str, '-')
    Array.prototype.join.map(str, fn)
    Array.prototype.join.reverse(str, fn)  // 笨办法，split revserse join，仅适用于不带unicode、特殊字符
    ```

  - String	有最大长度是	2^53	-	1，charAt、charCodeAt、 length	等方法针对的都是	UTF16	编码。	Unicode	的码点通常用	U+???	来表示，其 中	???	是十六进制的码点值，0-65536（U+0000	-	U+FFFF）的码点被称为基本字符区域 。星形符号，一个字素，两个length；

  - JavaScript	字符串把每个	UTF16	单元当作一个字符来处理，所以处理非BMP（超出	U+0000	-	U+FFFF	范围） 的字符时，你应该格外小心

- **Object**

  - 对象的定义是“属性的集合”，属性并非只是简单的名称和值，JavaScript用一组特征（attribute）来描述属性 （property）。属性分为数据属性和访问器属性，二者都是key-value结 构，key可以是字符串或者Symbol类型。

  - 函数对象的length是其声明的参数的个数

  - 

  - .	运算符提供了装箱操作，它会根据基础类型构造一个临时对象，使得 我们能在基础类型上调用对应对象的方法。

    - 数据属性

      -  value：就是属性的值。
      -   writable：决定属性能否被赋值。 
      -  enumerable：决定for in能否枚举该属性。 
      -  configurable：决定该属性能否被删除或者改变特征值。

    - 访问器属性 访问器属性使得属性在读和写时执行代码，它允许使用者在写和读属性时，得到完全不同的值。

      -  getter：函数或undefined，在取属性值时被调用。 
      -  setter：函数或undefined，在设置属性值时被调用。 
      -  enumerable：决定for in能否枚举该属性。 
      -  configurable：决定该属性能否被删除或者改变特征值

    - 获取方式

      -  Object.getOwnPropertyDescriptors(obj)
      -  Object.getOwnPropertyDescripter(O,key)  

    - Object.getOwnPropertyNames(obj)   Object.getOwnPropertySymbols(obj)  hasOwnProperty()

    - Object.defineProperty 修改访问器属性

      ```
      var obj = {a:'q', get a() {return 'p'}, b:function(){}} ;
      Object.getOwnPropertyDescriptor(obj, 'a')
      // {set: undefined, enumerable: true, configurable: true, get: ƒ}
      ```

      

- **symbol** 符号

  - 一切非字符串的对象key的集合，创建	Symbol	的方式是使用全局的	Symbol	函数，	var	mySymbol	=	Symbol("my	symbol")。
  - Symbol	可以具有字符串类型的描述，但是即使描述相同，Symbol也不相等。
  - Symbol.iterator	来自定义	for…of	在对象上的行为。
  - typeof Object(Symbol("a"))[Symbol.toPrimitive] ()  // 'symbol'

## 类型获取和判断

### 获取判断数据类型

-     运算符:typeof ，适用于基本数据类型
      -         typeof null    ---> object(正确)

      -         typeof （function(){}）  function

- value instanceof type  只适用于复杂数据类型

  - 判断一个实例是否是某一个类型，只要在当前实例的原型链上，用instanceof检测出来的结果都是true，所以在类的原型继承中，最后检测 出来的结果未必是正确的，而且instanceof后面必须更一个对象。
    不能检测基本类型
- constructor
  - 每个构造函数的原型对象都有一个constructor属性，并且指向构造函数本身，由于我们可以手动修改 这个属性，所以结果也不是很准确。 不能检测null和undefined
- Object.prototype.toString.call（最佳方案）
  - 调用Object原型上的toString()方法，并且通过call改变this指向。返回的是字符串

### 补充

- null和undefined区别

  - null表示"没有对象"，即该处不应该有值。

    - 表达是一个对象, 但是没有存放任何引用
    - 可以手动赋值

      - 一般在准备将一个变量赋值为一个对象之前, 先赋值为null
      - 或者想要释放一个对象的时候

  - undefined表示"缺少值"，就是此处应该有一个值，但是还没有定义。

    - 不需要手动的赋值此值

- 可以使用typeof 判断一个变量是否 未定义或者未声明

  - typeof name

    - undefined

  - if (name) {  }

    - 这种判断是否可行?

## =和==和===说明

### =

- 赋值操作
- 表达式的返回值就是赋值的数值
- 对条件表达式写法的影响

  - if (值 == 变量) { }

### ==

- 基本数据类型之间

  - 判断两个变量 值 是否相等

- 对象之间

  - 判断内存地址是否相等

- 基本类型和对象之间

  - 则会将对象转换为基本数据类型数值进行比对

### ===

- 基本数据类型之间

  - 判断两个变量 值 是否相等

    - 且比对类型

- 对象之间

  - 判断内存地址是否相等

- 基本类型和对象之间

  - 则会将对象转换为基本数据类型数值进行比对

    - 且比对类型

## 类型转换

#### StringToNumber 

- 在不传入第二个参数的情况下，parseInt只支持16进制前缀“0x”，而且会忽略非数字字符，也不支持科学 计数法。parseFloat则直接把原字符串作为十进制来解析，Number	是比	parseInt	和	parseFloat	更好的选择。

#### 装箱转换 

每一类装箱对象皆有私有的	Class	属性，这些属性可以用	Object.prototype.toString	获取：

```
Object.prototype.toString.call(Object)
```

avaScript	中，没有任何方法可以更改私有的	Class	属性，因此Object.prototype.toString	是可以准确识 别对象对应的基本类型的方法，它比	instanceof	更加准确，call本身会产生装箱操作，所以需要配合	typeof	来区分基本类型还是对象类型

#### 拆箱转换

- 对象到	String	和	Number	的转换都遵循“先拆箱再转换”的规则，拆箱转换会尝试调用	valueOf	和	toString	来获得拆箱后的基本类型。到	String	的拆箱转换会优先调用	toString

  ```
  var o = {
              valueOf: () => {
                console.log("valueOf")
                return {}
              },
              toString: () => {
                console.log("toString")
                return {}
              },
            }
            o * 2 
            //	valueOf				//	toString				//	TypeError
            String(o)				
            //	toString				//	valueOf				//	TypeError
  ```

- 拆箱转换会尝试调用	valueOf	和	toString	来获得拆箱后的基本类型，

  ```
  var o = {} ; 
  o[Symbol.toPrimitive]	=	()	=>	{console.log("toPrimitive");	return	"hello"};  
  o == 'hello'  // true
  o === 'hello' // false
  ```
  

### 复杂(复合)数据类型

- Object 对象类型
- Array  数组类型    ==>object
- Date   日期类型    ==>object
- Math   类型        ==>object
- Function 函数      ==>function(并非是object)
- RegExp   正则表达式

- String  字符串对象类型 
- Number
- Boolean

Number、String和Boolean，三个构造器是两用的，当跟	new	搭配时，它们产生对象，当直接调用时，它 们表示强制类型转换。Symbol	函数比较特殊，直接用	new	调用它会抛出错误，但它仍然是	Symbol	对象的构造器。

### 基本类型和复杂类型区别

- 存储方式不同

  - 堆区和栈区

    - 栈区特点

      - 操作性能高, 速度快
      - 存储量小
      - 所以:

        - 一般存储操作频率较高, 生命周期较短, 占用空间较小的数据
        - 基本数据类型

    - 堆区特点

      - 操作性能低, 速度慢
      - 存储量大
      - 所以

        - 一般存储  操作频率较低, 生命周期比较长, 占用空间比较大的数据
        - 复杂数据类型

          - 对象

  - 图解

- 操作方式的不同

  - 划分

    - 值类型  string  number boolean undefined null(*)


    - 引用类型

      -     Object类型,以下类型其本质都是object类型，Function ，Array， Date， String，Number，Boolean

  - 值&引用

    - 赋值

      - 值类型赋值
      - 引用类型赋值

    - 传递

      - 函数中的参数传递

    - 技巧

      - 脑中有图

#### 数组

字符串键值如果能强制转换为十进制数字，则会被当作数字索引。 

```
var a = []; a['8'] = 99; a.length // 9
```

##### 类数组

DOM元素列表，arguments对象，转数组

- Array.prototype.slice.call(arguments)
- ES6中的 Array.from(args)

- 核心
- 注意:

	- 定义的仅仅是语言基础

		- 语法
		- 类型
		- 语句
		- 关键字
		- 保留字
		- 操作符
		- 对象
		- ...

	- 宿主环境提供了该语言的基本实现和扩展

		- 比如DOM

	- 与Web浏览器没有依赖关系

		- 浏览器只是ECMAScript实现的宿主环境之一

	- 其他宿主环境

		- Node

			- 服务器端的JavaScript平台

		- Adobe Flash

### DOM

- 文档对象模型
- 功能

	- 1. 把整个页面映射成为一个多层节点结构
	- 2. 然后提供了一套对这些节点(内容)增删改查的方法

- DOM级别

	- DOM1

		- DOM Core

			- 如何映射基于XML的文档结构

		- DOM HTML

			- 添加了针对HTML的对象和方法

	- DOM2

		- 扩充了鼠标和用户界面事件, 范围,遍历等细分模块
		- 通过对象接口增加了对CSS的支持
		- 具体

			- DOM视图

				- 定义了跟踪不同文档视图的接口

			- DOM事件

				- 定义了事件和事件处理的接口

			- DOM样式

				- 定义了基于CSS, 操作元素样式的接口

			- DOM遍历和范围

				- 定义了遍历和操作文档树的接口
				- 新增了验证文档的方法

	- DOM3

		- 引入了以统一方式加载和保存文档的方法

- 注意

	- 针对于XML但经过扩展,用于HTML的应用程序编程接口(API)
	- 不只是针对于JavaScript的, 很多其他语言也实现了DOM

### BOM

- 浏览器对象模型
- 作用

	- 处理浏览器窗口和框架
	- 习惯于把针对于浏览器操作的JS扩展也归为BOM

- 具体功能

	- 弹出新浏览器窗口的功能
	- 移动,缩放和关闭浏览器窗口的功能
	- 提供浏览器详细信息的navigator对象
	- 提供浏览器所加载页面的详细信息的location对象
	- 提供用户显示器分辨率详细信息的screen对象
	- 对cookie的支持
	- XMLHttpRequest -- ActiveXObject

### 

- - - -

- - -

## 05-ECMAScript-关系运算符

### 关系运算符(结果是布尔类型)

###     大于(>)

###     小于(<)

###     小于等于(<=) 小于或者是等于

###     大于等于(>=) 大于或者是等于

###     不等于(!=) 

### 注意:

- 基本数据类型之间

	- 转换成同类型进行值比对

- 对象类型之间

	- 比如数组
	- > < >= <= 

		- 会转换成值进行比对

	- !=

		- 与==相反

			- 比对的是内存地址

- 基本数据类型和对象类型之间

	- 则会将对象转换为基本数据类型数值进行比对

## 06-ECMAScript-逻辑运算符

### 01 逻辑非

-     符号:!
-     操作符: !表达式
-     结果:布尔类型的值,要么是true要么是false
- 0 '' false null undefined

	- 取反全为true

### 02 逻辑与

-     符号:&&
-     操作符:表达式1 && 表达式2

### 03 逻辑或

-     符号:||
-     操作符:表达式1 || 表达式2

### 注意:

- 1. 注意逻辑与和逻辑或的返回值, 并非boolean类型

	- 逻辑与

		-     一假全假

			-      如果表达式1为假,那么就返回表达式1,否则就返回表达式2

	- 逻辑或

		-     一真全真

			-         如果表达式1为真,那么就返回表达式1,否则就返回表达式2

- 2. 逻辑与和逻辑或也被称为短路运算符

	- 逻辑与

		- 一假全假

			- 第一个假的,后面不会再进行执行

	- 逻辑或

		- 一真全真

			- 第一个真的, 后面不会再执行

## 07-ECMAScript-分支和循环

### 条件结构

- 	if..else
- 	?:
- 	switch..case
- 案例

	- 分数级别

### 循环结构

- 	for循环
- 	for...in(主要用于遍历对象)
- 	while
- 	do...while(至少会执行一次)
- 案例

	- 99乘法表
	- 阶乘

- 注意:

	- break
	- continue
	- label

## 08-ECMAScript-函数

### 1. 函数的几种创建?

-     01 声明函数

	-     function 函数名称 (形参1,形参2)
	-     {
	-         //函数体
	-     }

-     02 函数表达式

	- 01 匿名函数

		-     var func01 = function (){
		-     };

	- 02 命名的函数表达式

		- var func02 = function func(){
		-     };

-     03 使用构造函数创建函数对象

	-     var func02 = new Function("console.log('demo');");
	-     func02();
	- 可以传递N个参数

		- 会把最后一个参数, 当做函数体;
		- 其他参数当做函数形参

### 2. 函数使用技巧

- 形参和arguments

	- 该参数是一个类似于数组的结构（可以像数组一样遍历 + 还可以使用下标来访问数据），但是并不是数组。
	-               01 函数调用的时候，会把实参的值赋值给形参，而且会使用arguments来接收实参
	-               02 如果实参的个数超过形参的个数，那么可以通过arguments来获取超出的数据
	-               03 如果实参的格式小于形参的个数，那么不足的全部设置为undefined
	- 两者之间是关联的关系

- length属性

	- 函数名.length

		- 形参的长度（个数）

- name属性

	- 函数名称

- 函数重载

	- 概念

		- 函数名相同, 但是根据传递的参数不同可以实现不同的功能

	- 例如

		- function sum(a, b)
		- function sum(a, b, c) 
		- 可以同时存在

	- 但是:js没有函数重载!

		- 但是可以通过arguments个数来模拟重载

- js模板使用

### 3. 函数的几种叫法?

- 函数

	- 命名函数
	- 匿名函数

- 闭包

	- 可以在其他函数作用域之外访问其他函数内部变量的函数

		- 由函数内部返回给外界的函数
		- 由外界传递到函数内部的函数

- 方法

	- 有宿主

		- 静态方法
		- 实例方法

	- 需要通过宿主来调用

## 09-ECMAScript-作用域问题

### 概念：某个变量有（起）作用的范围

### js中的作用域

- 01-script标签构成的全局作用域
- 02-块级作用域

	- 在其他语言中, 由{}包含的代码块都有自己的作用域
	- 在其他语言中，有块级作用域，但是在js中没有块级作用域

- 03-在js中函数是唯一一个可以创建作用域的对象

	- 注意:

		- 如果没有通过var关键字声明变量, 则为全局变量

### 作用域链

- 01 js中函数可以创建作用域
- 02 js中的函数中可以声明函数
- 03 函数内部的函数中又可以声明函数
- 04 以上,会形成一个链式的结构,这个是作用域链

### 变量查找原则

- 就近原则
- 从内到外

## 10-ECMAScript-变量和函数提升

### js的执行：

-     01 预解析阶段  变量和函数的提升（声明）
-     02 具体的执行阶段

### 规则

- 0-会把变量的声明提升到当前作用域的最前面

	- 赋值放在原位置不动

- 1-会把函数声明提升到当前作用域前面

	- 紧接着被提升过的其他声明
	- 注意:

		- 函数的声明包含了函数体
		- 如果是函数的表达式

			- 只会把var 变量的名称(函数)提升到当前作用域的最顶端

		- 特例写法

			- if (condition) {
	function a() {alert('1')};
}else {
	function a() {alert('2')};
}

				- 不要这样写!!!

			- 使用函数表达式的形式修正

- 2-变量和变量同名的情况:后面的变量会把前面的变量覆盖
- 3-函数和函数同名的情况,后面的会把前面的覆盖
- 4-函数和变量同名的情况:

	- 变量的声明不会覆盖函数的声明

- 5-变量提升无法脱离所在作用域

### 测试

- 测试1

      function foo() {
          var num = 123;
          console.log(num);
      }
      
      foo();          
      console.log(num); 
  
- 测试2

      var scope = "global";
      foo();
      function foo() {
          console.log(scope);
          var scope = "local";
          console.log(scope);
      }
      console.log(scope);

- 测试3

      function f1(){
          if("a" in window){
              var a = 10;
          }
          console.log(a);
      }
      f1();

- 测试4

      if("a" in window){
          var a = 10;
      }
      console.log(a);

- 测试5

      var foo = 1;
      function bar() {
          if(!foo)
          {
              var foo = 10;
          }
          alert(foo);
      }
      bar();

- 绘制作用域图

      var a = 10;
      function f1(){
          function f2(){
              var d = "demoD";
          }
      }
      
      function f3(){
          function f4(){
          }
          var b = "demoB";
          function f5(){
              var c = "demoC"
          }
      }
  

## 11-ECMAScript-异常处理

### 场景

- 正常情况下,如果程序出现了错误或者是异常,那么该行代码后面的所有代码都无法得到执行
- 但是,有些时候我们需要保证即便程序出现了问题,后面的代码也能够正常执行,这种情况就可以使用异常捕获结构

### 使用

- 抛出异常

	- throw 

		- 字符串
		- 对象

- 捕捉异常

	-     try{
	-         //可能出错的代码
	-     }catch (e){
	-         //出错了就执行这个代码块
	-     }
	-     finally
	-     {
	-         //不管是否出错,都会执行这里的代码块
	-         //一般在前端开发中不会使用,多多用于后端开发Node.js 主要用于在最后释放资源
	-     }

## 12-DOM-操作(增删改查)

### 增加

- 创建tag

	- document.createElement("div");

- 添加tag

	- appendChild

### 删除

- parent.removeChild(child);

### 修改

- 主要只修改内部属性

	- innerHTML
	- style
	- ...

### 查询

- 根据标签查询
- 根据ID查询
- 根据class查询
- 查询所有
- ...

## 13-BOM-操作

### 浏览器对象模型

### 作用

- 处理浏览器窗口和框架
- 习惯于把针对于浏览器操作的JS扩展也归为BOM

### 具体功能

- 弹出新浏览器窗口的功能
- 移动,缩放和关闭浏览器窗口的功能
- 提供浏览器详细信息的navigator对象
- 提供浏览器所加载页面的详细信息的location对象
- 提供用户显示器分辨率详细信息的screen对象
- 对cookie的支持
- XMLHttpRequest -- ActiveXObject

### 重要对象

- window

	- 标识浏览器的一个实例
	- 全局作用域

		- 全局作用域中的变量或者函数都会变成window的属性或者方法

	- 窗口位置

		- moveTo
		- moveBy
		- 可能被禁用

	- 窗口大小

		- resizeTo
		- resizeBy
		- 可能被禁用

	- 导航和打开窗口

		- open

			-     参数1: 需要加载的URL
			-     参数2: 窗口目标

				- 窗口名称
				- _self
				- _parent
				- _top
				- _blank

			-     参数3: 一个特性字符串(,分割)

				- fullScreen

					- yes/no

				- width
				- height
				- left
				- top
				- toolbar
				- status
				- resizable

			-     参数4: 是否取代浏览器历史集中中当前加载页面的Boolean值

	- 间歇调用和超时调用

		- setInterval
		- setTimeout

	- 系统对话框

		- confirm

			- 确认框

		- alert

			- 消息框

		- prompt

			- 输入框

- location

	- 提供了与当前窗口中加载的文档有关的信息, 还提供了一些导航功能
	- window.location === document.location
	- 常用属性

		- hash
		- href

			- http://www.520it.com:80/person/sz.php?param1=name&param2=age

		- protocol

			- http:

		- host

			- www.520it.com:80

		- hostname

			- www.520it.com

		- port

			- 80

		- pathname

			- /person/

		- search

			- ?param1=name&param2=age

	- 查询字符串参数

		- 查询串需要我们自己解析

	- 位置操作

		- window.location.assign(url)
		- window.location =url
		- window.location.href =url
		- 注意

			- 以上三句代码, 效果等同, 都会重新加载最新url
			- 另外, 修改了location的属性, 也会触发重新加载网页

				- hash除外

- navigator

	- 识别客户端信息的事实标准

		- appCodeName

			- 浏览器名称

		- appName

			- 完整的浏览器名称

		- appVersion

			- 浏览器版本

		- ...

- screen

	- 浏览器窗口的描述信息

		- width/height
		- top/left
		- ...

- history

	- 上网的历史记录
	- go(num)

		- 前进/后退几页

## 14-面向对象-相关概念

### 01-什么是对象?

- 万物皆对象
-     对象是具体物体

	- 拥有属性
	- 拥有行为
	- 把很多零散的东西, 封装成为一个整体

-     举例: 

	- 王二小

		- 属性

			- 姓名
			- 年龄
			- 身高
			- 体重
			- ...

		- 行为

			- 走路
			- 吃饭
			- 放羊
			- ...

	- DOM节点

		- 属性

			- innerHTML
			- innerTEXT
			- style
			- ...

		- 行为

			- removeChild(child);
			- appendChild()
			- ...

### 02-面向对象-面向过程

-     都是一种解决问题的思路(思想)
-     面向过程

	- 在解决问题的时候,关注的是解决问题需要的一个接着一个的过程(步骤)

-     面向对象

	- 在解决问题的时候,关注的是解决问题所需要的对象.

- 对比

	- 面向对象和面向过程都是解决问题的一种方式(思想)

		-    面向对象本身是对面向过程的封装.

	- 面向对象编程最重要的什么?

		- 找到对象, 确定对象属性和行为
		- 小案例

			- 做好饭之后洗碗

				- 面向过程

					- 你

						- 洗菜
						- 点火倒油
						- 放菜,材料
						- 翻炒
						- 盛出
						- 放水
						- 放碗
						- 倒洗洁精
						- 开始刷
						- 擦干水
						- 摆放好

				- 面向对象

					- 你

						- 对象

							- 技能1: 做饭

								- 洗菜
								- 点火倒油
								- 放菜,材料
								- 翻炒
								- 盛出

							- 技能2:洗碗

								- 放水
								- 放碗
								- 倒洗洁精
								- 开始刷
								- 擦干水
								- 摆放好

					- 你

						- 对象

							- 技能1: 做饭

								- 放菜,材料
								- 自动炒菜机

									- 搅拌
									- 翻炒
									- 监测火候

								- 盛出

							- 技能2:洗碗

								- 放水/放碗
								- 自动洗碗机

									- 倒洗洁精
									- 开始刷
									- 擦干水

								- 摆放好

	- 面向对象的好处

		-     01 更方便
		-     02 复用性会更好
		-     03 高内聚和低耦合
		-     04 冗余(重复的东西)-->封装(提取相同的部分作为函数体,抽取不同的部分作为参数)

## 15-面向对象-创建对象的方式

### 字面量的方式创建对象

- 问题:使用内置构造函数的方式和字面量的方式来创建对象差不多,都存在以下问题:
-     	01 创建的对象无法复用,复用性差
-     	02 如果需要创建多个同类型的对象,如(书籍)则需要写大量重复的代码,代码的冗余度高

### 内置构造函数的方式来创建对象

- 问题:使用内置构造函数的方式和字面量的方式来创建对象差不多,都存在以下问题:
-     	01 创建的对象无法复用,复用性差
-     	02 如果需要创建多个同类型的对象,如(书籍)则需要写大量重复的代码,代码的冗余度高

### 简单工厂函数的方式来创建对象

- 简单工厂模式

	- 工厂里面有一些产品的模板, 只需要, 给工厂提供原材料; 工厂按照固定的加工方式, 就可以返回给外界同一类型的产品
	- 问题:

		- 无法判定类型

### 自定义构造函数的方式来创建对象

- 01-自定义构造函数和简单工厂函数的对比

	-     ① 函数的首字母大写(用于区别构造函数和普通函数)
	-     ② 创建对象的过程是由new关键字实现
	-     ③ 在构造函数内部会自动的创建新对象,并赋值给this指针
	-     ④ 自动返回创建出来的对象

- 02-构造函数的执行过程:

	-     ① 使用new关键字创建对象

		- 外界

	-     ② 把新创建出来的对象赋值给this
	-     ③ 在构造函数内部,使用this为新创建出来的对象设置属性和方法
	-     ④ 默认返回新创建的对象(普通函数如果不显示的return则默认返回undefined)。

- 03-构造函数的返回值说明:

	-     01 如果在构造函数中没有显示的return,则默认返回的是新创建出来的对象
	-     02 如果在构造函数中显示的return,则依照具体的情况处理

		-        [01] return 的是对象,则直接返回该对象,取而代之本该默认返回的新对象
		-        [02] return 的是null或基本数据类型值,则返回新创建的对象

	- 总结

		- 类型匹配才接受-> 对象

## 16-对象的创建-简单使用

### 对象在js中的体现

- 键-值对的集合(key-value)
- 属性:在对象内部声明的变量
- 方法:在对象内部赋值在属性上的函数

### 对象的创建

-     01 字面量

	- var person = {name:"sz", age: 18, run: function () {alert('跑');}};

-     02 使用内置构造函数来创建

	- var obj = new Object();

### 对象的操作

-     js对象支持动态特性:增加属性(方法) | 删除属性(方法) |修改属性(方法) |查询
- 操作对象的属性和方法可以使用两套方式:

	-     01 点语法
	-     02 中括号[]

### 操作实践

- 创建对象
- 添加属性

	- obj.name = 'sz';
	- 系统会自动识别, 如果没有name属性, 则动态添加

		- 如果有, 则修改

- 查询

	- 一般查询

		- console.log(obj.name);
		- console.log(obj['name']);

	- 遍历查询

		- in 关键字

			- 1. 可以判断对象中是否包含某个属性

				- pro in obj

			- 2. 可以遍历对象键值对

				- for (var key in obj)

		- 注意

			- 属性的访问形式

				- []
				- 不能用.

			- in 在数组中的使用

				- 1. 可以判断对象中是否包含某个属性

					- pro in obj

				- 2. 可以遍历对象键值对

					- for (key in arr)

- 修改属性

	- obj.name = 'sz';
	- 和添加属性的操作完全一样
	- 系统会自动识别, 如果没有name属性, 则动态添加

		- 如果有, 则修改

- 删除

	- delete关键字

		-     (1) 删除对象中的属性
		-     (2) 删除没有使用var关键字声明的全局变量

	- 注意:

		-         (1)返回值 布尔类型的值(我们可以通过该值来判断是否删除成功)
		-         (2)使用var关键字声明的变量无法被删除

			- 省略var关键字声明的变量, 相当于动态的给window增加一个属性
			- window.xxxx = 100;
			- 这种方式,可以手动删除

		-         (3)删除对象中不存在的属性没有任何变化,但是返回值为true
		-         (4)不能删除window下面的全局变量(使用var声明),但是可以删除直接定义在window上面的属性

## 17-面向对象小案例

### 计算器加减乘除运算

### 面向过程

### 面向对象

### 链式调用

