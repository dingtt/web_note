# Webpack打包原理解析

## bundler的基础流程

bundler从一个构建入口出发，解析模块，分析出模块的依赖关系。然后将依赖的代码模块组合在一起。

递归解析，直至没有更多的依赖模块，最终形成一颗模块依赖树。

分析出依赖关系后，由于依赖代码东得执行有先后顺序，以及会引用模块内部不同的内容，不能简单的拼接在一起。

将每一个模块包装成一个JS Function，提供一个引用依赖模块的方法，_webpack_require_，来替换require

```
// 分别将各个依赖模块的代码用 modules 的方式组织起来打包成一个文件
// entry.js
modules['./entry.js'] = function() {
  const { bar } = __webpack__require__('./bar.js')
}

// bar.js
modules['./bar.js'] = function() {
  const foo = __webpack__require__('./foo.js')
};

// foo.js
modules['./foo.js'] = function() {
  // ...
}

// 已经执行的代码模块结果会保存在这里
const installedModules = {}

function __webpack__require__(id) {
  // ... 
  // 如果 installedModules 中有就直接获取
  // 没有的话从 modules 中获取 function 然后执行，将结果缓存在 installedModules 中然后返回结果
}

```

```
(function (modules) {
  var installedModules = {};

  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    var module = (installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    });
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    module.l = true;
    return module.exports;
  }
  return __webpack_require__((__webpack_require__.s = "./index.js"));
})({
  "./index.js": function (module, exports) {
    eval('// import a from "./a";\n\nconsole.log("hello word");\n\n\n//# sourceURL=webpack:///./index.js?');
  }
});
```

webpack的结构

webpack 需要强大的扩展性，尤其是插件实现这一块，webpack 利用了 [tapable](https://github.com/webpack/tapable) 这个库。

webpack 基于 tapable 定义了主要构建流程后，使用 tapable 这个库添加了各种各样的钩子方法来将 webpack 扩展至功能十分丰富，同时对外提供了相对强大的扩展性，即 plugin 的机制。

*   Compiler，webpack 的运行入口，实例化时定义 webpack 构建主要流程，同时创建构建时使用的核心对象 compilation
*   Compilation，由 Compiler 实例化，存储构建过程中各流程使用到的数据，用于控制这些数据的变化
*   Chunk，即用于表示 chunk 的类，对于构建时需要的 chunk 对象由 Compilation 创建后保存管理
*   Module，用于表示代码模块的类，衍生出很多子类用于处理不同的情况，关于代码模块的所有信息都会存在 Module 实例中，例如 `dependencies` 记录代码模块的依赖等
*   Parser，其中相对复杂的一个部分，基于 [acorn](https://github.com/acornjs/acorn) 来分析 AST 语法树，解析出代码模块的依赖
*   Dependency，解析时用于保存代码模块对应的依赖使用的对象
*   Template，生成最终代码要使用到的代码模板，像上述提到的胶水代码就是用对应的 Template 来生成

> **compiler** 对象代表了完整的 webpack 环境配置。这个对象在启动 webpack 时被一次性建立，并配置好所有可操作的设置，包括 options，loader 和 plugin。当在 webpack 环境中应用一个插件时，插件将收到此 compiler 对象的引用。可以使用它来访问 webpack 的主环境。
>
> **compilation** 对象代表了一次资源版本构建。当运行 webpack 开发环境中间件时，每当检测到一个文件变化，就会创建一个新的 compilation，从而生成一组新的编译资源。一个 compilation 对象表现了当前的模块资源、编译生成资源、变化的文件、以及被跟踪依赖的状态信息。compilation 对象也提供了很多关键步骤的回调，以供插件做自定义处理时选择使用。



```
const parser = require('@babel/parser'); 
const traverse = require('@babel/traverse').default; 
const babel = require('@babel/core');

```

