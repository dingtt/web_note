## 掘金收藏知识点整理

### [2021 千字大厂面经 &amp; 个人成长经验分享](https://juejin.cn/post/6922290178836922381)

#### 阿里

##### **vue 和 react 的区别和联系**

两者的模板渲染、两者的虚拟 dom、diff 差异（vue2、vue3、react 16）、react fiber 能解决什么问题、vue2 的响应式原理和 vue3 的响应式原理；vue 关于 Proxy 与 Object.defineProperty 的区别；两者的批量更新，还有路由差异、常用的优化手段、怎么进行数据通信、讲点新鲜的内容：新发布的 vue3 有什么特性、最后总结，谈谈两者的如今的生态

##### 性能优化

项目技术栈的性能优化，比如使用 react 可以讲避免重复渲染的一些手段，比如 electron 可以将如何更接近原生；针对浏览器做的优化（你需要了解浏览器相关原理，比如缓存/存储、代理、SSR 等，针对渲染引擎的工作内容想到的优化，比如解析 css 解析会影响 dom 渲染、合成优化减少回流重绘、web worker、Event Loop 等）；打包工具提供的优化，特指 webpack；针对具体的页面做的优化，比如首页该做什么，首页最新指标；最后讲讲应用场景、我的项目里用到了哪些方法，针对中等项目、大型项目的性能选择。

##### 权限页面

各个模块按钮权限设计，分角色、分地域设计，localStorage在各浏览器、移动端浏览器size大小是否一致

##### 计算多个区间交际

##### 元素节点数量总和，最大嵌套深度以及最大子元素个数

##### 原生代码实现一个Events模块，可以实现自定义事件的订阅、分发、移除功能

**跨端的原理**， taro  uniapp flutter  reactnative  小程序

##### 动态表单的运用场景

##### 移动端适配

#### 快手

##### 一

- react与vue技术栈对比，同上
- B端遇到的最复杂的数据结构
- 数据展示的优化、数据截取和处理
- 实际场景中，哪些地方应用到了堆、链表、多叉树
- GC 相关问题： es6+ ，eventloop 中涉及 GC 的部分。
- 省市区拼接查字段，要求 O(n) 内解出

二

- node 限流算法

  

#### 猎豹

一

- 在一个未知宽度的父元素内如何创建一个等边正方形
- 异步加载 js 会阻塞什么
- 如何优化 vue 框架，注意是优化框架
- vue 和 react 的 jsx 使用
- id key 真的能使列表比对更高效吗？举个反例？
- electron 和小程序遇到什么坑？
- 说下微信自动化测试
- weakMap 和 Map 的区别，weakMap 原理，为什么能被 GC？
- 如何干扰 GC ？
- 知道 webpack 中的 devTool 吗？
- 如何进行错误定位和数据上报，线上异常的处理
- 为什么有时候配置了 webpack caching，chunk 还是更新了？
- 讲讲浏览器和 node 的 eventloop
- 微任务后面还有哪些？requestAnimationFrame 是怎么调用的？requestAnimationFrame 帧内总是有任务吗？分情况说下。
- 帧数怎么计算？
- 如何避免数据被 iframe 截获

  

#### 头条

一

