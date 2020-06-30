## 实现自己的loader

### loader原理

loader本身就是一个函数，对接收到的内容进行转换，然后返回转换后的结果

content是模块内容，可以是字符串，Buffer，map是sourcemap对象，meta是其他一些元数据

```javascript
module.exports = function(content, map, meta) {
  var callback = this.async() // 使用this.async获取callback函数 ？？？？？？？？
  var result = handler(content, map, meta)
  // loader函数本身只返回一个值，如果需要返回sourcemap或者meta对象，需要使用this.callback()
  this.callback(
   null, // error 自行赋值
   result.content, // 转换后的内容
   result.map, // 转换后的source-map
   result.meta // 转换后的AST
  )
}
```

### 创建一个目录  my-diy-loader 

npm init -y

```javascript
// my-diy-loader/index.js
// 还可以安装引入其他的依赖
var loaderUtils = require("loader-utils") // loader-utils是webpack官方提供的库
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

### 安装使用

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

```javascript
rules: [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader:path.resolve('./loader/index.js') // 使用本地的loader文件作为loader
  }
]

// 在resolveLoaderz中添加本地开发的loaders存方路径，适合同时需要开发多个loader
resolveLoaders: {
    modules: [
        'node_modules',
        path.resolver(__dirname, 'loaders')
    ]
}
```

另外也可以使用 `npm link` 的方式来开发和调试

### Pitching loader

使用pitch来跳过loader的处理，pitch方法是loader额外实现的一个函数

```
module.exports = function(content){
  return someSyncOperation(content, this.data.value) // 这里的data.value
}
module.exports = function(remainRequest, precedingRequest, data){
  data.value = 11
}
```

pitch的执行顺序是和loader相反的，如果有值返回，则跳过剩下的loader







