# webpack的使用

## 模块化

传统的script标签引入js，需要手动维护加载顺序，隐式依赖不容易被发现，每个script的src都意味着一次http请求，顶层作用域即全局作用域，不加限制容易导致全局变量污染。

模块化，通过倒入导入清晰展现依赖关系，从而借助工具来进行打包合并资源文件，多个模块之间的作用域是隔离的。

ES6模块标准以得到大部分浏览器支持，但是无法使用code splitting 和 tree shaing，大多数的npm模块还是CommonJS的格式，浏览器不支持。

打包工具，Webpack，Parcel，Rollup

## 安装和使用

webpack是一个模块打包工具，可以识别出引入模块的语法

- 默认支持多种模块标准，包括AMD，CommonJS，以及ES6模块
- 完备的代码分割（code splitting）解决方案
- 可以处理各种类型的资源

```javascript
// 局部安装 
npm install webpack webpack-cli -D //webpack-cli 可以帮助我们在命令⾏行行⾥里里使⽤用npx ,webpack等相关指令
npx webpack -v // npx帮助我们在项⽬目中的node_modules⾥里里查找webpack

npx webpack // 使用默认配置文件
npx webpack --config webpackconfig.js //指定webpack使⽤用webpackconfig.js⽂文件来作为 配置⽂文件并执⾏行行
```

*4.X版本之后需要单独安装webpack-cli*

scripts是npm提供的脚本命令功能

```javascript
"scripts": {
    "build": "webpack --mode production" // 有npm run 时无需npx
}
```

全局安装可以直接运行 `webpack --mode production`，非全局安装需要使用`npm run build`，通过npm寻找命令执行

默认的配置文件为 webpack.config.js，webpack运行时会读取目录下的该文件

不同项目使用的webpack版本可能不一致，所以不推荐全局安装



## Webpack的核心概念

### 入口

配置入口文件，即webpack构建的入口，会从它开始依赖分析进行打包。打包结果默认放在当前目录下的dist目录，打包的模块名是main.js

