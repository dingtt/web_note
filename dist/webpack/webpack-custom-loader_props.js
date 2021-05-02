import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "生产环境配置",
        "link": "webpack/webpack-dev-config.html"
    },
    'next': {
        "text": "实现自己的plugin",
        "link": "webpack/webpack-custom-plugin.html"
    },
    config: { "root": "/", ...projectConfig, branch: 'gh-pages' },
    'pagePath': "webpack/webpack-custom-loader.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "webpack/webpack-custom-loader.html",
    'title': "实现自己的loader",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>实现自己的loader</h1>\n<h3 id="loader%E5%8E%9F%E7%90%86">loader原理<a class="anchor" href="#loader%E5%8E%9F%E7%90%86">§</a></h3>\n<p>loader本身就是一个函数，对接收到的内容进行转换，然后返回转换后的结果。声明式函数，不能⽤用箭头函数</p>\n<p>content是模块内容，可以是字符串，Buffer，map是sourcemap对象，meta是其他一些元数据</p>\n<pre class="language-javascript"><code class="language-javascript">module<span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">content<span class="token punctuation">,</span> map<span class="token punctuation">,</span> meta</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// var callback = this.async() // 异步事件的适合使用this.async，返回的是callback函数  </span>\n  <span class="token comment">// setTimeout(() => {    </span>\n      <span class="token comment">// ...    </span>\n      <span class="token comment">//callback(null, result)  </span>\n  <span class="token comment">// }, 3000);</span>\n  <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token function">handler</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> map<span class="token punctuation">,</span> meta<span class="token punctuation">)</span>\n  <span class="token comment">// loader函数本身只返回一个值，如果需要返回sourcemap或者meta对象等多个值，需要使用this.callback()</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">callback</span><span class="token punctuation">(</span>\n   <span class="token keyword null nil">null</span><span class="token punctuation">,</span> <span class="token comment">// error 自行赋值</span>\n   result<span class="token punctuation">.</span><span class="token property-access">content</span><span class="token punctuation">,</span> <span class="token comment">// 转换后的内容  string Buffer</span>\n   result<span class="token punctuation">.</span><span class="token property-access">map</span><span class="token punctuation">,</span> <span class="token comment">// 转换后的source-map</span>\n   result<span class="token punctuation">.</span><span class="token property-access">meta</span> <span class="token comment">// 转换后的AST</span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h3 id="%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E7%9B%AE%E5%BD%95--my-diy-loader">创建一个目录  my-diy-loader<a class="anchor" href="#%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E7%9B%AE%E5%BD%95--my-diy-loader">§</a></h3>\n<p>npm init -y</p>\n<pre class="language-javascript"><code class="language-javascript"><span class="token comment">// my-diy-loader/index.js</span>\n<span class="token comment">// 还可以安装引入其他的依赖</span>\n<span class="token keyword">var</span> loaderUtils <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"loader-utils"</span><span class="token punctuation">)</span> <span class="token comment">// loader-utils是webpack官方提供的处理loader，query的库</span>\n<span class="token keyword">var</span> <span class="token maybe-class-name">SourceNode</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'source-map\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token property-access"><span class="token maybe-class-name">SourceNode</span></span> <span class="token comment">// source-map便于开发调试在控制台中查看源码</span>\n<span class="token keyword">var</span> <span class="token maybe-class-name">SourceMapConsumer</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"source-map"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token property-access"><span class="token maybe-class-name">SourceMapConsumer</span></span> <span class="token comment">// 如果不处理sourece-map无法生成正确的map文件</span>\nmodule<span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">content<span class="token punctuation">,</span> soureceMap</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword control-flow">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">cacheable</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 缓存</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">cacheable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">//this.query 通过this.query来接受配置⽂文件传递进来的参数</span>\n  <span class="token keyword">var</span> options <span class="token operator">=</span> loaderUtils<span class="token punctuation">.</span><span class="token method function property-access">getOptions</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 获取options</span>\n  <span class="token comment">// source-map</span>\n  <span class="token keyword control-flow">if</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span><span class="token property-access">sourceMap</span> <span class="token operator">&amp;&amp;</span> sourceMap<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 获取sourceMap对象</span>\n    <span class="token keyword">var</span> currentRequest <span class="token operator">=</span> loaderUtils<span class="token punctuation">.</span><span class="token method function property-access">getRequest</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>\n    <span class="token keyword">var</span> node <span class="token operator">=</span> <span class="token maybe-class-name">SourceNode</span><span class="token punctuation">.</span><span class="token method function property-access">fromStringWithSourceMap</span><span class="token punctuation">(</span> <span class="token comment">// </span>\n      content<span class="token punctuation">,</span>\n      <span class="token keyword">new</span> <span class="token class-name">SourceMapConsutomer</span><span class="token punctuation">(</span>sourceMap<span class="token punctuation">)</span>\n    <span class="token punctuation">)</span>\n    node<span class="token punctuation">.</span><span class="token method function property-access">prepend</span><span class="token punctuation">(</span><span class="token string">\'添加内容\'</span><span class="token punctuation">)</span> <span class="token comment">// 对内容进行改动</span>\n    <span class="token keyword">var</span> result <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token method function property-access">toStringWithSourceMap</span><span class="token punctuation">(</span><span class="token punctuation">{</span>file<span class="token operator">:</span>currentRequest<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 产生新的source-map</span>\n    <span class="token keyword">var</span> callback <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">async</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword null nil">null</span><span class="token punctuation">,</span> result<span class="token punctuation">.</span><span class="token property-access">code</span><span class="token punctuation">,</span> result<span class="token punctuation">.</span><span class="token property-access">map</span><span class="token punctuation">.</span><span class="token method function property-access">toJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// 直接返回content</span>\n  <span class="token comment">// return content</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h3 id="%E5%AE%89%E8%A3%85%E4%BD%BF%E7%94%A8">安装使用<a class="anchor" href="#%E5%AE%89%E8%A3%85%E4%BD%BF%E7%94%A8">§</a></h3>\n<p>npm install <path-to-loader>/mt-diy-loader</p>\n<pre class="language-javascript"><code class="language-javascript">rules<span class="token operator">:</span> <span class="token punctuation">[</span>\n <span class="token punctuation">{</span>\n   test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>\n   use<span class="token operator">:</span><span class="token string">\'my-diy-loader\'</span><span class="token punctuation">,</span>\n   options<span class="token operator">:</span> <span class="token punctuation">{</span>\n     sourceMap<span class="token operator">:</span> <span class="token boolean">true</span>\n   <span class="token punctuation">}</span>\n <span class="token punctuation">}</span>\n<span class="token punctuation">]</span>\n</code></pre>\n<pre class="language-javascript"><code class="language-javascript">rules<span class="token operator">:</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>\n    exclude<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>\n    <span class="token comment">// loader:path.resolve(\'./loader/index.js\') // 使用本地的loader文件作为loader</span>\n    loader<span class="token operator">:</span><span class="token punctuation">[</span>\n        path<span class="token punctuation">.</span><span class="token method function property-access">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"./loader/index.js"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        loader<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token method function property-access">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"./loader/index.js"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        options<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span>\n\n<span class="token comment">// 在resolveLoaderz中添加本地开发的loaders存方路径，适合同时需要开发多个loader</span>\nresolveLoaders<span class="token operator">:</span> <span class="token punctuation">{</span>\n    modules<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token string">\'node_modules\'</span><span class="token punctuation">,</span>\n        path<span class="token punctuation">.</span><span class="token method function property-access">resolver</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'loaders\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n\nmodule<span class="token operator">:</span> <span class="token punctuation">{</span>\n  rules<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n    test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>\n    use<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"replaceLoader"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      loader<span class="token operator">:</span> <span class="token string">"replaceLoaderAsync"</span><span class="token punctuation">,</span>\n      options<span class="token operator">:</span> <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">"开课吧"</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">]</span>\n    <span class="token comment">// use: [path.resolve(__dirname, "./loader/index.js")]      </span>\n  <span class="token punctuation">}</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>另外也可以使用 <code>npm link</code> 的方式来开发和调试</p>\n<p><strong>处理loader路径的问题</strong> ？？？</p>\n<h3 id="pitching-loader">Pitching loader<a class="anchor" href="#pitching-loader">§</a></h3>\n<p>使用pitch来跳过loader的处理，pitch方法是loader额外实现的一个函数</p>\n<pre class="language-autoit"><code class="language-autoit">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">function</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span>{\n  return <span class="token function">someSyncOperation</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> this<span class="token punctuation">.</span>data<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token operator">/</span><span class="token operator">/</span> 这里的data<span class="token punctuation">.</span>value\n}\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">function</span><span class="token punctuation">(</span>remainRequest<span class="token punctuation">,</span> precedingRequest<span class="token punctuation">,</span> data<span class="token punctuation">)</span>{\n  data<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">11</span>\n}\n</code></pre>\n<p>pitch的执行顺序是和loader相反的，如果有值返回，则跳过剩下的loader</p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u5B9E\u73B0\u81EA\u5DF1\u7684loader"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h3 id="loader%E5%8E%9F%E7%90%86">loader原理<a class="anchor" href="#loader%E5%8E%9F%E7%90%86">§</a></h3>\n<p>loader本身就是一个函数，对接收到的内容进行转换，然后返回转换后的结果。声明式函数，不能⽤用箭头函数</p>\n<p>content是模块内容，可以是字符串，Buffer，map是sourcemap对象，meta是其他一些元数据</p>\n<pre class="language-javascript"><code class="language-javascript">module<span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">content<span class="token punctuation">,</span> map<span class="token punctuation">,</span> meta</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// var callback = this.async() // 异步事件的适合使用this.async，返回的是callback函数  </span>\n  <span class="token comment">// setTimeout(() => {    </span>\n      <span class="token comment">// ...    </span>\n      <span class="token comment">//callback(null, result)  </span>\n  <span class="token comment">// }, 3000);</span>\n  <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token function">handler</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> map<span class="token punctuation">,</span> meta<span class="token punctuation">)</span>\n  <span class="token comment">// loader函数本身只返回一个值，如果需要返回sourcemap或者meta对象等多个值，需要使用this.callback()</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">callback</span><span class="token punctuation">(</span>\n   <span class="token keyword null nil">null</span><span class="token punctuation">,</span> <span class="token comment">// error 自行赋值</span>\n   result<span class="token punctuation">.</span><span class="token property-access">content</span><span class="token punctuation">,</span> <span class="token comment">// 转换后的内容  string Buffer</span>\n   result<span class="token punctuation">.</span><span class="token property-access">map</span><span class="token punctuation">,</span> <span class="token comment">// 转换后的source-map</span>\n   result<span class="token punctuation">.</span><span class="token property-access">meta</span> <span class="token comment">// 转换后的AST</span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h3 id="%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E7%9B%AE%E5%BD%95--my-diy-loader">创建一个目录  my-diy-loader<a class="anchor" href="#%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E7%9B%AE%E5%BD%95--my-diy-loader">§</a></h3>\n<p>npm init -y</p>\n<pre class="language-javascript"><code class="language-javascript"><span class="token comment">// my-diy-loader/index.js</span>\n<span class="token comment">// 还可以安装引入其他的依赖</span>\n<span class="token keyword">var</span> loaderUtils <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"loader-utils"</span><span class="token punctuation">)</span> <span class="token comment">// loader-utils是webpack官方提供的处理loader，query的库</span>\n<span class="token keyword">var</span> <span class="token maybe-class-name">SourceNode</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'source-map\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token property-access"><span class="token maybe-class-name">SourceNode</span></span> <span class="token comment">// source-map便于开发调试在控制台中查看源码</span>\n<span class="token keyword">var</span> <span class="token maybe-class-name">SourceMapConsumer</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"source-map"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token property-access"><span class="token maybe-class-name">SourceMapConsumer</span></span> <span class="token comment">// 如果不处理sourece-map无法生成正确的map文件</span>\nmodule<span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">content<span class="token punctuation">,</span> soureceMap</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword control-flow">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">cacheable</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 缓存</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">cacheable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">//this.query 通过this.query来接受配置⽂文件传递进来的参数</span>\n  <span class="token keyword">var</span> options <span class="token operator">=</span> loaderUtils<span class="token punctuation">.</span><span class="token method function property-access">getOptions</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 获取options</span>\n  <span class="token comment">// source-map</span>\n  <span class="token keyword control-flow">if</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span><span class="token property-access">sourceMap</span> <span class="token operator">&amp;&amp;</span> sourceMap<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 获取sourceMap对象</span>\n    <span class="token keyword">var</span> currentRequest <span class="token operator">=</span> loaderUtils<span class="token punctuation">.</span><span class="token method function property-access">getRequest</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>\n    <span class="token keyword">var</span> node <span class="token operator">=</span> <span class="token maybe-class-name">SourceNode</span><span class="token punctuation">.</span><span class="token method function property-access">fromStringWithSourceMap</span><span class="token punctuation">(</span> <span class="token comment">// </span>\n      content<span class="token punctuation">,</span>\n      <span class="token keyword">new</span> <span class="token class-name">SourceMapConsutomer</span><span class="token punctuation">(</span>sourceMap<span class="token punctuation">)</span>\n    <span class="token punctuation">)</span>\n    node<span class="token punctuation">.</span><span class="token method function property-access">prepend</span><span class="token punctuation">(</span><span class="token string">\'添加内容\'</span><span class="token punctuation">)</span> <span class="token comment">// 对内容进行改动</span>\n    <span class="token keyword">var</span> result <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token method function property-access">toStringWithSourceMap</span><span class="token punctuation">(</span><span class="token punctuation">{</span>file<span class="token operator">:</span>currentRequest<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 产生新的source-map</span>\n    <span class="token keyword">var</span> callback <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">async</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword null nil">null</span><span class="token punctuation">,</span> result<span class="token punctuation">.</span><span class="token property-access">code</span><span class="token punctuation">,</span> result<span class="token punctuation">.</span><span class="token property-access">map</span><span class="token punctuation">.</span><span class="token method function property-access">toJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// 直接返回content</span>\n  <span class="token comment">// return content</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h3 id="%E5%AE%89%E8%A3%85%E4%BD%BF%E7%94%A8">安装使用<a class="anchor" href="#%E5%AE%89%E8%A3%85%E4%BD%BF%E7%94%A8">§</a></h3>\n<p>npm install <path-to-loader>/mt-diy-loader</p>\n<pre class="language-javascript"><code class="language-javascript">rules<span class="token operator">:</span> <span class="token punctuation">[</span>\n <span class="token punctuation">{</span>\n   test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>\n   use<span class="token operator">:</span><span class="token string">\'my-diy-loader\'</span><span class="token punctuation">,</span>\n   options<span class="token operator">:</span> <span class="token punctuation">{</span>\n     sourceMap<span class="token operator">:</span> <span class="token boolean">true</span>\n   <span class="token punctuation">}</span>\n <span class="token punctuation">}</span>\n<span class="token punctuation">]</span>\n</code></pre>\n<pre class="language-javascript"><code class="language-javascript">rules<span class="token operator">:</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>\n    exclude<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>\n    <span class="token comment">// loader:path.resolve(\'./loader/index.js\') // 使用本地的loader文件作为loader</span>\n    loader<span class="token operator">:</span><span class="token punctuation">[</span>\n        path<span class="token punctuation">.</span><span class="token method function property-access">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"./loader/index.js"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        loader<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token method function property-access">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"./loader/index.js"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        options<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span>\n\n<span class="token comment">// 在resolveLoaderz中添加本地开发的loaders存方路径，适合同时需要开发多个loader</span>\nresolveLoaders<span class="token operator">:</span> <span class="token punctuation">{</span>\n    modules<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token string">\'node_modules\'</span><span class="token punctuation">,</span>\n        path<span class="token punctuation">.</span><span class="token method function property-access">resolver</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'loaders\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n\nmodule<span class="token operator">:</span> <span class="token punctuation">{</span>\n  rules<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n    test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>\n    use<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"replaceLoader"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      loader<span class="token operator">:</span> <span class="token string">"replaceLoaderAsync"</span><span class="token punctuation">,</span>\n      options<span class="token operator">:</span> <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">"开课吧"</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">]</span>\n    <span class="token comment">// use: [path.resolve(__dirname, "./loader/index.js")]      </span>\n  <span class="token punctuation">}</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>另外也可以使用 <code>npm link</code> 的方式来开发和调试</p>\n<p><strong>处理loader路径的问题</strong> ？？？</p>\n<h3 id="pitching-loader">Pitching loader<a class="anchor" href="#pitching-loader">§</a></h3>\n<p>使用pitch来跳过loader的处理，pitch方法是loader额外实现的一个函数</p>\n<pre class="language-autoit"><code class="language-autoit">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">function</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span>{\n  return <span class="token function">someSyncOperation</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> this<span class="token punctuation">.</span>data<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token operator">/</span><span class="token operator">/</span> 这里的data<span class="token punctuation">.</span>value\n}\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">function</span><span class="token punctuation">(</span>remainRequest<span class="token punctuation">,</span> precedingRequest<span class="token punctuation">,</span> data<span class="token punctuation">)</span>{\n  data<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">11</span>\n}\n</code></pre>\n<p>pitch的执行顺序是和loader相反的，如果有值返回，则跳过剩下的loader</p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#loader%E5%8E%9F%E7%90%86" }, "loader\u539F\u7406")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E7%9B%AE%E5%BD%95--my-diy-loader" }, "\u521B\u5EFA\u4E00\u4E2A\u76EE\u5F55  my-diy-loader")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%AE%89%E8%A3%85%E4%BD%BF%E7%94%A8" }, "\u5B89\u88C5\u4F7F\u7528")),
            React.createElement("li", null,
                React.createElement("a", { href: "#pitching-loader" }, "Pitching loader")))),
    'author': "dingtt",
    'contributors': [
        "dingtt",
        "dingdtt"
    ],
    'date': "2020-06-28T13:08:41.000Z",
    'updated': "2020-10-16T08:42:52.000Z",
    'excerpt': "loader原理 loader本身就是一个函数，对接收到的内容进行转换，然后返回转换后的结果。声明式函数，不能⽤用箭头函数 content是模块内容，可以是字符串，Buffer，map是sourcemap对象，meta是其他一些元数据 module.exports = f...",
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
