import projectConfig from '/pagic.config.js';
export default {
    'prev': undefined,
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: 'gh-pages' },
    'pagePath': "vue/vue-nextTick.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "vue/vue-nextTick.html",
    'title': undefined,
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h4 id="%E7%AE%80%E5%8D%95%E7%9A%84%E5%BC%82%E6%AD%A5%E4%BB%BB%E5%8A%A1%E5%90%88%E5%B9%B6">简单的异步任务合并<a class="anchor" href="#%E7%AE%80%E5%8D%95%E7%9A%84%E5%BC%82%E6%AD%A5%E4%BB%BB%E5%8A%A1%E5%90%88%E5%B9%B6">§</a></h4>\n<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> pending <span class="token operator">=</span> <span class="token boolean">false</span>\n<span class="token keyword">const</span> cbs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token keyword">function</span> <span class="token function">flushCallbacks</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// cbCopy = cbs.slice()</span>\n  pending <span class="token operator">=</span> <span class="token boolean">false</span>\n  <span class="token keyword control-flow">for</span><span class="token punctuation">(</span>lei i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> cbCopy<span class="token punctuation">.</span><span class="token property-access">length</span><span class="token punctuation">;</span> i <span class="token operator">++</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>\n    cbs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  cbs<span class="token punctuation">.</span><span class="token property-access">length</span> <span class="token operator">=</span> <span class="token number">0</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">function</span> <span class="token function">nextTick</span> <span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  cbs<span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>\n  <span class="token keyword control-flow">if</span><span class="token punctuation">(</span><span class="token operator">!</span>pending<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    pending <span class="token operator">=</span> <span class="token boolean">true</span>\n    <span class="token known-class-name class-name">Promise</span><span class="token punctuation">.</span><span class="token method function property-access">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">then</span><span class="token punctuation">(</span>flushCallbacks<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': undefined,
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h4 id="%E7%AE%80%E5%8D%95%E7%9A%84%E5%BC%82%E6%AD%A5%E4%BB%BB%E5%8A%A1%E5%90%88%E5%B9%B6">简单的异步任务合并<a class="anchor" href="#%E7%AE%80%E5%8D%95%E7%9A%84%E5%BC%82%E6%AD%A5%E4%BB%BB%E5%8A%A1%E5%90%88%E5%B9%B6">§</a></h4>\n<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> pending <span class="token operator">=</span> <span class="token boolean">false</span>\n<span class="token keyword">const</span> cbs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token keyword">function</span> <span class="token function">flushCallbacks</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// cbCopy = cbs.slice()</span>\n  pending <span class="token operator">=</span> <span class="token boolean">false</span>\n  <span class="token keyword control-flow">for</span><span class="token punctuation">(</span>lei i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> cbCopy<span class="token punctuation">.</span><span class="token property-access">length</span><span class="token punctuation">;</span> i <span class="token operator">++</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>\n    cbs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  cbs<span class="token punctuation">.</span><span class="token property-access">length</span> <span class="token operator">=</span> <span class="token number">0</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">function</span> <span class="token function">nextTick</span> <span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  cbs<span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>\n  <span class="token keyword control-flow">if</span><span class="token punctuation">(</span><span class="token operator">!</span>pending<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    pending <span class="token operator">=</span> <span class="token boolean">true</span>\n    <span class="token known-class-name class-name">Promise</span><span class="token punctuation">.</span><span class="token method function property-access">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">then</span><span class="token punctuation">(</span>flushCallbacks<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>'
        } }),
    'toc': null,
    'author': "dingtt",
    'contributors': [
        "dingtt"
    ],
    'date': "2021-04-07T14:18:47.000Z",
    'updated': null,
    'excerpt': "简单的异步任务合并 let pending = false const cbs = [] function flushCallbacks() { // cbCopy = cbs.slice() pending = false for(lei i = 0; i < cbCopy.length; i ++ ){ cbs[i]() } cbs.length = 0 } function nextTick ...",
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
