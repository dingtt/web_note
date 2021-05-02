import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "基础",
        "link": "js/Object.html"
    },
    'next': {
        "text": "闭包和面向对象",
        "link": "js/closure.html"
    },
    config: { "root": "/", ...projectConfig, branch: 'gh-pages' },
    'pagePath': "js/context.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "js/context.html",
    'title': "执行上下文",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>执行上下文</h1>\n<p>执行上下文时执行JavaScript代码的环境的抽象概念</p>\n<h3 id="%E7%B1%BB%E5%9E%8B">类型<a class="anchor" href="#%E7%B1%BB%E5%9E%8B">§</a></h3>\n<p>全局执行上下文：</p>\n<p>执行创建window对象，设置this</p>\n<p>函数执行上下文</p>\n<p>调用函数时创建，可以有多个。</p>\n<h3 id="%E8%B0%83%E7%94%A8%E6%A0%88">调用栈<a class="anchor" href="#%E8%B0%83%E7%94%A8%E6%A0%88">§</a></h3>\n<p>即执行栈，后进先出，用来存储代码运行时创建的所有执行上下文。</p>\n<p>创建全局执行上下文入栈；创建函数执行上下文入栈，函数执行完出栈。</p>\n<h3 id="%E5%88%9B%E5%BB%BA%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87">创建执行上下文<a class="anchor" href="#%E5%88%9B%E5%BB%BA%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87">§</a></h3>\n<p>this值的决定，（全局，引用对象调用，）</p>\n<p>AO activetion Object 活动对象，对应函数的执行阶段</p>\n<ul>\n<li>\n<p>函数的局部变量</p>\n</li>\n<li>\n<p>函数的所有命名参数</p>\n</li>\n<li>\n<p>函数的参数集合</p>\n</li>\n<li>\n<p>函数的this指向</p>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>全局词法环境</th>\n<th>对象环境记录器</th>\n<th></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td></td>\n<td>外部引用</td>\n<td>null</td>\n</tr>\n<tr>\n<td>函数词法环境</td>\n<td>声明式环境记录器</td>\n<td></td>\n</tr>\n<tr>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div>\n</li>\n</ul>\n<h4 id="%E5%88%9B%E5%BB%BA%E8%AF%8D%E6%B3%95%E7%8E%AF%E5%A2%83">创建词法环境<a class="anchor" href="#%E5%88%9B%E5%BB%BA%E8%AF%8D%E6%B3%95%E7%8E%AF%E5%A2%83">§</a></h4>\n<p>词法环境是一种持有标识符和变量映射的接口，标识符指变量名，变量的实际对象或原始数据的引用。</p>\n<p><strong>两个组件</strong></p>\n<ol>\n<li><strong>环境记录器</strong>是存储变量和函数声明的实际位置。</li>\n<li><strong>外部环境的引用</strong>意味着它可以访问其父级词法环境（作用域）</li>\n</ol>\n<p><strong>两种类型</strong></p>\n<p><strong>全局词法环境</strong>，全局环境的外部引用为null，环境记录器是对象环境记录器，用来定义出现在全局上下文中的<strong>变量和函数</strong>的关系。</p>\n<p><strong>函数词法环境</strong></p>\n<p>函数内部用户定义的变量，存储在声明式环境记录器，<strong>存储变量/函数/参数</strong>。声明式环境记录器，包含了arguments对象杰恩传递给函数的参数的length。</p>\n<p>对象</p>\n<h4 id="%E5%88%9B%E5%BB%BA%E5%8F%98%E9%87%8F%E7%8E%AF%E5%A2%83">创建变量环境<a class="anchor" href="#%E5%88%9B%E5%BB%BA%E5%8F%98%E9%87%8F%E7%8E%AF%E5%A2%83">§</a></h4>\n<p>变量环境同样是一个词法环境，其环境记录器持有<strong>变量声明语句</strong>在执行上下文中创建的绑定关系。</p>\n<p>在 ES6 中，<strong>词法环境</strong>组件和<strong>变量环境</strong>的一个不同就是前者被用来存储函数声明和变量（<code>let</code> 和 <code>const</code>）绑定，而后者只用来存储 <code>var</code> 变量绑定。</p>\n<h2 id="%E5%B9%BF%E4%B9%89%E7%9A%84%E9%97%AD%E5%8C%85js%E7%B2%BE%E7%B2%B9">广义的闭包——JS精粹<a class="anchor" href="#%E5%B9%BF%E4%B9%89%E7%9A%84%E9%97%AD%E5%8C%85js%E7%B2%BE%E7%B2%B9">§</a></h2>\n<p>函数是可以实例化的，既可以被静态的声明，实例化，也可以被动态的创建。脚本和模块</p>\n<p>函数在语法上的声明，与执行期的实例，以及实例的多次执行，都是一对多的关系。</p>\n<p>JS中用闭包来代指一个函数实例在运行期的作用域。也就是说，闭包是记录函数实例在运行期间的“可访问标识符”的结构。</p>\n<p>对于函数声明来说叫做实例化，对应函数表达式来说叫做 创建函数的实例。</p>\n<p>闭包内的初始信息就是函数代码体中的那些声明，更复杂的信息还包括“运行中的函数实例”的引用、坏境，以及由包含upvalue在内的作用域链等。</p>\n<p>在运行过程中，子函数闭包可以访问upvalue；同一个函数中所有的子函数，访问一份相同值的upvalue。</p>\n<p>arguments.callee</p>\n<ul>\n<li>函数实例可以拥有多个闭包</li>\n<li>函数实例于闭包的生命周期是分别管理的</li>\n<li>函数被调用时总是初始化一个闭包；而上次调用中的闭包是否销毁，取决于该闭包中是否有被（其他闭包）引用的变量/数据。</li>\n</ul>\n<p>函数开始执行时， js会创建一个执行环境（上下文），并将其可用标识符列表指向函数实例中的作用域，从而完成作用域到闭包的概念上的映射。闭包在根本上是运行环境中对作用域的一个引用。</p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u6267\u884C\u4E0A\u4E0B\u6587"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>执行上下文时执行JavaScript代码的环境的抽象概念</p>\n<h3 id="%E7%B1%BB%E5%9E%8B">类型<a class="anchor" href="#%E7%B1%BB%E5%9E%8B">§</a></h3>\n<p>全局执行上下文：</p>\n<p>执行创建window对象，设置this</p>\n<p>函数执行上下文</p>\n<p>调用函数时创建，可以有多个。</p>\n<h3 id="%E8%B0%83%E7%94%A8%E6%A0%88">调用栈<a class="anchor" href="#%E8%B0%83%E7%94%A8%E6%A0%88">§</a></h3>\n<p>即执行栈，后进先出，用来存储代码运行时创建的所有执行上下文。</p>\n<p>创建全局执行上下文入栈；创建函数执行上下文入栈，函数执行完出栈。</p>\n<h3 id="%E5%88%9B%E5%BB%BA%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87">创建执行上下文<a class="anchor" href="#%E5%88%9B%E5%BB%BA%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87">§</a></h3>\n<p>this值的决定，（全局，引用对象调用，）</p>\n<p>AO activetion Object 活动对象，对应函数的执行阶段</p>\n<ul>\n<li>\n<p>函数的局部变量</p>\n</li>\n<li>\n<p>函数的所有命名参数</p>\n</li>\n<li>\n<p>函数的参数集合</p>\n</li>\n<li>\n<p>函数的this指向</p>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>全局词法环境</th>\n<th>对象环境记录器</th>\n<th></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td></td>\n<td>外部引用</td>\n<td>null</td>\n</tr>\n<tr>\n<td>函数词法环境</td>\n<td>声明式环境记录器</td>\n<td></td>\n</tr>\n<tr>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div>\n</li>\n</ul>\n<h4 id="%E5%88%9B%E5%BB%BA%E8%AF%8D%E6%B3%95%E7%8E%AF%E5%A2%83">创建词法环境<a class="anchor" href="#%E5%88%9B%E5%BB%BA%E8%AF%8D%E6%B3%95%E7%8E%AF%E5%A2%83">§</a></h4>\n<p>词法环境是一种持有标识符和变量映射的接口，标识符指变量名，变量的实际对象或原始数据的引用。</p>\n<p><strong>两个组件</strong></p>\n<ol>\n<li><strong>环境记录器</strong>是存储变量和函数声明的实际位置。</li>\n<li><strong>外部环境的引用</strong>意味着它可以访问其父级词法环境（作用域）</li>\n</ol>\n<p><strong>两种类型</strong></p>\n<p><strong>全局词法环境</strong>，全局环境的外部引用为null，环境记录器是对象环境记录器，用来定义出现在全局上下文中的<strong>变量和函数</strong>的关系。</p>\n<p><strong>函数词法环境</strong></p>\n<p>函数内部用户定义的变量，存储在声明式环境记录器，<strong>存储变量/函数/参数</strong>。声明式环境记录器，包含了arguments对象杰恩传递给函数的参数的length。</p>\n<p>对象</p>\n<h4 id="%E5%88%9B%E5%BB%BA%E5%8F%98%E9%87%8F%E7%8E%AF%E5%A2%83">创建变量环境<a class="anchor" href="#%E5%88%9B%E5%BB%BA%E5%8F%98%E9%87%8F%E7%8E%AF%E5%A2%83">§</a></h4>\n<p>变量环境同样是一个词法环境，其环境记录器持有<strong>变量声明语句</strong>在执行上下文中创建的绑定关系。</p>\n<p>在 ES6 中，<strong>词法环境</strong>组件和<strong>变量环境</strong>的一个不同就是前者被用来存储函数声明和变量（<code>let</code> 和 <code>const</code>）绑定，而后者只用来存储 <code>var</code> 变量绑定。</p>\n<h2 id="%E5%B9%BF%E4%B9%89%E7%9A%84%E9%97%AD%E5%8C%85js%E7%B2%BE%E7%B2%B9">广义的闭包——JS精粹<a class="anchor" href="#%E5%B9%BF%E4%B9%89%E7%9A%84%E9%97%AD%E5%8C%85js%E7%B2%BE%E7%B2%B9">§</a></h2>\n<p>函数是可以实例化的，既可以被静态的声明，实例化，也可以被动态的创建。脚本和模块</p>\n<p>函数在语法上的声明，与执行期的实例，以及实例的多次执行，都是一对多的关系。</p>\n<p>JS中用闭包来代指一个函数实例在运行期的作用域。也就是说，闭包是记录函数实例在运行期间的“可访问标识符”的结构。</p>\n<p>对于函数声明来说叫做实例化，对应函数表达式来说叫做 创建函数的实例。</p>\n<p>闭包内的初始信息就是函数代码体中的那些声明，更复杂的信息还包括“运行中的函数实例”的引用、坏境，以及由包含upvalue在内的作用域链等。</p>\n<p>在运行过程中，子函数闭包可以访问upvalue；同一个函数中所有的子函数，访问一份相同值的upvalue。</p>\n<p>arguments.callee</p>\n<ul>\n<li>函数实例可以拥有多个闭包</li>\n<li>函数实例于闭包的生命周期是分别管理的</li>\n<li>函数被调用时总是初始化一个闭包；而上次调用中的闭包是否销毁，取决于该闭包中是否有被（其他闭包）引用的变量/数据。</li>\n</ul>\n<p>函数开始执行时， js会创建一个执行环境（上下文），并将其可用标识符列表指向函数实例中的作用域，从而完成作用域到闭包的概念上的映射。闭包在根本上是运行环境中对作用域的一个引用。</p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E7%B1%BB%E5%9E%8B" }, "\u7C7B\u578B")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E8%B0%83%E7%94%A8%E6%A0%88" }, "\u8C03\u7528\u6808")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%88%9B%E5%BB%BA%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87" }, "\u521B\u5EFA\u6267\u884C\u4E0A\u4E0B\u6587"),
                React.createElement("ol", null)),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%B9%BF%E4%B9%89%E7%9A%84%E9%97%AD%E5%8C%85js%E7%B2%BE%E7%B2%B9" }, "\u5E7F\u4E49\u7684\u95ED\u5305\u2014\u2014JS\u7CBE\u7CB9")))),
    'author': "dingtt",
    'contributors': [
        "dingtt",
        "dingdtt"
    ],
    'date': "2020-10-11T14:02:16.000Z",
    'updated': "2020-12-21T02:57:59.000Z",
    'excerpt': "执行上下文时执行JavaScript代码的环境的抽象概念 类型 全局执行上下文： 执行创建window对象，设置this 函数执行上下文 调用函数时创建，可以有多个。 调用栈 即执行栈，后进先出，用来存储代码运行时创建的所有执行上下文。 ...",
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