```javascript
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

### output

打包后的文件位置

```javascript
output: {
  pubilcPath: '', // 用来指定资源的请求位置，
  // 可以使用相对HTML的路径， '' ,'./js', './static', '../assets'
  // 相对'/'的路径（相对当前页面host name） '/' '/js' '/dist'
  // 以及CDN路径
  filename: 'main.js', // 这里支持路径，不存在将创建
  // filename: '[name]_[hash].[ext]' // 
  // 绝对路径
  path: path.resolve(_dirname, 'dist') // path指资源的输出位置，必须是绝对路径
  // __dirname Node.js内置变量，值为当前文件所在的绝对路径
  // path.resolve拼装函数  / ./ ../
}
```

- [hash] Webpack此次打包所有资源生成的hash 

- [chunkhash] 当前chunk内容的hash
- [id] 当前chunk的id
- [query] filename配置项中的query

### loader

loader是webpack中处理多种文件格式的机制，负责把某种文件格式的内容转换成webpack可以支持打包的模块。

loader可以是链式的，接收的可能是工程源文件的字符串，也可能是上个loader转化后的结果字符串、source map，以及AST对象，输出类似。

```javascript
modules.export = {
  modules: {
    rules:[ // 模块的处理规则
        {
        test: /\.xxx$/,  // 匹配文件，通常是匹配文件后缀  接收正则表达式，或元素为正则表达式的数组
        enforce:'pre', // pre所有loader之前，比如eslint-loader； post所有loader之后，入babel-loader；不配置该项为normal；inline已不推荐 
        // noParse: /jquery|lodash/, // 正则表达式 配置哪些模块文件的内容不需要进行解析，文件中不能使用 `import`、`require`、`define` 等导入机制,适合一些**不需要解析依赖（即无依赖）** 的第三方大型类库等，
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
        // issuer: { // 对于引用模块的文件生效
        //  test:/\.js$/,
         // include:'src/pages' // 只有该目录下的，同上类型文件，引入的符合test的模块，才会进行loader处理
        //  exclude:/node_modules/ // 排除该目录下，同上类型的文件，其他文件引入的符合test的模块
        // }
      }
    ]
  }
}
```

所有的 loader 按照**前置 -> 行内 -> 普通 -> 后置**的顺序执行

### loader规则

*   `{ test: ... }` 匹配特定条件
*   `{ include: ... }` 匹配特定路径
*   `{ exclude: ... }` 排除特定路径
*   `{ and: [...] }`必须匹配数组中所有条件
*   `{ or: [...] }` 匹配数组中任意一个条件
*   `{ not: [...] }` 排除匹配数组中所有条件

上述的所谓条件的值可以是：

*   字符串：必须以提供的字符串开始，所以是字符串的话，这里我们需要提供绝对路径
*   正则表达式：调用正则的 `test` 方法来判断匹配
*   函数：(path) => boolean，返回 `true` 表示匹配
*   数组：至少包含一个条件的数组
*   对象：匹配所有属性值的条件

### module type

webpack 4.x 版本强化了 module type，即模块类型的概念，不同的模块类型类似于配置了不同的 loader，webpack 会有针对性地进行处理，现阶段实现了以下 5 种模块类型。

*   `javascript/auto`：即 webpack 3 默认的类型，支持现有的各种 JS 代码模块类型 —— CommonJS、AMD、ESM
*   `javascript/esm`：ECMAScript modules，其他模块系统，例如 CommonJS 或者 AMD 等不支持，是 `.mjs` 文件的默认类型
*   `javascript/dynamic`：CommonJS 和 AMD，排除 ESM
*   `javascript/json`：JSON 格式数据，`require` 或者 `import` 都可以引入，是 `.json` 文件的默认类型
*   `webassembly/experimental`：WebAssembly modules，当前还处于试验阶段，是 `.wasm` 文件的默认类型



```
{
  test: /\.js/,
  include: [
    path.resolve(__dirname, 'src'),
  ],
  type: 'javascript/esm', // 这里指定模块类型
},
```



### 常用loader

#### babel-loader 将ES6转化为ES5

babel-loader需要设置exclude排除node_modules

babel-loader本身添加了cacheDirectory配置项，缓存机制在重复打包未改变过的模块时防止二次编译

```javascript
// 在dev模式中，默认开启，关闭的话 可以在配置⽂文件⾥里里

//babel-loader是webpack 与 babel的通信桥梁梁，不不会做把es6转成es5的⼯工作，这部分⼯工作需要⽤用 到@babel/preset-env来做
//@babel/preset-env⾥里里包含了了es6转es5的转换规则

```

```javascript
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

#### @babel/polyfill

把es的新特性都引入，例如Promise等，默认会把所有特性都注入到**全局变量**

```
// 按需引入的设置，可以配置到.babelrc里
options: {
  presets: [
    ["@babel/preset-env",
     {
      targets: {
       edge:"17",
       firefix:"60",
       chrome:"66",
       safari:"11.1",
      },
      useBuiltIns: 'usage' // 按需引入,useBuiltIns 选项是 babel 7 的新功能,告诉 babel 如何配置                      // @babel/polyfill  entry 需要在entry里引入import "@babel/polyfill"，usage 不需要import
     }
     // , "@babel/preset-react"  // 打包react选安装配置的
    ]
  ]
}
```

#### @babel/plugin-tranform-runtime

闭包方式引入

```
npm i @babel/plugin-tranform-runtime -S
npm i @babel/runntime -S
```

```
// 注释preset-env 写入配置文件.babelrc
{
  plugins: [
   [
     "@babel/plugin-transform-runtime",
     {
       "absoluteRuntime": false,        
       "corejs": 2, 
        "helpers": true,        
        "regenerator": true,        
        "useESModules": false 
     }
   ]
  ]
}
```



