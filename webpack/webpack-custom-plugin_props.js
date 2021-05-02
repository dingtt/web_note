import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "实现自己的loader",
        "link": "webpack/webpack-custom-loader.html"
    },
    'next': {
        "text": "webpack代码分片",
        "link": "webpack/webpack-split-chunks.html"
    },
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "webpack/webpack-custom-plugin.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "webpack/webpack-custom-plugin.html",
    'title': "实现自己的plugin",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>实现自己的plugin</h1>\n<p>设计模式  事件驱动  发布订阅</p>\n<p>plugin是一个类，在配置的plugins中使用时，传入相关配置来创建一个实例。plugin</p>\n<p>里面包含了一个最重要的方法apply函数，该方法在webpack compiler安装插件时会被调用一次，apply接收一个参数 compiler 对象实例的引用，可以在compiler对象实例上注册各种事件钩子函数，来影响webpack的所有构建流程。</p>\n<p>hooks  emit  done compiler</p>\n<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">class</span> <span class="token class-name">SelfWebpackPlugin</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// hooks.emit 定义在某个时刻，异步写法</span>\n      compiler<span class="token punctuation">.</span><span class="token property-access">hooks</span><span class="token punctuation">.</span><span class="token property-access">emit</span><span class="token punctuation">.</span><span class="token method function property-access">tapAsync</span><span class="token punctuation">(</span>\n          <span class="token string">\'SelfWebpackPlugin\'</span><span class="token punctuation">,</span>\n          <span class="token punctuation">(</span><span class="token parameter">compilation<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n              \n              compilation<span class="token punctuation">.</span><span class="token property-access">assets</span><span class="token punctuation">[</span><span class="token string">\'file.txt\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n                  <span class="token function-variable function">source</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                      <span class="token keyword control-flow">return</span> <span class="token string">\'hei\'</span>\n                  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                  <span class="token function-variable function">size</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                      <span class="token keyword control-flow">return</span> <span class="token number">20</span>\n                  <span class="token punctuation">}</span>\n              <span class="token punctuation">}</span>\n              <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n          <span class="token punctuation">}</span>\n      <span class="token punctuation">)</span>\n      <span class="token comment">// 同步的写法 处理markdown 文件</span>\n      <span class="token comment">// 在compiler的emit hook 中注册一个方法，当webpack执行到该阶段时会调用这个方法</span>\n      compiler<span class="token punctuation">.</span><span class="token property-access">hooks</span><span class="token punctuation">.</span><span class="token property-access">compile</span><span class="token punctuation">.</span><span class="token method function property-access">tap</span><span class="token punctuation">(</span><span class="token string">\'SelfWebpackPlugin\'</span><span class="token punctuation">,</span> <span class="token parameter">compilation</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n          <span class="token comment">// 处理逻辑</span>\n          <span class="token comment">// 给生成的 markdown文件创建一个简单标题</span>\n          <span class="token keyword">var</span> filelist <span class="token operator">=</span> <span class="token string">\'In this build:\n\n\'</span>\n          <span class="token comment">// 遍历编译后的资源，每一个文件都添加一行</span>\n          <span class="token keyword control-flow">for</span><span class="token punctuation">(</span>avr filename <span class="token keyword">in</span> compilation<span class="token punctuation">.</span><span class="token property-access">assets</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n              filelist <span class="token operator">+=</span> <span class="token punctuation">(</span><span class="token string">\'- \'</span> <span class="token operator">+</span> filename <span class="token operator">+</span> <span class="token string">\'\n\'</span><span class="token punctuation">)</span>\n          <span class="token punctuation">}</span>\n          <span class="token comment">// 将列表作为一个新的文件资源插入到webpack 构建结构中</span>\n          comilation<span class="token punctuation">.</span><span class="token property-access">assets</span><span class="token punctuation">[</span><span class="token string">\'filename.md\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n              <span class="token function-variable function">sourece</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                  <span class="token keyword control-flow">return</span> filenameList\n              <span class="token punctuation">}</span><span class="token punctuation">,</span>\n              <span class="token function-variable function">size</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                  <span class="token keyword control-flow">return</span> filelist<span class="token punctuation">.</span><span class="token property-access">length</span>\n              <span class="token punctuation">}</span>\n          <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nmodule<span class="token punctuation">.</span><span class="token property-access">exports</span> <span class="token operator">=</span> <span class="token maybe-class-name">SelfWebpackPlugin</span>\n</code></pre>\n<p>使用</p>\n<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> <span class="token maybe-class-name">SelfWebpackPlugin</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./plugins/self-weback-plugin\'</span><span class="token punctuation">)</span>\nplugins<span class="token operator">:</span><span class="token punctuation">[</span>\n  <span class="token keyword">new</span> <span class="token class-name">SelfWebpackPlugin</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>\n<span class="token punctuation">]</span>\n</code></pre>\n<p>参考：compiler-hooks</p>\n<p><a href="https://webpack.js.org/api/compiler-hooks">https://webpack.js.org/api/compiler-hooks</a></p>\n<h2 id="%E5%BC%80%E5%8F%91%E5%92%8C%E8%B0%83%E8%AF%95plugin">开发和调试plugin<a class="anchor" href="#%E5%BC%80%E5%8F%91%E5%92%8C%E8%B0%83%E8%AF%95plugin">§</a></h2>\n<pre class="language-javascript"><code class="language-javascript"><span class="token comment">// 假设我们上述那个例子的代码是 ./plugins/FileListPlugin 这个文件</span>\n<span class="token keyword">const</span> <span class="token maybe-class-name">FileListPlugin</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./plugins/FileListPlugin.js\'</span><span class="token punctuation">)</span>\n\nmodule<span class="token punctuation">.</span><span class="token property-access">exports</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ... 其他配置</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">FileListPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 实例化这个插件，有的时候需要传入对应的配置</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>node调试工具</p>\n<pre class="language-javascript"><code class="language-javascript"><span class="token string">"debug"</span><span class="token operator">:</span> <span class="token string">"node --inspect --inspect-brk node_modules/webpack/bin/webpack.js"</span>\n</code></pre>\n<p>待补充 webpack钩子函数</p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u5B9E\u73B0\u81EA\u5DF1\u7684plugin"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>设计模式  事件驱动  发布订阅</p>\n<p>plugin是一个类，在配置的plugins中使用时，传入相关配置来创建一个实例。plugin</p>\n<p>里面包含了一个最重要的方法apply函数，该方法在webpack compiler安装插件时会被调用一次，apply接收一个参数 compiler 对象实例的引用，可以在compiler对象实例上注册各种事件钩子函数，来影响webpack的所有构建流程。</p>\n<p>hooks  emit  done compiler</p>\n<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">class</span> <span class="token class-name">SelfWebpackPlugin</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// hooks.emit 定义在某个时刻，异步写法</span>\n      compiler<span class="token punctuation">.</span><span class="token property-access">hooks</span><span class="token punctuation">.</span><span class="token property-access">emit</span><span class="token punctuation">.</span><span class="token method function property-access">tapAsync</span><span class="token punctuation">(</span>\n          <span class="token string">\'SelfWebpackPlugin\'</span><span class="token punctuation">,</span>\n          <span class="token punctuation">(</span><span class="token parameter">compilation<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n              \n              compilation<span class="token punctuation">.</span><span class="token property-access">assets</span><span class="token punctuation">[</span><span class="token string">\'file.txt\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n                  <span class="token function-variable function">source</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                      <span class="token keyword control-flow">return</span> <span class="token string">\'hei\'</span>\n                  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                  <span class="token function-variable function">size</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                      <span class="token keyword control-flow">return</span> <span class="token number">20</span>\n                  <span class="token punctuation">}</span>\n              <span class="token punctuation">}</span>\n              <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n          <span class="token punctuation">}</span>\n      <span class="token punctuation">)</span>\n      <span class="token comment">// 同步的写法 处理markdown 文件</span>\n      <span class="token comment">// 在compiler的emit hook 中注册一个方法，当webpack执行到该阶段时会调用这个方法</span>\n      compiler<span class="token punctuation">.</span><span class="token property-access">hooks</span><span class="token punctuation">.</span><span class="token property-access">compile</span><span class="token punctuation">.</span><span class="token method function property-access">tap</span><span class="token punctuation">(</span><span class="token string">\'SelfWebpackPlugin\'</span><span class="token punctuation">,</span> <span class="token parameter">compilation</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n          <span class="token comment">// 处理逻辑</span>\n          <span class="token comment">// 给生成的 markdown文件创建一个简单标题</span>\n          <span class="token keyword">var</span> filelist <span class="token operator">=</span> <span class="token string">\'In this build:\n\n\'</span>\n          <span class="token comment">// 遍历编译后的资源，每一个文件都添加一行</span>\n          <span class="token keyword control-flow">for</span><span class="token punctuation">(</span>avr filename <span class="token keyword">in</span> compilation<span class="token punctuation">.</span><span class="token property-access">assets</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n              filelist <span class="token operator">+=</span> <span class="token punctuation">(</span><span class="token string">\'- \'</span> <span class="token operator">+</span> filename <span class="token operator">+</span> <span class="token string">\'\n\'</span><span class="token punctuation">)</span>\n          <span class="token punctuation">}</span>\n          <span class="token comment">// 将列表作为一个新的文件资源插入到webpack 构建结构中</span>\n          comilation<span class="token punctuation">.</span><span class="token property-access">assets</span><span class="token punctuation">[</span><span class="token string">\'filename.md\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n              <span class="token function-variable function">sourece</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                  <span class="token keyword control-flow">return</span> filenameList\n              <span class="token punctuation">}</span><span class="token punctuation">,</span>\n              <span class="token function-variable function">size</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                  <span class="token keyword control-flow">return</span> filelist<span class="token punctuation">.</span><span class="token property-access">length</span>\n              <span class="token punctuation">}</span>\n          <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nmodule<span class="token punctuation">.</span><span class="token property-access">exports</span> <span class="token operator">=</span> <span class="token maybe-class-name">SelfWebpackPlugin</span>\n</code></pre>\n<p>使用</p>\n<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> <span class="token maybe-class-name">SelfWebpackPlugin</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./plugins/self-weback-plugin\'</span><span class="token punctuation">)</span>\nplugins<span class="token operator">:</span><span class="token punctuation">[</span>\n  <span class="token keyword">new</span> <span class="token class-name">SelfWebpackPlugin</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>\n<span class="token punctuation">]</span>\n</code></pre>\n<p>参考：compiler-hooks</p>\n<p><a href="https://webpack.js.org/api/compiler-hooks">https://webpack.js.org/api/compiler-hooks</a></p>\n<h2 id="%E5%BC%80%E5%8F%91%E5%92%8C%E8%B0%83%E8%AF%95plugin">开发和调试plugin<a class="anchor" href="#%E5%BC%80%E5%8F%91%E5%92%8C%E8%B0%83%E8%AF%95plugin">§</a></h2>\n<pre class="language-javascript"><code class="language-javascript"><span class="token comment">// 假设我们上述那个例子的代码是 ./plugins/FileListPlugin 这个文件</span>\n<span class="token keyword">const</span> <span class="token maybe-class-name">FileListPlugin</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./plugins/FileListPlugin.js\'</span><span class="token punctuation">)</span>\n\nmodule<span class="token punctuation">.</span><span class="token property-access">exports</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ... 其他配置</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">FileListPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 实例化这个插件，有的时候需要传入对应的配置</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>node调试工具</p>\n<pre class="language-javascript"><code class="language-javascript"><span class="token string">"debug"</span><span class="token operator">:</span> <span class="token string">"node --inspect --inspect-brk node_modules/webpack/bin/webpack.js"</span>\n</code></pre>\n<p>待补充 webpack钩子函数</p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%BC%80%E5%8F%91%E5%92%8C%E8%B0%83%E8%AF%95plugin" }, "\u5F00\u53D1\u548C\u8C03\u8BD5plugin")))),
    'author': "dingtt",
    'contributors': [
        "dingtt"
    ],
    'date': "2021-05-02T08:22:31.000Z",
    'updated': null,
    'excerpt': "设计模式 事件驱动 发布订阅 plugin是一个类，在配置的plugins中使用时，传入相关配置来创建一个实例。plugin 里面包含了一个最重要的方法apply函数，该方法在webpack compiler安装插件时会被调用一次，apply接收一个参数 comp...",
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