- webpack 提高构建速度的方式
- loader 输入什么产出什么 ？
- 如何写一个 webpack plugin
- AST 的应用
- 如何解析一个 html 文本，还是考 AST  （三元的文章，浏览器部分有）
- babel 原理，怎么写 babel 插件
- 如何设计一个沙盒 sandbox ？
- 小程序的 API 做了什么处理，能够做到全局变量的隐藏，如果是你，怎么设计 ？
- 基础题考闭包的，我讲对了思路，结果没做对。
- 实现颜色转换 'rgb(255, 255, 255)' -> '#FFFFFF' 的多种思路。
- 提供一个数字 n，生成一组 0~n-1 的整数，打乱顺序组成数组，打乱几次，如何能够看起来平衡，说出你能想到的所有方法。
- [leetcode 239](https://leetcode-cn.com/problems/sliding-window-maximum/)

二

- 如何处理一个重大事故 bug
- 监控体系
- 虚拟 dom 有什么好的地方？ 框架为什么要设计虚拟 dom？
- webpack 的缺点，让你设计一个新的构建打包工具，你会怎么设计？
- 在线文档编辑，如何处理两人的冲突，如何展示，考虑各种场景
- excel 文档冲突高级处理，文章冲突呢？是上个问题的深化。
- 基础题，直接写出答案：

```
let x = [1, 2, 3]; 
let y = x; 
let z = [4, 5, 6]; 
y[0] = 10; 
y = z; 
z[1] = 20; 
x[2] = z = 30; 
console.log(x, y, z);
```

### [山月最近的面试总结](https://juejin.cn/post/6922229465468633095)

### [两年工作经验成功面试阿里P6总结](https://juejin.im/post/6844903928442667015)

### [拼多多和酷家乐面试经历总结](https://juejin.cn/post/6844904151013392398)

#### 酷乐家

- React事件机制  [一文吃透 React 事件机制原理](https://toutiao.io/posts/28of14w/preview)
- 盒子模型和 `box-sizing` 属性，判断元素的尺寸和颜色。
- 算法题，怎么找到第一个相交的节点。

#### 拼多多

- react 16 生命周期有什么改变

- 详细的介绍一下 `getDerivedStateFromProps`

- class 组件与函数式组件的区别  [函数式组件与类组件有何不同？](https://overreacted.io/zh-hans/how-are-function-components-different-from-classes/)

- 避免 css 全局污染。

- webpack 如何实现动态加载  [webpack是如何实现动态导入的](https://juejin.im/post/6844903888319954952)

- react 里有动态加载的 api 吗？

- > React.lazy

- React.lazy 的原理是啥？

- webpack 能动态加载 require 引入的模块吗？

- > 应该是不能的，前面说了，webpack 支持动态导入基本上只能用`import()` 和`require.ensure`。

- require 引入的模块 webpack 能做 Tree Shaking 吗？

- > 不能，Tree Shaking 需要静态分析，只有 ES6 的模块才支持。

- 设计一个input 组件需要哪些属性。我说了 value 、defaultValue、onChange

- value 的类型是什么？

- onChange 怎么规定 value 的类型

- 写一个 promise 重试函数，可以设置时间间隔和次数。`function foo(fn, interval, times) {}`

- 实现一个 redux

  > 实现 `createStore` 的功能，关键点发布订阅的功能，以及取消订阅的功能。

### [霖呆呆的中大厂面试记录及2年前端薪资对比(附赠学习方法)](https://juejin.cn/post/6844904181627781128)

#### YY

- HTTP/2对比HTTP1.1
- HTTP/2是怎么解决队头阻塞的
- HTTP/2是如何压缩头部的
- HTTP请求的什么时候用的对称加密什么时候非对称加密
- 如何实现if(a===1&&a===2&&a===3)
- 使用jsonp的话会有什么安全问题吗？
- requestAnimationFrame属于宏任务还是微任务
- HTTP/2中的多路复用

#### 阿里

position属性有哪些值分别介绍一下

relative的定位规则

脱离文档流是会呈现什么样的效果呢？

常规流(文档流)是个怎样的排列关系

inline-block的使用场景

GET和POST的区别

为什么说GET会留下历史记录？

GET可以上传图片吗？

GET和POST的安全性问题为什么说POST相对安全一些

GET就一定是幂等的吗？

null为什么被typeof错误的判断为了'object'

### [一年半经验前端社招7家大厂&独角兽全过经历 | 掘金技术征文](https://juejin.cn/post/6844904137495150599)

#### 拼多多

一

1. react16新生命周期，有什么变化【描述】

> 两个static、一个didcatch捕获错误的、一个getsnapshot

1. react16之前的那些不好的生命周期怎么过度到react16的新生命周期【描述】【举例】

> getDriverStateFromProps替代componentWillReceiveProps，加上逻辑对比上次state和props来决定state。willupdate换成getSnapshotBeforeUpdate，willmount直接写成初始state（react16的state不先写出来是null，你需要先在class组件里面写一下state = {...}）

1. componentWillReceiveProps用到了this，getDriverStateFromProps也要用，怎么办【伪代码】

> 把this.xxx存到state里面，第二个参数是state，里面有xxx（有点挫，懂的人应该都有同样的感受吧，如果是函数组件，一个useRef保存一下即可）。另外的方法，如果和内部变量无关，把它抠到class组件外面去

1. 编程题：求最大公共前缀，如`['aaafsd', 'aawwewer', 'aaddfff'] => 'aa'`(ide没有调试功能，也不能打开控制台，我只能写好了让面试官去运行。无调试，靠想象)【编程】
2. 编程题：求最大公共路径前缀，`['aa/bb/sd', 'aa/bb/wwewer', 'aa/bb/ddfff'] => 'aa/bb'`(无调试，靠想象)【编程】 接上题改一下，不用一分钟即可解决
3. 怎么理解ts【描述】

> 类型检查、ide友好提示、文档、利于维护

1. ts的type和interface什么区别【描述】

> 经典问题，网上可搜，主要是列举出两者的特点，对比一下

1. ssr怎么实现，你们怎么做【描述】【举例】

> 将动态渲染逻辑做到后端去，并把最终html结果直接返回。我们这边是数据动静分离+部分ssr直出，重要的数据ssr，比较慢的接口还是放前端

1. 你们有没有统一构建的cli，怎么实现【描述】【举例】

> 基于react全家桶，ts、eslint、埋点上报、sw都可配置，根据配置生成代码模版，开箱即用

1. 你们项目有ci吗，怎么做，提交的时候会做什么事情【描述】【举例】

> 通过接入公司内部某ci，配置yaml文件，每次监听git hook，并作出对应的行为如安装、lint、部署、搬运、生成change log等等。提交的时候，检查lint、修复autofixable的问题，存在修不了的问题报错，提交失败

1. e2e测试、自动化测试【描述】

> 概念性问题，网上容易搜到。端对端测试，模拟用户行为对网页进行全流程测试；自动化测试，包含很多了，范围更高一个维度

1. git rebase什么作用【描述】

> 概念性问题

二

1. **实现一个redux【编程】**

> 还是那10几行经典redux，途中会顺便问一下函数式编程、纯函数、副作用这些，网上搜“函数式编程”即可知道这些概念了

1. **如果是用ts写，怎么写【编程】**

> 改成ts版本，如果比较熟悉redux+ts的，很快写出来。如果不太熟，熟悉泛型也可以根据表现，很快写出近似的。我说我没有ide提示，不能保证裸写没问题。面试官说没事，只是看看你ts熟悉程度

#### 虾皮

1. 各种情况下的proto指向，多道问答题【描述】

> 有一个class A {},问他的实例a的`__proto__`和`A.prototype`的关系，`a.__proto__.__proto__`是什么，`a.__proto__.__proto__.__proto__`是什么。然后再问普通对象、function的。这里需要注意一下`Function.prototype === Function.__proto__`和a的三次proto是null。一开始就问三次取a的proto，其实潜意识是null的，但刚刚下班赶车回家，心跳都没有恢复正常就进入面试，没什么状态，“em～”了10秒钟，面试官说：哎，你别打开控制台喔，别偷偷的运行哦。我说这肯定是原型链终点了，我想想，确认一下——null！犹豫就会败北，开门一波丢脸

1. 页面10张img，http1是怎样的加载表现，怎么解决。那多域名又为什么可以解决呢【描述】

> 这个是面试重点高频率问题之一，http1下，浏览器对一个域名下最大tcp连接数为6，所以10张图片表现为6+4。所以可以用多域名部署解决。5个a域名，5个b域名就可以实现一瞬间全部出来了(或者6个a，4个b，融会贯通)。如果是1个a域名，9个多域名，会表现为(6 + 1) + 3

1. 接上题，10张img，http2是怎样表现【描述】

> 一瞬间全部

1. http2为什么快，多了什么特性，头部压缩算法是怎样【描述】

> 背书，搜http2答案都有了。头部压缩是HPACK算法

1. react性能优化【描述】【举例】

> scu生命周期、memo；usememo & usecallback记住一些值不用重新计算；虚拟列表；immutable+scu/memo；原生js；（这块聊了很久了）

1. 长列表优化，多种方案及对比【举例】

> 虚拟列表、intersectionobserver、监听滚动长列表+raf（经验之谈，聊了很久）

1. diff算法、key作用，不要key会怎样【描述】

> 树diff、组件diff、元素diff；key可以原地复用，没有key无脑会更新（此时你可以发现，index做key其实会形同虚设）

1. react的usememo原理【描述】

> 闭包、缓存、memorize

1. 编程题：对象扁平化【编程】(30min)  pick

```javascript
{
  "a": {
    "b": {
      "c": {
        "d": 1
      }
    }
  },
  "aa": 2,
  "c": [
    1,
    2
  ]
} =>
{ 'a.b.c.d': 1, aa: 2, 'c[0]': 1, 'c[1]': 2 }
```

1. jsbridge了解么，说一下【举例】

> 没做过，就我之前做少量内嵌webview的经验，我猜一下吧，大概就是两种：注入全局方法通信、监听url协议(如abc://，然后触发请求的地方可以做拦截如img、iframe、xhr、fetch等)。回去查了一下，发现我猜的的确是差不多，只是专业名词没到位，口头话很多

1. addeventlistener第三个参数作用【描述】【举例】

> 控制冒泡/捕获阶段执行。或者是一个对象`{ passive: true }`，针对的是Safari的，禁止/开启使用滚动的时候要用到

1. 为什么浏览器不用cjs而用了esm【举例】

> 个人观点类问题。cjs都是require系统本地文件，时间不用考虑。如果在浏览器使用类似cjs的require，实现过程无非就是创建script标签、发请求。这个发请求的过程就无法保证同步了，你要写成`callback/promise/async-await`，这样子写页面门槛又高了



### 作业帮

- 实现bind(送分)
- 防抖&节流(送分)
- settimeout实现interval(注意和普通的要无差别体验)

```
;(() => {
  const list = new Set();
  function myInterval(fn, ms) {
    const ref = {};
    const exec = () => {
      return setTimeout(() => {
        fn.apply(null);
        const timer = exec();
        ref.current = timer;
      }, ms);
    };
    ref.current = exec();
    list.add(ref);
    return ref;
  }

  function myClearInterval(ref) {
    clearTimeout(ref.current);
    list.delete(ref);
  }
  window.myInterval = myInterval;
  window.myClearInterval = myClearInterval;
})()
```

- 字符串大小写反转(送分) 
- 节点是不是属于某个节点下(当时我写了一个不带parentid的版本，要自己一层层搜。如果带parentid的，就简单很多了，测试用例你自己写，他们也没有给出)
- 反转链表(常规题)
- 合并数组['a', 'b'], [1, 2, 3] => ['a', 1, 'b', 2, 3] (送分)
- 合并有序数组 [1, 5], [2, 5, 6, 8] => [1, 2, 5, 5, 6, 8] (常规题，而且比合并有序链表还要简单一些)
- 一堆数字字符串组成最大数是多少[50, 2, 5, 9] => 95502 (字典序+贪心)

```
function getMaxNumber(arr) {
  return arr.sort().reduce((acc = '', cur) => Math.max(+`${acc}${cur}`, +`${cur}${acc}`));
}
```

- 如何判断链表有没有环，快慢指针。

#### 猿辅导

一

1. react生命周期介绍，怎么执行。说一下下面的组件生命周期执行顺序【描述】有`<A> <B /> </A>`这样的组件：

```
a.willMount 3
b.willMount 1
a.didMount 4
b.didMount 2
复制代码
```

> react16前是递归的，是这个顺序。react16后改成fiber架构，是反过来的了，没有像栈那样fifo

1. redux vs context，为什么不用context【描述】

> 随意修改，莫名其妙的bug。redux将这个过程规范化，单向数据流

1. react 17要做什么规划，concurrent mode【描述】

> concurrent mode、去掉危险的生命周期。concurrent mode是react重点面试题了，基于requestidlecallback实现(考虑兼容性，官方自己实现了一个)——浏览器空闲的时候做事情

1. SSR，打开你们的SSR页面看看，具体逻辑、实现方式【描述】

> 发了一个我们的链接给他，并描述了流程

1. `promise.then(f1, f2)``和promise.then(f1).catch(f2)`区别【描述】

> 捕获全部上游和捕获本次then

1. () => {} vs function () {}【描述】

> 送分。无argument、this是定义那一层、箭头可以指向返回值

1. 说输出【描述】

```
const obj = {
  f1: () => console.log(this),
  f2() { console.log(this) },
};
obj.f1() // global
obj.f2() // obj
new obj.f1; // instance
new obj.f2; // instance
复制代码
```

1. Map/Set、WeakMap，什么作用【描述】

> map可以用对象做key，set做集合使用。WeakMap弱引用，防止内存泄露

1. 用setTimeout实现setInterval【编程】

> 又问到了，频率有点高

1. Node { value: number; children: Node[] }，算出树每一层节点和，输出数组【编程】

```
     2         => 2

2      3      5  => 10

1   2  3   4   7 8 => 25

// 每一层的和 [2, 10, 25]；
复制代码
```

使用bfs可秒杀

二

1.节流、和防抖的区别，均匀的节流怎么实现【编程】

> 一下子写了最简单的出来，然后他要各种改需求，加功能。要支持配置马上执行、要防抖节流两个结合起来、要均匀

1. http缓存、强制缓存里面expire和cache-control作用，什么坑【描述】

> 重点题，频率很高。expire需要保证时间准确

1. 前端路由实现。history什么坑，怎么解决【描述】

> 哈希和history，监听事件、切换元素。history会导致一些新路径404，nginx重定向到首页走js逻辑

1. var、let、const区别，() => {} vs function () {}【描述】

1. ES5 实现 B 继承 A【编程】

> 为了表现，肯定是直接写寄生组合继承啦

- rbac
- http3的quic
- 数组和链表优点缺点

商汤

1. websocket和http协议区别【描述】

> http无状态、被动；ws一次握手，知道状态，可以双向通信

1. 完全不同的域名共享localstorage的方案【描述】

> 公共服务器双工通信(比较简单暴力)、嵌套iframe并双向通信(只要一个变了，马上通知另一方，保证他们的localstorage一模一样)

- 数据mock的时候，如果有鉴权逻辑怎么办。
- settimeout(a, 3000); ...同步代码执行很久 settimeout(b, 1000)多少种情况，临界值【描述】【举例】

> 同步代码执行时间 <= 3000，顺序。> 3000先b再a

1. 浏览器底层对线程冲突的实现【描述】

#### 快手

一

- react升到16，有什么坑需要解决【描述】
- 16后性能好多少，测过吗，你怎么测的。顺便问一下各种测速上报【描述】
- 为什么16的性能好，fiber流程是怎样的【描述】
- 为什么两个will生命周期要被标记为danger【描述】
- 用了react的哪些新特性，带来什么收益【举例】
- 浏览器http缓存那一套【描述】
- from memory cache、from dist cache什么区别，性能对比【描述】
- 根据什么而选from memory cache、from dist cache这两种缓存方案【描述】
- service worker怎么理解【举例】
- 输出一个字符串全排列【编程】

二

- 项目深挖，反问一些问题【描述】【举例】
- react的setstate过程【描述】
- 说一下几种情况的setstate的输出，为什么【描述】
- react的合成事件【描述】
- 收到新state怎么更新，发生了什么事情【描述】
- ssr太久，你觉得什么原因导致【举例】
- ssr优化措施【举例】
- react的ssr和传统的模版引擎渲染对比【描述】
- ssr兜底容灾措施、降级措施【举例】
- 如何选择csr还是ssr，设计一套方案切换，让尽量多的用户得到最好的体验【举例】
- 有一个请求函数request，封装一下这个函数，使得多个相同的请求过来的时候不发请求，直接读取第一个的结果【编程】
- 有一个排序数组，返回第一个比目标数字小的数，要求log(n)【编程】

三

- 4个砝码，一个天平，问能称出多少种重量（砝码可以两边都放，砝码重量自己随便定）【写出运算过程】

### [蚂蚁、字节、滴滴面试经历总结](https://juejin.cn/post/6844904161830502407)

字节

**一**

> webpack 如何做性能优化

webpack 做性能优化主要是考虑打包体积和打包速度。

体积分析用 `webpack-bundle-analyzer` 插件，速度分析用：`speed-measure-webpack-plugin` 插件。

> 笔试题：写一个处理加法可能产生精度的函数，比如 0.1 + 0.2 = 0.3

思路：对于浮点数在底层处理是有问题的，所以目的就是想办法将所以的浮点数转化为整数进行处理，同时乘以一个倍数(A)，然后加起来后再除以这个倍数(A)，这个倍数应该是两个数中最小的那个数的倍数，比如 0.1 + 0.02 ,那么应该同时乘以 100，变为 10 + 2，然后再将值除以 100。

> 1000000000 + 1000000000 允许返回字符串 处理大数

大数问题就是通过字符串来处理，从后往前加，然后处理进位的问题。

**二**

- 写一个 es6 的继承过程

```javascript
// 这个是要实现的方法
createClass = fun(sons, super) {
	// TODO
	return fn;
}

// 这是个 es6 的一个例子，要实现 extends 的功能。
class Man extends Human {
	cons (args) {
		super(args)
	  // xxxxx
	}

	speak() {
		console.log('')
	}
}
```

- 写一个大数相乘的解决方案。传两个字符串进来，返回一个字符串

这道题跟一面的时候思路差不多，只是进位的时候不一定是 1。

**三**

算法题:[leetcode-cn.com/problems/bu…](https://leetcode-cn.com/problems/bu-ke-pai-zhong-de-shun-zi-lcof/)

#### 滴滴

- webpack 原理

大致就是：

1. 初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数；
2. 开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译；
3. 确定入口：根据配置中的 entry 找出所有的入口文件；
4. 编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理；
5. 完成模块编译：在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系；
6. 输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会；
7. 输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。

在以上过程中，Webpack 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用 Webpack 提供的 API 改变 Webpack 的运行结果。

- babel 原理

babel的转译过程分为三个阶段：**parsing、transforming、generating**，以ES6代码转译为ES5代码为例，babel转译的具体过程如下：

1. ES6代码输入
2. babylon 进行解析得到 AST
3. plugin 用 babel-traverse 对 AST 树进行遍历转译,得到新的AST树
4. 用 babel-generator 通过 AST 树生成 ES5 代码

**二**

- redux 做状态管理和发布订阅模式有什么区别

redux 其实也是一个发布订阅，但是 redux 可以做到数据的可预测和可回溯。

- react-redux 的原理，是怎么跟 react 关联起来的

react-redux 的核心组件只有两个，Provider 和 connect，Provider 存放 Redux 里 store 的数据到 context 里，通过 connect 从 context 拿数据，通过 props 传递给 connect 所包裹的组件。

- 多端原理
- babel插件  通过代码生成文档的 babel 插件
- AST

#### 蚂蚁

**一**

- hooks原理
- vue3 的 类似 hooks 的原理是怎么样的

- 组件升级怎么让使用这个组件的人都知道。

### [霖呆呆的近期面试128题汇总(含超详细答案) | 掘金技术征文](https://juejin.cn/post/6844904151369908232)

#### **多JS基础题**

- 如何解决a标点击后hover事件失效的问题

  只需要记住`LoVe HAte`原则就可以了：link→visited→hover→active

- 点击一个input依次触发的事件

  'onmouseenter' 'onmousedown' 'onfocus' 'onclick'

- react的控制组件和非控制组件

- 原生的自定义事件 customEvent

- 冒泡和捕获的具体过程

- 所有的事件都有冒泡吗

-  typeof为什么对null错误的显示

   这只是 JS 存在的一个悠久 Bug。在 JS 的最初版本中使用的是 32 位系统，为了性能考虑使用低位存储变量的类型信息，000 开头代表是对象然而 null 表示为全零，所以将它错误的判断为 object

- 手写JSONP ？？？

- CommonJS和ES6模块的区别   ***多几条***

  [一篇不是标题党的CommonJS和ES6模块规范讲解](https://juejin.im/post/6844904145443356680)

### [75 道 JavaScript 面试题， 2.5 万字刷个够](http://mp.weixin.qq.com/s?__biz=MzI3ODU4MzQ1MA==&mid=2247487859&idx=1&sn=8b639a364d1d71f26853537f28f299d1&scene=21#wechat_redirect)

- undefined与null区别

  同属基本类型，布尔值转换；undefined，未指定特定值的变量的默认值，没有显示返回的函数，对象中不存在的属性。null，不代表任何值的值，已明确定义给变量的值， == 与=== 结果

- &&能做什么

  逻辑与，找到第一个虚值表达式并返回它，如果没有找到任何虚值表达式，则返回最后一个真值表达式。它采用短路来防止不必要的工作。

- || 能做什么

  逻辑或，在其操作数中找到第一个真值表达式并返回它。用于参数默认值。

- `+`是将字符串转换为数字的最快方法，因为如果值已经是数字，它不会执行任何操作。

- `event.currentTarget`是附加事件处理程序的元素。

- `toPrimitive`首先在对象中使用`valueOf`方法，然后使用`toString`方法来获取该对象的原始值

  | '1,2'             | [1,2] | == true |
  | ----------------- | ----- | ------- |
  | '[object Object]' | {}    | == true |

### [Chocolate1999](https://github.com/Chocolate1999/Front-end-learning-to-organize-notes/issues)

class定义类和function定义类的区别

点击事件是宏任务还是微任务

BOM和DOM的区别,BOM的方法讲完整一点

[全局变量为什么不会被垃圾处理](https://segmentfault.com/a/1190000021231422)

怎么判断一个元素有没有被引用

内存泄漏

promise中不声明async，可以用await吗

promise的api：如果有10个调用请求，那么哪个api能查到最快调用的请求	

阻塞、非阻塞和异步同步是对应的吗？一样的吗？

事件机制，捕获和冒泡，如何阻止冒泡？

fetch的使用，考察通信是否了解

let const, babel 中的实现

怎么判断一个空数组

怎么创建一个Promise，参数是什么，怎么中断一个promise，除了抛异常和return new Promise()还有什么

cookie的几个字段的功能  expires  httponly samesite

js怎么删除cookie

[try…catch…中如果异步代码出错怎么办？](https://github.com/Chocolate1999/Front-end-learning-to-organize-notes/issues/194)

ES5实现继承的方法，构造继承，原型链继承，组合继承，寄生组合继承

[如何实现私有的方法/属性](https://juejin.cn/post/6881894768117284878)

js溢出怎么解决

[callback的缺点，Promise的状态有哪些，generator，async和await](https://juejin.cn/post/6906106922605543432)

[require和import的区别？AMD、CMD、ES6](https://juejin.cn/post/6881241853258104839)

手动实现一个ajax，这样实现的方法叫什么

ajax有哪些状态，每个状态分别对应什么

async是什么的语法糖，generator怎么用

构造继承里 Function.call(argu)里传进来的参数argu是什么

bind(object).bind(windows) 后的this指向

链表的实现

深拷贝/浅拷贝

如果要同时启动两个异步任务，怎么做



[简单说一下es6的symbol属性](https://www.zhangxinxu.com/wordpress/2018/04/known-es6-symbol-function/)

[this指向](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this)

[new操作符之后的操作](https://github.com/Chocolate1999/Front-end-learning-to-organize-notes/issues/174)

[js里堆和栈的区别](https://juejin.cn/post/6844903618999500808)

[setTimeout第二个参数为0时和匿名自执行函数区别](https://github.com/Chocolate1999/Front-end-learning-to-organize-notes/issues/172)

[问如何改造，才能实现打印0 1 2 3，闭包可以吗，然后用闭包实现一下这个效果](https://github.com/Chocolate1999/Front-end-learning-to-organize-notes/issues/218)





