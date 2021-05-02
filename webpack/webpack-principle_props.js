import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "webpack的使用",
        "link": "webpack/webpack-use.html"
    },
    'next': {
        "text": "生产环境配置",
        "link": "webpack/webpack-dev-config.html"
    },
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "webpack/webpack-principle.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "webpack/webpack-principle.html",
    'title': "Webpack打包原理解析",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Webpack打包原理解析</h1>\n<h2 id="bundler%E7%9A%84%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B">bundler的基础流程<a class="anchor" href="#bundler%E7%9A%84%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B">§</a></h2>\n<p>bundler从一个构建入口出发，解析模块，分析出模块的依赖关系。然后将依赖的代码模块组合在一起。</p>\n<p>递归解析，直至没有更多的依赖模块，最终形成一颗模块依赖树。</p>\n<p>分析出依赖关系后，由于依赖代码东得执行有先后顺序，以及会引用模块内部不同的内容，不能简单的拼接在一起。</p>\n<p>将每一个模块包装成一个JS Function，提供一个引用依赖模块的方法，<em>webpack_require</em>，来替换require</p>\n<pre class="language-autoit"><code class="language-autoit"><span class="token operator">/</span><span class="token operator">/</span> 分别将各个依赖模块的代码用 modules 的方式组织起来打包成一个文件\n<span class="token operator">/</span><span class="token operator">/</span> entry<span class="token punctuation">.</span>js\nmodules<span class="token punctuation">[</span><span class="token string">\'./entry.js\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n  <span class="token keyword">const</span> { bar } <span class="token operator">=</span> <span class="token function">__webpack__require__</span><span class="token punctuation">(</span><span class="token string">\'./bar.js\'</span><span class="token punctuation">)</span>\n}\n\n<span class="token operator">/</span><span class="token operator">/</span> bar<span class="token punctuation">.</span>js\nmodules<span class="token punctuation">[</span><span class="token string">\'./bar.js\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n  <span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token function">__webpack__require__</span><span class="token punctuation">(</span><span class="token string">\'./foo.js\'</span><span class="token punctuation">)</span>\n}<span class="token comment">;</span>\n\n<span class="token operator">/</span><span class="token operator">/</span> foo<span class="token punctuation">.</span>js\nmodules<span class="token punctuation">[</span><span class="token string">\'./foo.js\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n  <span class="token operator">/</span><span class="token operator">/</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n}\n\n<span class="token operator">/</span><span class="token operator">/</span> 已经执行的代码模块结果会保存在这里\n<span class="token keyword">const</span> installedModules <span class="token operator">=</span> {}\n\nfunction <span class="token function">__webpack__require__</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> {\n  <span class="token operator">/</span><span class="token operator">/</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> \n  <span class="token operator">/</span><span class="token operator">/</span> 如果 installedModules 中有就直接获取\n  <span class="token operator">/</span><span class="token operator">/</span> 没有的话从 modules 中获取 function 然后执行，将结果缓存在 installedModules 中然后返回结果\n}\n\n</code></pre>\n<pre class="language-autoit"><code class="language-autoit"><span class="token punctuation">(</span>function <span class="token punctuation">(</span>modules<span class="token punctuation">)</span> {\n  var installedModules <span class="token operator">=</span> {}<span class="token comment">;</span>\n\n  function <span class="token function">__webpack_require__</span><span class="token punctuation">(</span>moduleId<span class="token punctuation">)</span> {\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>installedModules<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span><span class="token punctuation">)</span> {\n      return installedModules<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span><span class="token punctuation">.</span>exports<span class="token comment">;</span>\n    }\n    var module <span class="token operator">=</span> <span class="token punctuation">(</span>installedModules<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span> <span class="token operator">=</span> {\n      i<span class="token punctuation">:</span> moduleId<span class="token punctuation">,</span>\n      l<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n      exports<span class="token punctuation">:</span> {}\n    }<span class="token punctuation">)</span><span class="token comment">;</span>\n    modules<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>module<span class="token punctuation">.</span>exports<span class="token punctuation">,</span> module<span class="token punctuation">,</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">,</span> __webpack_require__<span class="token punctuation">)</span><span class="token comment">;</span>\n    module<span class="token punctuation">.</span>l <span class="token operator">=</span> <span class="token boolean">true</span><span class="token comment">;</span>\n    return module<span class="token punctuation">.</span>exports<span class="token comment">;</span>\n  }\n  return <span class="token function">__webpack_require__</span><span class="token punctuation">(</span><span class="token punctuation">(</span>__webpack_require__<span class="token punctuation">.</span>s <span class="token operator">=</span> <span class="token string">"./index.js"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">;</span>\n}<span class="token punctuation">)</span><span class="token punctuation">(</span>{\n  <span class="token string">"./index.js"</span><span class="token punctuation">:</span> function <span class="token punctuation">(</span>module<span class="token punctuation">,</span> exports<span class="token punctuation">)</span> {\n    <span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">\'// import a from "./a";\n\nconsole.log("hello word");\n\n\n//# sourceURL=<a class="token url-link" href="webpack:///./index.js?\'">webpack:///./index.js?\'</a></span><span class="token punctuation">)</span><span class="token comment">;</span>\n  }\n}<span class="token punctuation">)</span><span class="token comment">;</span>\n</code></pre>\n<p>webpack的结构</p>\n<p>webpack 需要强大的扩展性，尤其是插件实现这一块，webpack 利用了 <a href="https://github.com/webpack/tapable">tapable</a> 这个库。</p>\n<p>webpack 基于 tapable 定义了主要构建流程后，使用 tapable 这个库添加了各种各样的钩子方法来将 webpack 扩展至功能十分丰富，同时对外提供了相对强大的扩展性，即 plugin 的机制。</p>\n<ul>\n<li>Compiler，webpack 的运行入口，实例化时定义 webpack 构建主要流程，同时创建构建时使用的核心对象 compilation</li>\n<li>Compilation，由 Compiler 实例化，存储构建过程中各流程使用到的数据，用于控制这些数据的变化</li>\n<li>Chunk，即用于表示 chunk 的类，对于构建时需要的 chunk 对象由 Compilation 创建后保存管理</li>\n<li>Module，用于表示代码模块的类，衍生出很多子类用于处理不同的情况，关于代码模块的所有信息都会存在 Module 实例中，例如 <code>dependencies</code> 记录代码模块的依赖等</li>\n<li>Parser，其中相对复杂的一个部分，基于 <a href="https://github.com/acornjs/acorn">acorn</a> 来分析 AST 语法树，解析出代码模块的依赖</li>\n<li>Dependency，解析时用于保存代码模块对应的依赖使用的对象</li>\n<li>Template，生成最终代码要使用到的代码模板，像上述提到的胶水代码就是用对应的 Template 来生成</li>\n</ul>\n<blockquote>\n<p><strong>compiler</strong> 对象代表了完整的 webpack 环境配置。这个对象在启动 webpack 时被一次性建立，并配置好所有可操作的设置，包括 options，loader 和 plugin。当在 webpack 环境中应用一个插件时，插件将收到此 compiler 对象的引用。可以使用它来访问 webpack 的主环境。</p>\n<p><strong>compilation</strong> 对象代表了一次资源版本构建。当运行 webpack 开发环境中间件时，每当检测到一个文件变化，就会创建一个新的 compilation，从而生成一组新的编译资源。一个 compilation 对象表现了当前的模块资源、编译生成资源、变化的文件、以及被跟踪依赖的状态信息。compilation 对象也提供了很多关键步骤的回调，以供插件做自定义处理时选择使用。</p>\n</blockquote>\n<pre class="language-autoit"><code class="language-autoit"><span class="token keyword">const</span> parser <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'@babel/parser\'</span><span class="token punctuation">)</span><span class="token comment">; </span>\n<span class="token keyword">const</span> traverse <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'@babel/traverse\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">default</span><span class="token comment">; </span>\n<span class="token keyword">const</span> babel <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'@babel/core\'</span><span class="token punctuation">)</span><span class="token comment">;</span>\n\n</code></pre>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Webpack\u6253\u5305\u539F\u7406\u89E3\u6790"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="bundler%E7%9A%84%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B">bundler的基础流程<a class="anchor" href="#bundler%E7%9A%84%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B">§</a></h2>\n<p>bundler从一个构建入口出发，解析模块，分析出模块的依赖关系。然后将依赖的代码模块组合在一起。</p>\n<p>递归解析，直至没有更多的依赖模块，最终形成一颗模块依赖树。</p>\n<p>分析出依赖关系后，由于依赖代码东得执行有先后顺序，以及会引用模块内部不同的内容，不能简单的拼接在一起。</p>\n<p>将每一个模块包装成一个JS Function，提供一个引用依赖模块的方法，<em>webpack_require</em>，来替换require</p>\n<pre class="language-autoit"><code class="language-autoit"><span class="token operator">/</span><span class="token operator">/</span> 分别将各个依赖模块的代码用 modules 的方式组织起来打包成一个文件\n<span class="token operator">/</span><span class="token operator">/</span> entry<span class="token punctuation">.</span>js\nmodules<span class="token punctuation">[</span><span class="token string">\'./entry.js\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n  <span class="token keyword">const</span> { bar } <span class="token operator">=</span> <span class="token function">__webpack__require__</span><span class="token punctuation">(</span><span class="token string">\'./bar.js\'</span><span class="token punctuation">)</span>\n}\n\n<span class="token operator">/</span><span class="token operator">/</span> bar<span class="token punctuation">.</span>js\nmodules<span class="token punctuation">[</span><span class="token string">\'./bar.js\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n  <span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token function">__webpack__require__</span><span class="token punctuation">(</span><span class="token string">\'./foo.js\'</span><span class="token punctuation">)</span>\n}<span class="token comment">;</span>\n\n<span class="token operator">/</span><span class="token operator">/</span> foo<span class="token punctuation">.</span>js\nmodules<span class="token punctuation">[</span><span class="token string">\'./foo.js\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n  <span class="token operator">/</span><span class="token operator">/</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n}\n\n<span class="token operator">/</span><span class="token operator">/</span> 已经执行的代码模块结果会保存在这里\n<span class="token keyword">const</span> installedModules <span class="token operator">=</span> {}\n\nfunction <span class="token function">__webpack__require__</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> {\n  <span class="token operator">/</span><span class="token operator">/</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> \n  <span class="token operator">/</span><span class="token operator">/</span> 如果 installedModules 中有就直接获取\n  <span class="token operator">/</span><span class="token operator">/</span> 没有的话从 modules 中获取 function 然后执行，将结果缓存在 installedModules 中然后返回结果\n}\n\n</code></pre>\n<pre class="language-autoit"><code class="language-autoit"><span class="token punctuation">(</span>function <span class="token punctuation">(</span>modules<span class="token punctuation">)</span> {\n  var installedModules <span class="token operator">=</span> {}<span class="token comment">;</span>\n\n  function <span class="token function">__webpack_require__</span><span class="token punctuation">(</span>moduleId<span class="token punctuation">)</span> {\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>installedModules<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span><span class="token punctuation">)</span> {\n      return installedModules<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span><span class="token punctuation">.</span>exports<span class="token comment">;</span>\n    }\n    var module <span class="token operator">=</span> <span class="token punctuation">(</span>installedModules<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span> <span class="token operator">=</span> {\n      i<span class="token punctuation">:</span> moduleId<span class="token punctuation">,</span>\n      l<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n      exports<span class="token punctuation">:</span> {}\n    }<span class="token punctuation">)</span><span class="token comment">;</span>\n    modules<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>module<span class="token punctuation">.</span>exports<span class="token punctuation">,</span> module<span class="token punctuation">,</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">,</span> __webpack_require__<span class="token punctuation">)</span><span class="token comment">;</span>\n    module<span class="token punctuation">.</span>l <span class="token operator">=</span> <span class="token boolean">true</span><span class="token comment">;</span>\n    return module<span class="token punctuation">.</span>exports<span class="token comment">;</span>\n  }\n  return <span class="token function">__webpack_require__</span><span class="token punctuation">(</span><span class="token punctuation">(</span>__webpack_require__<span class="token punctuation">.</span>s <span class="token operator">=</span> <span class="token string">"./index.js"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">;</span>\n}<span class="token punctuation">)</span><span class="token punctuation">(</span>{\n  <span class="token string">"./index.js"</span><span class="token punctuation">:</span> function <span class="token punctuation">(</span>module<span class="token punctuation">,</span> exports<span class="token punctuation">)</span> {\n    <span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">\'// import a from "./a";\n\nconsole.log("hello word");\n\n\n//# sourceURL=<a class="token url-link" href="webpack:///./index.js?\'">webpack:///./index.js?\'</a></span><span class="token punctuation">)</span><span class="token comment">;</span>\n  }\n}<span class="token punctuation">)</span><span class="token comment">;</span>\n</code></pre>\n<p>webpack的结构</p>\n<p>webpack 需要强大的扩展性，尤其是插件实现这一块，webpack 利用了 <a href="https://github.com/webpack/tapable">tapable</a> 这个库。</p>\n<p>webpack 基于 tapable 定义了主要构建流程后，使用 tapable 这个库添加了各种各样的钩子方法来将 webpack 扩展至功能十分丰富，同时对外提供了相对强大的扩展性，即 plugin 的机制。</p>\n<ul>\n<li>Compiler，webpack 的运行入口，实例化时定义 webpack 构建主要流程，同时创建构建时使用的核心对象 compilation</li>\n<li>Compilation，由 Compiler 实例化，存储构建过程中各流程使用到的数据，用于控制这些数据的变化</li>\n<li>Chunk，即用于表示 chunk 的类，对于构建时需要的 chunk 对象由 Compilation 创建后保存管理</li>\n<li>Module，用于表示代码模块的类，衍生出很多子类用于处理不同的情况，关于代码模块的所有信息都会存在 Module 实例中，例如 <code>dependencies</code> 记录代码模块的依赖等</li>\n<li>Parser，其中相对复杂的一个部分，基于 <a href="https://github.com/acornjs/acorn">acorn</a> 来分析 AST 语法树，解析出代码模块的依赖</li>\n<li>Dependency，解析时用于保存代码模块对应的依赖使用的对象</li>\n<li>Template，生成最终代码要使用到的代码模板，像上述提到的胶水代码就是用对应的 Template 来生成</li>\n</ul>\n<blockquote>\n<p><strong>compiler</strong> 对象代表了完整的 webpack 环境配置。这个对象在启动 webpack 时被一次性建立，并配置好所有可操作的设置，包括 options，loader 和 plugin。当在 webpack 环境中应用一个插件时，插件将收到此 compiler 对象的引用。可以使用它来访问 webpack 的主环境。</p>\n<p><strong>compilation</strong> 对象代表了一次资源版本构建。当运行 webpack 开发环境中间件时，每当检测到一个文件变化，就会创建一个新的 compilation，从而生成一组新的编译资源。一个 compilation 对象表现了当前的模块资源、编译生成资源、变化的文件、以及被跟踪依赖的状态信息。compilation 对象也提供了很多关键步骤的回调，以供插件做自定义处理时选择使用。</p>\n</blockquote>\n<pre class="language-autoit"><code class="language-autoit"><span class="token keyword">const</span> parser <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'@babel/parser\'</span><span class="token punctuation">)</span><span class="token comment">; </span>\n<span class="token keyword">const</span> traverse <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'@babel/traverse\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">default</span><span class="token comment">; </span>\n<span class="token keyword">const</span> babel <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'@babel/core\'</span><span class="token punctuation">)</span><span class="token comment">;</span>\n\n</code></pre>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#bundler%E7%9A%84%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B" }, "bundler\u7684\u57FA\u7840\u6D41\u7A0B")))),
    'author': "dingtt",
    'contributors': [
        "dingtt"
    ],
    'date': "2021-05-02T08:22:31.000Z",
    'updated': null,
    'excerpt': "bundler的基础流程 bundler从一个构建入口出发，解析模块，分析出模块的依赖关系。然后将依赖的代码模块组合在一起。 递归解析，直至没有更多的依赖模块，最终形成一颗模块依赖树。 分析出依赖关系后，由于依赖代码东得执行有先...",
    'cover': undefined,
    'sidebar': [
        {
            "text": "Hello world",
            "link": "index.html",
            "pagePath": "README.md"
        },
        {
            "link": "WebAPI/README.md",
            "children": [],
            "text": "WebAPI/README.md"
        },
        {
            "link": "HTTP/index.html",
            "children": [
                {
                    "text": "浏览器",
                    "link": "HTTP/browser.html",
                    "pagePath": "HTTP/browser.md"
                },
                {
                    "text": "HTTP协议请求方法和状态码",
                    "link": "HTTP/HTTP.html",
                    "pagePath": "HTTP/HTTP.md"
                },
                {
                    "text": "网络硬件",
                    "link": "HTTP/internet-hardware.html",
                    "pagePath": "HTTP/internet-hardware.md"
                }
            ],
            "pagePath": "HTTP/README.md",
            "text": "HTTP协议与浏览器"
        },
        {
            "link": "js/todo.md",
            "children": [
                {
                    "text": "JavaScript基础",
                    "link": "js/basics.html",
                    "pagePath": "js/basics.md"
                },
                {
                    "text": "基础",
                    "link": "js/Object.html",
                    "pagePath": "js/Object.md"
                },
                {
                    "text": "执行上下文",
                    "link": "js/context.html",
                    "pagePath": "js/context.md"
                },
                {
                    "text": "闭包和面向对象",
                    "link": "js/closure.html",
                    "pagePath": "js/closure.md"
                },
                {
                    "text": "正则",
                    "link": "js/regex.html",
                    "pagePath": "js/regex.md"
                },
                {
                    "text": "算法",
                    "link": "js/algo.html",
                    "pagePath": "js/algo.md"
                },
                {
                    "text": "JS设计模式",
                    "link": "js/design-patterns.html",
                    "pagePath": "js/design-patterns.md"
                }
            ],
            "text": "js/todo.md"
        },
        {
            "link": "TS/index.html",
            "children": [
                {
                    "text": "TS基础",
                    "link": "TS/basics.html",
                    "pagePath": "TS/basics.md"
                },
                {
                    "text": "TS枚举 类型 接口 泛型",
                    "link": "TS/enum.html",
                    "pagePath": "TS/enum.md"
                }
            ],
            "pagePath": "TS/README.md",
            "text": "TS"
        },
        {
            "link": "vue/index.html",
            "children": [
                {
                    "text": "Vue开发技巧",
                    "link": "vue/vue-skills.html",
                    "pagePath": "vue/vue-skills.md"
                },
                {
                    "text": "Vue组件通信",
                    "link": "vue/vue-communication.html",
                    "pagePath": "vue/vue-communication.md"
                },
                {
                    "text": "Vue路由",
                    "link": "vue/vue-router/vue-router.html",
                    "pagePath": "vue/vue-router/vue-router.md"
                }
            ],
            "pagePath": "vue/README.md",
            "text": "Vue"
        },
        {
            "text": "React的生命周期",
            "link": "react/lifecycle.html",
            "pagePath": "react/lifecycle.md"
        },
        {
            "link": "webpack/index.html",
            "children": [
                {
                    "text": "webpack的使用",
                    "link": "webpack/webpack-use.html",
                    "pagePath": "webpack/webpack-use.md"
                },
                {
                    "text": "Webpack打包原理解析",
                    "link": "webpack/webpack-principle.html",
                    "pagePath": "webpack/webpack-principle.md"
                },
                {
                    "text": "生产环境配置",
                    "link": "webpack/webpack-dev-config.html",
                    "pagePath": "webpack/webpack-dev-config.md"
                },
                {
                    "text": "实现自己的loader",
                    "link": "webpack/webpack-custom-loader.html",
                    "pagePath": "webpack/webpack-custom-loader.md"
                },
                {
                    "text": "实现自己的plugin",
                    "link": "webpack/webpack-custom-plugin.html",
                    "pagePath": "webpack/webpack-custom-plugin.md"
                },
                {
                    "text": "webpack代码分片",
                    "link": "webpack/webpack-split-chunks.html",
                    "pagePath": "webpack/webpack-split-chunks.md"
                },
                {
                    "text": "webpack-dev-server 与 HMR",
                    "link": "webpack/webpack-dev-server-hmr.html",
                    "pagePath": "webpack/webpack-dev-server-hmr.md"
                }
            ],
            "pagePath": "webpack/README.md",
            "text": "Webpack"
        },
        {
            "text": "前端监控简介",
            "link": "web-monitor/web-monitor.html",
            "pagePath": "web-monitor/web-monitor.md"
        },
        {
            "text": "Git使用",
            "link": "git/git.html",
            "pagePath": "git/git.md"
        }
    ]
};
