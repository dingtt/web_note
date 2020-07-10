# webpack代码分片

## 通过入口拆分代码

webpack中每个入口都将生成一份对应的资源文件

```
// webpack.config.js
entry: {
  app: './main.js',
  lib: ['liba', 'libb']
}
```

适合将对象挂载到window上的库

## CommonsChunkPlugin

webpack3.X适用，主要用于多入口之间的公共模块，也可用于提取单页面的模块

```
new webpack.optimize.CommonChunkPlugin({
  name: 'common', // 用于指定公共chunk的名字
  filename: 'common.js', // 提取后的资源名字
  chunks:['a', 'b'],  // 提取范围，对应entry里的chunk
  minChunks:3, // 数字 被3以上入口引用才提取，不影响entry中单独配置的提取数组  还可以设置Infinity(不自动抽离公共模块) 和 函数,
})
// 需要在页面上 在其他js之前引入common.js
```

```
// 提取单页面 
entry: {
  app: './main.js',
  common: ['react'] // 提取第三方类库及业务中不常更新的模块
}
// 插件配置同上
```

当minChunks为函数时，每个模块都会经该函数处理，传入当前依赖模块的信息module，以及被作为公共模块的数量count，可以在函数中针对每一个模块做更精细化的控制，返回值为true时进行提取。

```
minChunks: function(module, count) {
  // module.context 模块目录路径
  // module.sourece 模块目录的完整路径
  // count 模块被引用的次数
   return module.context &&   module.context.includes("node_modules"); 
  // node_modules 目录下的模块都作为公共部分，效果就如同 webpack 4.x 中的 test: path.resolve(__dirname, "node_modules")
}
```

提取webpack的运行时，防止影响公共模块的hash，mainfest的CommonsChunkPlugin必须出现在最后，在页面中引入必须在最前

```
new webpack.optimize.CommonChunkPlugin({
  name:'mainfest'
})
```

**不足**

- 提取特定入口的特定模块

- 只能提取一个vendor，想提取多个需要配置多次，


- mainfest会使浏览器多加载一个资源 


- 异步情况下会有问题

webpack为每个面模块指定的id是按数字递增的，当有新的模块产生时会导致其他的模块id变化，可能影响vendor的hash。

解决办法，使用 HashedModuleIds-Plugin 为每个模块按照其所在的路径生成hash id

```
new HashedModuleIds-Plugin()
// ... CommonsChunksPlugin
```




### webpack4.x适用optimization.SplitChunks 代码分割

可以设置提取的条件：提取的模式，提取模块的体积

基础配置

```
optimization:{    //帮我们自动做代码分割    
  splitChunks:{        
    chunks:"all",//默认是支持异步，all代表所有的chunks代码公共部分抽离出来成为一个单独的文件 
   } 
}
```

使用

```javascript
//webpack.config.js 
entry: {
  lodash: "./lodash.js",
  index: "./index.js"
  // vnedor: ['react', 'lodash', ...] // 指定公共使用的第三方类库
}
//指定打包后的资源位置  
output: {
  path: path.resolve(__dirname, "./build"),
  filename: "[name].js"
}
```



```javascript
// 全部配置
optimization: {
  splitChunks: {
    chunks: 'all', // 对所有chunks生效，如果不配置，默认只对异步资源生效 async（默认） initial all
    minSize: {
      javascript:30000, // 当模块大于30kb
      style:50000,
    },
    maxSize:0, // 对模块进行二次分割时使用，不推荐
    minChunks:1, // 打包成chunk最少有几个引用
    maxAsyncRequests:5, // 异步加载并行请求并行请求最大资源数
    maxInitialReauests:3, // 首次加载 入口文件并行最大资源数
    automaticNameDelimiter:'~', // 分隔符
    name:true, // 根据cacheGroups和作用范围自动生成chunk命名
    cacheGroups: {
      vendors: { // 用于提取所有 node_modules 中符合条件的模块
        test: /[\\/]node_modules[\\/]/,
        priority: -10 // 数字越大 优先级越高
      },
      default: { // default则作用于被多次引用的模块
        minChunks:2,
        priority: -20,
        resuseExistingChunk: true
      }
    }
  }
}
```

