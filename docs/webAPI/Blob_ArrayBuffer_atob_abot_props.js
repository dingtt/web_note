import projectConfig from '/pagic.config.js';
export default {
    'prev': undefined,
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: 'gh-pages' },
    'pagePath': "webAPI/Blob_ArrayBuffer_atob_abot.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "webAPI/Blob_ArrayBuffer_atob_abot.html",
    'title': "二进制文件",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>二进制文件</h1>\n<p>Blob（Binary Large Object）表示二进制类型的大对象。在 JavaScript 中 Blob 类型的对象表示不可变的类似文件对象的原始数据。</p>\n<p><code>Blob</code> 由一个可选的字符串 <code>type</code>（通常是 MIME 类型）和 <code>blobParts</code> 组成：</p>\n<blockquote>\n<p>MIME（Multipurpose Internet Mail Extensions）多用途互联网邮件扩展类型，是设定某种扩展名的文件用一种应用程序来打开的方式类型，当该扩展名文件被访问的时候，浏览器会自动使用指定应用程序来打开。多用于指定一些客户端自定义的文件名，以及一些媒体文件打开方式。</p>\n<p>常见的 MIME 类型有：超文本标记语言文本 .html text/html、PNG图像 .png image/png、普通文本 .txt text/plain 等。</p>\n</blockquote>\n<p>myBlob 对象含有两个属性：size 和 type。其中 <code>size</code> 属性用于表示数据的大小（以字节为单位），<code>type</code> 是 MIME 类型的字符串。Blob 表示的不一定是 JavaScript 原生格式的数据。比如 <code>File</code> 接口基于 <code>Blob</code>，继承了 blob 的功能并将其扩展使其支持用户系统上的文件\n浏览器内部为每个通过<code>URL.createObjectURL</code> 生成的 URL 存储了一个 URL → Blob 映射。生成的 URL 仅在当前文档打开的状态下才有效。我们可以调用 <code>URL.revokeObjectURL(url)</code> 方法，从内部映射中删除引用，从而允许删除 Blob（如果没有其他引用），并释放内存。</p>\n<p>ArrayBuffer 用于表示通用的，固定长度的原始二进制数据缓冲区。你不能直接操纵 ArrayBuffer 的内容，而是需要创建一个 TypedArray 对象或 DataView 对象，</p>\n<p>Blob 对象是不可变的，而 ArrayBuffer 是可以通过 TypedArrays 或 DataView 来操作。</p>\n<p>ArrayBuffer 是存在内存中的，可以直接操作。而 Blob 可以位于磁盘、高速缓存内存和其他不可用的位置。</p>\n<p>Blob 与 ArrayBuffer 对象之间是可以相互转化的：</p>\n<ul>\n<li>使用 FileReader 的 <code>readAsArrayBuffer()</code> 方法，可以把 Blob 对象转换为 ArrayBuffer 对象；</li>\n<li>使用 Blob 构造函数，如 <code>new Blob([new Uint8Array(data]);</code>，可以把 ArrayBuffer 对象转换为 Blob 对象。</li>\n</ul>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u4E8C\u8FDB\u5236\u6587\u4EF6"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>Blob（Binary Large Object）表示二进制类型的大对象。在 JavaScript 中 Blob 类型的对象表示不可变的类似文件对象的原始数据。</p>\n<p><code>Blob</code> 由一个可选的字符串 <code>type</code>（通常是 MIME 类型）和 <code>blobParts</code> 组成：</p>\n<blockquote>\n<p>MIME（Multipurpose Internet Mail Extensions）多用途互联网邮件扩展类型，是设定某种扩展名的文件用一种应用程序来打开的方式类型，当该扩展名文件被访问的时候，浏览器会自动使用指定应用程序来打开。多用于指定一些客户端自定义的文件名，以及一些媒体文件打开方式。</p>\n<p>常见的 MIME 类型有：超文本标记语言文本 .html text/html、PNG图像 .png image/png、普通文本 .txt text/plain 等。</p>\n</blockquote>\n<p>myBlob 对象含有两个属性：size 和 type。其中 <code>size</code> 属性用于表示数据的大小（以字节为单位），<code>type</code> 是 MIME 类型的字符串。Blob 表示的不一定是 JavaScript 原生格式的数据。比如 <code>File</code> 接口基于 <code>Blob</code>，继承了 blob 的功能并将其扩展使其支持用户系统上的文件\n浏览器内部为每个通过<code>URL.createObjectURL</code> 生成的 URL 存储了一个 URL → Blob 映射。生成的 URL 仅在当前文档打开的状态下才有效。我们可以调用 <code>URL.revokeObjectURL(url)</code> 方法，从内部映射中删除引用，从而允许删除 Blob（如果没有其他引用），并释放内存。</p>\n<p>ArrayBuffer 用于表示通用的，固定长度的原始二进制数据缓冲区。你不能直接操纵 ArrayBuffer 的内容，而是需要创建一个 TypedArray 对象或 DataView 对象，</p>\n<p>Blob 对象是不可变的，而 ArrayBuffer 是可以通过 TypedArrays 或 DataView 来操作。</p>\n<p>ArrayBuffer 是存在内存中的，可以直接操作。而 Blob 可以位于磁盘、高速缓存内存和其他不可用的位置。</p>\n<p>Blob 与 ArrayBuffer 对象之间是可以相互转化的：</p>\n<ul>\n<li>使用 FileReader 的 <code>readAsArrayBuffer()</code> 方法，可以把 Blob 对象转换为 ArrayBuffer 对象；</li>\n<li>使用 Blob 构造函数，如 <code>new Blob([new Uint8Array(data]);</code>，可以把 ArrayBuffer 对象转换为 Blob 对象。</li>\n</ul>'
        } }),
    'toc': null,
    'author': "dingdtt",
    'contributors': [
        "dingdtt"
    ],
    'date': "2020-07-27T10:04:19.000Z",
    'updated': "2020-10-16T08:42:52.000Z",
    'excerpt': "Blob（Binary Large Object）表示二进制类型的大对象。在 JavaScript 中 Blob 类型的对象表示不可变的类似文件对象的原始数据。 Blob 由一个可选的字符串 type（通常是 MIME 类型）和 blobParts 组成： myBlob 对象含有两个属性...",
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
