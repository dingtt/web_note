import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "link": "HTTP/index.html",
        "text": "HTTP协议与浏览器"
    },
    'next': {
        "text": "HTTP协议请求方法和状态码",
        "link": "HTTP/HTTP.html"
    },
    config: { "root": "/", ...projectConfig, branch: 'gh-pages' },
    'pagePath': "HTTP/browser.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "HTTP/browser.html",
    'title': "浏览器",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>浏览器</h1>\n<h3 id="%E8%BF%9B%E7%A8%8B%E5%92%8C%E7%BA%BF%E7%A8%8B">进程和线程<a class="anchor" href="#%E8%BF%9B%E7%A8%8B%E5%92%8C%E7%BA%BF%E7%A8%8B">§</a></h3>\n<h5 id="%E8%BF%9B%E7%A8%8B">进程<a class="anchor" href="#%E8%BF%9B%E7%A8%8B">§</a></h5>\n<p>​  程序的一次执行,  它占有一片独有的内存空间</p>\n<h5 id="%E7%BA%BF%E7%A8%8B">线程<a class="anchor" href="#%E7%BA%BF%E7%A8%8B">§</a></h5>\n<p>​  CPU的基本调度单位, 是程序执行的一个完整流程</p>\n<h5 id="%E8%BF%9B%E7%A8%8B%E4%B8%8E%E7%BA%BF%E7%A8%8B%E7%9A%84%E5%85%B3%E7%B3%BB">进程与线程的关系<a class="anchor" href="#%E8%BF%9B%E7%A8%8B%E4%B8%8E%E7%BA%BF%E7%A8%8B%E7%9A%84%E5%85%B3%E7%B3%BB">§</a></h5>\n<p>​  一个进程中一般至少有一个运行的线程: 主线程\n​  一个进程中也可以同时运行多个线程, 这时程序就是多线程运行的\n​  一个进程内的数据可以供其中的多个线程直接共享\n​  多个进程之间的数据是不能直接共享的</p>\n<h5 id="%E6%B5%8F%E8%A7%88%E5%99%A8%E8%BF%90%E8%A1%8C%E6%98%AF%E5%8D%95%E8%BF%9B%E7%A8%8B%E8%BF%98%E6%98%AF%E5%A4%9A%E8%BF%9B%E7%A8%8B">浏览器运行是单进程还是多进程?<a class="anchor" href="#%E6%B5%8F%E8%A7%88%E5%99%A8%E8%BF%90%E8%A1%8C%E6%98%AF%E5%8D%95%E8%BF%9B%E7%A8%8B%E8%BF%98%E6%98%AF%E5%A4%9A%E8%BF%9B%E7%A8%8B">§</a></h5>\n<p>​  老版的大多数是单进程\n​  新版的大多数是多进程\n​  任务管理器 ---&gt;进程</p>\n<h5 id="%E6%B5%8F%E8%A7%88%E5%99%A8%E8%BF%90%E8%A1%8C%E6%98%AF%E5%8D%95%E7%BA%BF%E7%A8%8B%E8%BF%98%E6%98%AF%E5%A4%9A%E7%BA%BF%E7%A8%8B">浏览器运行是单线程还是多线程?<a class="anchor" href="#%E6%B5%8F%E8%A7%88%E5%99%A8%E8%BF%90%E8%A1%8C%E6%98%AF%E5%8D%95%E7%BA%BF%E7%A8%8B%E8%BF%98%E6%98%AF%E5%A4%9A%E7%BA%BF%E7%A8%8B">§</a></h5>\n<p>​  都是多线程运行的</p>\n<p>浏览器（多进程）包含了<strong>Browser进程</strong>（浏览器的主进程）、<strong>第三方插件进程</strong>和<strong>GPU进程</strong>（浏览器渲染进程），其中<strong>GPU进程</strong>（多线程）和Web前端密切相关，包含以下线程：</p>\n<ul>\n<li><strong>GUI渲染线程</strong></li>\n<li><strong>JS引擎线程</strong></li>\n<li><strong>事件触发线程</strong>（和EventLoop密切相关）</li>\n<li><strong>定时触发器线程</strong></li>\n<li><strong>异步HTTP请求线程</strong></li>\n</ul>\n<blockquote>\n<p><strong>GUI渲染线程</strong>和<strong>JS引擎线程</strong>是互斥的，为了防止DOM渲染的不一致性，其中一个线程执行时另一个线程会被挂起。</p>\n</blockquote>\n<p>这些线程中，和Vue的<code>nextTick</code>息息相关的是<strong>JS引擎线程</strong>和<strong>事件触发线程</strong></p>\n<p>（<strong>宏任务</strong> &gt; 渲染 &gt; <strong>宏任务</strong> &gt; ...）</p>\n<p><strong>微任务</strong>是在当前<strong>宏任务</strong>执行结束之后立即执行的任务（在当前 <strong>宏任务</strong>执行之后，UI渲染之前执行的任务）。</p>\n<p><strong>微任务</strong>的响应速度相比<code>setTimeout</code>（下一个<strong>宏任务</strong>）会更快，因为无需等待UI渲染。</p>\n<h3 id="js%E6%98%AF%E5%8D%95%E7%BA%BF%E7%A8%8B%E7%9A%84">js是单线程的<a class="anchor" href="#js%E6%98%AF%E5%8D%95%E7%BA%BF%E7%A8%8B%E7%9A%84">§</a></h3>\n<ol>\n<li>\n<h5 id="%E9%AA%8C%E8%AF%811">验证1<a class="anchor" href="#%E9%AA%8C%E8%AF%811">§</a></h5>\n<p>定时器并非定时执行\n原理\nsetTimeout()的回调函数是在主线程执行的\n定时器回调函数只有在运行栈中的代码全部执行完后才有可能执行\n代码</p>\n<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> btn <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">\'btn\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> timerId <span class="token operator">=</span> <span class="token keyword null nil">null</span><span class="token punctuation">;</span>\n btn<span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 0. 清除定时器</span>\n  <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timerId<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// 1. 获取当前的时间</span>\n  <span class="token keyword">var</span> cTime <span class="token operator">=</span> <span class="token known-class-name class-name">Date</span><span class="token punctuation">.</span><span class="token method function property-access">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">\'------之前-----\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// 2. 开启定时器</span>\n timerId <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token known-class-name class-name">Date</span><span class="token punctuation">.</span><span class="token method function property-access">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> cTime<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">\'ms后执行\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">\'------之后-----\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n</code></pre>\n</li>\n</ol>\n<p>// 3. 耗时的任务\nfor(var i = 0; i &lt; 1000000000; i++){</p>\n<pre><code>  }\n}\n```\n</code></pre>\n<p>​  \n​  \n2. 代码划分\n初始化代码\n回调代码\n3. js引擎执行代码的基本流程\n先执行初始化代码: 包含一些特别的代码\n设置定时器\n绑定监听\n网络(ajax)\n后面在某个时刻才可能执行回调代码(异步)\n4. 验证2\n// 1. 定时器1\nsetTimeout(function () {\nconsole.log(\'------2m\');\n}, 2000);\n// 2. 定时器2\nsetTimeout(function () {\nconsole.log(\'------1m\');\n}, 1000);\n// 3. 函数\nfunction func() {\nconsole.log(\'--------func()\');\n}\nfunc();\n// 4. 弹窗\nalert(\'阻断\');\n// 5. 后续操作\nconsole.log(\'---------弹窗之后操作1-----\');\nconsole.log(\'---------弹窗之后操作2-----\');\n5. 为什么js要用单线程, 而不用多线程?\nJavaScript的单线程，与它的用途有关。\n作为浏览器脚本语言，JavaScript的主要用途是与用户互动，以及操作DOM。\n这决定了它只能是单线程，否则会带来很复杂的同步问题，比如一边增加dom，一边删除dom\n图示\n6. <strong>「JS阻塞DOM解析」</strong>，也就会阻塞页面\n7. 如果 JavaScript 文件中没有操作 DOM 相关代码，就可以将该 JavaScript 脚本设置为异步加载，通过 async 或 defer 来标记代码</p>\n<h4 id="defer-%E5%92%8C-async"><strong>defer 和 async</strong><a class="anchor" href="#defer-%E5%92%8C-async">§</a></h4>\n<ul>\n<li>两者都是异步去加载外部JS文件，不会阻塞DOM解析</li>\n<li>Async是在外部JS加载完成后，浏览器空闲时，Load事件触发前执行,可能会在DOMContentLoaded之前或之后执行。标记为async的脚本并不保证按照指定他们的先后顺序执行，下载完成，立马执行。（此时才发生阻塞）。</li>\n<li>defer是在JS加载完成后，整个文档解析完成后，触发 <code>DOMContentLoaded</code> 事件前执行。</li>\n</ul>\n<h3 id="css">CSS<a class="anchor" href="#css">§</a></h3>\n<ul>\n<li><code>CSS</code>不会阻塞<code>DOM</code>解析，但会阻塞<code>DOM</code>渲染。</li>\n<li><code>CSS</code>会阻塞JS执行，并不会阻塞JS文件下载</li>\n<li>DOM 和 CSSOM通常是并行构建的，所以**「CSS 加载不会阻塞 DOM 的解析」**  renderObject  layerObject</li>\n</ul>\n<h4 id="requestanimationframe">requestAnimationFrame<a class="anchor" href="#requestanimationframe">§</a></h4>\n<h3 id="%E5%90%84%E7%A7%8D%E9%AB%98%E5%BA%A6">各种高度<a class="anchor" href="#%E5%90%84%E7%A7%8D%E9%AB%98%E5%BA%A6">§</a></h3>\n<pre class="language-autoit"><code class="language-autoit">页可见区域宽： document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientWidth<span class="token comment">;</span>\n网页可见区域高： document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientHeight<span class="token comment">;</span>\n网页可见区域宽： document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>offsetWidth <span class="token punctuation">(</span>包括边线的宽<span class="token punctuation">)</span><span class="token comment">;</span>\n网页可见区域高： document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>offsetHeight <span class="token punctuation">(</span>包括边线的宽<span class="token punctuation">)</span><span class="token comment">;</span>\n网页正文全文宽： document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollWidth<span class="token comment">;</span>\n网页正文全文高： document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollHeight<span class="token comment">;</span>\n网页被卷去的高： document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollTop<span class="token comment">;</span>\n网页被卷去的左： document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollLeft<span class="token comment">;</span>\n网页正文部分上： window<span class="token punctuation">.</span>screenTop<span class="token comment">;</span>\n网页正文部分左： window<span class="token punctuation">.</span>screenLeft<span class="token comment">;</span>\n屏幕分辨率的高： window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>height<span class="token comment">;</span>\n屏幕分辨率的宽： window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>width<span class="token comment">;</span>\n屏幕可用工作区高度： window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>availHeight<span class="token comment">;</span>\n\n</code></pre>\n<p><strong>图片懒加载可视区域计算</strong></p>\n<ul>\n<li>clientHeight-scrollTop-offsetTop</li>\n<li>element.getBoundingClientRect()</li>\n</ul>\n<h3 id="%E6%B5%8F%E8%A7%88%E5%99%A8%E5%86%85%E6%A0%B8">浏览器内核<a class="anchor" href="#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%86%85%E6%A0%B8">§</a></h3>\n<p>简介\n支持浏览器运行的最核心的程序\nChrome, Safari: webkit\nfirefox: Gecko\nIE: Trident\n360,搜狗等国内浏览器: Trident + webkit\n内核模块组成\nhtml,css文档解析模块\n负责页面文本的解析\ndom/css模块\n负责dom/css在内存中的相关处理\n布局和渲染模块\n负责页面的布局和效果的绘制\n定时器模块\n负责定时器的管理\n网络请求模块\n负责服务器请求(常规/Ajax)\n事件响应模块\n负责事件的管理\n......</p>\n<h3 id="%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF%E6%A8%A1%E5%9E%8B">事件循环模型<a class="anchor" href="#%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF%E6%A8%A1%E5%9E%8B">§</a></h3>\n<ol>\n<li>\n<p>图示</p>\n<p><img src="C:%5CUsers%5Cding%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200625134628783.png" alt="image-20200625134628783"></p>\n</li>\n<li>\n<p>了解\n模型的组成\n事件管理模块\n回调队列\n代码分类\n初始化执行代码(同步代码)\n包含绑定dom事件监听, 设置定时器, 发送ajax请求的代码\n回调执行代码(异步代码)\n处理回调逻辑\n模型的运转流程\n执行初始化代码, 将事件回调函数交给对应模块管理\n当事件发生时, 管理模块会将回调函数及其数据添加到回调列队中\n只有当初始化代码执行完后(可能要一定时间), 才会遍历读取回调队列中的回调函数执行</p>\n</li>\n</ol>\n<p><strong>浏览器完成一个宏任务，在下一个宏任务执行开始前，会对页面进行重新渲染。</strong></p>\n<p><strong>如果存在微任务，浏览器会清空微任务之后再重新渲染。</strong></p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u6D4F\u89C8\u5668"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h3 id="%E8%BF%9B%E7%A8%8B%E5%92%8C%E7%BA%BF%E7%A8%8B">进程和线程<a class="anchor" href="#%E8%BF%9B%E7%A8%8B%E5%92%8C%E7%BA%BF%E7%A8%8B">§</a></h3>\n<h5 id="%E8%BF%9B%E7%A8%8B">进程<a class="anchor" href="#%E8%BF%9B%E7%A8%8B">§</a></h5>\n<p>​  程序的一次执行,  它占有一片独有的内存空间</p>\n<h5 id="%E7%BA%BF%E7%A8%8B">线程<a class="anchor" href="#%E7%BA%BF%E7%A8%8B">§</a></h5>\n<p>​  CPU的基本调度单位, 是程序执行的一个完整流程</p>\n<h5 id="%E8%BF%9B%E7%A8%8B%E4%B8%8E%E7%BA%BF%E7%A8%8B%E7%9A%84%E5%85%B3%E7%B3%BB">进程与线程的关系<a class="anchor" href="#%E8%BF%9B%E7%A8%8B%E4%B8%8E%E7%BA%BF%E7%A8%8B%E7%9A%84%E5%85%B3%E7%B3%BB">§</a></h5>\n<p>​  一个进程中一般至少有一个运行的线程: 主线程\n​  一个进程中也可以同时运行多个线程, 这时程序就是多线程运行的\n​  一个进程内的数据可以供其中的多个线程直接共享\n​  多个进程之间的数据是不能直接共享的</p>\n<h5 id="%E6%B5%8F%E8%A7%88%E5%99%A8%E8%BF%90%E8%A1%8C%E6%98%AF%E5%8D%95%E8%BF%9B%E7%A8%8B%E8%BF%98%E6%98%AF%E5%A4%9A%E8%BF%9B%E7%A8%8B">浏览器运行是单进程还是多进程?<a class="anchor" href="#%E6%B5%8F%E8%A7%88%E5%99%A8%E8%BF%90%E8%A1%8C%E6%98%AF%E5%8D%95%E8%BF%9B%E7%A8%8B%E8%BF%98%E6%98%AF%E5%A4%9A%E8%BF%9B%E7%A8%8B">§</a></h5>\n<p>​  老版的大多数是单进程\n​  新版的大多数是多进程\n​  任务管理器 ---&gt;进程</p>\n<h5 id="%E6%B5%8F%E8%A7%88%E5%99%A8%E8%BF%90%E8%A1%8C%E6%98%AF%E5%8D%95%E7%BA%BF%E7%A8%8B%E8%BF%98%E6%98%AF%E5%A4%9A%E7%BA%BF%E7%A8%8B">浏览器运行是单线程还是多线程?<a class="anchor" href="#%E6%B5%8F%E8%A7%88%E5%99%A8%E8%BF%90%E8%A1%8C%E6%98%AF%E5%8D%95%E7%BA%BF%E7%A8%8B%E8%BF%98%E6%98%AF%E5%A4%9A%E7%BA%BF%E7%A8%8B">§</a></h5>\n<p>​  都是多线程运行的</p>\n<p>浏览器（多进程）包含了<strong>Browser进程</strong>（浏览器的主进程）、<strong>第三方插件进程</strong>和<strong>GPU进程</strong>（浏览器渲染进程），其中<strong>GPU进程</strong>（多线程）和Web前端密切相关，包含以下线程：</p>\n<ul>\n<li><strong>GUI渲染线程</strong></li>\n<li><strong>JS引擎线程</strong></li>\n<li><strong>事件触发线程</strong>（和EventLoop密切相关）</li>\n<li><strong>定时触发器线程</strong></li>\n<li><strong>异步HTTP请求线程</strong></li>\n</ul>\n<blockquote>\n<p><strong>GUI渲染线程</strong>和<strong>JS引擎线程</strong>是互斥的，为了防止DOM渲染的不一致性，其中一个线程执行时另一个线程会被挂起。</p>\n</blockquote>\n<p>这些线程中，和Vue的<code>nextTick</code>息息相关的是<strong>JS引擎线程</strong>和<strong>事件触发线程</strong></p>\n<p>（<strong>宏任务</strong> &gt; 渲染 &gt; <strong>宏任务</strong> &gt; ...）</p>\n<p><strong>微任务</strong>是在当前<strong>宏任务</strong>执行结束之后立即执行的任务（在当前 <strong>宏任务</strong>执行之后，UI渲染之前执行的任务）。</p>\n<p><strong>微任务</strong>的响应速度相比<code>setTimeout</code>（下一个<strong>宏任务</strong>）会更快，因为无需等待UI渲染。</p>\n<h3 id="js%E6%98%AF%E5%8D%95%E7%BA%BF%E7%A8%8B%E7%9A%84">js是单线程的<a class="anchor" href="#js%E6%98%AF%E5%8D%95%E7%BA%BF%E7%A8%8B%E7%9A%84">§</a></h3>\n<ol>\n<li>\n<h5 id="%E9%AA%8C%E8%AF%811">验证1<a class="anchor" href="#%E9%AA%8C%E8%AF%811">§</a></h5>\n<p>定时器并非定时执行\n原理\nsetTimeout()的回调函数是在主线程执行的\n定时器回调函数只有在运行栈中的代码全部执行完后才有可能执行\n代码</p>\n<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> btn <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">\'btn\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> timerId <span class="token operator">=</span> <span class="token keyword null nil">null</span><span class="token punctuation">;</span>\n btn<span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 0. 清除定时器</span>\n  <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timerId<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// 1. 获取当前的时间</span>\n  <span class="token keyword">var</span> cTime <span class="token operator">=</span> <span class="token known-class-name class-name">Date</span><span class="token punctuation">.</span><span class="token method function property-access">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">\'------之前-----\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// 2. 开启定时器</span>\n timerId <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token known-class-name class-name">Date</span><span class="token punctuation">.</span><span class="token method function property-access">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> cTime<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">\'ms后执行\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">\'------之后-----\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n</code></pre>\n</li>\n</ol>\n<p>// 3. 耗时的任务\nfor(var i = 0; i &lt; 1000000000; i++){</p>\n<pre><code>  }\n}\n```\n</code></pre>\n<p>​  \n​  \n2. 代码划分\n初始化代码\n回调代码\n3. js引擎执行代码的基本流程\n先执行初始化代码: 包含一些特别的代码\n设置定时器\n绑定监听\n网络(ajax)\n后面在某个时刻才可能执行回调代码(异步)\n4. 验证2\n// 1. 定时器1\nsetTimeout(function () {\nconsole.log(\'------2m\');\n}, 2000);\n// 2. 定时器2\nsetTimeout(function () {\nconsole.log(\'------1m\');\n}, 1000);\n// 3. 函数\nfunction func() {\nconsole.log(\'--------func()\');\n}\nfunc();\n// 4. 弹窗\nalert(\'阻断\');\n// 5. 后续操作\nconsole.log(\'---------弹窗之后操作1-----\');\nconsole.log(\'---------弹窗之后操作2-----\');\n5. 为什么js要用单线程, 而不用多线程?\nJavaScript的单线程，与它的用途有关。\n作为浏览器脚本语言，JavaScript的主要用途是与用户互动，以及操作DOM。\n这决定了它只能是单线程，否则会带来很复杂的同步问题，比如一边增加dom，一边删除dom\n图示\n6. <strong>「JS阻塞DOM解析」</strong>，也就会阻塞页面\n7. 如果 JavaScript 文件中没有操作 DOM 相关代码，就可以将该 JavaScript 脚本设置为异步加载，通过 async 或 defer 来标记代码</p>\n<h4 id="defer-%E5%92%8C-async"><strong>defer 和 async</strong><a class="anchor" href="#defer-%E5%92%8C-async">§</a></h4>\n<ul>\n<li>两者都是异步去加载外部JS文件，不会阻塞DOM解析</li>\n<li>Async是在外部JS加载完成后，浏览器空闲时，Load事件触发前执行,可能会在DOMContentLoaded之前或之后执行。标记为async的脚本并不保证按照指定他们的先后顺序执行，下载完成，立马执行。（此时才发生阻塞）。</li>\n<li>defer是在JS加载完成后，整个文档解析完成后，触发 <code>DOMContentLoaded</code> 事件前执行。</li>\n</ul>\n<h3 id="css">CSS<a class="anchor" href="#css">§</a></h3>\n<ul>\n<li><code>CSS</code>不会阻塞<code>DOM</code>解析，但会阻塞<code>DOM</code>渲染。</li>\n<li><code>CSS</code>会阻塞JS执行，并不会阻塞JS文件下载</li>\n<li>DOM 和 CSSOM通常是并行构建的，所以**「CSS 加载不会阻塞 DOM 的解析」**  renderObject  layerObject</li>\n</ul>\n<h4 id="requestanimationframe">requestAnimationFrame<a class="anchor" href="#requestanimationframe">§</a></h4>\n<h3 id="%E5%90%84%E7%A7%8D%E9%AB%98%E5%BA%A6">各种高度<a class="anchor" href="#%E5%90%84%E7%A7%8D%E9%AB%98%E5%BA%A6">§</a></h3>\n<pre class="language-autoit"><code class="language-autoit">页可见区域宽： document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientWidth<span class="token comment">;</span>\n网页可见区域高： document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientHeight<span class="token comment">;</span>\n网页可见区域宽： document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>offsetWidth <span class="token punctuation">(</span>包括边线的宽<span class="token punctuation">)</span><span class="token comment">;</span>\n网页可见区域高： document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>offsetHeight <span class="token punctuation">(</span>包括边线的宽<span class="token punctuation">)</span><span class="token comment">;</span>\n网页正文全文宽： document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollWidth<span class="token comment">;</span>\n网页正文全文高： document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollHeight<span class="token comment">;</span>\n网页被卷去的高： document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollTop<span class="token comment">;</span>\n网页被卷去的左： document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollLeft<span class="token comment">;</span>\n网页正文部分上： window<span class="token punctuation">.</span>screenTop<span class="token comment">;</span>\n网页正文部分左： window<span class="token punctuation">.</span>screenLeft<span class="token comment">;</span>\n屏幕分辨率的高： window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>height<span class="token comment">;</span>\n屏幕分辨率的宽： window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>width<span class="token comment">;</span>\n屏幕可用工作区高度： window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>availHeight<span class="token comment">;</span>\n\n</code></pre>\n<p><strong>图片懒加载可视区域计算</strong></p>\n<ul>\n<li>clientHeight-scrollTop-offsetTop</li>\n<li>element.getBoundingClientRect()</li>\n</ul>\n<h3 id="%E6%B5%8F%E8%A7%88%E5%99%A8%E5%86%85%E6%A0%B8">浏览器内核<a class="anchor" href="#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%86%85%E6%A0%B8">§</a></h3>\n<p>简介\n支持浏览器运行的最核心的程序\nChrome, Safari: webkit\nfirefox: Gecko\nIE: Trident\n360,搜狗等国内浏览器: Trident + webkit\n内核模块组成\nhtml,css文档解析模块\n负责页面文本的解析\ndom/css模块\n负责dom/css在内存中的相关处理\n布局和渲染模块\n负责页面的布局和效果的绘制\n定时器模块\n负责定时器的管理\n网络请求模块\n负责服务器请求(常规/Ajax)\n事件响应模块\n负责事件的管理\n......</p>\n<h3 id="%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF%E6%A8%A1%E5%9E%8B">事件循环模型<a class="anchor" href="#%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF%E6%A8%A1%E5%9E%8B">§</a></h3>\n<ol>\n<li>\n<p>图示</p>\n<p><img src="C:%5CUsers%5Cding%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200625134628783.png" alt="image-20200625134628783"></p>\n</li>\n<li>\n<p>了解\n模型的组成\n事件管理模块\n回调队列\n代码分类\n初始化执行代码(同步代码)\n包含绑定dom事件监听, 设置定时器, 发送ajax请求的代码\n回调执行代码(异步代码)\n处理回调逻辑\n模型的运转流程\n执行初始化代码, 将事件回调函数交给对应模块管理\n当事件发生时, 管理模块会将回调函数及其数据添加到回调列队中\n只有当初始化代码执行完后(可能要一定时间), 才会遍历读取回调队列中的回调函数执行</p>\n</li>\n</ol>\n<p><strong>浏览器完成一个宏任务，在下一个宏任务执行开始前，会对页面进行重新渲染。</strong></p>\n<p><strong>如果存在微任务，浏览器会清空微任务之后再重新渲染。</strong></p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E8%BF%9B%E7%A8%8B%E5%92%8C%E7%BA%BF%E7%A8%8B" }, "\u8FDB\u7A0B\u548C\u7EBF\u7A0B"),
                React.createElement("ol", null)),
            React.createElement("li", null,
                React.createElement("a", { href: "#js%E6%98%AF%E5%8D%95%E7%BA%BF%E7%A8%8B%E7%9A%84" }, "js\u662F\u5355\u7EBF\u7A0B\u7684"),
                React.createElement("ol", null)),
            React.createElement("li", null,
                React.createElement("a", { href: "#css" }, "CSS"),
                React.createElement("ol", null)),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%90%84%E7%A7%8D%E9%AB%98%E5%BA%A6" }, "\u5404\u79CD\u9AD8\u5EA6")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%86%85%E6%A0%B8" }, "\u6D4F\u89C8\u5668\u5185\u6838")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF%E6%A8%A1%E5%9E%8B" }, "\u4E8B\u4EF6\u5FAA\u73AF\u6A21\u578B")))),
    'author': "dingtt",
    'contributors': [
        "dingtt",
        "dingdtt"
    ],
    'date': "2020-06-28T13:08:41.000Z",
    'updated': "2020-11-04T14:24:34.000Z",
    'excerpt': "进程和线程 进程 程序的一次执行, 它占有一片独有的内存空间 线程 CPU的基本调度单位, 是程序执行的一个完整流程 进程与线程的关系 一个进程中一般至少有一个运行的线程: 主线程 一个进程中也可以同时运行多个线程, 这时程序就...",
    'cover': "C:\\Users\\ding\\AppData\\Roaming\\Typora\\typora-user-images\\image-20200625134628783.png",
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
