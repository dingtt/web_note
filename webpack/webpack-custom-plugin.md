# 实现自己的plugin

设计模式  事件驱动  发布订阅

plugin是一个类，在配置的plugins中使用时，传入相关配置来创建一个实例。plugin

里面包含了一个最重要的方法apply函数，该方法在webpack compiler安装插件时会被调用一次，apply接收一个参数 compiler 对象实例的引用，可以在compiler对象实例上注册各种事件钩子函数，来影响webpack的所有构建流程。

```javascript
class SelfWebpackPlugin {
  constructor(options) {
      console.log(options)
  }
  apply(compiler) {
	// hooks.emit 定义在某个时刻，异步写法
      compiler.hooks.emit.tapAsync(
          'SelfWebpackPlugin',
          (compilation, cb) => {
              
              compilation.assets['file.txt'] = {
                  source: function(){
                      return 'hei'
                  },
                  size: function(){
                      return 20
                  }
              }
              cb()
          }
      )
      // 同步的写法 处理markdown 文件
      // 在compiler的emit hook 中注册一个方法，当webpack执行到该阶段时会调用这个方法
      compiler.hooks.compile.tap('SelfWebpackPlugin', compilation => {
          // 处理逻辑
          // 给生成的 markdown文件创建一个简单标题
          var filelist = 'In this build:\n\n'
          // 遍历编译后的资源，每一个文件都添加一行
          for(avr filename in compilation.assets) {
              filelist += ('- ' + filename + '\n')
          }
          // 将列表作为一个新的文件资源插入到webpack 构建结构中
          comilation.assets['filename.md'] = {
              sourece:function() {
                  return filenameList
              },
              size: function() {
                  return filelist.length
              }
          }
      })
  }
}

module.exports = SelfWebpackPlugin
```

 使用

```javascript
const SelfWebpackPlugin = require('./plugins/self-weback-plugin')
plugins:[
  new SelfWebpackPlugin(options)
]
```

参考：compiler-hooks 

https://webpack.js.org/api/compiler-hooks

## 开发和调试plugin

```javascript
// 假设我们上述那个例子的代码是 ./plugins/FileListPlugin 这个文件
const FileListPlugin = require('./plugins/FileListPlugin.js')

module.exports = {
  // ... 其他配置
  plugins: [
    new FileListPlugin(), // 实例化这个插件，有的时候需要传入对应的配置
  ],
}
```

node调试工具

```javascript
"debug": "node --inspect --inspect-brk node_modules/webpack/bin/webpack.js"
```

待补充 webpack钩子函数