```
// 在entry里指定
entry: {
  vendor: ["react", "lodash", "angular", ...], // 指定公共使用的第三方类库
}
// ...
vendor: {
          chunks: "initial",
          test: "vendor",
          name: "vendor", // 使用 vendor 入口作为公共部分
          enforce: true,
        }
 
// 使用test来匹配react...
vendor: {
          test: /react|vue|lodash/, // 直接使用 test 来做路径匹配
          chunks: "initial",
          name: "vendor",
          enforce: true,
        }

// 所有在 node\_modules 下的模块，即作为依赖安装的，都作为公共部分
vendor: {
          chunks: "initial",
          test: path.resolve(__dirname, "node_modules") // 路径在 node_modules 目录下的都作为公共部分
          name: "vendor", // 使用 vendor 入口作为公共部分
          enforce: true,
        },
```



- 提取后的chunks可被共享，或者来自node_modules
- 提取后的js chunk大于30kB，CSS chunk大于50kB
- 按需加载时，并行请求的资源最大值小于等于5
- 首次加载时（不计算异步资源），并行请求的资源最大值小于等于3

## 异步加载

正常加载  `import  bar from './bar.js'`    异步加载 `import('./bar.js').then()`

配置异步加载的chunk名

```
output: {
  chunkFileName: '[name].js'
}
import(/* webpackChunkName: [name]*/ './bar.js').then(() => {})
```

如果不添加webpackName会以module id数字的形式命名，这个数字有webpack基于模块自动生成，可能会随着其他模块增减而产生变化，导致资源重新加载

### development/production

```javascript
// 命令行配置
const merge = require("webpack-merge") 
const commonConfig =  require("./webpack.common.js") 
const devConfig = {}
 
module.exports = merge(commonConfig,devConfig)
 
//package.js 
"scripts":{    
    "dev":"webpack-dev-server --config ./build/webpack.dev.js",    
    "build":"webpack --config ./build/webpack.prod.js" 
}
```

```javascript
//外部传入的全局变量 
module.exports = (env) => {
  if (env && env.production) {
    return merge(commonConfig, prodConfig)
  } else {
    return merge(commonConfig, devConfig)
  }
}

//外部传入变量 
scripts:" --env.production"

```



### bundle体积监控和分析

Vs code 插件 import Cost  可以实时显示引入模块的大小和压缩后的大小

### 打包分析webpack-bundle-analyzer

```
scripts: {
  "test:size": "bundlesize"
}
```

### 通过控制台看看代码利用率

### 把js里import的异步js文件抽离处理

```
 npm install --save-dev @babel/plugin-syntax-dynamic-import 
```

### tree-shaking

Tree-shaking起源于ES5模块打包工具rollup，依赖于ES2015模块系统中的静态树结构，可以移除js上下文中未引用的代码，有效减少代码文件的大小。

webpack3.x需要配置UglifyJsPlugin，会做Tree shaking

wbepack4.x需要指定mode为production

在项目中使用了 [Babel](http://babeljs.io/) 的话，要把 Babel 解析模块语法的功能关掉，在 `.babelrc` 配置中增加 `"modules": false` 这个配置：

```
{
  "presets": [["env", { "modules": false }]]
}
```

这样可以把 `import/export` 的这一部分模块语法交由 webpack 处理，否则没法使用 Tree shaking 的优化。

### sideEffects

webpack4.x中才有，

lodash工具库中函数，只用到其中的几个，webpack 的 sideEffects 可以帮助解决这个问题。

现在 lodash 的ES 版本 的 `package.json` 文件中已经有 `sideEffects: false` 这个声明了，当某个模块的 `package.json` 文件中有了这个声明之后，webpack 会认为这个模块没有任何副作用，只是单纯用来对外暴露模块使用，那么在打包的时候就会做一些额外的处理。

例如你这么使用 `lodash`：

```
import { forEach, includes } from 'lodash-es'

forEach([1, 2], (item) => {
  console.log(item)
})

console.log(includes([1, 2, 3], 1))

```

由于 lodash-es 这个模块的 `package.json` 文件有 `sideEffects: false` 的声明，所以 webpack 会将上述的代码转换为以下的代码去处理：

把没有引用的代码去掉

```
//webpack.config.js
optimization: {    
  usedExports: true  
}
//package.json "sideEffects":false  正常对所有模块进行tree shaking  或者 "sideEffects"['*.css','@babel/polyfill']

```

