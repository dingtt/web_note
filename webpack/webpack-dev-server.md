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



webpack-dev-server只是将打包结果放在内存中，并不会写入实际的bundle.js，接收到请求时，如果该地址是资源服务地址（publicPath），就会将内存中的打包结果返回给浏览器，如果不属于，则直接读取硬盘中的源文件并返回。（验证方法，删除dist目录功能依然正常）

live-reloading 发现工程源文件进行了更新操作就会自动刷新浏览器