import projectConfig from '/pagic.config.js';
export default {
    'prev': undefined,
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "Css/css.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "Css/css.html",
    'title': undefined,
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>常见面试CSS问题</p>\n<h3 id="%E7%94%BB%E4%B8%89%E8%A7%92%E5%BD%A2">画三角形<a class="anchor" href="#%E7%94%BB%E4%B8%89%E8%A7%92%E5%BD%A2">§</a></h3>\n<p>宽高为0，4个border宽度，一边上色，三遍透明，角度调上色边的宽度，宽度越大，三角形越尖。</p>\n<h3 id="%E7%94%BB%E6%89%87%E5%BD%A2">画扇形<a class="anchor" href="#%E7%94%BB%E6%89%87%E5%BD%A2">§</a></h3>\n<ul>\n<li>\n<p>方案一： border画的三角形，加border-radius改造。缺点，切得是同一个圆的弧。</p>\n</li>\n<li>\n<p><strong>方案二：矩形+半圆相切</strong></p>\n</li>\n</ul>\n<p>一个背景色圆，after，before，用clip裁切两个半圆，通过半圆旋转遮挡，显示扇形， clip(x,w,h,y)</p>\n<pre class="language-css"><code class="language-css"><span class="token selector"><span class="token class">.sector</span></span><span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token unit">px</span><span class="token punctuation">;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token unit">px</span><span class="token punctuation">;</span>\n    <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token unit">px</span><span class="token punctuation">;</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token color">deepskyblue</span><span class="token punctuation">;</span>\n    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector"><span class="token class">.sector</span><span class="token pseudo-element">::before</span></span><span class="token punctuation">{</span>\n    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token unit">px</span><span class="token punctuation">;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token unit">px</span><span class="token punctuation">;</span>\n    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token color">white</span><span class="token punctuation">;</span>\n    <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token unit">px</span><span class="token punctuation">;</span>\n    <span class="token comment">/*裁减半圆，再做旋转*/</span>\n    <span class="token property">clip</span><span class="token punctuation">:</span> <span class="token function">rect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token unit">px</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token unit">px</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token unit">px</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span><span class="token number">-60</span><span class="token unit">deg</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector"><span class="token class">.sector</span><span class="token pseudo-element">::after</span></span><span class="token punctuation">{</span>\n    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token unit">px</span><span class="token punctuation">;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token unit">px</span><span class="token punctuation">;</span>\n    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token color">white</span><span class="token punctuation">;</span>\n    <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token unit">px</span><span class="token punctuation">;</span>\n    <span class="token comment">/*裁减半圆，再做旋转*/</span>\n    <span class="token property">clip</span><span class="token punctuation">:</span> <span class="token function">rect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token unit">px</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token unit">px</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token unit">px</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token unit">px</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token unit">deg</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</code></pre>\n<p>方案三：圆锥渐变   yueing</p>\n<pre class="language-autoit"><code class="language-autoit">background<span class="token punctuation">:</span> conic<span class="token operator">-</span><span class="token function">gradient</span><span class="token punctuation">(</span>deeppink <span class="token number">0</span><span class="token punctuation">,</span> deeppink <span class="token number">30</span>%<span class="token punctuation">,</span> yellowgreen <span class="token number">30</span>%<span class="token punctuation">,</span> yellowgreen <span class="token number">100</span>%<span class="token punctuation">)</span><span class="token comment">; // 0 30% 也可以写到一起，兼容性不好</span>\nbackground<span class="token operator">-</span>image<span class="token punctuation">:</span> conic<span class="token operator">-</span><span class="token function">gradient</span><span class="token punctuation">(</span>#37c <span class="token number">0</span> 60deg<span class="token punctuation">,</span> #ccc 60deg 360deg<span class="token punctuation">)</span><span class="token comment">;  // #ccc起始角度需小于60, 总数大于360</span>\nbackground<span class="token operator">-</span>image<span class="token punctuation">:</span> conic<span class="token operator">-</span><span class="token function">gradient</span><span class="token punctuation">(</span>#37c <span class="token number">0</span><span class="token punctuation">,</span>#37c 60deg<span class="token punctuation">,</span> #ccc 60deg<span class="token punctuation">,</span> #ccc 360deg<span class="token punctuation">)</span><span class="token comment">;</span>\n</code></pre>\n<h4 id="bfc">BFC<a class="anchor" href="#bfc">§</a></h4>\n<p>块级格式上下文，是一种渲染规则，决定了这一块如何排列和渲染。</p>\n<p><strong>布局规则</strong>：</p>\n<ul>\n<li>内部的Box会在垂直方向上一个一个排放，距离由margin决定，不同的BFC不会产生负margin重叠。</li>\n<li>BFC中的子元素的左外边距，与块的左边界接触</li>\n<li>BFC的区域不会与float的元素区域重叠</li>\n<li>计算BFC高度时，浮动子元素也参与计算。</li>\n</ul>\n<p><strong>触发</strong></p>\n<ul>\n<li>根元素 HTML标签</li>\n<li>浮动元素 float  left right</li>\n<li>overflow不为visible，为auto scroll hidden</li>\n<li>display值为 inline-block  table table-cell table-caption  inline-table flex inline-flex grid inline-grid</li>\n<li>定位元素 position值为absolute fixed</li>\n</ul>\n<p><strong>应用</strong></p>\n<p>解决负margin，overflow:auto</p>\n<p>利用float 和 右侧形成BFC，构造固比模型</p>\n<p>解决float塌陷</p>\n<h4 id="%E9%87%8D%E6%8E%92%E9%87%8D%E7%BB%98">重排重绘<a class="anchor" href="#%E9%87%8D%E6%8E%92%E9%87%8D%E7%BB%98">§</a></h4>\n<h4 id="%E6%B5%8F%E8%A7%88%E5%99%A8%E5%88%86%E5%B1%82">浏览器分层<a class="anchor" href="#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%88%86%E5%B1%82">§</a></h4>\n<h4 id="css-js%E9%98%BB%E5%A1%9E">css js阻塞<a class="anchor" href="#css-js%E9%98%BB%E5%A1%9E">§</a></h4>\n<h4 id="css-%E6%B0%B4%E6%B3%A2%E7%BA%B9">CSS 水波纹<a class="anchor" href="#css-%E6%B0%B4%E6%B3%A2%E7%BA%B9">§</a></h4>\n<h4 id="position%E5%B1%9E%E6%80%A7%E5%80%BC">position属性值<a class="anchor" href="#position%E5%B1%9E%E6%80%A7%E5%80%BC">§</a></h4>\n<p>static  reactive absolute fiexd sticky</p>\n<h4 id="css%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8less%E7%9A%84%E5%A5%BD%E5%A4%84">Css预处理器，Less的好处<a class="anchor" href="#css%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8less%E7%9A%84%E5%A5%BD%E5%A4%84">§</a></h4>\n<h4 id="css%E9%80%89%E6%8B%A9%E5%99%A8%E6%9D%83%E9%87%8D">CSS选择器，权重<a class="anchor" href="#css%E9%80%89%E6%8B%A9%E5%99%A8%E6%9D%83%E9%87%8D">§</a></h4>\n<p>10个，id  类 标签 相邻 子代 孙代    属性 伪类  通配符</p>\n<h4 id="float%E5%92%8Cpositon%E5%8C%BA%E5%88%AB">float和positon区别<a class="anchor" href="#float%E5%92%8Cpositon%E5%8C%BA%E5%88%AB">§</a></h4>\n<h4 id="nth-child%E5%92%8Cnth-type-of%E5%8C%BA%E5%88%AB">nth-child和nth-type-of区别<a class="anchor" href="#nth-child%E5%92%8Cnth-type-of%E5%8C%BA%E5%88%AB">§</a></h4>\n<p>flex布局</p>\n<h4 id="%E4%B8%8D%E7%9F%A5%E9%81%93%E5%AE%BD%E9%AB%98%E7%9A%84div%E5%B1%85%E4%B8%AD">不知道宽高的div居中<a class="anchor" href="#%E4%B8%8D%E7%9F%A5%E9%81%93%E5%AE%BD%E9%AB%98%E7%9A%84div%E5%B1%85%E4%B8%AD">§</a></h4>\n<p>绝对定位+ transform</p>\n<p>flex</p>\n<h4 id="grid%E5%B8%83%E5%B1%80">grid布局<a class="anchor" href="#grid%E5%B8%83%E5%B1%80">§</a></h4>\n<h4 id="%E5%B7%A6%E5%8F%B3100px%E4%B8%AD%E9%97%B4%E8%87%AA%E9%80%82%E5%BA%943%E4%B8%89%E7%A7%8D%E4%BB%A5%E4%B8%8A">左右100px，中间自适应，3三种以上<a class="anchor" href="#%E5%B7%A6%E5%8F%B3100px%E4%B8%AD%E9%97%B4%E8%87%AA%E9%80%82%E5%BA%943%E4%B8%89%E7%A7%8D%E4%BB%A5%E4%B8%8A">§</a></h4>\n<p>浮动+ BFC  浮动 + padding</p>\n<p>flex     0 0 100px   1 0 auto</p>\n<p>定位</p>\n<p>calc + inline-block</p>\n<pre class="language-autoit"><code class="language-autoit">\n</code></pre>\n<h4 id="%E5%B1%8F%E5%B9%95%E5%8D%A0%E6%BB%A1%E5%92%8C%E6%9C%AA%E5%8D%A0%E6%BB%A1%E7%9A%84%E6%83%85%E5%86%B5%E4%B8%8B%E4%BD%BF-footer-%E5%9B%BA%E5%AE%9A%E5%9C%A8%E5%BA%95%E9%83%A8">屏幕占满和未占满的情况下，使 footer 固定在底部<a class="anchor" href="#%E5%B1%8F%E5%B9%95%E5%8D%A0%E6%BB%A1%E5%92%8C%E6%9C%AA%E5%8D%A0%E6%BB%A1%E7%9A%84%E6%83%85%E5%86%B5%E4%B8%8B%E4%BD%BF-footer-%E5%9B%BA%E5%AE%9A%E5%9C%A8%E5%BA%95%E9%83%A8">§</a></h4>\n<h4 id="css%E7%94%BB%E4%B8%89%E8%A7%92%E5%BD%A2">CSS画三角形<a class="anchor" href="#css%E7%94%BB%E4%B8%89%E8%A7%92%E5%BD%A2">§</a></h4>\n<h4 id="%E8%B6%85%E5%87%BA%E7%9C%81%E7%95%A5%E4%B8%89%E8%A1%8C%E8%B6%85%E5%87%BA%E7%9C%81%E7%95%A5">超出省略，三行超出省略<a class="anchor" href="#%E8%B6%85%E5%87%BA%E7%9C%81%E7%95%A5%E4%B8%89%E8%A1%8C%E8%B6%85%E5%87%BA%E7%9C%81%E7%95%A5">§</a></h4>\n<pre class="language-autoit"><code class="language-autoit">over<span class="token operator">-</span>flow：eslipise line<span class="token operator">-</span>com\n</code></pre>\n<h4 id="css-inheritinitialunset-%E4%B8%89%E8%80%85%E7%9A%84%E5%8C%BA%E5%88%AB">Css inherit、initial、unset 三者的区别<a class="anchor" href="#css-inheritinitialunset-%E4%B8%89%E8%80%85%E7%9A%84%E5%8C%BA%E5%88%AB">§</a></h4>\n<h4 id="css3-%E4%B8%AD-positionsticky">css3 中 position:sticky<a class="anchor" href="#css3-%E4%B8%AD-positionsticky">§</a></h4>\n<h4 id="%E6%B8%85%E6%A5%9A%E6%B5%AE%E5%8A%A8">清楚浮动<a class="anchor" href="#%E6%B8%85%E6%A5%9A%E6%B5%AE%E5%8A%A8">§</a></h4>\n<h4 id="transform%E7%9B%B8%E5%AF%B9left-top%E7%9A%84%E4%BC%98%E5%8A%BF">transform相对left top的优势<a class="anchor" href="#transform%E7%9B%B8%E5%AF%B9left-top%E7%9A%84%E4%BC%98%E5%8A%BF">§</a></h4>\n<h4 id="%E4%B8%8A%E4%B8%8B%E5%9B%BA%E5%AE%9A%E4%B8%AD%E9%97%B4%E6%BB%9A%E5%8A%A8%E5%B8%83%E5%B1%80">上下固定，中间滚动布局<a class="anchor" href="#%E4%B8%8A%E4%B8%8B%E5%9B%BA%E5%AE%9A%E4%B8%AD%E9%97%B4%E6%BB%9A%E5%8A%A8%E5%B8%83%E5%B1%80">§</a></h4>\n<h4 id="css%E5%8D%95%E4%BD%8D%E6%9C%89%E5%93%AA%E4%BA%9B">css单位有哪些<a class="anchor" href="#css%E5%8D%95%E4%BD%8D%E6%9C%89%E5%93%AA%E4%BA%9B">§</a></h4>\n<h4 id="%E5%A4%9A%E5%88%97%E7%AD%89%E9%AB%98%E5%B8%83%E5%B1%80%E6%95%B4%E4%BD%93%E9%AB%98%E5%BA%A6%E4%BB%A5%E8%BE%83%E9%AB%98%E7%9A%84%E4%B8%BA%E5%87%86">多列等高布局，整体高度以较高的为准<a class="anchor" href="#%E5%A4%9A%E5%88%97%E7%AD%89%E9%AB%98%E5%B8%83%E5%B1%80%E6%95%B4%E4%BD%93%E9%AB%98%E5%BA%A6%E4%BB%A5%E8%BE%83%E9%AB%98%E7%9A%84%E4%B8%BA%E5%87%86">§</a></h4>\n<h4 id="css%E5%AE%9E%E7%8E%B0%E5%8D%8A%E5%9C%86">CSS实现半圆<a class="anchor" href="#css%E5%AE%9E%E7%8E%B0%E5%8D%8A%E5%9C%86">§</a></h4>\n<p>clip border-radius， 圆锥渐变</p>\n<h4 id="css%E9%80%89%E6%8B%A9%E5%99%A8%E6%9C%89%E5%93%AA%E4%BA%9B%E5%88%86%E7%B1%BB">CSS选择器有哪些分类<a class="anchor" href="#css%E9%80%89%E6%8B%A9%E5%99%A8%E6%9C%89%E5%93%AA%E4%BA%9B%E5%88%86%E7%B1%BB">§</a></h4>\n<h4 id="div%E5%AE%BD%E5%BA%A6%E8%87%AA%E9%80%82%E5%BA%94%E5%AE%BD%E9%AB%98%E4%BF%9D%E6%8C%81%E7%AD%89%E6%AF%94%E7%BC%A9%E6%94%BE">DIV宽度自适应，宽高保持等比缩放？<a class="anchor" href="#div%E5%AE%BD%E5%BA%A6%E8%87%AA%E9%80%82%E5%BA%94%E5%AE%BD%E9%AB%98%E4%BF%9D%E6%8C%81%E7%AD%89%E6%AF%94%E7%BC%A9%E6%94%BE">§</a></h4>\n<h4 id="ul-%E5%86%85%E9%83%A8%E9%99%A4%E6%9C%80%E5%90%8E%E4%B8%80%E4%B8%AA-li-%E4%BB%A5%E5%A4%96%E8%AE%BE%E7%BD%AE%E5%8F%B3%E8%BE%B9%E6%A1%86%E6%95%88%E6%9E%9C">ul 内部除最后一个 li 以外设置右边框效果<a class="anchor" href="#ul-%E5%86%85%E9%83%A8%E9%99%A4%E6%9C%80%E5%90%8E%E4%B8%80%E4%B8%AA-li-%E4%BB%A5%E5%A4%96%E8%AE%BE%E7%BD%AE%E5%8F%B3%E8%BE%B9%E6%A1%86%E6%95%88%E6%9E%9C">§</a></h4>\n<h4 id="flex1-%E7%9A%84%E5%AE%8C%E6%95%B4%E5%86%99%E6%B3%95%E6%98%AF%E5%88%86%E5%88%AB%E6%98%AF%E4%BB%80%E4%B9%88%E6%84%8F%E6%80%9D">flex:1 的完整写法是？分别是什么意思？<a class="anchor" href="#flex1-%E7%9A%84%E5%AE%8C%E6%95%B4%E5%86%99%E6%B3%95%E6%98%AF%E5%88%86%E5%88%AB%E6%98%AF%E4%BB%80%E4%B9%88%E6%84%8F%E6%80%9D">§</a></h4>\n<p>shark</p>\n<p>flow</p>\n<h4 id="css%E5%AE%9E%E7%8E%B0%E5%BC%B9%E5%B9%95">CSS实现弹幕<a class="anchor" href="#css%E5%AE%9E%E7%8E%B0%E5%BC%B9%E5%B9%95">§</a></h4>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': undefined,
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>常见面试CSS问题</p>\n<h3 id="%E7%94%BB%E4%B8%89%E8%A7%92%E5%BD%A2">画三角形<a class="anchor" href="#%E7%94%BB%E4%B8%89%E8%A7%92%E5%BD%A2">§</a></h3>\n<p>宽高为0，4个border宽度，一边上色，三遍透明，角度调上色边的宽度，宽度越大，三角形越尖。</p>\n<h3 id="%E7%94%BB%E6%89%87%E5%BD%A2">画扇形<a class="anchor" href="#%E7%94%BB%E6%89%87%E5%BD%A2">§</a></h3>\n<ul>\n<li>\n<p>方案一： border画的三角形，加border-radius改造。缺点，切得是同一个圆的弧。</p>\n</li>\n<li>\n<p><strong>方案二：矩形+半圆相切</strong></p>\n</li>\n</ul>\n<p>一个背景色圆，after，before，用clip裁切两个半圆，通过半圆旋转遮挡，显示扇形， clip(x,w,h,y)</p>\n<pre class="language-css"><code class="language-css"><span class="token selector"><span class="token class">.sector</span></span><span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token unit">px</span><span class="token punctuation">;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token unit">px</span><span class="token punctuation">;</span>\n    <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token unit">px</span><span class="token punctuation">;</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token color">deepskyblue</span><span class="token punctuation">;</span>\n    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector"><span class="token class">.sector</span><span class="token pseudo-element">::before</span></span><span class="token punctuation">{</span>\n    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token unit">px</span><span class="token punctuation">;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token unit">px</span><span class="token punctuation">;</span>\n    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token color">white</span><span class="token punctuation">;</span>\n    <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token unit">px</span><span class="token punctuation">;</span>\n    <span class="token comment">/*裁减半圆，再做旋转*/</span>\n    <span class="token property">clip</span><span class="token punctuation">:</span> <span class="token function">rect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token unit">px</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token unit">px</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token unit">px</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span><span class="token number">-60</span><span class="token unit">deg</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector"><span class="token class">.sector</span><span class="token pseudo-element">::after</span></span><span class="token punctuation">{</span>\n    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token unit">px</span><span class="token punctuation">;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token unit">px</span><span class="token punctuation">;</span>\n    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token color">white</span><span class="token punctuation">;</span>\n    <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token unit">px</span><span class="token punctuation">;</span>\n    <span class="token comment">/*裁减半圆，再做旋转*/</span>\n    <span class="token property">clip</span><span class="token punctuation">:</span> <span class="token function">rect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token unit">px</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token unit">px</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token unit">px</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token unit">px</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token unit">deg</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</code></pre>\n<p>方案三：圆锥渐变   yueing</p>\n<pre class="language-autoit"><code class="language-autoit">background<span class="token punctuation">:</span> conic<span class="token operator">-</span><span class="token function">gradient</span><span class="token punctuation">(</span>deeppink <span class="token number">0</span><span class="token punctuation">,</span> deeppink <span class="token number">30</span>%<span class="token punctuation">,</span> yellowgreen <span class="token number">30</span>%<span class="token punctuation">,</span> yellowgreen <span class="token number">100</span>%<span class="token punctuation">)</span><span class="token comment">; // 0 30% 也可以写到一起，兼容性不好</span>\nbackground<span class="token operator">-</span>image<span class="token punctuation">:</span> conic<span class="token operator">-</span><span class="token function">gradient</span><span class="token punctuation">(</span>#37c <span class="token number">0</span> 60deg<span class="token punctuation">,</span> #ccc 60deg 360deg<span class="token punctuation">)</span><span class="token comment">;  // #ccc起始角度需小于60, 总数大于360</span>\nbackground<span class="token operator">-</span>image<span class="token punctuation">:</span> conic<span class="token operator">-</span><span class="token function">gradient</span><span class="token punctuation">(</span>#37c <span class="token number">0</span><span class="token punctuation">,</span>#37c 60deg<span class="token punctuation">,</span> #ccc 60deg<span class="token punctuation">,</span> #ccc 360deg<span class="token punctuation">)</span><span class="token comment">;</span>\n</code></pre>\n<h4 id="bfc">BFC<a class="anchor" href="#bfc">§</a></h4>\n<p>块级格式上下文，是一种渲染规则，决定了这一块如何排列和渲染。</p>\n<p><strong>布局规则</strong>：</p>\n<ul>\n<li>内部的Box会在垂直方向上一个一个排放，距离由margin决定，不同的BFC不会产生负margin重叠。</li>\n<li>BFC中的子元素的左外边距，与块的左边界接触</li>\n<li>BFC的区域不会与float的元素区域重叠</li>\n<li>计算BFC高度时，浮动子元素也参与计算。</li>\n</ul>\n<p><strong>触发</strong></p>\n<ul>\n<li>根元素 HTML标签</li>\n<li>浮动元素 float  left right</li>\n<li>overflow不为visible，为auto scroll hidden</li>\n<li>display值为 inline-block  table table-cell table-caption  inline-table flex inline-flex grid inline-grid</li>\n<li>定位元素 position值为absolute fixed</li>\n</ul>\n<p><strong>应用</strong></p>\n<p>解决负margin，overflow:auto</p>\n<p>利用float 和 右侧形成BFC，构造固比模型</p>\n<p>解决float塌陷</p>\n<h4 id="%E9%87%8D%E6%8E%92%E9%87%8D%E7%BB%98">重排重绘<a class="anchor" href="#%E9%87%8D%E6%8E%92%E9%87%8D%E7%BB%98">§</a></h4>\n<h4 id="%E6%B5%8F%E8%A7%88%E5%99%A8%E5%88%86%E5%B1%82">浏览器分层<a class="anchor" href="#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%88%86%E5%B1%82">§</a></h4>\n<h4 id="css-js%E9%98%BB%E5%A1%9E">css js阻塞<a class="anchor" href="#css-js%E9%98%BB%E5%A1%9E">§</a></h4>\n<h4 id="css-%E6%B0%B4%E6%B3%A2%E7%BA%B9">CSS 水波纹<a class="anchor" href="#css-%E6%B0%B4%E6%B3%A2%E7%BA%B9">§</a></h4>\n<h4 id="position%E5%B1%9E%E6%80%A7%E5%80%BC">position属性值<a class="anchor" href="#position%E5%B1%9E%E6%80%A7%E5%80%BC">§</a></h4>\n<p>static  reactive absolute fiexd sticky</p>\n<h4 id="css%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8less%E7%9A%84%E5%A5%BD%E5%A4%84">Css预处理器，Less的好处<a class="anchor" href="#css%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8less%E7%9A%84%E5%A5%BD%E5%A4%84">§</a></h4>\n<h4 id="css%E9%80%89%E6%8B%A9%E5%99%A8%E6%9D%83%E9%87%8D">CSS选择器，权重<a class="anchor" href="#css%E9%80%89%E6%8B%A9%E5%99%A8%E6%9D%83%E9%87%8D">§</a></h4>\n<p>10个，id  类 标签 相邻 子代 孙代    属性 伪类  通配符</p>\n<h4 id="float%E5%92%8Cpositon%E5%8C%BA%E5%88%AB">float和positon区别<a class="anchor" href="#float%E5%92%8Cpositon%E5%8C%BA%E5%88%AB">§</a></h4>\n<h4 id="nth-child%E5%92%8Cnth-type-of%E5%8C%BA%E5%88%AB">nth-child和nth-type-of区别<a class="anchor" href="#nth-child%E5%92%8Cnth-type-of%E5%8C%BA%E5%88%AB">§</a></h4>\n<p>flex布局</p>\n<h4 id="%E4%B8%8D%E7%9F%A5%E9%81%93%E5%AE%BD%E9%AB%98%E7%9A%84div%E5%B1%85%E4%B8%AD">不知道宽高的div居中<a class="anchor" href="#%E4%B8%8D%E7%9F%A5%E9%81%93%E5%AE%BD%E9%AB%98%E7%9A%84div%E5%B1%85%E4%B8%AD">§</a></h4>\n<p>绝对定位+ transform</p>\n<p>flex</p>\n<h4 id="grid%E5%B8%83%E5%B1%80">grid布局<a class="anchor" href="#grid%E5%B8%83%E5%B1%80">§</a></h4>\n<h4 id="%E5%B7%A6%E5%8F%B3100px%E4%B8%AD%E9%97%B4%E8%87%AA%E9%80%82%E5%BA%943%E4%B8%89%E7%A7%8D%E4%BB%A5%E4%B8%8A">左右100px，中间自适应，3三种以上<a class="anchor" href="#%E5%B7%A6%E5%8F%B3100px%E4%B8%AD%E9%97%B4%E8%87%AA%E9%80%82%E5%BA%943%E4%B8%89%E7%A7%8D%E4%BB%A5%E4%B8%8A">§</a></h4>\n<p>浮动+ BFC  浮动 + padding</p>\n<p>flex     0 0 100px   1 0 auto</p>\n<p>定位</p>\n<p>calc + inline-block</p>\n<pre class="language-autoit"><code class="language-autoit">\n</code></pre>\n<h4 id="%E5%B1%8F%E5%B9%95%E5%8D%A0%E6%BB%A1%E5%92%8C%E6%9C%AA%E5%8D%A0%E6%BB%A1%E7%9A%84%E6%83%85%E5%86%B5%E4%B8%8B%E4%BD%BF-footer-%E5%9B%BA%E5%AE%9A%E5%9C%A8%E5%BA%95%E9%83%A8">屏幕占满和未占满的情况下，使 footer 固定在底部<a class="anchor" href="#%E5%B1%8F%E5%B9%95%E5%8D%A0%E6%BB%A1%E5%92%8C%E6%9C%AA%E5%8D%A0%E6%BB%A1%E7%9A%84%E6%83%85%E5%86%B5%E4%B8%8B%E4%BD%BF-footer-%E5%9B%BA%E5%AE%9A%E5%9C%A8%E5%BA%95%E9%83%A8">§</a></h4>\n<h4 id="css%E7%94%BB%E4%B8%89%E8%A7%92%E5%BD%A2">CSS画三角形<a class="anchor" href="#css%E7%94%BB%E4%B8%89%E8%A7%92%E5%BD%A2">§</a></h4>\n<h4 id="%E8%B6%85%E5%87%BA%E7%9C%81%E7%95%A5%E4%B8%89%E8%A1%8C%E8%B6%85%E5%87%BA%E7%9C%81%E7%95%A5">超出省略，三行超出省略<a class="anchor" href="#%E8%B6%85%E5%87%BA%E7%9C%81%E7%95%A5%E4%B8%89%E8%A1%8C%E8%B6%85%E5%87%BA%E7%9C%81%E7%95%A5">§</a></h4>\n<pre class="language-autoit"><code class="language-autoit">over<span class="token operator">-</span>flow：eslipise line<span class="token operator">-</span>com\n</code></pre>\n<h4 id="css-inheritinitialunset-%E4%B8%89%E8%80%85%E7%9A%84%E5%8C%BA%E5%88%AB">Css inherit、initial、unset 三者的区别<a class="anchor" href="#css-inheritinitialunset-%E4%B8%89%E8%80%85%E7%9A%84%E5%8C%BA%E5%88%AB">§</a></h4>\n<h4 id="css3-%E4%B8%AD-positionsticky">css3 中 position:sticky<a class="anchor" href="#css3-%E4%B8%AD-positionsticky">§</a></h4>\n<h4 id="%E6%B8%85%E6%A5%9A%E6%B5%AE%E5%8A%A8">清楚浮动<a class="anchor" href="#%E6%B8%85%E6%A5%9A%E6%B5%AE%E5%8A%A8">§</a></h4>\n<h4 id="transform%E7%9B%B8%E5%AF%B9left-top%E7%9A%84%E4%BC%98%E5%8A%BF">transform相对left top的优势<a class="anchor" href="#transform%E7%9B%B8%E5%AF%B9left-top%E7%9A%84%E4%BC%98%E5%8A%BF">§</a></h4>\n<h4 id="%E4%B8%8A%E4%B8%8B%E5%9B%BA%E5%AE%9A%E4%B8%AD%E9%97%B4%E6%BB%9A%E5%8A%A8%E5%B8%83%E5%B1%80">上下固定，中间滚动布局<a class="anchor" href="#%E4%B8%8A%E4%B8%8B%E5%9B%BA%E5%AE%9A%E4%B8%AD%E9%97%B4%E6%BB%9A%E5%8A%A8%E5%B8%83%E5%B1%80">§</a></h4>\n<h4 id="css%E5%8D%95%E4%BD%8D%E6%9C%89%E5%93%AA%E4%BA%9B">css单位有哪些<a class="anchor" href="#css%E5%8D%95%E4%BD%8D%E6%9C%89%E5%93%AA%E4%BA%9B">§</a></h4>\n<h4 id="%E5%A4%9A%E5%88%97%E7%AD%89%E9%AB%98%E5%B8%83%E5%B1%80%E6%95%B4%E4%BD%93%E9%AB%98%E5%BA%A6%E4%BB%A5%E8%BE%83%E9%AB%98%E7%9A%84%E4%B8%BA%E5%87%86">多列等高布局，整体高度以较高的为准<a class="anchor" href="#%E5%A4%9A%E5%88%97%E7%AD%89%E9%AB%98%E5%B8%83%E5%B1%80%E6%95%B4%E4%BD%93%E9%AB%98%E5%BA%A6%E4%BB%A5%E8%BE%83%E9%AB%98%E7%9A%84%E4%B8%BA%E5%87%86">§</a></h4>\n<h4 id="css%E5%AE%9E%E7%8E%B0%E5%8D%8A%E5%9C%86">CSS实现半圆<a class="anchor" href="#css%E5%AE%9E%E7%8E%B0%E5%8D%8A%E5%9C%86">§</a></h4>\n<p>clip border-radius， 圆锥渐变</p>\n<h4 id="css%E9%80%89%E6%8B%A9%E5%99%A8%E6%9C%89%E5%93%AA%E4%BA%9B%E5%88%86%E7%B1%BB">CSS选择器有哪些分类<a class="anchor" href="#css%E9%80%89%E6%8B%A9%E5%99%A8%E6%9C%89%E5%93%AA%E4%BA%9B%E5%88%86%E7%B1%BB">§</a></h4>\n<h4 id="div%E5%AE%BD%E5%BA%A6%E8%87%AA%E9%80%82%E5%BA%94%E5%AE%BD%E9%AB%98%E4%BF%9D%E6%8C%81%E7%AD%89%E6%AF%94%E7%BC%A9%E6%94%BE">DIV宽度自适应，宽高保持等比缩放？<a class="anchor" href="#div%E5%AE%BD%E5%BA%A6%E8%87%AA%E9%80%82%E5%BA%94%E5%AE%BD%E9%AB%98%E4%BF%9D%E6%8C%81%E7%AD%89%E6%AF%94%E7%BC%A9%E6%94%BE">§</a></h4>\n<h4 id="ul-%E5%86%85%E9%83%A8%E9%99%A4%E6%9C%80%E5%90%8E%E4%B8%80%E4%B8%AA-li-%E4%BB%A5%E5%A4%96%E8%AE%BE%E7%BD%AE%E5%8F%B3%E8%BE%B9%E6%A1%86%E6%95%88%E6%9E%9C">ul 内部除最后一个 li 以外设置右边框效果<a class="anchor" href="#ul-%E5%86%85%E9%83%A8%E9%99%A4%E6%9C%80%E5%90%8E%E4%B8%80%E4%B8%AA-li-%E4%BB%A5%E5%A4%96%E8%AE%BE%E7%BD%AE%E5%8F%B3%E8%BE%B9%E6%A1%86%E6%95%88%E6%9E%9C">§</a></h4>\n<h4 id="flex1-%E7%9A%84%E5%AE%8C%E6%95%B4%E5%86%99%E6%B3%95%E6%98%AF%E5%88%86%E5%88%AB%E6%98%AF%E4%BB%80%E4%B9%88%E6%84%8F%E6%80%9D">flex:1 的完整写法是？分别是什么意思？<a class="anchor" href="#flex1-%E7%9A%84%E5%AE%8C%E6%95%B4%E5%86%99%E6%B3%95%E6%98%AF%E5%88%86%E5%88%AB%E6%98%AF%E4%BB%80%E4%B9%88%E6%84%8F%E6%80%9D">§</a></h4>\n<p>shark</p>\n<p>flow</p>\n<h4 id="css%E5%AE%9E%E7%8E%B0%E5%BC%B9%E5%B9%95">CSS实现弹幕<a class="anchor" href="#css%E5%AE%9E%E7%8E%B0%E5%BC%B9%E5%B9%95">§</a></h4>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E7%94%BB%E4%B8%89%E8%A7%92%E5%BD%A2" }, "\u753B\u4E09\u89D2\u5F62")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E7%94%BB%E6%89%87%E5%BD%A2" }, "\u753B\u6247\u5F62"),
                React.createElement("ol", null)))),
    'author': "dingtt",
    'contributors': [
        "dingtt"
    ],
    'date': "2021-05-02T08:22:31.000Z",
    'updated': null,
    'excerpt': "常见面试CSS问题 画三角形 宽高为0，4个border宽度，一边上色，三遍透明，角度调上色边的宽度，宽度越大，三角形越尖。 画扇形 - 方案一： border画的三角形，加border-radius改造。缺点，切得是同一个圆的弧。 - 方案二：矩形...",
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
