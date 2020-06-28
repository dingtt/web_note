## 实现自己的loader

loader原理

loader本身就是一个函数，对接收到的内容进行转换，然后返回转换后的结果

```javascript
module.exports = function(content, map, meta) {
  var callback = this.async() // 使用this.async获取callback函数
  var result = handler(content, map, meta)
  callback(
   null, // error
   result.content, // 转换后的内容
   result.map, // 转换后的source-map
   result.meta // 转换后的AST
  )
}
```

创建一个目录  my-diy-loader 

npm init -y

```javascript
// my-diy-loader/index.js
// 还可以安装引入其他的依赖
var loaderUtils = require("loader-utiles")
var SourceNode = require('source-map').SourceNode // source-map便于开发调试在控制台中查看源码
var SourceMapConsumer = require("source-map").SourceMapConsumer // 如果不处理sourece-map无法生成正确的map文件
module.exports = function(content, soureceMap) {
  if(this.cacheable) { // 缓存
    this.cacheable()
  }
  var options = loaderUtils.getOptions(this) || {} // 获取options
  // source-map
  if(options.sourceMap && sourceMap) { // 获取sourceMap对象
    var currentRequest = loaderUtils.getRequest(this)
    var node = SourceNode.fromStringWithSourceMap( // 
      content,
      new SourceMapConsutomer(sourceMap)
    )
    node.prepend('添加内容') // 对内容进行改动
    var result = node.toStringWithSourceMap({file:currentRequest}) // 产生新的source-map
    var callback = this.async()
    callback(null, result.code, result.map.toJSON())
  }
  // 直接返回content
  // return content
}
```

安装使用

npm install <path-to-loader>/mt-diy-loader

```javascript
rules: [
 {
   test: /\.js$/,
   use:'my-diy-loader',
   options: {
     sourceMap: true
   }
 }
]
```