#### ts-loader

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

#### html-loader 

用于将HTML文件转化为字符串并进行格式化

##### handlebars-loader 处理handlebars模板

handlebars文件加载后得到一个函数，函数接收变量对象作为参数，可返回最终的字符串

#### file-loader 处理静态资源模块

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
      	options: { // 额外的配置，资源名称输出目录等
      	  name: '[name]_[hash].[ext]', // [name]原来的资源文件名，文件hash，[ext]扩展名
      	  publicPath:'imgages/' // 输出到的位置 file-loader中的publicPath会覆盖Webpack中的publicPath
      	}
      }
    }
  ]
}
```

#### url-loader 处理静态资源模块

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

#### 样式处理loader

css-loader 分析各css模块之间的关系，合成一个css

style-loader 会把css-loader生成的内容，以style挂载到页面的header部分

sass-loader 把sass语法转换成css，依赖node-sass模块 `npm install sass-loader node-sass -D`

less-loader

postcss-loader post-css需要有单独的配置文件 postcss-loader

```
{
  test: /^\.scss$/,
  use: ['style-loader', 
  {loader:'css-loader', 
  options: {
  	 minimize: true, // 使用 css 的压缩功能,css-loader 是使用cssnano来压缩代码的，`minimize` 字段也可以配置为一个对象，来将相关配置传递给 cssnano
  }}, 'sass-loader']
}
```

#### image-webpack-loader压缩图片

```javascript
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /.*\.(gif|png|jpe?g|svg|webp)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {}
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: { // 压缩 jpeg 的配置
                progressive: true,
                quality: 65
              },
              optipng: { // 使用 imagemin-optipng 压缩 png，enable: false 为关闭
                enabled: false,
              },
              pngquant: { // 使用 imagemin-pngquant 压缩 png
                quality: '65-90',
                speed: 4
              },
              gifsicle: { // 压缩 gif 的配置
                interlaced: false,
              },
              webp: { // 开启 webp，会把 jpg 和 png 图片压缩为 webp 格式
                quality: 75
              }
          }
        ]
      }
    ]
  }
}
```

image-webpack-loader 的压缩是使用 [imagemin](https://github.com/imagemin) 提供的一系列图片压缩类库来处理的

#### Vue模板解析

vue-loader   还依赖 vue-tempalte-compiler css-loader  , CSS样式的预处理器

```
rules: [
  {
  test: /^\.vue$/
  use:'vue-loader'
  }
]
```

#### CSS Modules

每个css文件都有单独的作用域，对css进行依赖关系，可以通过相对路径引入css文件，可以通过composes轻松复用其他CSS模块

只需要开启css-loader配置项中的modules : true

```
options:{
  modules:true,
  localIdentName:'[name]_[local]_[hash:base64:5]' // 模块名 选择符 5位哈希
}
```

使用CSSmodules时css文件会导出一个对象，我们需要把对象的属性添加到html标签上

```javascript
// style.css
.title {
  color:#f938ab;
}
// app.js
import styles from './style.css'
document.write(`<h1 calss={$styles.title}>优点复杂</h1>`)
```

### 常用plugin

#### html-webpack-plugin

会自动把打包处理的资源名放入到生成的index.html中，支持传入html模板

```javascript
module.exports = {
  // ...
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', // 配置输出文件名和路径
      template: 'public/index.html', // 配置文件模板
      minify: { // 压缩 HTML 的配置,minify下的配置项直接透传给 html-minifier
        minifyCSS: true, // 压缩 HTML 中出现的 CSS 代码
        minifyJS: true // 压缩 HTML 中出现的 JS 代码
      }
    }),
  ],
}

