import projectConfig from '/pagic.config.js';
export default {
    'prev': undefined,
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: 'gh-pages' },
    'pagePath': "vue/Vue-prin.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "vue/Vue-prin.html",
    'title': undefined,
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>render的优先级高于template</p>\n<p>template必须有mount()</p>\n<p>创建的顺序自上而下</p>\n<p>挂载的顺序自下而上</p>\n<p>initinject  在 initstate  initprovide之前</p>\n<p>new Vue() =&gt; _init() =&gt; $mount() =&gt; _render() =&gt; _update()</p>\n<h4 id="%E6%95%B0%E6%8D%AE%E5%93%8D%E5%BA%94%E5%BC%8F">数据响应式<a class="anchor" href="#%E6%95%B0%E6%8D%AE%E5%93%8D%E5%BA%94%E5%BC%8F">§</a></h4>\n<p>Vue实例在初始化的时候接收以下几种数据，</p>\n<p>template props data  computed  watch methods</p>\n<p>依赖收集</p>\n<p><strong>Dep类</strong>，</p>\n<p>存储订阅者，有 addDep，removeDep, depend ，notify方法</p>\n<p>Vue为数据中的每一个key维护一个订阅者列表，<code>const dep = new Dep()</code>，设置get，set，并在值改变时通知所有的订阅者。<code>dep.notify()</code></p>\n<p>对key进行取值时，如果Dep.target有值，才添加订阅者，大多时候Dep.target为空，只有订阅者正在进行订阅时才有值。</p>\n<p>pushTarget 的同时，存入targetStack</p>\n<p><strong>Watcher订阅者类</strong>，初始化时接收getter，callback两个函数作为参数，getter用来计算订阅者的值，其在执行时会对订阅者所有需要的key进行取值。当watcher被触发时，会重新通过getter计算当前watcher的值，如果值改变，则运行callback。</p>\n<p>方法： get  addDep   cleanupDeps  update run  evaluate depend  teardown</p>\n<p>queueWatcher() 是一个核心方法，去除重复操作，调用 flushSchedulerQueue() 刷新队列并执行 watcher。</p>\n<ul>\n<li>实例化的时候调用get方法，将自己放在Dep.target上<code>pushTarget(this)</code></li>\n<li>执行getter，对自己依赖的key进行取值 <code>this.getter.call(vm,vm)</code></li>\n<li>将自己从Dep.target移除 <code>popTarget()</code></li>\n<li>清理之前的订阅 <code>this.cleanupDeps()</code></li>\n</ul>\n<p><em>获得通知的订阅者并不会被立即触发</em>，而是被放入待触发数组，在下一个周期触发。</p>\n<p>订阅者在被触发时，会执行getter计算值，值变化才会触发callback</p>\n<p><strong>渲染watcher</strong></p>\n<p>vue实例化之后都会生成一个渲染watcher，这个watcher传入的getter是渲染dom的方法。</p>\n<pre class="language-autoit"><code class="language-autoit"><span class="token operator">/</span><span class="token operator">/</span> lifescyle<span class="token punctuation">.</span>js\nupdateComponent <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {\n  vm<span class="token punctuation">.</span><span class="token function">_update</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span><span class="token function">_render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> hydrating<span class="token punctuation">)</span>\n}\nvm<span class="token punctuation">.</span>_watcher <span class="token operator">=</span> new <span class="token function">Watcher</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> updateComponent<span class="token punctuation">,</span> noop<span class="token punctuation">)</span>\n</code></pre>\n<p>vm._render()结合模板和数据，计算出虚拟DOM vm._update()根据虚拟DOM渲染真实的DOM节点。</p>\n<p><strong>对对象和数组的处理</strong></p>\n<p>如果key的值为对象，</p>\n<p>递归对每一个key进行处理</p>\n<p>如果key的值为数组</p>\n<p>递归对数组中的每一个对象进行处理</p>\n<p>重新定义数组的7个方法，push pop shift unshift splice reverse ，调用以上方法时，key的dep会告诉订阅者值已变，如果是unshift，pop，splice，递归处理新增的项。</p>\n<p><strong>对模板的处理</strong></p>\n<p>将模板处理成一个渲染函数，需要重新渲染时，渲染函数结合data生成虚拟DOM，新旧虚拟DOM进行对比，对需要修改的部分，更新真实DOM。</p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': undefined,
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>render的优先级高于template</p>\n<p>template必须有mount()</p>\n<p>创建的顺序自上而下</p>\n<p>挂载的顺序自下而上</p>\n<p>initinject  在 initstate  initprovide之前</p>\n<p>new Vue() =&gt; _init() =&gt; $mount() =&gt; _render() =&gt; _update()</p>\n<h4 id="%E6%95%B0%E6%8D%AE%E5%93%8D%E5%BA%94%E5%BC%8F">数据响应式<a class="anchor" href="#%E6%95%B0%E6%8D%AE%E5%93%8D%E5%BA%94%E5%BC%8F">§</a></h4>\n<p>Vue实例在初始化的时候接收以下几种数据，</p>\n<p>template props data  computed  watch methods</p>\n<p>依赖收集</p>\n<p><strong>Dep类</strong>，</p>\n<p>存储订阅者，有 addDep，removeDep, depend ，notify方法</p>\n<p>Vue为数据中的每一个key维护一个订阅者列表，<code>const dep = new Dep()</code>，设置get，set，并在值改变时通知所有的订阅者。<code>dep.notify()</code></p>\n<p>对key进行取值时，如果Dep.target有值，才添加订阅者，大多时候Dep.target为空，只有订阅者正在进行订阅时才有值。</p>\n<p>pushTarget 的同时，存入targetStack</p>\n<p><strong>Watcher订阅者类</strong>，初始化时接收getter，callback两个函数作为参数，getter用来计算订阅者的值，其在执行时会对订阅者所有需要的key进行取值。当watcher被触发时，会重新通过getter计算当前watcher的值，如果值改变，则运行callback。</p>\n<p>方法： get  addDep   cleanupDeps  update run  evaluate depend  teardown</p>\n<p>queueWatcher() 是一个核心方法，去除重复操作，调用 flushSchedulerQueue() 刷新队列并执行 watcher。</p>\n<ul>\n<li>实例化的时候调用get方法，将自己放在Dep.target上<code>pushTarget(this)</code></li>\n<li>执行getter，对自己依赖的key进行取值 <code>this.getter.call(vm,vm)</code></li>\n<li>将自己从Dep.target移除 <code>popTarget()</code></li>\n<li>清理之前的订阅 <code>this.cleanupDeps()</code></li>\n</ul>\n<p><em>获得通知的订阅者并不会被立即触发</em>，而是被放入待触发数组，在下一个周期触发。</p>\n<p>订阅者在被触发时，会执行getter计算值，值变化才会触发callback</p>\n<p><strong>渲染watcher</strong></p>\n<p>vue实例化之后都会生成一个渲染watcher，这个watcher传入的getter是渲染dom的方法。</p>\n<pre class="language-autoit"><code class="language-autoit"><span class="token operator">/</span><span class="token operator">/</span> lifescyle<span class="token punctuation">.</span>js\nupdateComponent <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {\n  vm<span class="token punctuation">.</span><span class="token function">_update</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span><span class="token function">_render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> hydrating<span class="token punctuation">)</span>\n}\nvm<span class="token punctuation">.</span>_watcher <span class="token operator">=</span> new <span class="token function">Watcher</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> updateComponent<span class="token punctuation">,</span> noop<span class="token punctuation">)</span>\n</code></pre>\n<p>vm._render()结合模板和数据，计算出虚拟DOM vm._update()根据虚拟DOM渲染真实的DOM节点。</p>\n<p><strong>对对象和数组的处理</strong></p>\n<p>如果key的值为对象，</p>\n<p>递归对每一个key进行处理</p>\n<p>如果key的值为数组</p>\n<p>递归对数组中的每一个对象进行处理</p>\n<p>重新定义数组的7个方法，push pop shift unshift splice reverse ，调用以上方法时，key的dep会告诉订阅者值已变，如果是unshift，pop，splice，递归处理新增的项。</p>\n<p><strong>对模板的处理</strong></p>\n<p>将模板处理成一个渲染函数，需要重新渲染时，渲染函数结合data生成虚拟DOM，新旧虚拟DOM进行对比，对需要修改的部分，更新真实DOM。</p>'
        } }),
    'toc': null,
    'author': "dingtt",
    'contributors': [
        "dingtt"
    ],
    'date': "2020-11-04T14:24:34.000Z",
    'updated': null,
    'excerpt': "render的优先级高于template template必须有mount() 创建的顺序自上而下 挂载的顺序自下而上 initinject 在 initstate initprovide之前 new Vue() => _init() => $mount() => _render() => _update() 数据响应式 Vue实例在初始...",
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
