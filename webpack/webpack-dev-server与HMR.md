## webpack-dev-server

#### 功能

- 令Webpack进行模块打包，并处理打包结果的资源请求
- 作为普通的web server处理资源文件的请求

```
npm install webpack-dev-server --save-dev // -D
```

配置

```
devServer: {
  publicPath: '/dist'
}
```



webpack-dev-server只是将**打包结果放在内存中**，并不会写入实际的bundle.js，接收到请求时，如果该地址是资源服务地址（publicPath），就会将内存中的打包结果返回给浏览器，如果不属于，则直接读取硬盘中的源文件并返回。（验证方法，删除dist目录功能依然正常）

live-reloading 发现工程源文件进行了更新操作就会自动刷新浏览器

`before` 在 webpack-dev-server 静态资源中间件处理之前，可以用于拦截部分请求返回特定内容，或者实现简单的数据 mock。

`after` 在 webpack-dev-server 静态资源中间件处理之后，比较少用到，可以用于打印日志或者做一些额外处理。

常用配置

```

```



## webpack-dev-middleware

webpack-dev-middleware就是在 Express 中提供 webpack-dev-server 静态服务能力的一个中间件，我们可以很轻松地将其集成到现有的 Express 代码中去，就像添加一个 Express 中间件那么简单

webpack-dev-middleware 的好处是可以在既有的 Express 代码基础上快速添加 webpack-dev-server 的功能，同时利用 Express 来根据需要添加更多的功能，如 mock 服务、代理 API 请求等。

## 简单的 mock 服务

 webpack-dev-server 的 `before` 或 `proxy` 配置，又或者是 webpack-dev-middleware 结合 Express，都可以帮助我们来实现简单的 mock 服务。

```javascript
module.export = function mock(app) {
  app.get('/some/path', (req, res) => {
    res.json({ data: '' })
  })

  // ... 其他的请求 mock
  // 如果 mock 代码过多，可以将其拆分成多个代码文件，然后 require 进来
}
```

应用到配置中的 `before` 字段

```javascript
const mock = require('./mock')

// ...
before(app) {
  mock(app) // 调用 mock 函数
}
```

单独实现或者使用一个 mock 服务时，你可以通过 proxy 来配置部分路径代理到对应的 mock 服务上去

## HMR热替换

### 开启HMR

```
module.exports = {
  devServer: {
    hot: true // 也可在命令行中启动 -hot -open自动打开网页
  },
  plugins: [
    new webpack.NamedModulesPlugin(), // 启动 HMR 时可以显示模块的相对路径
    new webpack.HotModuleReplacementPlugin(), 
  ]
}
```

### HMR原理

webpack 内部运行时，会维护一份用于管理构建代码时各个模块之间交互的表数据，webpack 官方称之为 **Manifest**，其中包括入口代码文件和构建出来的 bundle 文件的对应关系。可以使用 [WebpackManifestPlugin](https://github.com/danethurber/webpack-manifest-plugin) 插件来输出这样的一份数据。

当有更新时，webpack-dev-server 发送更新信号给 HMR 运行时，然后 HMR 再请求所需要的更新数据，请求的更新数据没有问题的话就应用更新。