```

*webpack 4.x 版本运行时，mode 为 production 即会启动压缩 JS 代码的插件*

#### extract-text-webpack-plugin 样式文件处理webpack4前

样式的提取是以资源入口开始的整个chunk为单位的，chunk是一组具有依赖关系的模块的封装，多个构建入口，extract-text-webpack-plugin 会为每一个入口创建单独分离的文件。

```javascript
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.css$/,
        // 因为这个插件需要干涉模块转换的内容，所以需要使用它对应的 loader
        use: ExtractTextPlugin.extract({ 
          fallback: 'style-loader',
          use: 'css-loader',
        }), 
      },
    ],
  },
  plugins: [
    // 引入插件，配置文件名，这里同样可以使用 [hash]
    new ExtractTextPlugin('index.css')
    //  new ExtractTextPlugin('[name].css')
  ],
}
```

#### mini-css-extract-plugin 

支持按需加载，

```javascript
module: {
  rules: [
    {
      test: /\.css$/,
      use: [
        { // 插件需要干涉模块转换的内容，所以需要使用它对应的 loader
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath:'../'
          }
        },
        'css-loader'
      ]
    }
  ]
}
plugins:[
  new MiniCssExtractPlugin({
    filename: '[name].css', // chunkname 对英entry里的key  同步加载的css资源名
    chunkFilename: '[id].css' // 指定异步加载的css资源名
  })
]
```

####  CSS Sprites 精灵图

[webpack-spritesmith](https://github.com/mixtur/webpack-spritesmith) 或者 [sprite-webpack-plugin](https://github.com/kezoo/sprite-webpack-plugin)

```javascript
module: {
  loaders: [
    // ... 这里需要有处理图片的 loader，如 file-loader
  ]
},
resolve: {
  modules: [
    'node_modules', 
    'spritesmith-generated', // webpack-spritesmith 生成所需文件的目录
  ],
},
plugins: [
  new SpritesmithPlugin({
    src: {
      cwd: path.resolve(__dirname, 'src/ico'), // 多个图片所在的目录
      glob: '*.png' // 匹配图片的路径
    },
    target: {
      // 生成最终图片的路径
      image: path.resolve(__dirname, 'src/spritesmith-generated/sprite.png'), 
      // 生成所需 SASS/LESS/Stylus mixins 代码，我们使用 Stylus 预处理器做例子
      css: path.resolve(__dirname, 'src/spritesmith-generated/sprite.styl'), 
    },
    apiOptions: {
      cssImageRef: "~sprite.png"
    }
  })
]
```

CSS文件里引入

```
@import '~sprite.styl'

.close-button
    sprite($close)
.open-button
    sprite($open)
```

webpack4.X中的精灵图需要postcss和 [postcss-sprites](https://github.com/2createStudio/postcss-sprites) 才能实现

#### definePlugin

DefinePlugin 是 webpack 内置的插件，可以使用 `webpack.DefinePlugin` 直接获取。

*   如果配置的值是字符串，那么整个字符串会被当成代码片段来执行，其结果作为最终变量的值，如上面的 `"1+1"`，最后的结果是 `2`
*   如果配置的值不是字符串，也不是一个对象字面量，那么该值会被转为一个字符串，如 `true`，最后的结果是 `'true'`
*   如果配置的是一个对象字面量，那么该对象的所有 key 会以同样的方式去定义

需要使用JSON.stringfy(), `JSON.stringify(true)` 的结果是 `'true'`

> 建议使用 process.env.NODE\_ENV: ... 的方式来定义 process.env.NODE\_ENV，而不是使用 process: { env: { NODE\_ENV: ... } } 的方式，因为这样会覆盖掉 process 这个对象，可能会对其他代码造成影响。

#### ProvidePlugin

ProvidePlugin 也是一个 webpack 内置的插件，我们可以直接使用 `webpack.ProvidePlugin` 来获取。

该组件用于引用某些模块作为应用运行时的变量，从而不必每次都用 `require` 或者 `import`，其用法相对简单：

```
new webpack.ProvidePlugin({
  identifier: 'module',
  // ...
})

// 或者
new webpack.ProvidePlugin({
  identifier: ['module', 'property'], // 即引用 module 下的 property，类似 import { property } from 'module'
  // ...
})

