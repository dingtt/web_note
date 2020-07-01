# 实现自己的plugin

设计模式  事件驱动  发布订阅

plugin是一个类，里面包含了一个apply函数，接收一个参数 compiler

```javascript
class SelfWebpackPlugin {
  constructor(options) {
  }
  apply(compiler) {

  }
}

module.exports = SelfWebpackPlugin
```

 参考：compiler-hooks 

https://webpack.js.org/api/compiler-hooks
