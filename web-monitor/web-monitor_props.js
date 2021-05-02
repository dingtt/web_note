import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "webpack-dev-server 与 HMR",
        "link": "webpack/webpack-dev-server-hmr.html"
    },
    'next': {
        "text": "Git使用",
        "link": "git/git.html"
    },
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "web-monitor/web-monitor.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "web-monitor/web-monitor.html",
    'title': "前端监控简介",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>前端监控简介</h1>\n<p>比用户更早发现问题，在用户发现问题之前解决问题</p>\n<h2 id="%E7%9B%91%E6%8E%A7%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86">监控数据采集<a class="anchor" href="#%E7%9B%91%E6%8E%A7%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86">§</a></h2>\n<ul>\n<li>异常监控 自动上报\n<ul>\n<li>javaScript错误，含React/Vue等常用框架采集</li>\n<li>用户登录失败，图片加载失败，页面加载失败等</li>\n<li>服务器接口返回数据错误</li>\n</ul>\n</li>\n<li>性能监控 自动上报\n<ul>\n<li>页面性能— 白屏时间 ，用户可交互时间，全部加载完成时间......</li>\n<li>H5单页面应用组件性能</li>\n</ul>\n</li>\n<li>环境相关数据 自动上报\n<ul>\n<li>浏览器分布</li>\n<li>用户设备分布</li>\n<li>地理位置分布</li>\n</ul>\n</li>\n<li>用户行为数据\n<ul>\n<li>用户平均在线时长</li>\n<li>模块使用频次</li>\n</ul>\n</li>\n<li>自定义异常上报</li>\n</ul>\n<h2 id="%E6%95%B0%E6%8D%AE%E5%A4%84%E7%90%86">数据处理<a class="anchor" href="#%E6%95%B0%E6%8D%AE%E5%A4%84%E7%90%86">§</a></h2>\n<ul>\n<li>数据上传 （跨域，内外网解决方案）</li>\n<li>数据集群</li>\n<li>临时数据存储</li>\n<li>数据清洗</li>\n<li>数据库存储</li>\n</ul>\n<h2 id="%E7%9B%91%E6%8E%A7%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96">监控数据可视化<a class="anchor" href="#%E7%9B%91%E6%8E%A7%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96">§</a></h2>\n<ul>\n<li>组件（页面）开发者账户及权限模块</li>\n<li>组件信息模块</li>\n<li>报错可视化模块</li>\n<li>性能可视化模块</li>\n<li>报警模块 邮件微信通知 异常朔源</li>\n</ul>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u524D\u7AEF\u76D1\u63A7\u7B80\u4ECB"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>比用户更早发现问题，在用户发现问题之前解决问题</p>\n<h2 id="%E7%9B%91%E6%8E%A7%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86">监控数据采集<a class="anchor" href="#%E7%9B%91%E6%8E%A7%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86">§</a></h2>\n<ul>\n<li>异常监控 自动上报\n<ul>\n<li>javaScript错误，含React/Vue等常用框架采集</li>\n<li>用户登录失败，图片加载失败，页面加载失败等</li>\n<li>服务器接口返回数据错误</li>\n</ul>\n</li>\n<li>性能监控 自动上报\n<ul>\n<li>页面性能— 白屏时间 ，用户可交互时间，全部加载完成时间......</li>\n<li>H5单页面应用组件性能</li>\n</ul>\n</li>\n<li>环境相关数据 自动上报\n<ul>\n<li>浏览器分布</li>\n<li>用户设备分布</li>\n<li>地理位置分布</li>\n</ul>\n</li>\n<li>用户行为数据\n<ul>\n<li>用户平均在线时长</li>\n<li>模块使用频次</li>\n</ul>\n</li>\n<li>自定义异常上报</li>\n</ul>\n<h2 id="%E6%95%B0%E6%8D%AE%E5%A4%84%E7%90%86">数据处理<a class="anchor" href="#%E6%95%B0%E6%8D%AE%E5%A4%84%E7%90%86">§</a></h2>\n<ul>\n<li>数据上传 （跨域，内外网解决方案）</li>\n<li>数据集群</li>\n<li>临时数据存储</li>\n<li>数据清洗</li>\n<li>数据库存储</li>\n</ul>\n<h2 id="%E7%9B%91%E6%8E%A7%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96">监控数据可视化<a class="anchor" href="#%E7%9B%91%E6%8E%A7%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96">§</a></h2>\n<ul>\n<li>组件（页面）开发者账户及权限模块</li>\n<li>组件信息模块</li>\n<li>报错可视化模块</li>\n<li>性能可视化模块</li>\n<li>报警模块 邮件微信通知 异常朔源</li>\n</ul>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E7%9B%91%E6%8E%A7%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86" }, "\u76D1\u63A7\u6570\u636E\u91C7\u96C6")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%95%B0%E6%8D%AE%E5%A4%84%E7%90%86" }, "\u6570\u636E\u5904\u7406")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E7%9B%91%E6%8E%A7%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96" }, "\u76D1\u63A7\u6570\u636E\u53EF\u89C6\u5316")))),
    'author': "dingtt",
    'contributors': [
        "dingtt"
    ],
    'date': "2021-05-02T08:22:31.000Z",
    'updated': null,
    'excerpt': "比用户更早发现问题，在用户发现问题之前解决问题 监控数据采集 - 异常监控 自动上报 - javaScript错误，含React/Vue等常用框架采集 - 用户登录失败，图片加载失败，页面加载失败等 - 服务器接口返回数据错误 - 性能监控 自动上...",
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
