## webpack的使用

### 模块化

传统的script标签引入js，需要手动维护加载顺序，隐式依赖不容易被发现，每个script的src都意味着一次http请求，顶层作用域即全局作用域，不加限制容易导致全局变量污染。

模块化，通过倒入导入清晰展现依赖关系，从而借助工具来进行打包合并资源文件，多个模块之间的作用域是隔离的。

ES6模块标准以得到大部分浏览器支持，但是无法使用code splitting 和 tree shaing，大多数的npm模块还是CommonJS的格式，浏览器不支持。

打包工具，Webpack，Parcel，Rollup

### 安装和使用

webpack是一个模块打包工具，可以识别出引入模块的语法

- 默认支持多种模块标准，包括AMD，CommonJS，以及ES6模块
- 完备的代码分割（code splitting）解决方案
- 可以处理各种类型的资源

```
npm install webpack webpack-cli -D
```

4.X版本之后需要单独安装webpack-cli

scripts是npm提供的脚本命令功能

```
"scripts": {
    "build": "webpack --mode production"
}
```

全局安装可以直接运行 `webpack --mode production`，非全局安装需要使用`npm run build`，通过npm寻找命令执行

默认的配置文件为 webpack.config.js，webpack运行时会读取目录下的该文件

不同项目使用的webpack版本可能不一致，所以不推荐全局安装

### Webpack的核心概念

#### 入口

配置入口文件，即webpack构建的入口，会从它开始依赖分析进行打包。打包结果默认放在当前目录下的dist目录，打包的模块名是main.js

```
// 直接字符串
module.exports = {
  // ...
  context: '', // 路径前缀
  entry: './src/main.js' // 字符串类型入口
  // entry: ['./src.main.js', './src/.js']
  // ...
} 
// 数组类型入口 
module.exports = {
  entry: ['babel-polyfill', './src/index.js']
  // 传入一个数组的作用是将做个资源预先合并，在打包时Webpack会将数组的最好一个元素作为实际的入口路径，相当于index.js中 import('babel-polyfill')
  
}
//  对象类型入口 单入口
module.exports = {
  entry: {
    main: './src/main.js'
  }
}
// 对象类型入口 多入口
module.exports = {
  enrty: {
    admin: './src/admin.js', // chunk name 为admin  这里后面也可以用字符串或数组，单不能定义chunk name
    index: './src/index.js' // chunk  name 为index
  }
}
// 函数类型入口 使用函数返回上面任意一种配置  函数的好处在于可以动态计算，还支持返回promise对象来进行异步操作
module.exports = {
  entry: () =>({
    index:['babel-polyfill', './src/index.js'],
  })
}
```

#### output

打包后的文件位置

```
output: {
  pubilcPath: '', // 用来指定资源的请求位置，
  // 可以使用相对HTML的路径， '' ,'./js', './static', '../assets'
  // 相对'/'的路径（相对当前页面host name） '/' '/js' '/dist'
  // 以及CDN路径
  filename: 'main.js', // 这里支持路径，不存在将创建
  // filename: '[name]_[hash].[ext]' // 
  // 绝对路径
  path: path.resolve(_dirname, 'dist') // path指资源的输出位置
  // __dirname Node.js内置变量，值为当前文件所在的绝对路径
  // path.resolve拼装函数  / ./ ../
}
```

- [hash] Webpack此次打包所有资源生成的hash 

- [chunkhash] 当前chunk内容的hash
- [id] 当前chunk的id
- [query] filename配置项中的query

#### loader

loader是webpack中处理多种文件格式的机制，负责把某种文件格式的内容转换成webpack可以支持打包的模块。

loader可以是链式的，接收的可能是工程源文件的字符串，也可能是上个loader转化后的结果字符串、source map，以及AST对象，输出类似。

