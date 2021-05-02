import projectConfig from '/pagic.config.js';
export default {
    'prev': undefined,
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: 'gh-pages' },
    'pagePath': "react/react.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "react/react.html",
    'title': undefined,
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h4 id="jsx">JSX<a class="anchor" href="#jsx">§</a></h4>\n<p>JSX是函数调用和表达式的语法糖，会被编译为React.createElement，其底层逻辑是不能运行js代码的，只能渲染一个结果。不能直接使用if else，可以使用三元运算符，多个三元运算符，抽离出render function，或者使用立即执行函数。</p>\n<h4 id="setstate">setState<a class="anchor" href="#setstate">§</a></h4>\n<p>this.setState 方法并不总是能够立刻更新组件，它可能会延迟更新，这样在通过this.state读取内容是，有可能获取不到最新的值。</p>\n<p>在react控制之内的事件处理过程中，setState不会同步更新this.state，而对于react控制之外的情况，setSate会同步更新this.state。</p>\n<p>例如，在addEventListener中调用时onClick是同步，在render中调用是异步。</p>\n<p>this.setState Promise化</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">setStatePromise</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">me<span class="token punctuation">,</span> state</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    me<span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n     <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p><em>setState只有在合成事件和⽣生命周期函数中是异步的，在原⽣生事件和setTimeout中都是同步的。</em></p>\n<h4 id="%E5%8E%9F%E7%94%9F%E4%BA%8B%E4%BB%B6%E5%92%8Creact%E5%90%88%E6%88%90%E4%BA%8B%E4%BB%B6">原生事件和React合成事件<a class="anchor" href="#%E5%8E%9F%E7%94%9F%E4%BA%8B%E4%BB%B6%E5%92%8Creact%E5%90%88%E6%88%90%E4%BA%8B%E4%BB%B6">§</a></h4>\n<p>React事件大多数都绑定在document上，而非原生dom上，（除了少数不会冒泡到document 的事件，如video），React触发的事件也是对原生事件的包装，而不是原生Event对象。</p>\n<p><strong>异步访问事件对象</strong></p>\n<p>不能直接异步访问合成事件对象，需要持久化合成事件 e.persist()</p>\n<p><strong>阻止原生事件冒泡</strong></p>\n<p>react在事件冒泡到document 上时才能够处理事件，所以无法直接使用e.stopPropagation()阻止原生事件冒泡。需要使用</p>\n<p>e.nativeEvent.stopImmediatePropagation()</p>\n<h4 id="element-diff">element diff<a class="anchor" href="#element-diff">§</a></h4>\n<p>如果元素在旧集合中的位置与在新集合中的位置相比更靠后的话，就不需要移动。尽量减少类似将最后一个节点移动到列表首部的操作，（因为实际过程中，会变成把其他的元素，移动到原最后一个节点的后面）</p>\n<h4 id="%E7%BB%84%E4%BB%B6">组件<a class="anchor" href="#%E7%BB%84%E4%BB%B6">§</a></h4>\n<p>单一职责  数据和渲染分离，HOC包装，通过参数传入s不同的数据来源，不同的组件渲染</p>\n<p><strong>组件封装与通信</strong></p>\n<p>秉承封装性，使组件的state结果只有自己知道。</p>\n<p>副作用和（准）纯组件</p>\n<p>纯函数是通过函数参数能够唯一缺的函数返回值的函数。</p>\n<p>准纯组件是渲染数据全部来自props，但是会产生副作用的组件。</p>\n<h4 id="%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F">生命周期<a class="anchor" href="#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F">§</a></h4>\n<pre class="language-autoit"><code class="language-autoit"><span class="token operator">/</span><span class="token operator">/</span> React <span class="token number">15</span>\n<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token function">componentWillReceiveProps</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token function">shouldComponentUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token function">componentWillMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span><span class="token operator">/</span> 不涉及真实 DOM 操作的准备工作\n<span class="token function">componentWillUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span><span class="token operator">/</span> 不涉及真实 DOM 操作的准备工作\n<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token function">componentDidUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span><span class="token operator">/</span> 处理 DOM 操作，作为子组件更新完毕的标志通知到父组件\n<span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span><span class="token operator">/</span> 处理 DOM 操作\n<span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre>\n<p>componentReceiveProps 并不是由 props 的变化触发的，而是由父组件的更新触发的</p>\n<p>shouldComponentUpdate 的默认值为 true，往往通过手动往 shouldComponentUpdate 中填充判定逻辑，或者直接在项目中引入 PureComponent 等最佳实践，来实现“有条件的 re-render”。</p>\n<p><strong>React16</strong></p>\n<p><img src="https://s0.lgstatic.com/i/image/M00/5D/D9/CgqCHl-FVVeAaMJvAAKXOyLlUwM592.png" alt="img"></p>\n<h4 id="%E6%95%B0%E6%8D%AE%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86">数据状态管理<a class="anchor" href="#%E6%95%B0%E6%8D%AE%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86">§</a></h4>\n<p>React组件内部的state， redux中的store</p>\n<p>数据持久度：</p>\n<ul>\n<li>快速变更型，如文本输入框，适合在组件内维护</li>\n<li>中等持续型，页面刷新前保持稳定的数据，如ajax数据，可能在不同组件使用，使用redux管理。</li>\n<li>长远稳定型，服务器或本地存储</li>\n</ul>\n<p>数据消费范围： 需要跨多层级共享，完全无父子关系的组件共享</p>\n<h4 id="redux">Redux<a class="anchor" href="#redux">§</a></h4>\n<p>合理connect</p>\n<p>扁平化数据状态</p>\n<p>react-redux   map</p>\n<h4 id="react-router">React-router<a class="anchor" href="#react-router">§</a></h4>\n<h4 id="purecomponent">PureComponent<a class="anchor" href="#purecomponent">§</a></h4>\n<h4 id="hook">Hook<a class="anchor" href="#hook">§</a></h4>\n<p>useState是允许在React函数组件中添加state 的Hook。（没有钩子之前需要转为class组件）</p>\n<p>useEffect 副作用，</p>\n<p>在函数组件主体内，改变Dom、添加订阅、设置定时器、记录日志以及执行其他包含副作用的操作都是不被允许的。</p>\n<p>赋值给useEffect的函数会在组件渲染到屏幕之后执行。</p>\n<p>effect的条件执行，第二个参数，是effect依赖的值数组。useEffect函数需要返回一个清楚函数，清除函数胡子爱组件卸载前执行。</p>\n<h4 id="%E8%87%AA%E5%AE%9A%E4%B9%89hook">自定义Hook<a class="anchor" href="#%E8%87%AA%E5%AE%9A%E4%B9%89hook">§</a></h4>\n<h4 id="usememo">useMemo<a class="anchor" href="#usememo">§</a></h4>\n<p>类似计算属性</p>\n<h4 id="usecallback">useCallback<a class="anchor" href="#usecallback">§</a></h4>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': undefined,
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h4 id="jsx">JSX<a class="anchor" href="#jsx">§</a></h4>\n<p>JSX是函数调用和表达式的语法糖，会被编译为React.createElement，其底层逻辑是不能运行js代码的，只能渲染一个结果。不能直接使用if else，可以使用三元运算符，多个三元运算符，抽离出render function，或者使用立即执行函数。</p>\n<h4 id="setstate">setState<a class="anchor" href="#setstate">§</a></h4>\n<p>this.setState 方法并不总是能够立刻更新组件，它可能会延迟更新，这样在通过this.state读取内容是，有可能获取不到最新的值。</p>\n<p>在react控制之内的事件处理过程中，setState不会同步更新this.state，而对于react控制之外的情况，setSate会同步更新this.state。</p>\n<p>例如，在addEventListener中调用时onClick是同步，在render中调用是异步。</p>\n<p>this.setState Promise化</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">setStatePromise</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">me<span class="token punctuation">,</span> state</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    me<span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n     <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p><em>setState只有在合成事件和⽣生命周期函数中是异步的，在原⽣生事件和setTimeout中都是同步的。</em></p>\n<h4 id="%E5%8E%9F%E7%94%9F%E4%BA%8B%E4%BB%B6%E5%92%8Creact%E5%90%88%E6%88%90%E4%BA%8B%E4%BB%B6">原生事件和React合成事件<a class="anchor" href="#%E5%8E%9F%E7%94%9F%E4%BA%8B%E4%BB%B6%E5%92%8Creact%E5%90%88%E6%88%90%E4%BA%8B%E4%BB%B6">§</a></h4>\n<p>React事件大多数都绑定在document上，而非原生dom上，（除了少数不会冒泡到document 的事件，如video），React触发的事件也是对原生事件的包装，而不是原生Event对象。</p>\n<p><strong>异步访问事件对象</strong></p>\n<p>不能直接异步访问合成事件对象，需要持久化合成事件 e.persist()</p>\n<p><strong>阻止原生事件冒泡</strong></p>\n<p>react在事件冒泡到document 上时才能够处理事件，所以无法直接使用e.stopPropagation()阻止原生事件冒泡。需要使用</p>\n<p>e.nativeEvent.stopImmediatePropagation()</p>\n<h4 id="element-diff">element diff<a class="anchor" href="#element-diff">§</a></h4>\n<p>如果元素在旧集合中的位置与在新集合中的位置相比更靠后的话，就不需要移动。尽量减少类似将最后一个节点移动到列表首部的操作，（因为实际过程中，会变成把其他的元素，移动到原最后一个节点的后面）</p>\n<h4 id="%E7%BB%84%E4%BB%B6">组件<a class="anchor" href="#%E7%BB%84%E4%BB%B6">§</a></h4>\n<p>单一职责  数据和渲染分离，HOC包装，通过参数传入s不同的数据来源，不同的组件渲染</p>\n<p><strong>组件封装与通信</strong></p>\n<p>秉承封装性，使组件的state结果只有自己知道。</p>\n<p>副作用和（准）纯组件</p>\n<p>纯函数是通过函数参数能够唯一缺的函数返回值的函数。</p>\n<p>准纯组件是渲染数据全部来自props，但是会产生副作用的组件。</p>\n<h4 id="%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F">生命周期<a class="anchor" href="#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F">§</a></h4>\n<pre class="language-autoit"><code class="language-autoit"><span class="token operator">/</span><span class="token operator">/</span> React <span class="token number">15</span>\n<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token function">componentWillReceiveProps</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token function">shouldComponentUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token function">componentWillMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span><span class="token operator">/</span> 不涉及真实 DOM 操作的准备工作\n<span class="token function">componentWillUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span><span class="token operator">/</span> 不涉及真实 DOM 操作的准备工作\n<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token function">componentDidUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span><span class="token operator">/</span> 处理 DOM 操作，作为子组件更新完毕的标志通知到父组件\n<span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span><span class="token operator">/</span> 处理 DOM 操作\n<span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre>\n<p>componentReceiveProps 并不是由 props 的变化触发的，而是由父组件的更新触发的</p>\n<p>shouldComponentUpdate 的默认值为 true，往往通过手动往 shouldComponentUpdate 中填充判定逻辑，或者直接在项目中引入 PureComponent 等最佳实践，来实现“有条件的 re-render”。</p>\n<p><strong>React16</strong></p>\n<p><img src="https://s0.lgstatic.com/i/image/M00/5D/D9/CgqCHl-FVVeAaMJvAAKXOyLlUwM592.png" alt="img"></p>\n<h4 id="%E6%95%B0%E6%8D%AE%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86">数据状态管理<a class="anchor" href="#%E6%95%B0%E6%8D%AE%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86">§</a></h4>\n<p>React组件内部的state， redux中的store</p>\n<p>数据持久度：</p>\n<ul>\n<li>快速变更型，如文本输入框，适合在组件内维护</li>\n<li>中等持续型，页面刷新前保持稳定的数据，如ajax数据，可能在不同组件使用，使用redux管理。</li>\n<li>长远稳定型，服务器或本地存储</li>\n</ul>\n<p>数据消费范围： 需要跨多层级共享，完全无父子关系的组件共享</p>\n<h4 id="redux">Redux<a class="anchor" href="#redux">§</a></h4>\n<p>合理connect</p>\n<p>扁平化数据状态</p>\n<p>react-redux   map</p>\n<h4 id="react-router">React-router<a class="anchor" href="#react-router">§</a></h4>\n<h4 id="purecomponent">PureComponent<a class="anchor" href="#purecomponent">§</a></h4>\n<h4 id="hook">Hook<a class="anchor" href="#hook">§</a></h4>\n<p>useState是允许在React函数组件中添加state 的Hook。（没有钩子之前需要转为class组件）</p>\n<p>useEffect 副作用，</p>\n<p>在函数组件主体内，改变Dom、添加订阅、设置定时器、记录日志以及执行其他包含副作用的操作都是不被允许的。</p>\n<p>赋值给useEffect的函数会在组件渲染到屏幕之后执行。</p>\n<p>effect的条件执行，第二个参数，是effect依赖的值数组。useEffect函数需要返回一个清楚函数，清除函数胡子爱组件卸载前执行。</p>\n<h4 id="%E8%87%AA%E5%AE%9A%E4%B9%89hook">自定义Hook<a class="anchor" href="#%E8%87%AA%E5%AE%9A%E4%B9%89hook">§</a></h4>\n<h4 id="usememo">useMemo<a class="anchor" href="#usememo">§</a></h4>\n<p>类似计算属性</p>\n<h4 id="usecallback">useCallback<a class="anchor" href="#usecallback">§</a></h4>'
        } }),
    'toc': null,
    'author': "dingtt",
    'contributors': [
        "dingtt"
    ],
    'date': "2020-11-28T13:00:07.000Z",
    'updated': "2020-12-21T02:58:19.000Z",
    'excerpt': "JSX JSX是函数调用和表达式的语法糖，会被编译为React.createElement，其底层逻辑是不能运行js代码的，只能渲染一个结果。不能直接使用if else，可以使用三元运算符，多个三元运算符，抽离出render function，或者使用立即执行...",
    'cover': "https://s0.lgstatic.com/i/image/M00/5D/D9/CgqCHl-FVVeAaMJvAAKXOyLlUwM592.png",
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
