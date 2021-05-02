import projectConfig from '/pagic.config.js';
export default {
    'prev': undefined,
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: 'gh-pages' },
    'pagePath': "js/面试题.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "js/面试题.html",
    'title': undefined,
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h4 id="%E8%BF%9B%E7%A8%8B%E4%B8%8E%E7%BA%BF%E7%A8%8B">进程与线程<a class="anchor" href="#%E8%BF%9B%E7%A8%8B%E4%B8%8E%E7%BA%BF%E7%A8%8B">§</a></h4>\n<p>进程是并发执行的程序，在执行过程中分配和管理资源资源的基本单位，是一个动态的概念；</p>\n<p>线程是CPU调度的基本单位；</p>\n<p>一个进程至少包含一个线程。</p>\n<h3 id="css">CSS<a class="anchor" href="#css">§</a></h3>\n<h4 id="%E8%AF%B4%E8%AF%B4css%E9%80%89%E6%8B%A9%E5%99%A8%E4%BB%A5%E5%8F%8A%E8%BF%99%E4%BA%9B%E9%80%89%E6%8B%A9%E5%99%A8%E7%9A%84%E4%BC%98%E5%85%88%E7%BA%A7--8%E7%A7%8D%E9%80%89%E6%8B%A9%E5%99%A8">说说CSS选择器以及这些选择器的优先级  8种选择器<a class="anchor" href="#%E8%AF%B4%E8%AF%B4css%E9%80%89%E6%8B%A9%E5%99%A8%E4%BB%A5%E5%8F%8A%E8%BF%99%E4%BA%9B%E9%80%89%E6%8B%A9%E5%99%A8%E7%9A%84%E4%BC%98%E5%85%88%E7%BA%A7--8%E7%A7%8D%E9%80%89%E6%8B%A9%E5%99%A8">§</a></h4>\n<ul>\n<li><code>!important</code></li>\n<li>内联样式（1000）</li>\n<li>ID选择器（0100）</li>\n<li>类选择器/属性选择器/伪类选择器（0010）</li>\n<li>元素选择器/伪元素选择器（0001）</li>\n<li>关系选择器/通配符选择器（0000）</li>\n</ul>\n<h4 id="bfc">BFC<a class="anchor" href="#bfc">§</a></h4>\n<p>BFC 全称为块级格式化上下文 (Block Formatting Context) 。</p>\n<p>10个触发条件</p>\n<ul>\n<li>\n<p>根元素或其它包含它的元素</p>\n</li>\n<li>\n<p>浮动元素 (元素的 <code>float</code> 不是 <code>none</code>)</p>\n</li>\n<li>\n<p>绝对定位元素 (元素具有 <code>position</code> 为 <code>absolute</code> 或 <code>fixed</code>)</p>\n</li>\n<li>\n<p>内联块 (元素具有 <code>display: inline-block</code>)</p>\n</li>\n<li>\n<p>表格单元格 (元素具有 <code>display: table-cell</code>，HTML表格单元格默认属性)</p>\n</li>\n<li>\n<p>表格标题 (元素具有 <code>display: table-caption</code>, HTML表格标题默认属性)</p>\n</li>\n<li>\n<p>具有<code>overflow</code> 且值不是 <code>visible</code> 的块元素</p>\n</li>\n<li>\n<p>弹性盒（<code>flex</code>或<code>inline-flex</code>）</p>\n</li>\n<li>\n<p>display: flow-root</p>\n</li>\n<li>\n<p>column-span: all</p>\n</li>\n</ul>\n<h5 id="bfc%E5%8F%AF%E4%BB%A5%E8%A7%A3%E5%86%B3%E7%9A%84%E9%97%AE%E9%A2%98">BFC可以解决的问题<a class="anchor" href="#bfc%E5%8F%AF%E4%BB%A5%E8%A7%A3%E5%86%B3%E7%9A%84%E9%97%AE%E9%A2%98">§</a></h5>\n<ul>\n<li>垂直外边距重叠问题</li>\n<li>去除浮动</li>\n<li>自适用两列布局（<code>float</code> + <code>overflow</code>）</li>\n</ul>\n<h4 id="display">display<a class="anchor" href="#display">§</a></h4>\n<h4 id="position">position<a class="anchor" href="#position">§</a></h4>\n<h4 id="%E7%9B%92%E6%A8%A1%E5%9E%8B">盒模型<a class="anchor" href="#%E7%9B%92%E6%A8%A1%E5%9E%8B">§</a></h4>\n<p><code>box-sizing: content-box</code>（W3C盒子模型）：元素的宽高大小表现为<strong>内容</strong>的大小。 <code>box-sizing: border-box</code>（IE盒子模型）：元素的宽高表现为<strong>内容 + 内边距 + 边框</strong>的大小。背景会延伸到边框的外沿。</p>\n<h4 id="%E5%B7%A6%E4%BE%A7%E5%AE%BD%E5%BA%A6%E5%9B%BA%E5%AE%9A%E5%8F%B3%E4%BE%A7%E5%AE%BD%E5%BA%A6%E8%87%AA%E9%80%82%E5%BA%94">左侧宽度固定，右侧宽度自适应<a class="anchor" href="#%E5%B7%A6%E4%BE%A7%E5%AE%BD%E5%BA%A6%E5%9B%BA%E5%AE%9A%E5%8F%B3%E4%BE%A7%E5%AE%BD%E5%BA%A6%E8%87%AA%E9%80%82%E5%BA%94">§</a></h4>\n<p>左浮动  + overflow:hidden</p>\n<p>左浮动 + padding  margin</p>\n<p>calc inline-block</p>\n<p>flex flex-basis</p>\n<h4 id="%E8%B7%A8%E5%9F%9F">跨域<a class="anchor" href="#%E8%B7%A8%E5%9F%9F">§</a></h4>\n<p>jsonp  函数接收data，script 传callback，接收内容 调用callback</p>\n<p>防止XSS</p>\n<p>严格定义 Content-Type: application/json，然后严格过滤 <code>callback</code> 后的参数并且限制长度（进行字符转义，例如&lt;换成&amp;lt，&gt;换成&amp;gt）等，这样返回的脚本内容会变成文本格式，脚本将不会执行。</p>\n<p>防止CSRF</p>\n<p>验证JSONP的调用来源（Referer），服务端判断Referer是否是白名单，或者部署随机Token来防御。</p>\n<p>CORS Access-control-allow-domain:*</p>\n<h4 id="ts%E6%9C%89%E4%BB%80%E4%B9%88%E4%BC%98%E5%8A%BF">TS有什么优势<a class="anchor" href="#ts%E6%9C%89%E4%BB%80%E4%B9%88%E4%BC%98%E5%8A%BF">§</a></h4>\n<h4 id="classb%E7%BB%A7%E6%89%BFclassa%E7%BC%96%E8%AF%91%E6%88%90es5">classB继承classA编译成ES5<a class="anchor" href="#classb%E7%BB%A7%E6%89%BFclassa%E7%BC%96%E8%AF%91%E6%88%90es5">§</a></h4>\n<p>class是有重载功能的，怎么在子类的构造函数里调用super</p>\n<p>实现一个fill函数，不能用循环</p>\n<p>用ES5实现私有变量（闭包）</p>\n<p>TypeScript里的Pick</p>\n<pre class="language-autoit"><code class="language-autoit">function Pick<span class="token operator">&lt;</span>T<span class="token punctuation">,</span> K extends key of T<span class="token operator">></span> <span class="token punctuation">(</span>obj<span class="token punctuation">:</span>T<span class="token punctuation">,</span> names<span class="token punctuation">:</span> K<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> T<span class="token punctuation">[</span>K<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span>{\n    \n}\n</code></pre>\n<p>手写promise.all</p>\n<p>手写并发只能10个</p>\n<p>怎么判断链表相交</p>\n<p>怎么找到第一个相交点</p>\n<p>flex 参见阮一峰的flex语法</p>\n<p>求最大公共前缀[\'aajjfjj\',\'aaakee\',\'aawll\']</p>\n<p>求最大公共路径前缀</p>\n<p>简易压缩算法   aaaabbbccd  a4b3c2d  不带1</p>\n<p>interface 和Type的区别</p>\n<p>如何避免CSS全局污染</p>\n<p>import和require的区别</p>\n<p>require有什么性能问题</p>\n<p>webpack如何实现动态加载（import，require.ensure）</p>\n<p>promise重试函数</p>\n<p>实现一个redux，用ts实现一个redux</p>\n<p>桶排序</p>\n<p>冒泡排序</p>\n<p>快速排序</p>\n<p>描述一下promise</p>\n<p>链式调用，promise.all中抛出异常</p>\n<p>EventLoop</p>\n<p>addEventerListener的第三个参数</p>\n<p>原生的自定义事件 customEvent</p>\n<p>splitChunksPlugin</p>\n<p>loader和Plugin区别</p>\n<p>webpack的集中hash的实现原理</p>\n<p>JS内存回收机制</p>\n<p>HTTPS非对称密钥传输对称密钥，使用对称密钥传输数据</p>\n<p>HTTP1一个域名下最大的TCP连接数为6</p>\n<p>Etag适合重要量小的资源</p>\n<p>LastModifid适合不重要量大的资源</p>\n<p>对象扁平化</p>\n<p>JSbride</p>\n<p>字符串相乘</p>\n<p>settimeout实现setintervel</p>\n<p>字符串大小写反转</p>\n<p>反转链表</p>\n<p>合并有序数组</p>\n<p>一堆数字字符串组成最大数（字典，贪心）</p>\n<p>防抖支持配置马上执行</p>\n<p>均匀节流</p>\n<p>防抖节流一体化</p>\n<p>websocket</p>\n<p>quic</p>\n<p>SSR</p>\n<p>完全不同的域名共享localstorage</p>\n<p>rxjs</p>\n<p>同步代码执行很久 超长settimeout</p>\n<p>有一个请求request，封装多个相同的请求直接读取结果</p>\n<p>排序数组，要求返回第一个比目标数字小的数，log(n)编程</p>\n<p>4个砝码，一个天平，能称出多少种重量（假设4个重量不一致）</p>\n<pre class="language-autoit"><code class="language-autoit">var b <span class="token operator">=</span> <span class="token number">1</span> \n{\n console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>\n let b <span class="token operator">=</span> <span class="token number">2</span>\n}\n</code></pre>\n<p>选择器  属性 css3选择器</p>\n<p>display  static inherit reactive absolute  fixed sticky</p>\n<p>sleep</p>\n<p>块状webview</p>\n<p>解决上下margin</p>\n<p>static inherit reactive</p>\n<p>浏览器渲染过程如下：</p>\n<ul>\n<li>解析HTML，生成DOM树</li>\n<li>解析CSS，生成CSSOM树</li>\n<li>将DOM树和CSSOM树结合，生成渲染树(Render Tree)</li>\n<li>Layout(回流)：根据生成的渲染树，进行回流(Layout)，得到节点的几何信息（位置，大小）</li>\n<li>Painting(重绘)：根据渲染树以及回流得到的几何信息，得到节点的绝对像素</li>\n<li>Display：将像素发送给GPU，展示在页面上。（这一步其实还有很多内容，比如会在GPU将多个合成层合并为同一个层，并展示在页面中。而css3硬件加速的原理则是新建合成层）</li>\n</ul>\n<p><strong>引发回流</strong></p>\n<p>添加或删除可见的DOM元素</p>\n<p>元素的位置发生变化</p>\n<p>元素的尺寸发生变化（包括外边距、内边框、边框大小、高度和宽度等）</p>\n<p>内容发生变化，比如文本变化或图片被另一个不同尺寸的图片所替代。</p>\n<p>页面一开始渲染的时候（这肯定避免不了）</p>\n<p>浏览器的窗口尺寸变化（因为回流是根据视口的大小来计算元素的位置和大小的）</p>\n<pre class="language-autoit"><code class="language-autoit">clientWidth`、`clientHeight`、`clientTop`、`clientLeft\noffsetWidth`、`offsetHeight`、`offsetTop`、`offsetLeft\nscrollWidth`、`scrollHeight`、`scrollTop`、`scrollLeft\nwidth`、`height\n<span class="token function">getComputedStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre>\n<h4 id="%E5%A6%82%E4%BD%95%E9%81%BF%E5%85%8D%E8%A7%A6%E5%8F%91%E5%9B%9E%E6%B5%81%E5%92%8C%E9%87%8D%E7%BB%98">如何避免触发回流和重绘<a class="anchor" href="#%E5%A6%82%E4%BD%95%E9%81%BF%E5%85%8D%E8%A7%A6%E5%8F%91%E5%9B%9E%E6%B5%81%E5%92%8C%E9%87%8D%E7%BB%98">§</a></h4>\n<p>CSS：</p>\n<ul>\n<li>避免使用table布局。</li>\n<li>尽可能在DOM树的最末端改变class。</li>\n<li>避免设置多层内联样式。</li>\n<li>将动画效果应用到<code>position</code>属性为<code>absolute</code>或<code>fixed</code>的元素上</li>\n<li>避免使用CSS表达式（例如：<code>calc()</code>）</li>\n<li>CSS3硬件加速（GPU加速）</li>\n</ul>\n<p>JavaScript：</p>\n<ul>\n<li>避免频繁操作样式，最好一次性重写style属性，或者将样式列表定义为class并一次性更改class属性</li>\n<li>避免频繁操作DOM，创建一个<code>documentFragment</code>，在它上面应用所有DOM操作，最后再把它添加到文档中</li>\n<li>也可以先为元素设置<code>display: none</code>，操作结束后再把它显示出来。因为在display属性为none的元素上进行的DOM操作不会引发回流和重绘</li>\n<li>避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来</li>\n<li>对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流</li>\n</ul>\n<h4 id="vue%E4%B8%AD%E7%9A%84v-html%E9%98%B2%E8%8C%83xss%E6%94%BB%E5%87%BB">Vue中的<code>v-html</code>防范XSS攻击<a class="anchor" href="#vue%E4%B8%AD%E7%9A%84v-html%E9%98%B2%E8%8C%83xss%E6%94%BB%E5%87%BB">§</a></h4>\n<p>安装xss  包装或覆写v-html</p>\n<p>httpOnly  输入检查  输出检查</p>\n<p>CSRF</p>\n<p>验证码  Referer Check</p>\n<p>垂直居中</p>\n<p>定高，基本思想是使用<code>display: inline-block, vertical-align: middle</code>和一个伪元素 height:100%让内容块处于容器中央：</p>\n<p><code>vertical-align</code>只有在父层为 td 或者 th 时才会生效,为了使用<code>vertical-align</code>，我们需要设置父元素<code>display:table</code>, 子元素 <code>display:table-cell;vertical-align:middle</code>：</p>\n<pre class="language-autoit"><code class="language-autoit">var a<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>b<span class="token operator">=</span><span class="token number">0</span><span class="token comment">;</span>\n function <span class="token function">A</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>{\n    A <span class="token operator">=</span> <span class="token function">function</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>{<span class="token function">alert</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token operator">+</span><span class="token operator">+</span><span class="token punctuation">)</span>}\n    <span class="token function">alert</span><span class="token punctuation">(</span>a<span class="token operator">+</span><span class="token operator">+</span><span class="token punctuation">)</span><span class="token comment">;</span>\n }\n <span class="token function">A</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token comment">;</span>\n <span class="token function">A</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token comment">;</span>\n</code></pre>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': undefined,
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h4 id="%E8%BF%9B%E7%A8%8B%E4%B8%8E%E7%BA%BF%E7%A8%8B">进程与线程<a class="anchor" href="#%E8%BF%9B%E7%A8%8B%E4%B8%8E%E7%BA%BF%E7%A8%8B">§</a></h4>\n<p>进程是并发执行的程序，在执行过程中分配和管理资源资源的基本单位，是一个动态的概念；</p>\n<p>线程是CPU调度的基本单位；</p>\n<p>一个进程至少包含一个线程。</p>\n<h3 id="css">CSS<a class="anchor" href="#css">§</a></h3>\n<h4 id="%E8%AF%B4%E8%AF%B4css%E9%80%89%E6%8B%A9%E5%99%A8%E4%BB%A5%E5%8F%8A%E8%BF%99%E4%BA%9B%E9%80%89%E6%8B%A9%E5%99%A8%E7%9A%84%E4%BC%98%E5%85%88%E7%BA%A7--8%E7%A7%8D%E9%80%89%E6%8B%A9%E5%99%A8">说说CSS选择器以及这些选择器的优先级  8种选择器<a class="anchor" href="#%E8%AF%B4%E8%AF%B4css%E9%80%89%E6%8B%A9%E5%99%A8%E4%BB%A5%E5%8F%8A%E8%BF%99%E4%BA%9B%E9%80%89%E6%8B%A9%E5%99%A8%E7%9A%84%E4%BC%98%E5%85%88%E7%BA%A7--8%E7%A7%8D%E9%80%89%E6%8B%A9%E5%99%A8">§</a></h4>\n<ul>\n<li><code>!important</code></li>\n<li>内联样式（1000）</li>\n<li>ID选择器（0100）</li>\n<li>类选择器/属性选择器/伪类选择器（0010）</li>\n<li>元素选择器/伪元素选择器（0001）</li>\n<li>关系选择器/通配符选择器（0000）</li>\n</ul>\n<h4 id="bfc">BFC<a class="anchor" href="#bfc">§</a></h4>\n<p>BFC 全称为块级格式化上下文 (Block Formatting Context) 。</p>\n<p>10个触发条件</p>\n<ul>\n<li>\n<p>根元素或其它包含它的元素</p>\n</li>\n<li>\n<p>浮动元素 (元素的 <code>float</code> 不是 <code>none</code>)</p>\n</li>\n<li>\n<p>绝对定位元素 (元素具有 <code>position</code> 为 <code>absolute</code> 或 <code>fixed</code>)</p>\n</li>\n<li>\n<p>内联块 (元素具有 <code>display: inline-block</code>)</p>\n</li>\n<li>\n<p>表格单元格 (元素具有 <code>display: table-cell</code>，HTML表格单元格默认属性)</p>\n</li>\n<li>\n<p>表格标题 (元素具有 <code>display: table-caption</code>, HTML表格标题默认属性)</p>\n</li>\n<li>\n<p>具有<code>overflow</code> 且值不是 <code>visible</code> 的块元素</p>\n</li>\n<li>\n<p>弹性盒（<code>flex</code>或<code>inline-flex</code>）</p>\n</li>\n<li>\n<p>display: flow-root</p>\n</li>\n<li>\n<p>column-span: all</p>\n</li>\n</ul>\n<h5 id="bfc%E5%8F%AF%E4%BB%A5%E8%A7%A3%E5%86%B3%E7%9A%84%E9%97%AE%E9%A2%98">BFC可以解决的问题<a class="anchor" href="#bfc%E5%8F%AF%E4%BB%A5%E8%A7%A3%E5%86%B3%E7%9A%84%E9%97%AE%E9%A2%98">§</a></h5>\n<ul>\n<li>垂直外边距重叠问题</li>\n<li>去除浮动</li>\n<li>自适用两列布局（<code>float</code> + <code>overflow</code>）</li>\n</ul>\n<h4 id="display">display<a class="anchor" href="#display">§</a></h4>\n<h4 id="position">position<a class="anchor" href="#position">§</a></h4>\n<h4 id="%E7%9B%92%E6%A8%A1%E5%9E%8B">盒模型<a class="anchor" href="#%E7%9B%92%E6%A8%A1%E5%9E%8B">§</a></h4>\n<p><code>box-sizing: content-box</code>（W3C盒子模型）：元素的宽高大小表现为<strong>内容</strong>的大小。 <code>box-sizing: border-box</code>（IE盒子模型）：元素的宽高表现为<strong>内容 + 内边距 + 边框</strong>的大小。背景会延伸到边框的外沿。</p>\n<h4 id="%E5%B7%A6%E4%BE%A7%E5%AE%BD%E5%BA%A6%E5%9B%BA%E5%AE%9A%E5%8F%B3%E4%BE%A7%E5%AE%BD%E5%BA%A6%E8%87%AA%E9%80%82%E5%BA%94">左侧宽度固定，右侧宽度自适应<a class="anchor" href="#%E5%B7%A6%E4%BE%A7%E5%AE%BD%E5%BA%A6%E5%9B%BA%E5%AE%9A%E5%8F%B3%E4%BE%A7%E5%AE%BD%E5%BA%A6%E8%87%AA%E9%80%82%E5%BA%94">§</a></h4>\n<p>左浮动  + overflow:hidden</p>\n<p>左浮动 + padding  margin</p>\n<p>calc inline-block</p>\n<p>flex flex-basis</p>\n<h4 id="%E8%B7%A8%E5%9F%9F">跨域<a class="anchor" href="#%E8%B7%A8%E5%9F%9F">§</a></h4>\n<p>jsonp  函数接收data，script 传callback，接收内容 调用callback</p>\n<p>防止XSS</p>\n<p>严格定义 Content-Type: application/json，然后严格过滤 <code>callback</code> 后的参数并且限制长度（进行字符转义，例如&lt;换成&amp;lt，&gt;换成&amp;gt）等，这样返回的脚本内容会变成文本格式，脚本将不会执行。</p>\n<p>防止CSRF</p>\n<p>验证JSONP的调用来源（Referer），服务端判断Referer是否是白名单，或者部署随机Token来防御。</p>\n<p>CORS Access-control-allow-domain:*</p>\n<h4 id="ts%E6%9C%89%E4%BB%80%E4%B9%88%E4%BC%98%E5%8A%BF">TS有什么优势<a class="anchor" href="#ts%E6%9C%89%E4%BB%80%E4%B9%88%E4%BC%98%E5%8A%BF">§</a></h4>\n<h4 id="classb%E7%BB%A7%E6%89%BFclassa%E7%BC%96%E8%AF%91%E6%88%90es5">classB继承classA编译成ES5<a class="anchor" href="#classb%E7%BB%A7%E6%89%BFclassa%E7%BC%96%E8%AF%91%E6%88%90es5">§</a></h4>\n<p>class是有重载功能的，怎么在子类的构造函数里调用super</p>\n<p>实现一个fill函数，不能用循环</p>\n<p>用ES5实现私有变量（闭包）</p>\n<p>TypeScript里的Pick</p>\n<pre class="language-autoit"><code class="language-autoit">function Pick<span class="token operator">&lt;</span>T<span class="token punctuation">,</span> K extends key of T<span class="token operator">></span> <span class="token punctuation">(</span>obj<span class="token punctuation">:</span>T<span class="token punctuation">,</span> names<span class="token punctuation">:</span> K<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> T<span class="token punctuation">[</span>K<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span>{\n    \n}\n</code></pre>\n<p>手写promise.all</p>\n<p>手写并发只能10个</p>\n<p>怎么判断链表相交</p>\n<p>怎么找到第一个相交点</p>\n<p>flex 参见阮一峰的flex语法</p>\n<p>求最大公共前缀[\'aajjfjj\',\'aaakee\',\'aawll\']</p>\n<p>求最大公共路径前缀</p>\n<p>简易压缩算法   aaaabbbccd  a4b3c2d  不带1</p>\n<p>interface 和Type的区别</p>\n<p>如何避免CSS全局污染</p>\n<p>import和require的区别</p>\n<p>require有什么性能问题</p>\n<p>webpack如何实现动态加载（import，require.ensure）</p>\n<p>promise重试函数</p>\n<p>实现一个redux，用ts实现一个redux</p>\n<p>桶排序</p>\n<p>冒泡排序</p>\n<p>快速排序</p>\n<p>描述一下promise</p>\n<p>链式调用，promise.all中抛出异常</p>\n<p>EventLoop</p>\n<p>addEventerListener的第三个参数</p>\n<p>原生的自定义事件 customEvent</p>\n<p>splitChunksPlugin</p>\n<p>loader和Plugin区别</p>\n<p>webpack的集中hash的实现原理</p>\n<p>JS内存回收机制</p>\n<p>HTTPS非对称密钥传输对称密钥，使用对称密钥传输数据</p>\n<p>HTTP1一个域名下最大的TCP连接数为6</p>\n<p>Etag适合重要量小的资源</p>\n<p>LastModifid适合不重要量大的资源</p>\n<p>对象扁平化</p>\n<p>JSbride</p>\n<p>字符串相乘</p>\n<p>settimeout实现setintervel</p>\n<p>字符串大小写反转</p>\n<p>反转链表</p>\n<p>合并有序数组</p>\n<p>一堆数字字符串组成最大数（字典，贪心）</p>\n<p>防抖支持配置马上执行</p>\n<p>均匀节流</p>\n<p>防抖节流一体化</p>\n<p>websocket</p>\n<p>quic</p>\n<p>SSR</p>\n<p>完全不同的域名共享localstorage</p>\n<p>rxjs</p>\n<p>同步代码执行很久 超长settimeout</p>\n<p>有一个请求request，封装多个相同的请求直接读取结果</p>\n<p>排序数组，要求返回第一个比目标数字小的数，log(n)编程</p>\n<p>4个砝码，一个天平，能称出多少种重量（假设4个重量不一致）</p>\n<pre class="language-autoit"><code class="language-autoit">var b <span class="token operator">=</span> <span class="token number">1</span> \n{\n console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>\n let b <span class="token operator">=</span> <span class="token number">2</span>\n}\n</code></pre>\n<p>选择器  属性 css3选择器</p>\n<p>display  static inherit reactive absolute  fixed sticky</p>\n<p>sleep</p>\n<p>块状webview</p>\n<p>解决上下margin</p>\n<p>static inherit reactive</p>\n<p>浏览器渲染过程如下：</p>\n<ul>\n<li>解析HTML，生成DOM树</li>\n<li>解析CSS，生成CSSOM树</li>\n<li>将DOM树和CSSOM树结合，生成渲染树(Render Tree)</li>\n<li>Layout(回流)：根据生成的渲染树，进行回流(Layout)，得到节点的几何信息（位置，大小）</li>\n<li>Painting(重绘)：根据渲染树以及回流得到的几何信息，得到节点的绝对像素</li>\n<li>Display：将像素发送给GPU，展示在页面上。（这一步其实还有很多内容，比如会在GPU将多个合成层合并为同一个层，并展示在页面中。而css3硬件加速的原理则是新建合成层）</li>\n</ul>\n<p><strong>引发回流</strong></p>\n<p>添加或删除可见的DOM元素</p>\n<p>元素的位置发生变化</p>\n<p>元素的尺寸发生变化（包括外边距、内边框、边框大小、高度和宽度等）</p>\n<p>内容发生变化，比如文本变化或图片被另一个不同尺寸的图片所替代。</p>\n<p>页面一开始渲染的时候（这肯定避免不了）</p>\n<p>浏览器的窗口尺寸变化（因为回流是根据视口的大小来计算元素的位置和大小的）</p>\n<pre class="language-autoit"><code class="language-autoit">clientWidth`、`clientHeight`、`clientTop`、`clientLeft\noffsetWidth`、`offsetHeight`、`offsetTop`、`offsetLeft\nscrollWidth`、`scrollHeight`、`scrollTop`、`scrollLeft\nwidth`、`height\n<span class="token function">getComputedStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre>\n<h4 id="%E5%A6%82%E4%BD%95%E9%81%BF%E5%85%8D%E8%A7%A6%E5%8F%91%E5%9B%9E%E6%B5%81%E5%92%8C%E9%87%8D%E7%BB%98">如何避免触发回流和重绘<a class="anchor" href="#%E5%A6%82%E4%BD%95%E9%81%BF%E5%85%8D%E8%A7%A6%E5%8F%91%E5%9B%9E%E6%B5%81%E5%92%8C%E9%87%8D%E7%BB%98">§</a></h4>\n<p>CSS：</p>\n<ul>\n<li>避免使用table布局。</li>\n<li>尽可能在DOM树的最末端改变class。</li>\n<li>避免设置多层内联样式。</li>\n<li>将动画效果应用到<code>position</code>属性为<code>absolute</code>或<code>fixed</code>的元素上</li>\n<li>避免使用CSS表达式（例如：<code>calc()</code>）</li>\n<li>CSS3硬件加速（GPU加速）</li>\n</ul>\n<p>JavaScript：</p>\n<ul>\n<li>避免频繁操作样式，最好一次性重写style属性，或者将样式列表定义为class并一次性更改class属性</li>\n<li>避免频繁操作DOM，创建一个<code>documentFragment</code>，在它上面应用所有DOM操作，最后再把它添加到文档中</li>\n<li>也可以先为元素设置<code>display: none</code>，操作结束后再把它显示出来。因为在display属性为none的元素上进行的DOM操作不会引发回流和重绘</li>\n<li>避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来</li>\n<li>对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流</li>\n</ul>\n<h4 id="vue%E4%B8%AD%E7%9A%84v-html%E9%98%B2%E8%8C%83xss%E6%94%BB%E5%87%BB">Vue中的<code>v-html</code>防范XSS攻击<a class="anchor" href="#vue%E4%B8%AD%E7%9A%84v-html%E9%98%B2%E8%8C%83xss%E6%94%BB%E5%87%BB">§</a></h4>\n<p>安装xss  包装或覆写v-html</p>\n<p>httpOnly  输入检查  输出检查</p>\n<p>CSRF</p>\n<p>验证码  Referer Check</p>\n<p>垂直居中</p>\n<p>定高，基本思想是使用<code>display: inline-block, vertical-align: middle</code>和一个伪元素 height:100%让内容块处于容器中央：</p>\n<p><code>vertical-align</code>只有在父层为 td 或者 th 时才会生效,为了使用<code>vertical-align</code>，我们需要设置父元素<code>display:table</code>, 子元素 <code>display:table-cell;vertical-align:middle</code>：</p>\n<pre class="language-autoit"><code class="language-autoit">var a<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>b<span class="token operator">=</span><span class="token number">0</span><span class="token comment">;</span>\n function <span class="token function">A</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>{\n    A <span class="token operator">=</span> <span class="token function">function</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>{<span class="token function">alert</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token operator">+</span><span class="token operator">+</span><span class="token punctuation">)</span>}\n    <span class="token function">alert</span><span class="token punctuation">(</span>a<span class="token operator">+</span><span class="token operator">+</span><span class="token punctuation">)</span><span class="token comment">;</span>\n }\n <span class="token function">A</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token comment">;</span>\n <span class="token function">A</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token comment">;</span>\n</code></pre>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#css" }, "CSS"),
                React.createElement("ol", null)))),
    'author': "dingtt",
    'contributors': [
        "dingtt",
        "dingdtt"
    ],
    'date': "2020-10-13T00:51:28.000Z",
    'updated': "2020-11-04T14:24:34.000Z",
    'excerpt': "进程与线程 进程是并发执行的程序，在执行过程中分配和管理资源资源的基本单位，是一个动态的概念； 线程是CPU调度的基本单位； 一个进程至少包含一个线程。 CSS 说说CSS选择器以及这些选择器的优先级 8种选择器 - !important ...",
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
