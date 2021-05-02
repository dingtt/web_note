import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "HTTP协议请求方法和状态码",
        "link": "HTTP/HTTP.html"
    },
    'next': {
        "text": "JavaScript基础",
        "link": "js/basics.html"
    },
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "HTTP/internet-hardware.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "HTTP/internet-hardware.html",
    'title': "网络硬件",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>网络硬件</h1>\n<p><strong>信号在网线和集线器中传输</strong></p>\n<p>每个网络包都是独立传输的，帧序列检测。</p>\n<p>双绞线防止形成电磁波干扰，两根信号线缠绕抵消外界的电磁波干扰，改变节距正负相抵邻线的干扰。</p>\n<p>集线器将信号发送给所有连接在它上面的线路，同时输入多个信号会发送碰撞。</p>\n<p><strong>交换机的包转发工作</strong></p>\n<p>MAC地址维护</p>\n<p>收到包时，将发送方MAC地址以及其输入端口的号码写入MAC地址表，只要发过网络包就会记录，然后也可用于接受包。</p>\n<p>过时的记录会进行删除，一般为几分钟。</p>\n<p>当交换机发现一个包要发回源地址端口时，就会直接丢弃这个包。</p>\n<p>如果在MAC地址表中无法找到指定地址，则会将包转发到除了原端口之外的所有端口。只要返回了响应包，就可以将它的地址写入地址表。</p>\n<p>双全工模式可以同时发送和接受信号，确定最优的传输速率，没有数据传输时，填充脉冲信号。</p>\n<p>可以同时执行多个转发操作。</p>\n<p><strong>路由器的包转发操作</strong></p>\n<p>路由器的各个端口都具有MAC地址和IP地址。</p>\n<p>委托端口中的硬件将包接收进来，丢弃包开头的MAC头部，转发模块根据包的IP头部的接收放IP地址，查询路由表中的记录，判断包的转发目标，将包转移到转发目标对应的端口，然后按照硬件（接入网）的规则将包发送出去（下一个路由）。找不到目标IP，会丢弃包，并通知发送方。</p>\n<p>判断转发目标，如果路由表中的网关列内容为IP，则使用该IP，如为空，则使用IP头部中接收方的IP。</p>\n<p>ARP，根据IP地址查询MAC地址的协议，路由器也有ARP缓存，</p>\n<p><strong>路由器的附加功能</strong></p>\n<p>路由器可以进行IP地址转换，将发送方内网IP转为公网IP和端口，用端口区分内网中的不同终端。</p>\n<p>从互联网访问公司内网，需要把服务器放到地址转换设备之外，或者将服务器私有地址手动添加到地址转换设备中。</p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u7F51\u7EDC\u786C\u4EF6"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p><strong>信号在网线和集线器中传输</strong></p>\n<p>每个网络包都是独立传输的，帧序列检测。</p>\n<p>双绞线防止形成电磁波干扰，两根信号线缠绕抵消外界的电磁波干扰，改变节距正负相抵邻线的干扰。</p>\n<p>集线器将信号发送给所有连接在它上面的线路，同时输入多个信号会发送碰撞。</p>\n<p><strong>交换机的包转发工作</strong></p>\n<p>MAC地址维护</p>\n<p>收到包时，将发送方MAC地址以及其输入端口的号码写入MAC地址表，只要发过网络包就会记录，然后也可用于接受包。</p>\n<p>过时的记录会进行删除，一般为几分钟。</p>\n<p>当交换机发现一个包要发回源地址端口时，就会直接丢弃这个包。</p>\n<p>如果在MAC地址表中无法找到指定地址，则会将包转发到除了原端口之外的所有端口。只要返回了响应包，就可以将它的地址写入地址表。</p>\n<p>双全工模式可以同时发送和接受信号，确定最优的传输速率，没有数据传输时，填充脉冲信号。</p>\n<p>可以同时执行多个转发操作。</p>\n<p><strong>路由器的包转发操作</strong></p>\n<p>路由器的各个端口都具有MAC地址和IP地址。</p>\n<p>委托端口中的硬件将包接收进来，丢弃包开头的MAC头部，转发模块根据包的IP头部的接收放IP地址，查询路由表中的记录，判断包的转发目标，将包转移到转发目标对应的端口，然后按照硬件（接入网）的规则将包发送出去（下一个路由）。找不到目标IP，会丢弃包，并通知发送方。</p>\n<p>判断转发目标，如果路由表中的网关列内容为IP，则使用该IP，如为空，则使用IP头部中接收方的IP。</p>\n<p>ARP，根据IP地址查询MAC地址的协议，路由器也有ARP缓存，</p>\n<p><strong>路由器的附加功能</strong></p>\n<p>路由器可以进行IP地址转换，将发送方内网IP转为公网IP和端口，用端口区分内网中的不同终端。</p>\n<p>从互联网访问公司内网，需要把服务器放到地址转换设备之外，或者将服务器私有地址手动添加到地址转换设备中。</p>'
        } }),
    'toc': null,
    'author': "dingtt",
    'contributors': [
        "dingtt"
    ],
    'date': "2021-05-02T08:22:31.000Z",
    'updated': null,
    'excerpt': "信号在网线和集线器中传输 每个网络包都是独立传输的，帧序列检测。 双绞线防止形成电磁波干扰，两根信号线缠绕抵消外界的电磁波干扰，改变节距正负相抵邻线的干扰。 集线器将信号发送给所有连接在它上面的线路，同时输入多个信...",
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
