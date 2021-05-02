import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "webpack代码分片",
        "link": "webpack/webpack-split-chunks.html"
    },
    'next': {
        "text": "前端监控简介",
        "link": "web-monitor/web-monitor.html"
    },
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "webpack/webpack-dev-server-hmr.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "webpack/webpack-dev-server-hmr.html",
    'title': "webpack-dev-server 与 HMR",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>webpack-dev-server 与 HMR</h1>\n<h2 id="webpack-dev-server">webpack-dev-server<a class="anchor" href="#webpack-dev-server">§</a></h2>\n<h4 id="%E5%8A%9F%E8%83%BD">功能<a class="anchor" href="#%E5%8A%9F%E8%83%BD">§</a></h4>\n<ul>\n<li>令Webpack进行模块打包，并处理打包结果的资源请求</li>\n<li>作为普通的web server处理资源文件的请求</li>\n</ul>\n<pre class="language-autoit"><code class="language-autoit">npm install webpack<span class="token operator">-</span>dev<span class="token operator">-</span>server <span class="token operator">-</span><span class="token operator">-</span>save<span class="token operator">-</span>dev <span class="token operator">/</span><span class="token operator">/</span> <span class="token operator">-</span>D\n</code></pre>\n<p>配置</p>\n<pre class="language-autoit"><code class="language-autoit">devServer<span class="token punctuation">:</span> {\n  publicPath<span class="token punctuation">:</span> <span class="token string">\'/dist\'</span>\n}\n</code></pre>\n<p>webpack-dev-server只是将<strong>打包结果放在内存中</strong>，并不会写入实际的bundle.js，接收到请求时，如果该地址是资源服务地址（publicPath），就会将内存中的打包结果返回给浏览器，如果不属于，则直接读取硬盘中的源文件并返回。（验证方法，删除dist目录功能依然正常）</p>\n<p>live-reloading 发现工程源文件进行了更新操作就会自动刷新浏览器</p>\n<p><code>before</code> 在 webpack-dev-server 静态资源中间件处理之前，可以用于拦截部分请求返回特定内容，或者实现简单的数据 mock。</p>\n<p><code>after</code> 在 webpack-dev-server 静态资源中间件处理之后，比较少用到，可以用于打印日志或者做一些额外处理。</p>\n<p>常用配置</p>\n<pre class="language-autoit"><code class="language-autoit">\n</code></pre>\n<h2 id="webpack-dev-middleware">webpack-dev-middleware<a class="anchor" href="#webpack-dev-middleware">§</a></h2>\n<p>webpack-dev-middleware就是在 Express 中提供 webpack-dev-server 静态服务能力的一个中间件，我们可以很轻松地将其集成到现有的 Express 代码中去，就像添加一个 Express 中间件那么简单</p>\n<p>webpack-dev-middleware 的好处是可以在既有的 Express 代码基础上快速添加 webpack-dev-server 的功能，同时利用 Express 来根据需要添加更多的功能，如 mock 服务、代理 API 请求等。</p>\n<h2 id="%E7%AE%80%E5%8D%95%E7%9A%84-mock-%E6%9C%8D%E5%8A%A1">简单的 mock 服务<a class="anchor" href="#%E7%AE%80%E5%8D%95%E7%9A%84-mock-%E6%9C%8D%E5%8A%A1">§</a></h2>\n<p>webpack-dev-server 的 <code>before</code> 或 <code>proxy</code> 配置，又或者是 webpack-dev-middleware 结合 Express，都可以帮助我们来实现简单的 mock 服务。</p>\n<pre class="language-javascript"><code class="language-javascript">module<span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">export</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">mock</span><span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  app<span class="token punctuation">.</span><span class="token method function property-access">get</span><span class="token punctuation">(</span><span class="token string">\'/some/path\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    res<span class="token punctuation">.</span><span class="token method function property-access">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> data<span class="token operator">:</span> <span class="token string">\'\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n  <span class="token comment">// ... 其他的请求 mock</span>\n  <span class="token comment">// 如果 mock 代码过多，可以将其拆分成多个代码文件，然后 require 进来</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>应用到配置中的 <code>before</code> 字段</p>\n<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> mock <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./mock\'</span><span class="token punctuation">)</span>\n\n<span class="token comment">// ...</span>\n<span class="token function">before</span><span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">mock</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span> <span class="token comment">// 调用 mock 函数</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>单独实现或者使用一个 mock 服务时，你可以通过 proxy 来配置部分路径代理到对应的 mock 服务上去</p>\n<h2 id="hmr%E7%83%AD%E6%9B%BF%E6%8D%A2">HMR热替换<a class="anchor" href="#hmr%E7%83%AD%E6%9B%BF%E6%8D%A2">§</a></h2>\n<h3 id="%E5%BC%80%E5%90%AFhmr">开启HMR<a class="anchor" href="#%E5%BC%80%E5%90%AFhmr">§</a></h3>\n<pre class="language-autoit"><code class="language-autoit">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> {\n  devServer<span class="token punctuation">:</span> {\n    hot<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token operator">/</span><span class="token operator">/</span> 也可在命令行中启动 <span class="token operator">-</span>hot <span class="token operator">-</span>open自动打开网页\n  }<span class="token punctuation">,</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    new webpack<span class="token punctuation">.</span><span class="token function">NamedModulesPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">/</span><span class="token operator">/</span> 启动 HMR 时可以显示模块的相对路径\n    new webpack<span class="token punctuation">.</span><span class="token function">HotModuleReplacementPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> \n  <span class="token punctuation">]</span>\n}\n</code></pre>\n<h3 id="hmr%E5%8E%9F%E7%90%86">HMR原理<a class="anchor" href="#hmr%E5%8E%9F%E7%90%86">§</a></h3>\n<p>webpack 内部运行时，会维护一份用于管理构建代码时各个模块之间交互的表数据，webpack 官方称之为 <strong>Manifest</strong>，其中包括入口代码文件和构建出来的 bundle 文件的对应关系。可以使用 <a href="https://github.com/danethurber/webpack-manifest-plugin">WebpackManifestPlugin</a> 插件来输出这样的一份数据。</p>\n<p>当有更新时，webpack-dev-server 发送更新信号给 HMR 运行时，然后 HMR 再请求所需要的更新数据，请求的更新数据没有问题的话就应用更新。</p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "webpack-dev-server \u4E0E HMR"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="webpack-dev-server">webpack-dev-server<a class="anchor" href="#webpack-dev-server">§</a></h2>\n<h4 id="%E5%8A%9F%E8%83%BD">功能<a class="anchor" href="#%E5%8A%9F%E8%83%BD">§</a></h4>\n<ul>\n<li>令Webpack进行模块打包，并处理打包结果的资源请求</li>\n<li>作为普通的web server处理资源文件的请求</li>\n</ul>\n<pre class="language-autoit"><code class="language-autoit">npm install webpack<span class="token operator">-</span>dev<span class="token operator">-</span>server <span class="token operator">-</span><span class="token operator">-</span>save<span class="token operator">-</span>dev <span class="token operator">/</span><span class="token operator">/</span> <span class="token operator">-</span>D\n</code></pre>\n<p>配置</p>\n<pre class="language-autoit"><code class="language-autoit">devServer<span class="token punctuation">:</span> {\n  publicPath<span class="token punctuation">:</span> <span class="token string">\'/dist\'</span>\n}\n</code></pre>\n<p>webpack-dev-server只是将<strong>打包结果放在内存中</strong>，并不会写入实际的bundle.js，接收到请求时，如果该地址是资源服务地址（publicPath），就会将内存中的打包结果返回给浏览器，如果不属于，则直接读取硬盘中的源文件并返回。（验证方法，删除dist目录功能依然正常）</p>\n<p>live-reloading 发现工程源文件进行了更新操作就会自动刷新浏览器</p>\n<p><code>before</code> 在 webpack-dev-server 静态资源中间件处理之前，可以用于拦截部分请求返回特定内容，或者实现简单的数据 mock。</p>\n<p><code>after</code> 在 webpack-dev-server 静态资源中间件处理之后，比较少用到，可以用于打印日志或者做一些额外处理。</p>\n<p>常用配置</p>\n<pre class="language-autoit"><code class="language-autoit">\n</code></pre>\n<h2 id="webpack-dev-middleware">webpack-dev-middleware<a class="anchor" href="#webpack-dev-middleware">§</a></h2>\n<p>webpack-dev-middleware就是在 Express 中提供 webpack-dev-server 静态服务能力的一个中间件，我们可以很轻松地将其集成到现有的 Express 代码中去，就像添加一个 Express 中间件那么简单</p>\n<p>webpack-dev-middleware 的好处是可以在既有的 Express 代码基础上快速添加 webpack-dev-server 的功能，同时利用 Express 来根据需要添加更多的功能，如 mock 服务、代理 API 请求等。</p>\n<h2 id="%E7%AE%80%E5%8D%95%E7%9A%84-mock-%E6%9C%8D%E5%8A%A1">简单的 mock 服务<a class="anchor" href="#%E7%AE%80%E5%8D%95%E7%9A%84-mock-%E6%9C%8D%E5%8A%A1">§</a></h2>\n<p>webpack-dev-server 的 <code>before</code> 或 <code>proxy</code> 配置，又或者是 webpack-dev-middleware 结合 Express，都可以帮助我们来实现简单的 mock 服务。</p>\n<pre class="language-javascript"><code class="language-javascript">module<span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">export</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">mock</span><span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  app<span class="token punctuation">.</span><span class="token method function property-access">get</span><span class="token punctuation">(</span><span class="token string">\'/some/path\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    res<span class="token punctuation">.</span><span class="token method function property-access">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> data<span class="token operator">:</span> <span class="token string">\'\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n  <span class="token comment">// ... 其他的请求 mock</span>\n  <span class="token comment">// 如果 mock 代码过多，可以将其拆分成多个代码文件，然后 require 进来</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>应用到配置中的 <code>before</code> 字段</p>\n<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> mock <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./mock\'</span><span class="token punctuation">)</span>\n\n<span class="token comment">// ...</span>\n<span class="token function">before</span><span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">mock</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span> <span class="token comment">// 调用 mock 函数</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>单独实现或者使用一个 mock 服务时，你可以通过 proxy 来配置部分路径代理到对应的 mock 服务上去</p>\n<h2 id="hmr%E7%83%AD%E6%9B%BF%E6%8D%A2">HMR热替换<a class="anchor" href="#hmr%E7%83%AD%E6%9B%BF%E6%8D%A2">§</a></h2>\n<h3 id="%E5%BC%80%E5%90%AFhmr">开启HMR<a class="anchor" href="#%E5%BC%80%E5%90%AFhmr">§</a></h3>\n<pre class="language-autoit"><code class="language-autoit">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> {\n  devServer<span class="token punctuation">:</span> {\n    hot<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token operator">/</span><span class="token operator">/</span> 也可在命令行中启动 <span class="token operator">-</span>hot <span class="token operator">-</span>open自动打开网页\n  }<span class="token punctuation">,</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    new webpack<span class="token punctuation">.</span><span class="token function">NamedModulesPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">/</span><span class="token operator">/</span> 启动 HMR 时可以显示模块的相对路径\n    new webpack<span class="token punctuation">.</span><span class="token function">HotModuleReplacementPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> \n  <span class="token punctuation">]</span>\n}\n</code></pre>\n<h3 id="hmr%E5%8E%9F%E7%90%86">HMR原理<a class="anchor" href="#hmr%E5%8E%9F%E7%90%86">§</a></h3>\n<p>webpack 内部运行时，会维护一份用于管理构建代码时各个模块之间交互的表数据，webpack 官方称之为 <strong>Manifest</strong>，其中包括入口代码文件和构建出来的 bundle 文件的对应关系。可以使用 <a href="https://github.com/danethurber/webpack-manifest-plugin">WebpackManifestPlugin</a> 插件来输出这样的一份数据。</p>\n<p>当有更新时，webpack-dev-server 发送更新信号给 HMR 运行时，然后 HMR 再请求所需要的更新数据，请求的更新数据没有问题的话就应用更新。</p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#webpack-dev-server" }, "webpack-dev-server"),
                React.createElement("ol", null)),
            React.createElement("li", null,
                React.createElement("a", { href: "#webpack-dev-middleware" }, "webpack-dev-middleware")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E7%AE%80%E5%8D%95%E7%9A%84-mock-%E6%9C%8D%E5%8A%A1" }, "\u7B80\u5355\u7684 mock \u670D\u52A1")),
            React.createElement("li", null,
                React.createElement("a", { href: "#hmr%E7%83%AD%E6%9B%BF%E6%8D%A2" }, "HMR\u70ED\u66FF\u6362"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E5%BC%80%E5%90%AFhmr" }, "\u5F00\u542FHMR")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#hmr%E5%8E%9F%E7%90%86" }, "HMR\u539F\u7406")))))),
    'author': "dingtt",
    'contributors': [
        "dingtt"
    ],
    'date': "2021-05-02T08:22:31.000Z",
    'updated': null,
    'excerpt': "webpack-dev-server 功能 - 令Webpack进行模块打包，并处理打包结果的资源请求 - 作为普通的web server处理资源文件的请求 npm install webpack-dev-server --save-dev // -D 配置 devServer: { publicPath: '/dist' } webpack...",
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
