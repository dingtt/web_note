import projectConfig from '/pagic.config.js';
export default {
    'prev': undefined,
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: 'gh-pages' },
    'pagePath': "webAPI/video.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "webAPI/video.html",
    'title': "视频",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>视频</h1>\n<h2 id="%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E5%8D%8F%E8%AE%AE">视频播放协议<a class="anchor" href="#%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E5%8D%8F%E8%AE%AE">§</a></h2>\n<h3 id="hls">HLS<a class="anchor" href="#hls">§</a></h3>\n<p>Extended M3U（m3u8）Playlist 文件，用于寻找可用的媒体流。</p>\n<p>如果要做视频版权保护，那我们可以考虑使用对称加密算法，比如 AES-128 对切片进行对称加密。当客户端进行播放时，先根据 m3u8 文件中配置的密钥服务器地址，获取对称加密的密钥，然后再下载分片，当分片下载完成后再使用匹配的对称加密算法进行解密播放。</p>\n<p>hlv.js</p>\n<p>基于 HLS 流媒体协议视频加密的解决方案框架 <a href="https://github.com/hauk0101/video-hls-encrypt">video-hls-encrypt</a></p>\n<p>FFmpeg</p>\n<h3 id="dash">DASH<a class="anchor" href="#dash">§</a></h3>\n<p><strong>基于 HTTP 的动态自适应流</strong></p>\n<p>MPEG-DASH 是首个基于 HTTP 的自适应比特率流解决方案，MPEG-DASH 客户端可以无缝适应不断变化的网络条件并提供高质量的播放体验，<strong>可以接受任何编码格式编码的内容</strong></p>\n<h3 id="flv">FLV<a class="anchor" href="#flv">§</a></h3>\n<p>FLV 是 FLASH Video 的简称，FLV 文件由 FLV Header 和 FLV Body 两部分构成，而 FLV Body 由一系列的 Tag 构成：</p>\n<p>flv.js</p>\n<p><a href="https://github.com/Bilibili/flv.js/">flv.js</a> 是用纯 JavaScript 编写的 HTML5 Flash Video（FLV）播放器，它底层依赖于 <a href="https://w3c.github.io/media-source/">Media Source Extensions</a>。在实际运行过程中，它会自动解析 FLV 格式文件并喂给原生 HTML5 Video 标签播放音视频数据</p>\n<p>vue视频播放器插件  video.js</p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u89C6\u9891"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E5%8D%8F%E8%AE%AE">视频播放协议<a class="anchor" href="#%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E5%8D%8F%E8%AE%AE">§</a></h2>\n<h3 id="hls">HLS<a class="anchor" href="#hls">§</a></h3>\n<p>Extended M3U（m3u8）Playlist 文件，用于寻找可用的媒体流。</p>\n<p>如果要做视频版权保护，那我们可以考虑使用对称加密算法，比如 AES-128 对切片进行对称加密。当客户端进行播放时，先根据 m3u8 文件中配置的密钥服务器地址，获取对称加密的密钥，然后再下载分片，当分片下载完成后再使用匹配的对称加密算法进行解密播放。</p>\n<p>hlv.js</p>\n<p>基于 HLS 流媒体协议视频加密的解决方案框架 <a href="https://github.com/hauk0101/video-hls-encrypt">video-hls-encrypt</a></p>\n<p>FFmpeg</p>\n<h3 id="dash">DASH<a class="anchor" href="#dash">§</a></h3>\n<p><strong>基于 HTTP 的动态自适应流</strong></p>\n<p>MPEG-DASH 是首个基于 HTTP 的自适应比特率流解决方案，MPEG-DASH 客户端可以无缝适应不断变化的网络条件并提供高质量的播放体验，<strong>可以接受任何编码格式编码的内容</strong></p>\n<h3 id="flv">FLV<a class="anchor" href="#flv">§</a></h3>\n<p>FLV 是 FLASH Video 的简称，FLV 文件由 FLV Header 和 FLV Body 两部分构成，而 FLV Body 由一系列的 Tag 构成：</p>\n<p>flv.js</p>\n<p><a href="https://github.com/Bilibili/flv.js/">flv.js</a> 是用纯 JavaScript 编写的 HTML5 Flash Video（FLV）播放器，它底层依赖于 <a href="https://w3c.github.io/media-source/">Media Source Extensions</a>。在实际运行过程中，它会自动解析 FLV 格式文件并喂给原生 HTML5 Video 标签播放音视频数据</p>\n<p>vue视频播放器插件  video.js</p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E5%8D%8F%E8%AE%AE" }, "\u89C6\u9891\u64AD\u653E\u534F\u8BAE"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#hls" }, "HLS")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#dash" }, "DASH")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#flv" }, "FLV")))))),
    'author': "dingdtt",
    'contributors': [
        "dingdtt"
    ],
    'date': "2020-07-27T10:04:19.000Z",
    'updated': "2020-10-16T08:42:52.000Z",
    'excerpt': "视频播放协议 HLS Extended M3U（m3u8）Playlist 文件，用于寻找可用的媒体流。 如果要做视频版权保护，那我们可以考虑使用对称加密算法，比如 AES-128 对切片进行对称加密。当客户端进行播放时，先根据 m3u8 文件中配置的密钥...",
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