```

在你的代码中，当 `identifier` 被当作未赋值的变量时，module 就会被自动加载了，而 `identifier` 这个变量即 module 对外暴露的内容。

注意，如果是 ES 的 `default export`，那么你需要指定模块的 `default` 属性：`identifier: ['module', 'default']`

#### IgnorePlugin 

IgnorePlugin 和 ProvidePlugin 一样，也是一个 webpack 内置的插件，可以直接使用 `webpack.IgnorePlugin` 来获取。

这个插件用于忽略某些特定的模块，让 webpack 不把这些指定的模块打包进去。例如我们使用 [moment.js](http://momentjs.com/)，直接引用后，里边有大量的 i18n 的代码，导致最后打包出来的文件比较大，而实际场景并不需要这些 i18n 的代码，这时我们可以使用 IgnorePlugin 来忽略掉这些代码文件，配置如下：

```
module.exports = {
  // ...
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ]
}

```

IgnorePlugin 配置的参数有两个，第一个是匹配引入模块路径的正则表达式，第二个是匹配模块的对应上下文，即所在目录名。

#### clean-webpack-plugin

自动清除上次打包目录生成的文件

#### copy-webpack-plugin

```
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  // ...
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/file.txt', to: 'build/file.txt', }, // 顾名思义，from 配置来源，to 配置目标路径
      { from: 'src/*.ico', to: 'build/*.ico' }, // 配置项可以使用 glob
      // 可以配置很多项复制规则
    ]),
  ],
}
```



#### 样式自动添加前缀

postcss-loader结合autoprefixer 自动添加样式前缀，配置文件postcss.config.js 

```
npm i postcss-loader -D
```

```javascript
// npm i autoprefixer -D
// postcss.config.js
const autoprefixer = require('autoprefixer')
module.exports = {
  plugins: [
    autoprefixer({
      grid:true // 为grid特性添加ie前缀
      browers: {
        '> 1%',
        'last 3 versions',
        'android 4.4',
        'ie 8'
      }
    })
  ]
}
```

#### stylelint 代码格式检查

#### CSSNext

postcss-cssnext 

```
postcssCssnext({
  // 指定所支持的浏览器
  browers:[
    '> 1%',
    'last 2 versions'
  ]
})
```

### sourceMap

源代码于打包后的代码的映射关系

在dev模式中，默认开启，关闭的话 可以在配置件⾥

```
devtool:'none' // eval速度最快 cheap 较快，不管列的报错 module 第三方模块
// 开发坏境推荐
devtool:'cheap-module-eval-source-map'
// 线上坏境推荐
devtool:'cheap-module-source-map'
```

## 构建速度优化

### 避免不必要的开销

### 减少 `resolve` 解析

webpack的resolve设置

```
resolve: {
  modules: [
   path.resolve(__dirname, 'node_modules') // 使用绝对路径指定node_modules，不做果多查询
  ],
  extensions:['js']， // 排除不必要的的后缀自动补全，减少文件路径查询工作,其外的文件可以在编码时指定后缀
  mainFiles: ['index'] // 避免新增默认文件
}
```

本地的代码模块，尽可能编写完整的路径，避免使用目录名，webpack不用去多次查询来确定使用哪个文件

### 把 loader 应用的文件范围缩小

把 loader 应用的文件范围缩小，限定只在src目录下的文件

### 减少Plugins的消耗

### 图片压缩

构建时压缩 用image-webpack-loader

图片提前先压缩，使用imagemin来压缩图片，只用pre-commit使其在git commit 的适合触发，并且将要提交的文件替换为压缩后的文件。

### 使用DLLPLugin分离代码

与splitChunks的区别时，DLLPlugin构建出来的内容无需每次构建的适合都再次构建；公共部分变更时，需要再次执行配置文件构建；分离出来的代码需要手动添加到html或者使用add-assets-webpack-plugin



