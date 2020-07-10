# 生产环境配置

## 环境变量

sourcemap

cheap-source-map  eval-source-map 简版

hidden-sourece-map  不会在js中添加引用，配合sentry等监控平台使用

nosources-source-map u不显示文件结构

通过nginx设置将.map文件只对固定的ip开放





## mode配置

```
// webpack3.X 使用UglifyJsPlugin
// pagejson
{
  "scripts": {
    "build": "NODE_ENV=production webpack",
    "develop": "NODE_ENV=development webpack-dev-server"
  }
}
// 在 `webpack.config.js` 文件中可以通过 `process.env.NODE_ENV` 来获取命令传入的环境变量


// webpack4.X
module.exports = (env, argv) => ({
  // ... 其他配置
  optimization: {
    minimize: false,
    // 使用 argv 来获取 mode 参数的值
    minimizer: argv.mode === 'production' ? [
      // new UglifyJsPlugin({ /* 你自己的配置 */ }), 
      // 仅在我们要自定义压缩配置时才需要这么做
      //  minimize: true // 如果设置了mode:production ,则无需单独设置，mode 为 production 时 webpack4* 会默认使用压缩 JS 的 plugin
    ] : [],
  },
})
```

DefinePlugin 插件，添加环境变量即可影响到运行时的代码，可注入动态变量

```
module.exports = {
  // ...
  // webpack 的配置

  plugins: [
    new webpack.DefinePlugin({
      // webpack 3.x 的 process.env.NODE_ENV 是通过手动在命令行中指定 NODE_ENV=... 的方式来传递的
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
}
```

webpack 4.x 的 mode 已经提供了上述差异配置的大部分功能，mode 为 production 时默认使用 JS 代码压缩，而 mode 为 development 时默认启用 hot reload

### 拆分配置

webpack-merge

### 资源压缩

#### terser-webpack-plugin

```javascript
import TerserWebpackPlugin = require('terser-webpack-plugin')
module.exports = {
  // ...
  optimization: {
    // 覆盖默认设置
    minimizer:[
      new TerserPlugin({
        test: /\.js(\?.*)$/i,
        exclude: /\/excludes/,
        include: /\includes/ ,
        chache: false, // 是否开启缓存
        parallel: false, // 允许多进程，可传入数字
        sourceMap : false, // 是否生成sourceMap
        terserOptions:{  // 压缩配置 是否对变量重命名 是否兼容ie8
          
        }
      })
    ]
  }
}
```

### 压缩CSS

需要用extract-text-webpack-plugin 或者 min-css-extract-plugin先提取css，再使用 optimize-css-assets-webpack-plugin

```javascript
optimization: {
  minimizer: [
   new OptimizeCssAssetsPlugin({
     // 生效范围 只压缩匹配到的css
     assetsNameRegExp: /\.optimize\.css$/g,
     // 压缩处理器 默认为cssnano
     cssProcessor: require('cssnao'),
     // 压缩处理器的配置
     cssProcessorOptions: {discardComments: { removeAll: true }},
     // 是否展示 log
     canPrint: true
   })
  ]
}
```

