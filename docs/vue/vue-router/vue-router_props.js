import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "Vue组件通信",
        "link": "vue/vue-communication.html"
    },
    'next': {
        "text": "React的生命周期",
        "link": "react/lifecycle.html"
    },
    config: { "root": "/", ...projectConfig, branch: 'gh-pages' },
    'pagePath': "vue/vue-router/vue-router.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "vue/vue-router/vue-router.html",
    'title': "Vue路由",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Vue路由</h1>\n<p>响应路由参数的变化</p>\n<pre class="language-autoit"><code class="language-autoit">watch<span class="token punctuation">:</span> {\n    <span class="token string">\'$route\'</span> <span class="token punctuation">(</span><span class="token keyword">to</span><span class="token punctuation">,</span> from<span class="token punctuation">)</span> {\n      <span class="token operator">/</span><span class="token operator">/</span> 对路由变化作出响应<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n    }\n  }\n</code></pre>\n<p>vue2.2 beforeRouteUpdate 导航守卫</p>\n<pre class="language-autoit"><code class="language-autoit"> beforeRouteUpdate <span class="token punctuation">(</span><span class="token keyword">to</span><span class="token punctuation">,</span> from<span class="token punctuation">,</span> <span class="token keyword">next</span><span class="token punctuation">)</span> {\n    <span class="token operator">/</span><span class="token operator">/</span> react <span class="token keyword">to</span> route changes<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n    <span class="token operator">/</span><span class="token operator">/</span> don\'t forget <span class="token keyword">to</span> call <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  }\n</code></pre>\n<h3 id="%E6%8D%95%E8%8E%B7%E6%89%80%E6%9C%89%E8%B7%AF%E7%94%B1%E6%88%96-404-not-found-%E8%B7%AF%E7%94%B1">捕获所有路由或 404 Not found 路由<a class="anchor" href="#%E6%8D%95%E8%8E%B7%E6%89%80%E6%9C%89%E8%B7%AF%E7%94%B1%E6%88%96-404-not-found-%E8%B7%AF%E7%94%B1">§</a></h3>\n<p>常规参数只会匹配被 <code>/</code> 分隔的 URL 片段中的字符。如果想匹配<strong>任意路径</strong>，我们可以使用通配符 (<code>*</code>)：</p>\n<pre class="language-autoit"><code class="language-autoit">{\n  <span class="token operator">/</span><span class="token operator">/</span> 会匹配所有路径\n  path<span class="token punctuation">:</span> <span class="token string">\'*\'</span>\n}\n{\n  <span class="token operator">/</span><span class="token operator">/</span> 会匹配以 `<span class="token operator">/</span>user<span class="token operator">-</span>` 开头的任意路径\n  path<span class="token punctuation">:</span> <span class="token string">\'/user-*\'</span>\n}\n</code></pre>\n<p><em>通配符</em>的路由应该放在最后</p>\n<p>当使用一个<em>通配符</em>时，<code>$route.params</code> 内会自动添加一个名为 <code>pathMatch</code> 参数。它包含了 URL 通过<em>通配符</em>被匹配的部分</p>\n<pre class="language-autoit"><code class="language-autoit"><span class="token operator">/</span><span class="token operator">/</span> 给出一个路由 { path<span class="token punctuation">:</span> <span class="token string">\'/user-*\'</span> }\nthis<span class="token punctuation">.</span><span class="token variable">$router</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">\'/user-admin\'</span><span class="token punctuation">)</span>\nthis<span class="token punctuation">.</span><span class="token variable">$route</span><span class="token punctuation">.</span>params<span class="token punctuation">.</span>pathMatch <span class="token operator">/</span><span class="token operator">/</span> <span class="token string">\'admin\'</span>\n<span class="token operator">/</span><span class="token operator">/</span> 给出一个路由 { path<span class="token punctuation">:</span> <span class="token string">\'*\'</span> }\nthis<span class="token punctuation">.</span><span class="token variable">$router</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">\'/non-existing\'</span><span class="token punctuation">)</span>\nthis<span class="token punctuation">.</span><span class="token variable">$route</span><span class="token punctuation">.</span>params<span class="token punctuation">.</span>pathMatch <span class="token operator">/</span><span class="token operator">/</span> <span class="token string">\'/non-existing\'</span>\n</code></pre>\n<h4 id="%E9%AB%98%E7%B4%9A%E5%8C%B9%E9%85%8D%E6%A8%A1%E5%BC%8F">高級匹配模式<a class="anchor" href="#%E9%AB%98%E7%B4%9A%E5%8C%B9%E9%85%8D%E6%A8%A1%E5%BC%8F">§</a></h4>\n<p><a href="https://github.com/pillarjs/path-to-regexp/tree/v1.7.0">path-to-regexp</a></p>\n<h4 id="%E5%8C%B9%E9%85%8D%E4%BC%98%E5%85%88%E7%BA%A7">匹配优先级<a class="anchor" href="#%E5%8C%B9%E9%85%8D%E4%BC%98%E5%85%88%E7%BA%A7">§</a></h4>\n<p>谁先定义的，谁的优先级就最高。</p>\n<h2 id="%E5%B5%8C%E5%A5%97%E8%B7%AF%E7%94%B1">嵌套路由<a class="anchor" href="#%E5%B5%8C%E5%A5%97%E8%B7%AF%E7%94%B1">§</a></h2>\n<p>children的路径匹配成功，将会把自身的component，渲染到父级的component的router-view中</p>\n<p><strong>以 <code>/</code> 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。</strong></p>\n<h2 id="%E7%BC%96%E7%A8%8B%E5%BC%8F%E5%AF%BC%E8%88%AA">编程式导航<a class="anchor" href="#%E7%BC%96%E7%A8%8B%E5%BC%8F%E5%AF%BC%E8%88%AA">§</a></h2>\n<h2 id="routerpushlocation-oncomplete-onabort"><code>router.push(location, onComplete?, onAbort?)</code><a class="anchor" href="#routerpushlocation-oncomplete-onabort">§</a></h2>\n<p><code>router.push</code> 或 <code>router.replace</code> 中提供 <code>onComplete</code> 和 <code>onAbort</code> 回调作为第二个和第三个参数。这些回调将会在导航成功完成 (在所有的异步钩子被解析之后) 或终止 (导航到相同的路由、或在当前导航完成之前导航到另一个不同的路由) 的时候进行相应的调用。在 3.1.0+，可以省略第二个和第三个参数，此时如果支持 Promise，<code>router.push</code> 或 <code>router.replace</code> 将返回一个 Promise。</p>\n<p><strong>注意</strong>： 如果目的地和当前路由相同，只有参数发生了改变 (比如从一个用户资料到另一个 <code>/users/1</code> -&gt; <code>/users/2</code>)，你需要使用 <a href="https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E5%93%8D%E5%BA%94%E8%B7%AF%E7%94%B1%E5%8F%82%E6%95%B0%E7%9A%84%E5%8F%98%E5%8C%96"><code>beforeRouteUpdate</code></a> 来响应这个变化 (比如抓取用户信息)。</p>\n<p><strong><code>this.$router.push</code></strong></p>\n<router-link :to="...">\n<p><strong>如果提供了 <code>path</code>，<code>params</code> 会被忽略****需要提供路由的 <code>name</code> 或手写完整的带有参数的 <code>path</code></strong></p>\n<pre class="language-autoit"><code class="language-autoit"><span class="token keyword">const</span> userId <span class="token operator">=</span> <span class="token string">\'123\'</span>\nrouter<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>{ name<span class="token punctuation">:</span> <span class="token string">\'user\'</span><span class="token punctuation">,</span> params<span class="token punctuation">:</span> { userId }}<span class="token punctuation">)</span> <span class="token operator">/</span><span class="token operator">/</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token operator">/</span>user<span class="token operator">/</span><span class="token number">123</span>\nrouter<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>{ path<span class="token punctuation">:</span> `<span class="token operator">/</span>user<span class="token operator">/</span>${userId}` }<span class="token punctuation">)</span> <span class="token operator">/</span><span class="token operator">/</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token operator">/</span>user<span class="token operator">/</span><span class="token number">123</span>\n<span class="token operator">/</span><span class="token operator">/</span> 这里的 params 不生效\nrouter<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>{ path<span class="token punctuation">:</span> <span class="token string">\'/user\'</span><span class="token punctuation">,</span> params<span class="token punctuation">:</span> { userId }}<span class="token punctuation">)</span> <span class="token operator">/</span><span class="token operator">/</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token operator">/</span>user\n</code></pre>\n<h2 id="routerreplacelocation-oncomplete-onabort"><code>router.replace(location, onComplete?, onAbort?)</code><a class="anchor" href="#routerreplacelocation-oncomplete-onabort">§</a></h2>\n<p>不会向 history 添加新记录</p>\n<h2 id="routergon"><code>router.go(n)</code><a class="anchor" href="#routergon">§</a></h2>\n<p>等同于 history.forward() history.back() ，如果 history 记录不够用，那就默默地失败呗</p>\n<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/History"><code>window.history.pushState</code>、 <code>window.history.replaceState</code> 和 <code>window.history.go</code></a></p>\n<h3 id="%E5%91%BD%E5%90%8D%E8%B7%AF%E7%94%B1">命名路由<a class="anchor" href="#%E5%91%BD%E5%90%8D%E8%B7%AF%E7%94%B1">§</a></h3>\n<h3 id="%E5%91%BD%E5%90%8D%E8%A7%86%E5%9B%BE">命名视图<a class="anchor" href="#%E5%91%BD%E5%90%8D%E8%A7%86%E5%9B%BE">§</a></h3>\n<p>同时 (同级) 展示多个视图，而不是嵌套展示。如果 <code>router-view</code> 没有设置名字，那么默认为 <code>default</code>。</p>\n<pre class="language-autoit"><code class="language-autoit"><span class="token operator">&lt;</span>router<span class="token operator">-</span>view class<span class="token operator">=</span><span class="token string">"view one"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>view<span class="token operator">></span>\n<span class="token operator">&lt;</span>router<span class="token operator">-</span>view class<span class="token operator">=</span><span class="token string">"view two"</span> name<span class="token operator">=</span><span class="token string">"a"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>view<span class="token operator">></span>\n<span class="token operator">&lt;</span>router<span class="token operator">-</span>view class<span class="token operator">=</span><span class="token string">"view three"</span> name<span class="token operator">=</span><span class="token string">"b"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>view<span class="token operator">></span>\n</code></pre>\n<p>同个路由，多个视图就需要多个组件</p>\n<pre class="language-autoit"><code class="language-autoit"> components<span class="token punctuation">:</span> {\n        <span class="token keyword">default</span><span class="token punctuation">:</span> Foo<span class="token punctuation">,</span>\n        a<span class="token punctuation">:</span> Bar<span class="token punctuation">,</span>\n        b<span class="token punctuation">:</span> Baz\n      }\n</code></pre>\n<h4 id="%E5%B5%8C%E5%A5%97%E5%91%BD%E5%90%8D%E8%A7%86%E5%9B%BE">嵌套命名视图<a class="anchor" href="#%E5%B5%8C%E5%A5%97%E5%91%BD%E5%90%8D%E8%A7%86%E5%9B%BE">§</a></h4>\n<p>使用命名视图创建嵌套视图的复杂布局，需要用到命名的嵌套 <code>router-view</code> 视图组件。</p>\n<h2 id="%E9%87%8D%E5%AE%9A%E5%90%91%E5%92%8C%E5%88%AB%E5%90%8D">重定向和别名<a class="anchor" href="#%E9%87%8D%E5%AE%9A%E5%90%91%E5%92%8C%E5%88%AB%E5%90%8D">§</a></h2>\n<h3 id="%E9%87%8D%E5%AE%9A%E5%90%91">重定向<a class="anchor" href="#%E9%87%8D%E5%AE%9A%E5%90%91">§</a></h3>\n<p>重定向目标接收path，name，动态函数（方法接收 目标路由 作为参数，可进行判断）return 重定向的 字符串路径/路径对象</p>\n<p><a href="https://router.vuejs.org/zh/guide/advanced/navigation-guards.html">导航守卫</a>并没有应用在跳转路由上，而仅仅应用在其目标上</p>\n<h4 id="%E5%88%AB%E5%90%8D">别名<a class="anchor" href="#%E5%88%AB%E5%90%8D">§</a></h4>\n<p>a的别名b，访问b显示b，实际内容是a</p>\n<pre class="language-autoit"><code class="language-autoit">{ path<span class="token punctuation">:</span> <span class="token string">\'/a\'</span><span class="token punctuation">,</span> component<span class="token punctuation">:</span> A<span class="token punctuation">,</span> alias<span class="token punctuation">:</span> <span class="token string">\'/b\'</span> }\n</code></pre>\n<h2 id="%E8%B7%AF%E7%94%B1%E7%BB%84%E4%BB%B6%E4%BC%A0%E5%8F%82">路由组件传参<a class="anchor" href="#%E8%B7%AF%E7%94%B1%E7%BB%84%E4%BB%B6%E4%BC%A0%E5%8F%82">§</a></h2>\n<p>使用 <code>props</code> 将组件和路由解耦：<strong>取代与 <code>$route</code> 的耦合</strong></p>\n<pre class="language-autoit"><code class="language-autoit"> routes<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    { path<span class="token punctuation">:</span> <span class="token string">\'/user/:id\'</span><span class="token punctuation">,</span> component<span class="token punctuation">:</span> User<span class="token punctuation">,</span> props<span class="token punctuation">:</span> <span class="token boolean">true</span> }<span class="token punctuation">,</span>\n\n    <span class="token operator">/</span><span class="token operator">/</span> 对于包含命名视图的路由，你必须分别为每个命名视图添加 `props` 选项：\n    {\n      path<span class="token punctuation">:</span> <span class="token string">\'/user/:id\'</span><span class="token punctuation">,</span>\n      components<span class="token punctuation">:</span> { <span class="token keyword">default</span><span class="token punctuation">:</span> User<span class="token punctuation">,</span> sidebar<span class="token punctuation">:</span> Sidebar }<span class="token punctuation">,</span>\n      props<span class="token punctuation">:</span> { <span class="token keyword">default</span><span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> sidebar<span class="token punctuation">:</span> <span class="token boolean">false</span> }\n    }\n  <span class="token punctuation">]</span>\n</code></pre>\n<h4 id="%E5%B8%83%E5%B0%94%E6%A8%A1%E5%BC%8F">布尔模式<a class="anchor" href="#%E5%B8%83%E5%B0%94%E6%A8%A1%E5%BC%8F">§</a></h4>\n<p>如果 <code>props</code> 被设置为 <code>true</code>，<code>route.params</code> 将会被设置为组件属性</p>\n<h4 id="%E5%AF%B9%E8%B1%A1%E6%A8%A1%E5%BC%8F">对象模式<a class="anchor" href="#%E5%AF%B9%E8%B1%A1%E6%A8%A1%E5%BC%8F">§</a></h4>\n<p>如果 <code>props</code> 是一个对象，它会被按原样设置为组件属性。当 <code>props</code> 是静态的时候有用。</p>\n<h4 id="%E5%87%BD%E6%95%B0%E6%A8%A1%E5%BC%8F">函数模式<a class="anchor" href="#%E5%87%BD%E6%95%B0%E6%A8%A1%E5%BC%8F">§</a></h4>\n<p>创建一个函数返回 <code>props</code>。这样你便可以将参数转换成另一种类型，将静态值与基于路由的值结合等等。</p>\n<pre class="language-js"><code class="language-js"> <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">\'/search\'</span><span class="token punctuation">,</span> component<span class="token operator">:</span> <span class="token maybe-class-name">SearchUser</span><span class="token punctuation">,</span> <span class="token function-variable function">props</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">route</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> query<span class="token operator">:</span> route<span class="token punctuation">.</span><span class="token property-access">query</span><span class="token punctuation">.</span><span class="token property-access">q</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>\n</code></pre>\n<p>鉴权：</p>\n<p>静态路由</p>\n<p>无需登录路由   meta:{auth :false}</p>\n<p>需要登录路由 beforeEach</p>\n<p>1动态路由数据源 + rule ，配合后台数据过滤</p>\n<p>2 动态路由数据源 ，配合后台路由权限，过滤，merge props</p>\n<p>3 后台配置路由并输出路由权限（前后协作）  有个名词（用户 角色|用户组  权限 ，菜单权限，路由权限）</p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Vue\u8DEF\u7531"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>响应路由参数的变化</p>\n<pre class="language-autoit"><code class="language-autoit">watch<span class="token punctuation">:</span> {\n    <span class="token string">\'$route\'</span> <span class="token punctuation">(</span><span class="token keyword">to</span><span class="token punctuation">,</span> from<span class="token punctuation">)</span> {\n      <span class="token operator">/</span><span class="token operator">/</span> 对路由变化作出响应<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n    }\n  }\n</code></pre>\n<p>vue2.2 beforeRouteUpdate 导航守卫</p>\n<pre class="language-autoit"><code class="language-autoit"> beforeRouteUpdate <span class="token punctuation">(</span><span class="token keyword">to</span><span class="token punctuation">,</span> from<span class="token punctuation">,</span> <span class="token keyword">next</span><span class="token punctuation">)</span> {\n    <span class="token operator">/</span><span class="token operator">/</span> react <span class="token keyword">to</span> route changes<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n    <span class="token operator">/</span><span class="token operator">/</span> don\'t forget <span class="token keyword">to</span> call <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  }\n</code></pre>\n<h3 id="%E6%8D%95%E8%8E%B7%E6%89%80%E6%9C%89%E8%B7%AF%E7%94%B1%E6%88%96-404-not-found-%E8%B7%AF%E7%94%B1">捕获所有路由或 404 Not found 路由<a class="anchor" href="#%E6%8D%95%E8%8E%B7%E6%89%80%E6%9C%89%E8%B7%AF%E7%94%B1%E6%88%96-404-not-found-%E8%B7%AF%E7%94%B1">§</a></h3>\n<p>常规参数只会匹配被 <code>/</code> 分隔的 URL 片段中的字符。如果想匹配<strong>任意路径</strong>，我们可以使用通配符 (<code>*</code>)：</p>\n<pre class="language-autoit"><code class="language-autoit">{\n  <span class="token operator">/</span><span class="token operator">/</span> 会匹配所有路径\n  path<span class="token punctuation">:</span> <span class="token string">\'*\'</span>\n}\n{\n  <span class="token operator">/</span><span class="token operator">/</span> 会匹配以 `<span class="token operator">/</span>user<span class="token operator">-</span>` 开头的任意路径\n  path<span class="token punctuation">:</span> <span class="token string">\'/user-*\'</span>\n}\n</code></pre>\n<p><em>通配符</em>的路由应该放在最后</p>\n<p>当使用一个<em>通配符</em>时，<code>$route.params</code> 内会自动添加一个名为 <code>pathMatch</code> 参数。它包含了 URL 通过<em>通配符</em>被匹配的部分</p>\n<pre class="language-autoit"><code class="language-autoit"><span class="token operator">/</span><span class="token operator">/</span> 给出一个路由 { path<span class="token punctuation">:</span> <span class="token string">\'/user-*\'</span> }\nthis<span class="token punctuation">.</span><span class="token variable">$router</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">\'/user-admin\'</span><span class="token punctuation">)</span>\nthis<span class="token punctuation">.</span><span class="token variable">$route</span><span class="token punctuation">.</span>params<span class="token punctuation">.</span>pathMatch <span class="token operator">/</span><span class="token operator">/</span> <span class="token string">\'admin\'</span>\n<span class="token operator">/</span><span class="token operator">/</span> 给出一个路由 { path<span class="token punctuation">:</span> <span class="token string">\'*\'</span> }\nthis<span class="token punctuation">.</span><span class="token variable">$router</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">\'/non-existing\'</span><span class="token punctuation">)</span>\nthis<span class="token punctuation">.</span><span class="token variable">$route</span><span class="token punctuation">.</span>params<span class="token punctuation">.</span>pathMatch <span class="token operator">/</span><span class="token operator">/</span> <span class="token string">\'/non-existing\'</span>\n</code></pre>\n<h4 id="%E9%AB%98%E7%B4%9A%E5%8C%B9%E9%85%8D%E6%A8%A1%E5%BC%8F">高級匹配模式<a class="anchor" href="#%E9%AB%98%E7%B4%9A%E5%8C%B9%E9%85%8D%E6%A8%A1%E5%BC%8F">§</a></h4>\n<p><a href="https://github.com/pillarjs/path-to-regexp/tree/v1.7.0">path-to-regexp</a></p>\n<h4 id="%E5%8C%B9%E9%85%8D%E4%BC%98%E5%85%88%E7%BA%A7">匹配优先级<a class="anchor" href="#%E5%8C%B9%E9%85%8D%E4%BC%98%E5%85%88%E7%BA%A7">§</a></h4>\n<p>谁先定义的，谁的优先级就最高。</p>\n<h2 id="%E5%B5%8C%E5%A5%97%E8%B7%AF%E7%94%B1">嵌套路由<a class="anchor" href="#%E5%B5%8C%E5%A5%97%E8%B7%AF%E7%94%B1">§</a></h2>\n<p>children的路径匹配成功，将会把自身的component，渲染到父级的component的router-view中</p>\n<p><strong>以 <code>/</code> 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。</strong></p>\n<h2 id="%E7%BC%96%E7%A8%8B%E5%BC%8F%E5%AF%BC%E8%88%AA">编程式导航<a class="anchor" href="#%E7%BC%96%E7%A8%8B%E5%BC%8F%E5%AF%BC%E8%88%AA">§</a></h2>\n<h2 id="routerpushlocation-oncomplete-onabort"><code>router.push(location, onComplete?, onAbort?)</code><a class="anchor" href="#routerpushlocation-oncomplete-onabort">§</a></h2>\n<p><code>router.push</code> 或 <code>router.replace</code> 中提供 <code>onComplete</code> 和 <code>onAbort</code> 回调作为第二个和第三个参数。这些回调将会在导航成功完成 (在所有的异步钩子被解析之后) 或终止 (导航到相同的路由、或在当前导航完成之前导航到另一个不同的路由) 的时候进行相应的调用。在 3.1.0+，可以省略第二个和第三个参数，此时如果支持 Promise，<code>router.push</code> 或 <code>router.replace</code> 将返回一个 Promise。</p>\n<p><strong>注意</strong>： 如果目的地和当前路由相同，只有参数发生了改变 (比如从一个用户资料到另一个 <code>/users/1</code> -&gt; <code>/users/2</code>)，你需要使用 <a href="https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E5%93%8D%E5%BA%94%E8%B7%AF%E7%94%B1%E5%8F%82%E6%95%B0%E7%9A%84%E5%8F%98%E5%8C%96"><code>beforeRouteUpdate</code></a> 来响应这个变化 (比如抓取用户信息)。</p>\n<p><strong><code>this.$router.push</code></strong></p>\n<router-link :to="...">\n<p><strong>如果提供了 <code>path</code>，<code>params</code> 会被忽略****需要提供路由的 <code>name</code> 或手写完整的带有参数的 <code>path</code></strong></p>\n<pre class="language-autoit"><code class="language-autoit"><span class="token keyword">const</span> userId <span class="token operator">=</span> <span class="token string">\'123\'</span>\nrouter<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>{ name<span class="token punctuation">:</span> <span class="token string">\'user\'</span><span class="token punctuation">,</span> params<span class="token punctuation">:</span> { userId }}<span class="token punctuation">)</span> <span class="token operator">/</span><span class="token operator">/</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token operator">/</span>user<span class="token operator">/</span><span class="token number">123</span>\nrouter<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>{ path<span class="token punctuation">:</span> `<span class="token operator">/</span>user<span class="token operator">/</span>${userId}` }<span class="token punctuation">)</span> <span class="token operator">/</span><span class="token operator">/</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token operator">/</span>user<span class="token operator">/</span><span class="token number">123</span>\n<span class="token operator">/</span><span class="token operator">/</span> 这里的 params 不生效\nrouter<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>{ path<span class="token punctuation">:</span> <span class="token string">\'/user\'</span><span class="token punctuation">,</span> params<span class="token punctuation">:</span> { userId }}<span class="token punctuation">)</span> <span class="token operator">/</span><span class="token operator">/</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token operator">/</span>user\n</code></pre>\n<h2 id="routerreplacelocation-oncomplete-onabort"><code>router.replace(location, onComplete?, onAbort?)</code><a class="anchor" href="#routerreplacelocation-oncomplete-onabort">§</a></h2>\n<p>不会向 history 添加新记录</p>\n<h2 id="routergon"><code>router.go(n)</code><a class="anchor" href="#routergon">§</a></h2>\n<p>等同于 history.forward() history.back() ，如果 history 记录不够用，那就默默地失败呗</p>\n<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/History"><code>window.history.pushState</code>、 <code>window.history.replaceState</code> 和 <code>window.history.go</code></a></p>\n<h3 id="%E5%91%BD%E5%90%8D%E8%B7%AF%E7%94%B1">命名路由<a class="anchor" href="#%E5%91%BD%E5%90%8D%E8%B7%AF%E7%94%B1">§</a></h3>\n<h3 id="%E5%91%BD%E5%90%8D%E8%A7%86%E5%9B%BE">命名视图<a class="anchor" href="#%E5%91%BD%E5%90%8D%E8%A7%86%E5%9B%BE">§</a></h3>\n<p>同时 (同级) 展示多个视图，而不是嵌套展示。如果 <code>router-view</code> 没有设置名字，那么默认为 <code>default</code>。</p>\n<pre class="language-autoit"><code class="language-autoit"><span class="token operator">&lt;</span>router<span class="token operator">-</span>view class<span class="token operator">=</span><span class="token string">"view one"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>view<span class="token operator">></span>\n<span class="token operator">&lt;</span>router<span class="token operator">-</span>view class<span class="token operator">=</span><span class="token string">"view two"</span> name<span class="token operator">=</span><span class="token string">"a"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>view<span class="token operator">></span>\n<span class="token operator">&lt;</span>router<span class="token operator">-</span>view class<span class="token operator">=</span><span class="token string">"view three"</span> name<span class="token operator">=</span><span class="token string">"b"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>view<span class="token operator">></span>\n</code></pre>\n<p>同个路由，多个视图就需要多个组件</p>\n<pre class="language-autoit"><code class="language-autoit"> components<span class="token punctuation">:</span> {\n        <span class="token keyword">default</span><span class="token punctuation">:</span> Foo<span class="token punctuation">,</span>\n        a<span class="token punctuation">:</span> Bar<span class="token punctuation">,</span>\n        b<span class="token punctuation">:</span> Baz\n      }\n</code></pre>\n<h4 id="%E5%B5%8C%E5%A5%97%E5%91%BD%E5%90%8D%E8%A7%86%E5%9B%BE">嵌套命名视图<a class="anchor" href="#%E5%B5%8C%E5%A5%97%E5%91%BD%E5%90%8D%E8%A7%86%E5%9B%BE">§</a></h4>\n<p>使用命名视图创建嵌套视图的复杂布局，需要用到命名的嵌套 <code>router-view</code> 视图组件。</p>\n<h2 id="%E9%87%8D%E5%AE%9A%E5%90%91%E5%92%8C%E5%88%AB%E5%90%8D">重定向和别名<a class="anchor" href="#%E9%87%8D%E5%AE%9A%E5%90%91%E5%92%8C%E5%88%AB%E5%90%8D">§</a></h2>\n<h3 id="%E9%87%8D%E5%AE%9A%E5%90%91">重定向<a class="anchor" href="#%E9%87%8D%E5%AE%9A%E5%90%91">§</a></h3>\n<p>重定向目标接收path，name，动态函数（方法接收 目标路由 作为参数，可进行判断）return 重定向的 字符串路径/路径对象</p>\n<p><a href="https://router.vuejs.org/zh/guide/advanced/navigation-guards.html">导航守卫</a>并没有应用在跳转路由上，而仅仅应用在其目标上</p>\n<h4 id="%E5%88%AB%E5%90%8D">别名<a class="anchor" href="#%E5%88%AB%E5%90%8D">§</a></h4>\n<p>a的别名b，访问b显示b，实际内容是a</p>\n<pre class="language-autoit"><code class="language-autoit">{ path<span class="token punctuation">:</span> <span class="token string">\'/a\'</span><span class="token punctuation">,</span> component<span class="token punctuation">:</span> A<span class="token punctuation">,</span> alias<span class="token punctuation">:</span> <span class="token string">\'/b\'</span> }\n</code></pre>\n<h2 id="%E8%B7%AF%E7%94%B1%E7%BB%84%E4%BB%B6%E4%BC%A0%E5%8F%82">路由组件传参<a class="anchor" href="#%E8%B7%AF%E7%94%B1%E7%BB%84%E4%BB%B6%E4%BC%A0%E5%8F%82">§</a></h2>\n<p>使用 <code>props</code> 将组件和路由解耦：<strong>取代与 <code>$route</code> 的耦合</strong></p>\n<pre class="language-autoit"><code class="language-autoit"> routes<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    { path<span class="token punctuation">:</span> <span class="token string">\'/user/:id\'</span><span class="token punctuation">,</span> component<span class="token punctuation">:</span> User<span class="token punctuation">,</span> props<span class="token punctuation">:</span> <span class="token boolean">true</span> }<span class="token punctuation">,</span>\n\n    <span class="token operator">/</span><span class="token operator">/</span> 对于包含命名视图的路由，你必须分别为每个命名视图添加 `props` 选项：\n    {\n      path<span class="token punctuation">:</span> <span class="token string">\'/user/:id\'</span><span class="token punctuation">,</span>\n      components<span class="token punctuation">:</span> { <span class="token keyword">default</span><span class="token punctuation">:</span> User<span class="token punctuation">,</span> sidebar<span class="token punctuation">:</span> Sidebar }<span class="token punctuation">,</span>\n      props<span class="token punctuation">:</span> { <span class="token keyword">default</span><span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> sidebar<span class="token punctuation">:</span> <span class="token boolean">false</span> }\n    }\n  <span class="token punctuation">]</span>\n</code></pre>\n<h4 id="%E5%B8%83%E5%B0%94%E6%A8%A1%E5%BC%8F">布尔模式<a class="anchor" href="#%E5%B8%83%E5%B0%94%E6%A8%A1%E5%BC%8F">§</a></h4>\n<p>如果 <code>props</code> 被设置为 <code>true</code>，<code>route.params</code> 将会被设置为组件属性</p>\n<h4 id="%E5%AF%B9%E8%B1%A1%E6%A8%A1%E5%BC%8F">对象模式<a class="anchor" href="#%E5%AF%B9%E8%B1%A1%E6%A8%A1%E5%BC%8F">§</a></h4>\n<p>如果 <code>props</code> 是一个对象，它会被按原样设置为组件属性。当 <code>props</code> 是静态的时候有用。</p>\n<h4 id="%E5%87%BD%E6%95%B0%E6%A8%A1%E5%BC%8F">函数模式<a class="anchor" href="#%E5%87%BD%E6%95%B0%E6%A8%A1%E5%BC%8F">§</a></h4>\n<p>创建一个函数返回 <code>props</code>。这样你便可以将参数转换成另一种类型，将静态值与基于路由的值结合等等。</p>\n<pre class="language-js"><code class="language-js"> <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">\'/search\'</span><span class="token punctuation">,</span> component<span class="token operator">:</span> <span class="token maybe-class-name">SearchUser</span><span class="token punctuation">,</span> <span class="token function-variable function">props</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">route</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> query<span class="token operator">:</span> route<span class="token punctuation">.</span><span class="token property-access">query</span><span class="token punctuation">.</span><span class="token property-access">q</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>\n</code></pre>\n<p>鉴权：</p>\n<p>静态路由</p>\n<p>无需登录路由   meta:{auth :false}</p>\n<p>需要登录路由 beforeEach</p>\n<p>1动态路由数据源 + rule ，配合后台数据过滤</p>\n<p>2 动态路由数据源 ，配合后台路由权限，过滤，merge props</p>\n<p>3 后台配置路由并输出路由权限（前后协作）  有个名词（用户 角色|用户组  权限 ，菜单权限，路由权限）</p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%8D%95%E8%8E%B7%E6%89%80%E6%9C%89%E8%B7%AF%E7%94%B1%E6%88%96-404-not-found-%E8%B7%AF%E7%94%B1" }, "\u6355\u83B7\u6240\u6709\u8DEF\u7531\u6216 404 Not found \u8DEF\u7531"),
                React.createElement("ol", null)),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%B5%8C%E5%A5%97%E8%B7%AF%E7%94%B1" }, "\u5D4C\u5957\u8DEF\u7531")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E7%BC%96%E7%A8%8B%E5%BC%8F%E5%AF%BC%E8%88%AA" }, "\u7F16\u7A0B\u5F0F\u5BFC\u822A")),
            React.createElement("li", null,
                React.createElement("a", { href: "#routerpushlocation-oncomplete-onabort" }, "router.push(location, onComplete?, onAbort?)")),
            React.createElement("li", null,
                React.createElement("a", { href: "#routerreplacelocation-oncomplete-onabort" }, "router.replace(location, onComplete?, onAbort?)")),
            React.createElement("li", null,
                React.createElement("a", { href: "#routergon" }, "router.go(n)"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E5%91%BD%E5%90%8D%E8%B7%AF%E7%94%B1" }, "\u547D\u540D\u8DEF\u7531")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E5%91%BD%E5%90%8D%E8%A7%86%E5%9B%BE" }, "\u547D\u540D\u89C6\u56FE"),
                        React.createElement("ol", null)))),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E9%87%8D%E5%AE%9A%E5%90%91%E5%92%8C%E5%88%AB%E5%90%8D" }, "\u91CD\u5B9A\u5411\u548C\u522B\u540D"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E9%87%8D%E5%AE%9A%E5%90%91" }, "\u91CD\u5B9A\u5411"),
                        React.createElement("ol", null)))),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E8%B7%AF%E7%94%B1%E7%BB%84%E4%BB%B6%E4%BC%A0%E5%8F%82" }, "\u8DEF\u7531\u7EC4\u4EF6\u4F20\u53C2"),
                React.createElement("ol", null)))),
    'author': "dingdtt",
    'contributors': [
        "dingdtt"
    ],
    'date': "2020-09-08T09:48:48.000Z",
    'updated': "2020-10-16T08:42:52.000Z",
    'excerpt': "响应路由参数的变化 watch: { '$route' (to, from) { // 对路由变化作出响应... } } vue2.2 beforeRouteUpdate 导航守卫 beforeRouteUpdate (to, from, next) { // react to route changes... // don't forget to call next() ...",
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
