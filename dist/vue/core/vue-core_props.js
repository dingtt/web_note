import projectConfig from '/pagic.config.js';
export default {
    'prev': undefined,
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: 'gh-pages' },
    'pagePath': "vue/core/vue-core.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "vue/core/vue-core.html",
    'title': "Vue源码分析",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Vue源码分析</h1>\n<nav class="toc"><ol><li><a href="#%E7%9B%AE%E5%BD%95%E8%AE%BE%E8%AE%A1">目录设计</a><ol><li><a href="#compiler">compiler</a></li><li><a href="#core">core</a></li><li><a href="#platforms">platforms</a></li><li><a href="#server">server</a></li><li><a href="#sfc">sfc</a></li><li><a href="#shared">shared</a></li></ol></li></ol></nav><h1>开始</h1>\n<h2 id="%E7%9B%AE%E5%BD%95%E8%AE%BE%E8%AE%A1">目录设计<a class="anchor" href="#%E7%9B%AE%E5%BD%95%E8%AE%BE%E8%AE%A1">§</a></h2>\n<pre class="language-autoit"><code class="language-autoit">src\n<span class="token operator">-</span><span class="token operator">-</span> compiler  #编译相关\n<span class="token operator">-</span><span class="token operator">-</span> core   #核心代码\n<span class="token operator">-</span><span class="token operator">-</span> platforms #不同平台的支持\n<span class="token operator">-</span><span class="token operator">-</span> server  #服务端渲染\n<span class="token operator">-</span><span class="token operator">-</span> sfc     # <span class="token punctuation">.</span>vue文件解析\n<span class="token operator">-</span><span class="token operator">-</span>shared   #共享代码\n</code></pre>\n<h3 id="compiler">compiler<a class="anchor" href="#compiler">§</a></h3>\n<p>把模板解析成AST语法树，AST语法树优化，代码生成</p>\n<p>编译可以借助webpack  vue-loader在构建时做，也可以在运行时做（不推荐）</p>\n<pre class="language-autoit"><code class="language-autoit">codegen   #代码生产器\ndirectives   #指令\nparser     #解析器\n</code></pre>\n<h3 id="core">core<a class="anchor" href="#core">§</a></h3>\n<p>core目录包含了vue的核心代码，包含内置组件，全局API封装，Vue实例化，观察者，虚拟dom，工具函数</p>\n<pre class="language-autoit"><code class="language-autoit">components  #内置组件\n  <span class="token operator">-</span><span class="token operator">-</span> keep<span class="token operator">-</span>alive\n<span class="token keyword">global</span><span class="token operator">-</span>api  #全局api\ninstance  #实力\n  <span class="token operator">-</span><span class="token operator">-</span> index<span class="token punctuation">.</span>js\n    <span class="token operator">-</span><span class="token operator">-</span> this<span class="token punctuation">.</span>_init\n    <span class="token operator">-</span><span class="token operator">-</span> initMixin\n    <span class="token operator">-</span><span class="token operator">-</span> stateMixin\n    <span class="token operator">-</span><span class="token operator">-</span> eventMixin\n    <span class="token operator">-</span><span class="token operator">-</span> lifecycleMixin\n    <span class="token operator">-</span><span class="token operator">-</span> renderMixin    \n  <span class="token operator">-</span><span class="token operator">-</span> init<span class="token punctuation">.</span>js\n    <span class="token operator">-</span><span class="token operator">-</span> Vue<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>_init\n    <span class="token operator">-</span><span class="token operator">-</span> <span class="token function">initInternalComponents</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span> #\n    <span class="token operator">-</span><span class="token operator">-</span> <span class="token function">initProxy</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>   #开发坏境下\n    <span class="token operator">-</span><span class="token operator">-</span> <span class="token function">initLifecycle</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span> \n    <span class="token operator">-</span><span class="token operator">-</span> <span class="token function">initEvents</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>\n    <span class="token operator">-</span><span class="token operator">-</span> <span class="token function">initRender</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>\n    <span class="token operator">-</span><span class="token operator">-</span> <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span><span class="token string">\'beforeCreate\'</span><span class="token punctuation">)</span>\n    <span class="token operator">-</span><span class="token operator">-</span> <span class="token function">initInjections</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>\n    <span class="token operator">-</span><span class="token operator">-</span> <span class="token function">initSate</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>\n    <span class="token operator">-</span><span class="token operator">-</span> <span class="token function">initProvide</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>\n    <span class="token operator">-</span><span class="token operator">-</span> <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span><span class="token string">\'created\'</span><span class="token punctuation">)</span>  \n    <span class="token operator">-</span><span class="token operator">-</span> state<span class="token punctuation">.</span>js\n    <span class="token operator">-</span><span class="token operator">-</span> events<span class="token punctuation">.</span>js\n    <span class="token operator">-</span><span class="token operator">-</span> render<span class="token punctuation">.</span>js\n    <span class="token operator">-</span><span class="token operator">-</span> proxy<span class="token punctuation">.</span>js\n    <span class="token operator">-</span><span class="token operator">-</span> inject<span class="token punctuation">.</span>js\n    <span class="token operator">-</span><span class="token operator">-</span> lifecycle<span class="token punctuation">.</span>js \nobserver  #观察者\nutil  #工具函数\nvdom  #虚拟DOM\n</code></pre>\n<h3 id="platforms">platforms<a class="anchor" href="#platforms">§</a></h3>\n<p>2.0版本主要运行在web和weex，web入口文件 platforms\web\entry-runtime-with-compiler.js`</p>\n<h3 id="server">server<a class="anchor" href="#server">§</a></h3>\n<p>服务端渲染的业务逻辑，运行在nodeJs环境中</p>\n<h3 id="sfc">sfc<a class="anchor" href="#sfc">§</a></h3>\n<p>会把.vue 单文件，解析成javascript对象</p>\n<h3 id="shared">shared<a class="anchor" href="#shared">§</a></h3>\n<p>工具函数，供web和服务端环境共用</p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Vue\u6E90\u7801\u5206\u6790"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E7%9B%AE%E5%BD%95%E8%AE%BE%E8%AE%A1">目录设计</a><ol><li><a href="#compiler">compiler</a></li><li><a href="#core">core</a></li><li><a href="#platforms">platforms</a></li><li><a href="#server">server</a></li><li><a href="#sfc">sfc</a></li><li><a href="#shared">shared</a></li></ol></li></ol></nav><h1>开始</h1>\n<h2 id="%E7%9B%AE%E5%BD%95%E8%AE%BE%E8%AE%A1">目录设计<a class="anchor" href="#%E7%9B%AE%E5%BD%95%E8%AE%BE%E8%AE%A1">§</a></h2>\n<pre class="language-autoit"><code class="language-autoit">src\n<span class="token operator">-</span><span class="token operator">-</span> compiler  #编译相关\n<span class="token operator">-</span><span class="token operator">-</span> core   #核心代码\n<span class="token operator">-</span><span class="token operator">-</span> platforms #不同平台的支持\n<span class="token operator">-</span><span class="token operator">-</span> server  #服务端渲染\n<span class="token operator">-</span><span class="token operator">-</span> sfc     # <span class="token punctuation">.</span>vue文件解析\n<span class="token operator">-</span><span class="token operator">-</span>shared   #共享代码\n</code></pre>\n<h3 id="compiler">compiler<a class="anchor" href="#compiler">§</a></h3>\n<p>把模板解析成AST语法树，AST语法树优化，代码生成</p>\n<p>编译可以借助webpack  vue-loader在构建时做，也可以在运行时做（不推荐）</p>\n<pre class="language-autoit"><code class="language-autoit">codegen   #代码生产器\ndirectives   #指令\nparser     #解析器\n</code></pre>\n<h3 id="core">core<a class="anchor" href="#core">§</a></h3>\n<p>core目录包含了vue的核心代码，包含内置组件，全局API封装，Vue实例化，观察者，虚拟dom，工具函数</p>\n<pre class="language-autoit"><code class="language-autoit">components  #内置组件\n  <span class="token operator">-</span><span class="token operator">-</span> keep<span class="token operator">-</span>alive\n<span class="token keyword">global</span><span class="token operator">-</span>api  #全局api\ninstance  #实力\n  <span class="token operator">-</span><span class="token operator">-</span> index<span class="token punctuation">.</span>js\n    <span class="token operator">-</span><span class="token operator">-</span> this<span class="token punctuation">.</span>_init\n    <span class="token operator">-</span><span class="token operator">-</span> initMixin\n    <span class="token operator">-</span><span class="token operator">-</span> stateMixin\n    <span class="token operator">-</span><span class="token operator">-</span> eventMixin\n    <span class="token operator">-</span><span class="token operator">-</span> lifecycleMixin\n    <span class="token operator">-</span><span class="token operator">-</span> renderMixin    \n  <span class="token operator">-</span><span class="token operator">-</span> init<span class="token punctuation">.</span>js\n    <span class="token operator">-</span><span class="token operator">-</span> Vue<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>_init\n    <span class="token operator">-</span><span class="token operator">-</span> <span class="token function">initInternalComponents</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span> #\n    <span class="token operator">-</span><span class="token operator">-</span> <span class="token function">initProxy</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>   #开发坏境下\n    <span class="token operator">-</span><span class="token operator">-</span> <span class="token function">initLifecycle</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span> \n    <span class="token operator">-</span><span class="token operator">-</span> <span class="token function">initEvents</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>\n    <span class="token operator">-</span><span class="token operator">-</span> <span class="token function">initRender</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>\n    <span class="token operator">-</span><span class="token operator">-</span> <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span><span class="token string">\'beforeCreate\'</span><span class="token punctuation">)</span>\n    <span class="token operator">-</span><span class="token operator">-</span> <span class="token function">initInjections</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>\n    <span class="token operator">-</span><span class="token operator">-</span> <span class="token function">initSate</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>\n    <span class="token operator">-</span><span class="token operator">-</span> <span class="token function">initProvide</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>\n    <span class="token operator">-</span><span class="token operator">-</span> <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span><span class="token string">\'created\'</span><span class="token punctuation">)</span>  \n    <span class="token operator">-</span><span class="token operator">-</span> state<span class="token punctuation">.</span>js\n    <span class="token operator">-</span><span class="token operator">-</span> events<span class="token punctuation">.</span>js\n    <span class="token operator">-</span><span class="token operator">-</span> render<span class="token punctuation">.</span>js\n    <span class="token operator">-</span><span class="token operator">-</span> proxy<span class="token punctuation">.</span>js\n    <span class="token operator">-</span><span class="token operator">-</span> inject<span class="token punctuation">.</span>js\n    <span class="token operator">-</span><span class="token operator">-</span> lifecycle<span class="token punctuation">.</span>js \nobserver  #观察者\nutil  #工具函数\nvdom  #虚拟DOM\n</code></pre>\n<h3 id="platforms">platforms<a class="anchor" href="#platforms">§</a></h3>\n<p>2.0版本主要运行在web和weex，web入口文件 platforms\web\entry-runtime-with-compiler.js`</p>\n<h3 id="server">server<a class="anchor" href="#server">§</a></h3>\n<p>服务端渲染的业务逻辑，运行在nodeJs环境中</p>\n<h3 id="sfc">sfc<a class="anchor" href="#sfc">§</a></h3>\n<p>会把.vue 单文件，解析成javascript对象</p>\n<h3 id="shared">shared<a class="anchor" href="#shared">§</a></h3>\n<p>工具函数，供web和服务端环境共用</p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E7%9B%AE%E5%BD%95%E8%AE%BE%E8%AE%A1" }, "\u76EE\u5F55\u8BBE\u8BA1"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#compiler" }, "compiler")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#core" }, "core")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#platforms" }, "platforms")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#server" }, "server")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#sfc" }, "sfc")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#shared" }, "shared")))))),
    'author': "dingdtt",
    'contributors': [
        "dingdtt",
        "dingtt"
    ],
    'date': "2020-05-26T11:04:35.000Z",
    'updated': "2020-10-16T08:42:52.000Z",
    'excerpt': " 1. 目录设计 1. compiler 2. core 3. platforms 4. server 5. sfc 6. shared 开始 目录设计 src -- compiler #编译相关 -- core #核心代码 -- platforms #不同平台的支持 -- server #服务端渲染 -- sfc # .vue文件解析 --shar...",
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