```
modules.export = {
  modules: {
    rules:[ // 模块的处理规则
      {
        test: /\.xxx$/,  // 匹配文件，通常是匹配文件后缀  接收正则表达式，或元素为正则表达式的数组
        enforce:'pre', // pre所有loader之前，比如eslint； post所有loader之后；不配置该项为normal；inline已不推荐
        include: [
          path.recolve(__dirname, 'src') // 指定哪些路径下的该类文件需要处理
        ],
        exclude:/node_modules/, // 排除目录，exclude和include同时存在，exclude优先级更高
        // /node_modules\/(?!(foo|bar)\/).*/ // 排除 排除中的目录的模块，从而设置对该模块生效
        // use: 'xxx-loader', 
        // use: ['xxx-loader', 'yyy-loader'] // loader有顺序，从后向前，从下向上
        use: {
          loader: 'xxx-load',
          options:{} // 可以传入配置项，还可以在loader名称后使用query的方式传入
        },
        // 还可以写成如下格式，resource 和issuer
        // resource: {
        //  test:'',
        //  include:''
        // },
        issuer: { // 对于引用模块的文件生效
          test:/\.js$/,
          include:'src/pages' // 只有该目录下的，同上类型文件，引入的符合test的模块，才会进行loader处理
          exclude:/node_modules/ // 排除该目录下，同上类型的文件，其他文件引入的符合test的模块
        }
      }
    ]
  }
}
```



#### 常用loader

##### babel-loader 将ES6转化为ES5

babel-loader需要设置exclude排除node_modules

babel-loader本身添加了cacheDirectory配置项，缓存机制在重复打包未改变过的模块时防止二次编译

```
rules: [
  test: /\.js*/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets: [[
        'env',{
          modules: false // 阻止@babel/preset-env会ES6 转化为CommonJS的形式（会导致webpack中的tree-shaking失效）
        }
      ]]
    }
  }
]
```

babel-loader 支持从 .babelrc文件读取babel配置

##### ts-loader

将Typescript 转换未javascript

```
rules: [
  {
    test: /\.ts$/,
    use: 'ts-loader'
  }
]
```

TS的配置在工程目录下的tscofig.json中

```
{
  "compilerOptions": {
  	"target": 'es5',
  	"sourceMap": true
  }
}
```

##### html-loader 

用于将HTML文件转化为字符串并进行格式化

##### handlebars-loader 处理handlebars模板

handlebars文件加载后得到一个函数，函数接收变量对象作为参数，可返回最终的字符串



##### file-loader 处理静态资源模块

**作用**

把打包入口中识别处理的资源模块，从源代码移动到输出目录，并且返回一个地址名称

**应用场景**

txt，svg，md，csv，excel，图片等资源

```javascript
module: {
  rules: [
    {
      test: /^\.(png|jpe?g|gif)$/,
      use: {
      	loader: 'file-loader',
      	options: { // 配置资源名称输出目录等
      	  name: '[name]_[hash].[ext]', // 原来的资源文件名，文件hash，扩展名
      	  publicPath:'imgages/' // 输出到的位置 file-loader中的publicPath会覆盖Webpack中的publicPath
      	}
      }
    }
  ]
}
```

##### url-loader 处理静态资源模块

url-loader可以处理file-loader所有的事情，不同的地方在于，url-loader可以把图片转换成base64格式。这种转换仅适合于较小的图片，可以配置转换阈值。

```javascript
module: {
  rules: [
    {
      test: /^\.(png|jpe?g|gif)$/,
      use: {
      	loader: 'url-loader',
        // include: [], // 最好加上include范围，提高执行效率
      	options: { // 配置资源名称输出目录等
      	  name: '[name]_[hash].[ext]', // 原来的资源文件名，文件hash，扩展名
      	  publicPath:'imgages/' // 输出到的位置
      	  limit: 10000 // limit默认值是10000，小于8kb的图片才会被编译
      	}
      }
    }
  ]
}
```

注：url-loader默认只会处理html和css中的图片，JS中可以通过import引入图片通过一个变量接收

##### 样式处理loader

css-loader分析各css模块之间的关系，合成一个css

style-loader会把css-loader生成的内容，以style挂载到页面的header部分

sass-loader把sass语法转换成css，依赖node-sass模块 `npm install sass-loader node-sass -D`

```
{
  test: /^\.scss$/,
  use: ['style-loader', 'css-loader', 'sass-loader']
}
```

##### 样式自动添加前缀

postcss-loader自动添加样式前缀，配置文件postcss.config.js 

##### Vue模板解析

vue-loader   还依赖 vue-tempalte-compiler css-loader  , CSS样式的预处理器

```
rules: [
  {
  test: /^\.vue$/
  use:'vue-loader'
  }
]
```


