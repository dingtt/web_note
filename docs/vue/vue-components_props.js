import projectConfig from '/pagic.config.js';
export default {
    'prev': undefined,
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: 'gh-pages' },
    'pagePath': "vue/vue-components.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "vue/vue-components.html",
    'title': "Vue组件",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Vue组件</h1>\n<h2 id="%E7%BB%84%E4%BB%B6%E7%9A%84%E5%88%86%E7%B1%BB">组件的分类<a class="anchor" href="#%E7%BB%84%E4%BB%B6%E7%9A%84%E5%88%86%E7%B1%BB">§</a></h2>\n<p>页面组件  独立组件 业务组件</p>\n<h2 id="%E7%BB%84%E4%BB%B6%E7%9A%84%E6%9E%84%E6%88%90">组件的构成<a class="anchor" href="#%E7%BB%84%E4%BB%B6%E7%9A%84%E6%9E%84%E6%88%90">§</a></h2>\n<h3 id="%E5%B1%9E%E6%80%A7props">属性props<a class="anchor" href="#%E5%B1%9E%E6%80%A7props">§</a></h3>\n<p>prop定义了组件有哪些可配置的属性，props是单向数据流，组件不能自己修改只能通知父组件，由父组件修改。</p>\n<p><code>inheritAttrs:true</code> html的自带属性，会默认继承</p>\n<pre class="language-autoit"><code class="language-autoit"><span class="token keyword">const</span> validator <span class="token operator">=</span> <span class="token function">function</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>{ return <span class="token boolean">true</span>}\nexports <span class="token keyword">default</span> {\n  props<span class="token punctuation">:</span>{\n    propsKey<span class="token punctuation">:</span> {\n      <span class="token function">validator</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> {\n        return  <span class="token function">validator</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">/</span><span class="token operator">/</span> 判断逻辑\n      }\n    }<span class="token punctuation">,</span>\n    propKey2<span class="token punctuation">:</span> {\n      type<span class="token punctuation">:</span> Number<span class="token punctuation">,</span>\n      <span class="token keyword">default</span><span class="token punctuation">:</span><span class="token number">0</span>\n    }\n  }\n}\n</code></pre>\n<h3 id="%E6%8F%92%E6%A7%BDslot">插槽slot<a class="anchor" href="#%E6%8F%92%E6%A7%BDslot">§</a></h3>\n<p>分发组件内容，多个slot使用具名插槽</p>\n<h3 id="%E4%BA%8B%E4%BB%B6event">事件event<a class="anchor" href="#%E4%BA%8B%E4%BB%B6event">§</a></h3>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Vue\u7EC4\u4EF6"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E7%BB%84%E4%BB%B6%E7%9A%84%E5%88%86%E7%B1%BB">组件的分类<a class="anchor" href="#%E7%BB%84%E4%BB%B6%E7%9A%84%E5%88%86%E7%B1%BB">§</a></h2>\n<p>页面组件  独立组件 业务组件</p>\n<h2 id="%E7%BB%84%E4%BB%B6%E7%9A%84%E6%9E%84%E6%88%90">组件的构成<a class="anchor" href="#%E7%BB%84%E4%BB%B6%E7%9A%84%E6%9E%84%E6%88%90">§</a></h2>\n<h3 id="%E5%B1%9E%E6%80%A7props">属性props<a class="anchor" href="#%E5%B1%9E%E6%80%A7props">§</a></h3>\n<p>prop定义了组件有哪些可配置的属性，props是单向数据流，组件不能自己修改只能通知父组件，由父组件修改。</p>\n<p><code>inheritAttrs:true</code> html的自带属性，会默认继承</p>\n<pre class="language-autoit"><code class="language-autoit"><span class="token keyword">const</span> validator <span class="token operator">=</span> <span class="token function">function</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>{ return <span class="token boolean">true</span>}\nexports <span class="token keyword">default</span> {\n  props<span class="token punctuation">:</span>{\n    propsKey<span class="token punctuation">:</span> {\n      <span class="token function">validator</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> {\n        return  <span class="token function">validator</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">/</span><span class="token operator">/</span> 判断逻辑\n      }\n    }<span class="token punctuation">,</span>\n    propKey2<span class="token punctuation">:</span> {\n      type<span class="token punctuation">:</span> Number<span class="token punctuation">,</span>\n      <span class="token keyword">default</span><span class="token punctuation">:</span><span class="token number">0</span>\n    }\n  }\n}\n</code></pre>\n<h3 id="%E6%8F%92%E6%A7%BDslot">插槽slot<a class="anchor" href="#%E6%8F%92%E6%A7%BDslot">§</a></h3>\n<p>分发组件内容，多个slot使用具名插槽</p>\n<h3 id="%E4%BA%8B%E4%BB%B6event">事件event<a class="anchor" href="#%E4%BA%8B%E4%BB%B6event">§</a></h3>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E7%BB%84%E4%BB%B6%E7%9A%84%E5%88%86%E7%B1%BB" }, "\u7EC4\u4EF6\u7684\u5206\u7C7B")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E7%BB%84%E4%BB%B6%E7%9A%84%E6%9E%84%E6%88%90" }, "\u7EC4\u4EF6\u7684\u6784\u6210"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E5%B1%9E%E6%80%A7props" }, "\u5C5E\u6027props")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E6%8F%92%E6%A7%BDslot" }, "\u63D2\u69FDslot")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E4%BA%8B%E4%BB%B6event" }, "\u4E8B\u4EF6event")))))),
    'author': "dingdtt",
    'contributors': [
        "dingdtt"
    ],
    'date': "2020-07-27T10:04:19.000Z",
    'updated': "2020-10-16T08:42:52.000Z",
    'excerpt': "组件的分类 页面组件 独立组件 业务组件 组件的构成 属性props prop定义了组件有哪些可配置的属性，props是单向数据流，组件不能自己修改只能通知父组件，由父组件修改。 inheritAttrs:true html的自带属性，会默认继承 const ...",
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
