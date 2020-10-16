# 不同模块的标准及区别

### CommonJS

Node.js的实现采取了CommonJS标准的一部分，并在其基础上进行了一些调整。

#### 模块

CommonJS中规定了每个文件是一个模块，会形成一个属于模块自身的作用域，所有的变量及函数只有自己可以访问，对外是不可见。

require('')   

导出  module.exports{}

CommonJS模块内部都会有一个module对象，用于存放当前模块的信息，可以理解为

```
var module = {...}
module.exports = {...}
```

简化写法可直接使用 exports ，相当于使用 module.exports

*不可以直接为exports赋值，exports = {} 是错误的，不恰当的使用module.exports 和exports 也会导致错误*

导出语句不代表模块的末尾

##### 导入

导入使用require

require的模块第一次被加载，先执行该模块，然后导出内容。 module.loaded 默认为false，第一次执行设为true

require的模块被加载过，这时该模块的代码不会再执行，而是直接导出上次执行的结果。（module.loaded为true）

require可以接收表达式，可以动态地指定模块加载路径。

### ES 6

es6 也是每个文件当作一个模块，每个模块拥有独立的作用域，导入导出使用import和export。

ES6 不管开头是否有 `use strict`都会采用严格模式

##### 导出

命名导出，可以通过as关键字对变量进行重命名

默认导出，模块的默认导出只能有一个

##### 导入

导入的变量是只读的，不可以更改，可以通过 as 关键字重命名，导入多个变量是可以用 * ，import * as <myModule>可以把导入的变量作为属性值添加到<my Module>对象中，从而减少对当前作用域的影响

复合写法，导入之后立即导出，只支持被导入模块通过命名模式导出，默认导出没有对应的复合形式。

```
export { name, add} from './calc.js'
```

### CommonJS 与 ES6 的区别

####  静态与动态

动态指模块依赖关系的建立在代码运行阶段。而静态指模块依赖关系的建立在代码编译阶段。

require的模块路径支持动态指定，可以传入表达式，在执行前并没有办法确定明确的依赖关系，模块的导入导出发生在代码运行阶段。

ES6的导入导出都是声明式的，导入导出语句必须位于模块作用域的顶层（不能放到if中）

ES6的静态模块结构，有利于完成死代码检测，模块变量类型的检查，编译器的优化。

#### 值拷贝与动态映射

CommonJS获取的是一份导出值的拷贝，不会影响原有模块中的变量的值；ES6中则是值的动态映射，并且这个映射是只读的。

```javascript
// foo.js 
const bar = require('./bar.js')  // 1
console.log('vlaue of bar:', bar) // 5
module.exports = 'This is foo.js' // 6
// bar.js
const foo = require('./foo.js')  // 2
console.log('vlaue of foo:', foo) // 3
module.exports = 'This is bar.js' // 4
// index.js
require('./foo.js')
// 输出结果
value of foo: {}
value of bar: This is bar.js
```

```javascript
// foo.js 
import bar from './bar.js'  
console.log('vlaue of bar:', bar) 
export default  'This is foo.js'
// bar.js
import foo from './foo.js' 
console.log('vlaue of foo:', foo) 
export default = 'This is bar.js' 
// index.js
import from './foo.js'
// 输出结果
value of foo: undefined
value of bar: This is bar.js
```

