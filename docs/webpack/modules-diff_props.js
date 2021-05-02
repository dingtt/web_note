import projectConfig from '/pagic.config.js';
export default {
    'prev': undefined,
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: 'gh-pages' },
    'pagePath': "webpack/modules-diff.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "webpack/modules-diff.html",
    'title': "不同模块的标准及区别",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>不同模块的标准及区别</h1>\n<h2 id="%E6%97%A9%E6%9C%9F%E6%96%B9%E6%A1%88">早期方案<a class="anchor" href="#%E6%97%A9%E6%9C%9F%E6%96%B9%E6%A1%88">§</a></h2>\n<h4 id="%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4">命名空间<a class="anchor" href="#%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4">§</a></h4>\n<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> module1 <span class="token operator">=</span> <span class="token punctuation">{</span>\n  foo<span class="token operator">:</span><span class="token string">\'bar\'</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">fnl</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 调用 module1.fn1()</span>\n<span class="token comment">// 缺点:可任意修改赋值</span>\n</code></pre>\n<h4 id="%E7%AB%8B%E5%8D%B3%E6%89%A7%E8%A1%8C%E5%87%BD%E6%95%B0%E9%97%AD%E5%8C%85">立即执行函数+闭包<a class="anchor" href="#%E7%AB%8B%E5%8D%B3%E6%89%A7%E8%A1%8C%E5%87%BD%E6%95%B0%E9%97%AD%E5%8C%85">§</a></h4>\n<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> module1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token string">\'bar\'</span>\n  <span class="token keyword">var</span> <span class="token function-variable function">fnl</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token keyword control-flow">return</span> <span class="token punctuation">{</span>\n   fn1<span class="token operator">:</span>fn1\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token comment">// 只能访问暴露出来的方法</span>\n\n<span class="token comment">// 升级版 调用模块module暴露给window</span>\n<span class="token keyword">const</span> module1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token string">\'bar\'</span>\n  <span class="token keyword">var</span> <span class="token function-variable function">fnl</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token dom variable">window</span><span class="token punctuation">.</span><span class="token property-access">module</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n    fn1\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token dom variable">window</span><span class="token punctuation">)</span>\n</code></pre>\n<h3 id="commonjs">CommonJS<a class="anchor" href="#commonjs">§</a></h3>\n<p>Node.js的实现采取了CommonJS标准的一部分，并在其基础上进行了一些调整。</p>\n<h4 id="%E6%A8%A1%E5%9D%97">模块<a class="anchor" href="#%E6%A8%A1%E5%9D%97">§</a></h4>\n<p>CommonJS中规定了每个文件是一个模块，会形成一个属于模块自身的作用域，所有的变量及函数只有自己可以访问，对外是不可见。</p>\n<ul>\n<li>文件即模块，独立作用域。</li>\n<li>模块可以被多次引用加载，第一次加载之后会被缓存。</li>\n<li>加载某个模块，就是引入模块的module.exports属性</li>\n<li>module.export属性输出的是值的拷贝</li>\n<li>模块按照代码引入的顺序进行加载</li>\n<li></li>\n</ul>\n<p>导入 require(\'\')</p>\n<p>导出  module.exports{}</p>\n<p>CommonJS在浏览器端的实现，模块内部都会有一个module对象，用于存放当前模块的信息，可以理解为</p>\n<pre class="language-autoit"><code class="language-autoit">var module <span class="token operator">=</span> {<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>}\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> {<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>}\n</code></pre>\n<pre class="language-autoit"><code class="language-autoit"><span class="token operator">/</span><span class="token operator">/</span> 借助立即执行函数，对module和module<span class="token punctuation">.</span>exports对象进行赋值\n<span class="token punctuation">(</span><span class="token function">function</span><span class="token punctuation">(</span>module<span class="token punctuation">,</span> exports<span class="token punctuation">)</span>{\n  <span class="token operator">/</span><span class="token operator">/</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n}<span class="token punctuation">)</span><span class="token punctuation">(</span>module<span class="token punctuation">,</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">)</span>\n</code></pre>\n<p><em>不可以直接为exports赋值，exports = {} 是错误的，不恰当的使用module.exports 和exports 也会导致错误</em></p>\n<p>导出语句不代表模块的末尾</p>\n<h5 id="%E5%AF%BC%E5%85%A5">导入<a class="anchor" href="#%E5%AF%BC%E5%85%A5">§</a></h5>\n<p>导入使用require</p>\n<p>require的模块第一次被加载，先执行该模块，然后导出内容。 module.loaded 默认为false，第一次执行设为true</p>\n<p>require的模块被加载过，这时该模块的代码不会再执行，而是直接导出上次执行的结果。（module.loaded为true）</p>\n<p>require可以接收表达式，可以动态地指定模块加载路径。(对于ES6原生模块名只能是字符串字面量)</p>\n<h4 id="amd%E8%A7%84%E8%8C%83">AMD规范<a class="anchor" href="#amd%E8%A7%84%E8%8C%83">§</a></h4>\n<p>require.js，define和require是require.js在全局注入的函数，通过define方法，将代码定义为模块，将依赖注入依赖队列；通过require方法，完成script标签的创建去请求响应的模块，实现代码的模块加载。</p>\n<h4 id="umd%E8%A7%84%E8%8C%83">UMD规范<a class="anchor" href="#umd%E8%A7%84%E8%8C%83">§</a></h4>\n<p>判当前模块遵循AMD规范，还是CMD规范</p>\n<pre class="language-autoit"><code class="language-autoit"><span class="token punctuation">(</span><span class="token function">fucntion</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> factory<span class="token punctuation">)</span>{\n  <span class="token function">if</span><span class="token punctuation">(</span>typeof define <span class="token operator">==</span><span class="token operator">=</span> <span class="token string">\'function\'</span> <span class="token operator">&amp;</span><span class="token operator">&amp;</span> define<span class="token punctuation">.</span>amd<span class="token punctuation">)</span>{\n    <span class="token operator">/</span><span class="token operator">/</span> AMD规范\n      <span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'b\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>factory<span class="token punctuation">)</span>\n  }<span class="token keyword">else</span> <span class="token function">if</span><span class="token punctuation">(</span>typeof module <span class="token operator">==</span><span class="token operator">=</span> <span class="token string">\'object\'</span> <span class="token operator">&amp;</span><span class="token operator">&amp;</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">)</span>{\n    <span class="token operator">/</span><span class="token operator">/</span> 类Node环境\n    module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'b\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n  }<span class="token keyword">else</span>{\n    <span class="token operator">/</span><span class="token operator">/</span> 浏览器\n    root<span class="token punctuation">.</span>returnExports <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span>b<span class="token punctuation">)</span>\n  }\n}<span class="token punctuation">)</span><span class="token punctuation">(</span>this<span class="token punctuation">,</span> <span class="token function">function</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>{\n  <span class="token operator">/</span><span class="token operator">/</span> 返回值作为暴露的内容\n  return {}\n}<span class="token punctuation">)</span>\n</code></pre>\n<h3 id="es-6">ES 6<a class="anchor" href="#es-6">§</a></h3>\n<p>编译时就确定模块之间的依赖关系。</p>\n<p>es6 也是每个文件当作一个模块，每个模块拥有独立的作用域，导入导出使用import和export。</p>\n<p>ES6 不管开头是否有 <code>use strict</code>都会采用严格模式</p>\n<h5 id="%E5%AF%BC%E5%87%BA">导出<a class="anchor" href="#%E5%AF%BC%E5%87%BA">§</a></h5>\n<ul>\n<li>\n<p>ES6模块输出的是值的引用</p>\n</li>\n<li>\n<p>命名导出，可以通过as关键字对变量进行重命名</p>\n</li>\n<li>\n<p>导出变量的类型受到严格限制</p>\n</li>\n</ul>\n<p>默认导出，模块的默认导出只能有一个。（建议减少使用默认到处，会导出整体对象结果，不利于tree shaking，导出结果可随意命名）</p>\n<h5 id="%E5%AF%BC%E5%85%A5-1">导入<a class="anchor" href="#%E5%AF%BC%E5%85%A5-1">§</a></h5>\n<ul>\n<li>\n<p>只能在文件顶部引入依赖</p>\n</li>\n<li>\n<p>导入的变量是只读的，变量不允许被重新绑定，不可以更改，可以通过 as 关键字重命名，</p>\n</li>\n<li>\n<p>引入的模块名只能是字符串常量，即不可用动态确定依赖。</p>\n</li>\n</ul>\n<p>导入多个变量是可以用 * ，import * as <myModule>可以把导入的变量作为属性值添加到<my Module>对象中，从而减少对当前作用域的影响</p>\n<p>复合写法，导入之后立即导出，只支持被导入模块通过命名模式导出，默认导出没有对应的复合形式。</p>\n<pre class="language-autoit"><code class="language-autoit">export { name<span class="token punctuation">,</span> add} from <span class="token string">\'./calc.js\'</span>\n</code></pre>\n<p>在浏览器中直接使用ES模块化</p>\n<pre class="language-autoit"><code class="language-autoit"><span class="token operator">&lt;</span>script<span class="token operator">></span>\n  \n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>\n</code></pre>\n<h3 id="commonjs-%E4%B8%8E-es6-%E7%9A%84%E5%8C%BA%E5%88%AB">CommonJS 与 ES6 的区别<a class="anchor" href="#commonjs-%E4%B8%8E-es6-%E7%9A%84%E5%8C%BA%E5%88%AB">§</a></h3>\n<h4 id="%E9%9D%99%E6%80%81%E4%B8%8E%E5%8A%A8%E6%80%81">静态与动态<a class="anchor" href="#%E9%9D%99%E6%80%81%E4%B8%8E%E5%8A%A8%E6%80%81">§</a></h4>\n<p>动态指模块依赖关系的建立在代码运行阶段。而静态指模块依赖关系的建立在代码编译阶段。</p>\n<p>require的模块路径支持动态指定，可以传入表达式，在执行前并没有办法确定明确的依赖关系，模块的导入导出发生在代码运行阶段。</p>\n<p>ES6的导入导出都是声明式的，导入导出语句必须位于模块作用域的顶层（不能放到if中）</p>\n<p>ES6的静态模块结构，有利于完成死代码检测，模块变量类型的检查，编译器的优化。</p>\n<h4 id="%E5%80%BC%E6%8B%B7%E8%B4%9D%E4%B8%8E%E5%8A%A8%E6%80%81%E6%98%A0%E5%B0%84">值拷贝与动态映射<a class="anchor" href="#%E5%80%BC%E6%8B%B7%E8%B4%9D%E4%B8%8E%E5%8A%A8%E6%80%81%E6%98%A0%E5%B0%84">§</a></h4>\n<p>CommonJS获取的是一份导出值的拷贝，不会影响原有模块中的变量的值；ES6中则是值的动态映射，并且这个映射是只读的。</p>\n<pre class="language-javascript"><code class="language-javascript"><span class="token comment">// foo.js </span>\n<span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./bar.js\'</span><span class="token punctuation">)</span>  <span class="token comment">// 1</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">\'vlaue of bar:\'</span><span class="token punctuation">,</span> bar<span class="token punctuation">)</span> <span class="token comment">// 5</span>\nmodule<span class="token punctuation">.</span><span class="token property-access">exports</span> <span class="token operator">=</span> <span class="token string">\'This is foo.js\'</span> <span class="token comment">// 6</span>\n<span class="token comment">// bar.js</span>\n<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./foo.js\'</span><span class="token punctuation">)</span>  <span class="token comment">// 2</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">\'vlaue of foo:\'</span><span class="token punctuation">,</span> foo<span class="token punctuation">)</span> <span class="token comment">// 3</span>\nmodule<span class="token punctuation">.</span><span class="token property-access">exports</span> <span class="token operator">=</span> <span class="token string">\'This is bar.js\'</span> <span class="token comment">// 4</span>\n<span class="token comment">// index.js</span>\n<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./foo.js\'</span><span class="token punctuation">)</span>\n<span class="token comment">// 输出结果</span>\nvalue <span class="token keyword">of</span> foo<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\nvalue <span class="token keyword">of</span> bar<span class="token operator">:</span> <span class="token maybe-class-name">This</span> is bar<span class="token punctuation">.</span><span class="token property-access">js</span>\n</code></pre>\n<pre class="language-javascript"><code class="language-javascript"><span class="token comment">// foo.js </span>\n<span class="token keyword module">import</span> <span class="token imports">bar</span> <span class="token keyword module">from</span> <span class="token string">\'./bar.js\'</span>  \n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">\'vlaue of bar:\'</span><span class="token punctuation">,</span> bar<span class="token punctuation">)</span> \n<span class="token keyword module">export</span> <span class="token keyword module">default</span>  <span class="token string">\'This is foo.js\'</span>\n<span class="token comment">// bar.js</span>\n<span class="token keyword module">import</span> <span class="token imports">foo</span> <span class="token keyword module">from</span> <span class="token string">\'./foo.js\'</span> \n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">\'vlaue of foo:\'</span><span class="token punctuation">,</span> foo<span class="token punctuation">)</span> \n<span class="token keyword module">export</span> <span class="token keyword module">default</span> <span class="token operator">=</span> <span class="token string">\'This is bar.js\'</span> \n<span class="token comment">// index.js</span>\n<span class="token keyword module">import</span> <span class="token keyword module">from</span> <span class="token string">\'./foo.js\'</span>\n<span class="token comment">// 输出结果</span>\nvalue <span class="token keyword">of</span> foo<span class="token operator">:</span> <span class="token keyword nil">undefined</span>\nvalue <span class="token keyword">of</span> bar<span class="token operator">:</span> <span class="token maybe-class-name">This</span> is bar<span class="token punctuation">.</span><span class="token property-access">js</span>\n</code></pre>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u4E0D\u540C\u6A21\u5757\u7684\u6807\u51C6\u53CA\u533A\u522B"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E6%97%A9%E6%9C%9F%E6%96%B9%E6%A1%88">早期方案<a class="anchor" href="#%E6%97%A9%E6%9C%9F%E6%96%B9%E6%A1%88">§</a></h2>\n<h4 id="%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4">命名空间<a class="anchor" href="#%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4">§</a></h4>\n<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> module1 <span class="token operator">=</span> <span class="token punctuation">{</span>\n  foo<span class="token operator">:</span><span class="token string">\'bar\'</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">fnl</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 调用 module1.fn1()</span>\n<span class="token comment">// 缺点:可任意修改赋值</span>\n</code></pre>\n<h4 id="%E7%AB%8B%E5%8D%B3%E6%89%A7%E8%A1%8C%E5%87%BD%E6%95%B0%E9%97%AD%E5%8C%85">立即执行函数+闭包<a class="anchor" href="#%E7%AB%8B%E5%8D%B3%E6%89%A7%E8%A1%8C%E5%87%BD%E6%95%B0%E9%97%AD%E5%8C%85">§</a></h4>\n<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> module1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token string">\'bar\'</span>\n  <span class="token keyword">var</span> <span class="token function-variable function">fnl</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token keyword control-flow">return</span> <span class="token punctuation">{</span>\n   fn1<span class="token operator">:</span>fn1\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token comment">// 只能访问暴露出来的方法</span>\n\n<span class="token comment">// 升级版 调用模块module暴露给window</span>\n<span class="token keyword">const</span> module1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token string">\'bar\'</span>\n  <span class="token keyword">var</span> <span class="token function-variable function">fnl</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token dom variable">window</span><span class="token punctuation">.</span><span class="token property-access">module</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n    fn1\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token dom variable">window</span><span class="token punctuation">)</span>\n</code></pre>\n<h3 id="commonjs">CommonJS<a class="anchor" href="#commonjs">§</a></h3>\n<p>Node.js的实现采取了CommonJS标准的一部分，并在其基础上进行了一些调整。</p>\n<h4 id="%E6%A8%A1%E5%9D%97">模块<a class="anchor" href="#%E6%A8%A1%E5%9D%97">§</a></h4>\n<p>CommonJS中规定了每个文件是一个模块，会形成一个属于模块自身的作用域，所有的变量及函数只有自己可以访问，对外是不可见。</p>\n<ul>\n<li>文件即模块，独立作用域。</li>\n<li>模块可以被多次引用加载，第一次加载之后会被缓存。</li>\n<li>加载某个模块，就是引入模块的module.exports属性</li>\n<li>module.export属性输出的是值的拷贝</li>\n<li>模块按照代码引入的顺序进行加载</li>\n<li></li>\n</ul>\n<p>导入 require(\'\')</p>\n<p>导出  module.exports{}</p>\n<p>CommonJS在浏览器端的实现，模块内部都会有一个module对象，用于存放当前模块的信息，可以理解为</p>\n<pre class="language-autoit"><code class="language-autoit">var module <span class="token operator">=</span> {<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>}\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> {<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>}\n</code></pre>\n<pre class="language-autoit"><code class="language-autoit"><span class="token operator">/</span><span class="token operator">/</span> 借助立即执行函数，对module和module<span class="token punctuation">.</span>exports对象进行赋值\n<span class="token punctuation">(</span><span class="token function">function</span><span class="token punctuation">(</span>module<span class="token punctuation">,</span> exports<span class="token punctuation">)</span>{\n  <span class="token operator">/</span><span class="token operator">/</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n}<span class="token punctuation">)</span><span class="token punctuation">(</span>module<span class="token punctuation">,</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">)</span>\n</code></pre>\n<p><em>不可以直接为exports赋值，exports = {} 是错误的，不恰当的使用module.exports 和exports 也会导致错误</em></p>\n<p>导出语句不代表模块的末尾</p>\n<h5 id="%E5%AF%BC%E5%85%A5">导入<a class="anchor" href="#%E5%AF%BC%E5%85%A5">§</a></h5>\n<p>导入使用require</p>\n<p>require的模块第一次被加载，先执行该模块，然后导出内容。 module.loaded 默认为false，第一次执行设为true</p>\n<p>require的模块被加载过，这时该模块的代码不会再执行，而是直接导出上次执行的结果。（module.loaded为true）</p>\n<p>require可以接收表达式，可以动态地指定模块加载路径。(对于ES6原生模块名只能是字符串字面量)</p>\n<h4 id="amd%E8%A7%84%E8%8C%83">AMD规范<a class="anchor" href="#amd%E8%A7%84%E8%8C%83">§</a></h4>\n<p>require.js，define和require是require.js在全局注入的函数，通过define方法，将代码定义为模块，将依赖注入依赖队列；通过require方法，完成script标签的创建去请求响应的模块，实现代码的模块加载。</p>\n<h4 id="umd%E8%A7%84%E8%8C%83">UMD规范<a class="anchor" href="#umd%E8%A7%84%E8%8C%83">§</a></h4>\n<p>判当前模块遵循AMD规范，还是CMD规范</p>\n<pre class="language-autoit"><code class="language-autoit"><span class="token punctuation">(</span><span class="token function">fucntion</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> factory<span class="token punctuation">)</span>{\n  <span class="token function">if</span><span class="token punctuation">(</span>typeof define <span class="token operator">==</span><span class="token operator">=</span> <span class="token string">\'function\'</span> <span class="token operator">&amp;</span><span class="token operator">&amp;</span> define<span class="token punctuation">.</span>amd<span class="token punctuation">)</span>{\n    <span class="token operator">/</span><span class="token operator">/</span> AMD规范\n      <span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'b\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>factory<span class="token punctuation">)</span>\n  }<span class="token keyword">else</span> <span class="token function">if</span><span class="token punctuation">(</span>typeof module <span class="token operator">==</span><span class="token operator">=</span> <span class="token string">\'object\'</span> <span class="token operator">&amp;</span><span class="token operator">&amp;</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">)</span>{\n    <span class="token operator">/</span><span class="token operator">/</span> 类Node环境\n    module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'b\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n  }<span class="token keyword">else</span>{\n    <span class="token operator">/</span><span class="token operator">/</span> 浏览器\n    root<span class="token punctuation">.</span>returnExports <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span>b<span class="token punctuation">)</span>\n  }\n}<span class="token punctuation">)</span><span class="token punctuation">(</span>this<span class="token punctuation">,</span> <span class="token function">function</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>{\n  <span class="token operator">/</span><span class="token operator">/</span> 返回值作为暴露的内容\n  return {}\n}<span class="token punctuation">)</span>\n</code></pre>\n<h3 id="es-6">ES 6<a class="anchor" href="#es-6">§</a></h3>\n<p>编译时就确定模块之间的依赖关系。</p>\n<p>es6 也是每个文件当作一个模块，每个模块拥有独立的作用域，导入导出使用import和export。</p>\n<p>ES6 不管开头是否有 <code>use strict</code>都会采用严格模式</p>\n<h5 id="%E5%AF%BC%E5%87%BA">导出<a class="anchor" href="#%E5%AF%BC%E5%87%BA">§</a></h5>\n<ul>\n<li>\n<p>ES6模块输出的是值的引用</p>\n</li>\n<li>\n<p>命名导出，可以通过as关键字对变量进行重命名</p>\n</li>\n<li>\n<p>导出变量的类型受到严格限制</p>\n</li>\n</ul>\n<p>默认导出，模块的默认导出只能有一个。（建议减少使用默认到处，会导出整体对象结果，不利于tree shaking，导出结果可随意命名）</p>\n<h5 id="%E5%AF%BC%E5%85%A5-1">导入<a class="anchor" href="#%E5%AF%BC%E5%85%A5-1">§</a></h5>\n<ul>\n<li>\n<p>只能在文件顶部引入依赖</p>\n</li>\n<li>\n<p>导入的变量是只读的，变量不允许被重新绑定，不可以更改，可以通过 as 关键字重命名，</p>\n</li>\n<li>\n<p>引入的模块名只能是字符串常量，即不可用动态确定依赖。</p>\n</li>\n</ul>\n<p>导入多个变量是可以用 * ，import * as <myModule>可以把导入的变量作为属性值添加到<my Module>对象中，从而减少对当前作用域的影响</p>\n<p>复合写法，导入之后立即导出，只支持被导入模块通过命名模式导出，默认导出没有对应的复合形式。</p>\n<pre class="language-autoit"><code class="language-autoit">export { name<span class="token punctuation">,</span> add} from <span class="token string">\'./calc.js\'</span>\n</code></pre>\n<p>在浏览器中直接使用ES模块化</p>\n<pre class="language-autoit"><code class="language-autoit"><span class="token operator">&lt;</span>script<span class="token operator">></span>\n  \n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>\n</code></pre>\n<h3 id="commonjs-%E4%B8%8E-es6-%E7%9A%84%E5%8C%BA%E5%88%AB">CommonJS 与 ES6 的区别<a class="anchor" href="#commonjs-%E4%B8%8E-es6-%E7%9A%84%E5%8C%BA%E5%88%AB">§</a></h3>\n<h4 id="%E9%9D%99%E6%80%81%E4%B8%8E%E5%8A%A8%E6%80%81">静态与动态<a class="anchor" href="#%E9%9D%99%E6%80%81%E4%B8%8E%E5%8A%A8%E6%80%81">§</a></h4>\n<p>动态指模块依赖关系的建立在代码运行阶段。而静态指模块依赖关系的建立在代码编译阶段。</p>\n<p>require的模块路径支持动态指定，可以传入表达式，在执行前并没有办法确定明确的依赖关系，模块的导入导出发生在代码运行阶段。</p>\n<p>ES6的导入导出都是声明式的，导入导出语句必须位于模块作用域的顶层（不能放到if中）</p>\n<p>ES6的静态模块结构，有利于完成死代码检测，模块变量类型的检查，编译器的优化。</p>\n<h4 id="%E5%80%BC%E6%8B%B7%E8%B4%9D%E4%B8%8E%E5%8A%A8%E6%80%81%E6%98%A0%E5%B0%84">值拷贝与动态映射<a class="anchor" href="#%E5%80%BC%E6%8B%B7%E8%B4%9D%E4%B8%8E%E5%8A%A8%E6%80%81%E6%98%A0%E5%B0%84">§</a></h4>\n<p>CommonJS获取的是一份导出值的拷贝，不会影响原有模块中的变量的值；ES6中则是值的动态映射，并且这个映射是只读的。</p>\n<pre class="language-javascript"><code class="language-javascript"><span class="token comment">// foo.js </span>\n<span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./bar.js\'</span><span class="token punctuation">)</span>  <span class="token comment">// 1</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">\'vlaue of bar:\'</span><span class="token punctuation">,</span> bar<span class="token punctuation">)</span> <span class="token comment">// 5</span>\nmodule<span class="token punctuation">.</span><span class="token property-access">exports</span> <span class="token operator">=</span> <span class="token string">\'This is foo.js\'</span> <span class="token comment">// 6</span>\n<span class="token comment">// bar.js</span>\n<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./foo.js\'</span><span class="token punctuation">)</span>  <span class="token comment">// 2</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">\'vlaue of foo:\'</span><span class="token punctuation">,</span> foo<span class="token punctuation">)</span> <span class="token comment">// 3</span>\nmodule<span class="token punctuation">.</span><span class="token property-access">exports</span> <span class="token operator">=</span> <span class="token string">\'This is bar.js\'</span> <span class="token comment">// 4</span>\n<span class="token comment">// index.js</span>\n<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./foo.js\'</span><span class="token punctuation">)</span>\n<span class="token comment">// 输出结果</span>\nvalue <span class="token keyword">of</span> foo<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\nvalue <span class="token keyword">of</span> bar<span class="token operator">:</span> <span class="token maybe-class-name">This</span> is bar<span class="token punctuation">.</span><span class="token property-access">js</span>\n</code></pre>\n<pre class="language-javascript"><code class="language-javascript"><span class="token comment">// foo.js </span>\n<span class="token keyword module">import</span> <span class="token imports">bar</span> <span class="token keyword module">from</span> <span class="token string">\'./bar.js\'</span>  \n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">\'vlaue of bar:\'</span><span class="token punctuation">,</span> bar<span class="token punctuation">)</span> \n<span class="token keyword module">export</span> <span class="token keyword module">default</span>  <span class="token string">\'This is foo.js\'</span>\n<span class="token comment">// bar.js</span>\n<span class="token keyword module">import</span> <span class="token imports">foo</span> <span class="token keyword module">from</span> <span class="token string">\'./foo.js\'</span> \n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">\'vlaue of foo:\'</span><span class="token punctuation">,</span> foo<span class="token punctuation">)</span> \n<span class="token keyword module">export</span> <span class="token keyword module">default</span> <span class="token operator">=</span> <span class="token string">\'This is bar.js\'</span> \n<span class="token comment">// index.js</span>\n<span class="token keyword module">import</span> <span class="token keyword module">from</span> <span class="token string">\'./foo.js\'</span>\n<span class="token comment">// 输出结果</span>\nvalue <span class="token keyword">of</span> foo<span class="token operator">:</span> <span class="token keyword nil">undefined</span>\nvalue <span class="token keyword">of</span> bar<span class="token operator">:</span> <span class="token maybe-class-name">This</span> is bar<span class="token punctuation">.</span><span class="token property-access">js</span>\n</code></pre>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%97%A9%E6%9C%9F%E6%96%B9%E6%A1%88" }, "\u65E9\u671F\u65B9\u6848"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#commonjs" }, "CommonJS"),
                        React.createElement("ol", null)),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#es-6" }, "ES 6"),
                        React.createElement("ol", null)),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#commonjs-%E4%B8%8E-es6-%E7%9A%84%E5%8C%BA%E5%88%AB" }, "CommonJS \u4E0E ES6 \u7684\u533A\u522B"),
                        React.createElement("ol", null)))))),
    'author': "dingtt",
    'contributors': [
        "dingtt",
        "dingdtt"
    ],
    'date': "2020-06-27T13:11:07.000Z",
    'updated': "2021-03-20T14:34:58.000Z",
    'excerpt': "早期方案 命名空间 const module1 = { foo:'bar', fnl:function(){} } // 调用 module1.fn1() // 缺点:可任意修改赋值 立即执行函数+闭包 const module1 = (function(){ var foo = 'bar' var fnl = function(){} return { fn1:...",
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
