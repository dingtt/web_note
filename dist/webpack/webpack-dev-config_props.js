import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "Webpack打包原理解析",
        "link": "webpack/webpack-principle.html"
    },
    'next': {
        "text": "实现自己的loader",
        "link": "webpack/webpack-custom-loader.html"
    },
    config: { "root": "/", ...projectConfig, branch: 'gh-pages' },
    'pagePath': "webpack/webpack-dev-config.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "webpack/webpack-dev-config.html",
    'title': "生产环境配置",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>生产环境配置</h1>\n<h2 id="%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F">环境变量<a class="anchor" href="#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F">§</a></h2>\n<p>sourcemap</p>\n<p>cheap-source-map  eval-source-map 简版</p>\n<p>hidden-sourece-map  不会在js中添加引用，配合sentry等监控平台使用</p>\n<p>nosources-source-map u不显示文件结构</p>\n<p>通过nginx设置将.map文件只对固定的ip开放</p>\n<h2 id="mode%E9%85%8D%E7%BD%AE">mode配置<a class="anchor" href="#mode%E9%85%8D%E7%BD%AE">§</a></h2>\n<pre class="language-autoit"><code class="language-autoit"><span class="token operator">/</span><span class="token operator">/</span> webpack3<span class="token punctuation">.</span>X 使用UglifyJsPlugin\n<span class="token operator">/</span><span class="token operator">/</span> pagejson\n{\n  <span class="token string">"scripts"</span><span class="token punctuation">:</span> {\n    <span class="token string">"build"</span><span class="token punctuation">:</span> <span class="token string">"NODE_ENV=production webpack"</span><span class="token punctuation">,</span>\n    <span class="token string">"develop"</span><span class="token punctuation">:</span> <span class="token string">"NODE_ENV=development webpack-dev-server"</span>\n  }\n}\n<span class="token operator">/</span><span class="token operator">/</span> 在 `webpack<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js` 文件中可以通过 `process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>NODE_ENV` 来获取命令传入的环境变量\n\n\n<span class="token operator">/</span><span class="token operator">/</span> webpack4<span class="token punctuation">.</span>X\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">(</span>env<span class="token punctuation">,</span> argv<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>{\n  <span class="token operator">/</span><span class="token operator">/</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> 其他配置\n  optimization<span class="token punctuation">:</span> {\n    minimize<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token operator">/</span><span class="token operator">/</span> 使用 argv 来获取 mode 参数的值\n    minimizer<span class="token punctuation">:</span> argv<span class="token punctuation">.</span>mode <span class="token operator">==</span><span class="token operator">=</span> <span class="token string">\'production\'</span> <span class="token operator">?</span> <span class="token punctuation">[</span>\n      <span class="token operator">/</span><span class="token operator">/</span> new <span class="token function">UglifyJsPlugin</span><span class="token punctuation">(</span>{ <span class="token operator">/</span><span class="token operator">*</span> 你自己的配置 <span class="token operator">*</span><span class="token operator">/</span> }<span class="token punctuation">)</span><span class="token punctuation">,</span> \n      <span class="token operator">/</span><span class="token operator">/</span> 仅在我们要自定义压缩配置时才需要这么做\n      <span class="token operator">/</span><span class="token operator">/</span>  minimize<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token operator">/</span><span class="token operator">/</span> 如果设置了mode<span class="token punctuation">:</span>production <span class="token punctuation">,</span>则无需单独设置，mode 为 production 时 webpack4<span class="token operator">*</span> 会默认使用压缩 JS 的 plugin\n    <span class="token punctuation">]</span> <span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  }<span class="token punctuation">,</span>\n}<span class="token punctuation">)</span>\n</code></pre>\n<p>DefinePlugin 插件，添加环境变量即可影响到运行时的代码，可注入动态变量</p>\n<pre class="language-autoit"><code class="language-autoit">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> {\n  <span class="token operator">/</span><span class="token operator">/</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n  <span class="token operator">/</span><span class="token operator">/</span> webpack 的配置\n\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    new webpack<span class="token punctuation">.</span><span class="token function">DefinePlugin</span><span class="token punctuation">(</span>{\n      <span class="token operator">/</span><span class="token operator">/</span> webpack <span class="token number">3</span><span class="token punctuation">.</span>x 的 process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>NODE_ENV 是通过手动在命令行中指定 NODE_ENV<span class="token operator">=</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> 的方式来传递的\n      <span class="token string">\'process.env.NODE_ENV\'</span><span class="token punctuation">:</span> JSON<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>NODE_ENV<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    }<span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n}\n</code></pre>\n<p>webpack 4.x 的 mode 已经提供了上述差异配置的大部分功能，mode 为 production 时默认使用 JS 代码压缩，而 mode 为 development 时默认启用 hot reload</p>\n<h3 id="%E6%8B%86%E5%88%86%E9%85%8D%E7%BD%AE">拆分配置<a class="anchor" href="#%E6%8B%86%E5%88%86%E9%85%8D%E7%BD%AE">§</a></h3>\n<p>webpack-merge</p>\n<h3 id="%E8%B5%84%E6%BA%90%E5%8E%8B%E7%BC%A9">资源压缩<a class="anchor" href="#%E8%B5%84%E6%BA%90%E5%8E%8B%E7%BC%A9">§</a></h3>\n<h4 id="terser-webpack-plugin">terser-webpack-plugin<a class="anchor" href="#terser-webpack-plugin">§</a></h4>\n<pre class="language-javascript"><code class="language-javascript"><span class="token keyword module">import</span> <span class="token maybe-class-name">TerserWebpackPlugin</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'terser-webpack-plugin\'</span><span class="token punctuation">)</span>\nmodule<span class="token punctuation">.</span><span class="token property-access">exports</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  optimization<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 覆盖默认设置</span>\n    minimizer<span class="token operator">:</span><span class="token punctuation">[</span>\n      <span class="token keyword">new</span> <span class="token class-name">TerserPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js(\?.*)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>\n        exclude<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\/excludes</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>\n        include<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\includes</span><span class="token regex-delimiter">/</span></span> <span class="token punctuation">,</span>\n        chache<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 是否开启缓存</span>\n        parallel<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 允许多进程，可传入数字</span>\n        sourceMap <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 是否生成sourceMap</span>\n        terserOptions<span class="token operator">:</span><span class="token punctuation">{</span>  <span class="token comment">// 压缩配置 是否对变量重命名 是否兼容ie8</span>\n          \n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h3 id="%E5%8E%8B%E7%BC%A9css">压缩CSS<a class="anchor" href="#%E5%8E%8B%E7%BC%A9css">§</a></h3>\n<p>需要用extract-text-webpack-plugin 或者 min-css-extract-plugin先提取css，再使用 optimize-css-assets-webpack-plugin</p>\n<pre class="language-javascript"><code class="language-javascript">optimization<span class="token operator">:</span> <span class="token punctuation">{</span>\n  minimizer<span class="token operator">:</span> <span class="token punctuation">[</span>\n   <span class="token keyword">new</span> <span class="token class-name">OptimizeCssAssetsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n     <span class="token comment">// 生效范围 只压缩匹配到的css</span>\n     assetsNameRegExp<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.optimize\.css$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span>\n     <span class="token comment">// 压缩处理器 默认为cssnano</span>\n     cssProcessor<span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'cssnao\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n     <span class="token comment">// 压缩处理器的配置</span>\n     cssProcessorOptions<span class="token operator">:</span> <span class="token punctuation">{</span>discardComments<span class="token operator">:</span> <span class="token punctuation">{</span> removeAll<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n     <span class="token comment">// 是否展示 log</span>\n     canPrint<span class="token operator">:</span> <span class="token boolean">true</span>\n   <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u751F\u4EA7\u73AF\u5883\u914D\u7F6E"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F">环境变量<a class="anchor" href="#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F">§</a></h2>\n<p>sourcemap</p>\n<p>cheap-source-map  eval-source-map 简版</p>\n<p>hidden-sourece-map  不会在js中添加引用，配合sentry等监控平台使用</p>\n<p>nosources-source-map u不显示文件结构</p>\n<p>通过nginx设置将.map文件只对固定的ip开放</p>\n<h2 id="mode%E9%85%8D%E7%BD%AE">mode配置<a class="anchor" href="#mode%E9%85%8D%E7%BD%AE">§</a></h2>\n<pre class="language-autoit"><code class="language-autoit"><span class="token operator">/</span><span class="token operator">/</span> webpack3<span class="token punctuation">.</span>X 使用UglifyJsPlugin\n<span class="token operator">/</span><span class="token operator">/</span> pagejson\n{\n  <span class="token string">"scripts"</span><span class="token punctuation">:</span> {\n    <span class="token string">"build"</span><span class="token punctuation">:</span> <span class="token string">"NODE_ENV=production webpack"</span><span class="token punctuation">,</span>\n    <span class="token string">"develop"</span><span class="token punctuation">:</span> <span class="token string">"NODE_ENV=development webpack-dev-server"</span>\n  }\n}\n<span class="token operator">/</span><span class="token operator">/</span> 在 `webpack<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js` 文件中可以通过 `process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>NODE_ENV` 来获取命令传入的环境变量\n\n\n<span class="token operator">/</span><span class="token operator">/</span> webpack4<span class="token punctuation">.</span>X\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">(</span>env<span class="token punctuation">,</span> argv<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>{\n  <span class="token operator">/</span><span class="token operator">/</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> 其他配置\n  optimization<span class="token punctuation">:</span> {\n    minimize<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token operator">/</span><span class="token operator">/</span> 使用 argv 来获取 mode 参数的值\n    minimizer<span class="token punctuation">:</span> argv<span class="token punctuation">.</span>mode <span class="token operator">==</span><span class="token operator">=</span> <span class="token string">\'production\'</span> <span class="token operator">?</span> <span class="token punctuation">[</span>\n      <span class="token operator">/</span><span class="token operator">/</span> new <span class="token function">UglifyJsPlugin</span><span class="token punctuation">(</span>{ <span class="token operator">/</span><span class="token operator">*</span> 你自己的配置 <span class="token operator">*</span><span class="token operator">/</span> }<span class="token punctuation">)</span><span class="token punctuation">,</span> \n      <span class="token operator">/</span><span class="token operator">/</span> 仅在我们要自定义压缩配置时才需要这么做\n      <span class="token operator">/</span><span class="token operator">/</span>  minimize<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token operator">/</span><span class="token operator">/</span> 如果设置了mode<span class="token punctuation">:</span>production <span class="token punctuation">,</span>则无需单独设置，mode 为 production 时 webpack4<span class="token operator">*</span> 会默认使用压缩 JS 的 plugin\n    <span class="token punctuation">]</span> <span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  }<span class="token punctuation">,</span>\n}<span class="token punctuation">)</span>\n</code></pre>\n<p>DefinePlugin 插件，添加环境变量即可影响到运行时的代码，可注入动态变量</p>\n<pre class="language-autoit"><code class="language-autoit">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> {\n  <span class="token operator">/</span><span class="token operator">/</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n  <span class="token operator">/</span><span class="token operator">/</span> webpack 的配置\n\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    new webpack<span class="token punctuation">.</span><span class="token function">DefinePlugin</span><span class="token punctuation">(</span>{\n      <span class="token operator">/</span><span class="token operator">/</span> webpack <span class="token number">3</span><span class="token punctuation">.</span>x 的 process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>NODE_ENV 是通过手动在命令行中指定 NODE_ENV<span class="token operator">=</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> 的方式来传递的\n      <span class="token string">\'process.env.NODE_ENV\'</span><span class="token punctuation">:</span> JSON<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>NODE_ENV<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    }<span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n}\n</code></pre>\n<p>webpack 4.x 的 mode 已经提供了上述差异配置的大部分功能，mode 为 production 时默认使用 JS 代码压缩，而 mode 为 development 时默认启用 hot reload</p>\n<h3 id="%E6%8B%86%E5%88%86%E9%85%8D%E7%BD%AE">拆分配置<a class="anchor" href="#%E6%8B%86%E5%88%86%E9%85%8D%E7%BD%AE">§</a></h3>\n<p>webpack-merge</p>\n<h3 id="%E8%B5%84%E6%BA%90%E5%8E%8B%E7%BC%A9">资源压缩<a class="anchor" href="#%E8%B5%84%E6%BA%90%E5%8E%8B%E7%BC%A9">§</a></h3>\n<h4 id="terser-webpack-plugin">terser-webpack-plugin<a class="anchor" href="#terser-webpack-plugin">§</a></h4>\n<pre class="language-javascript"><code class="language-javascript"><span class="token keyword module">import</span> <span class="token maybe-class-name">TerserWebpackPlugin</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'terser-webpack-plugin\'</span><span class="token punctuation">)</span>\nmodule<span class="token punctuation">.</span><span class="token property-access">exports</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  optimization<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 覆盖默认设置</span>\n    minimizer<span class="token operator">:</span><span class="token punctuation">[</span>\n      <span class="token keyword">new</span> <span class="token class-name">TerserPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js(\?.*)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>\n        exclude<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\/excludes</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>\n        include<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\includes</span><span class="token regex-delimiter">/</span></span> <span class="token punctuation">,</span>\n        chache<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 是否开启缓存</span>\n        parallel<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 允许多进程，可传入数字</span>\n        sourceMap <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 是否生成sourceMap</span>\n        terserOptions<span class="token operator">:</span><span class="token punctuation">{</span>  <span class="token comment">// 压缩配置 是否对变量重命名 是否兼容ie8</span>\n          \n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h3 id="%E5%8E%8B%E7%BC%A9css">压缩CSS<a class="anchor" href="#%E5%8E%8B%E7%BC%A9css">§</a></h3>\n<p>需要用extract-text-webpack-plugin 或者 min-css-extract-plugin先提取css，再使用 optimize-css-assets-webpack-plugin</p>\n<pre class="language-javascript"><code class="language-javascript">optimization<span class="token operator">:</span> <span class="token punctuation">{</span>\n  minimizer<span class="token operator">:</span> <span class="token punctuation">[</span>\n   <span class="token keyword">new</span> <span class="token class-name">OptimizeCssAssetsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n     <span class="token comment">// 生效范围 只压缩匹配到的css</span>\n     assetsNameRegExp<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.optimize\.css$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span>\n     <span class="token comment">// 压缩处理器 默认为cssnano</span>\n     cssProcessor<span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'cssnao\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n     <span class="token comment">// 压缩处理器的配置</span>\n     cssProcessorOptions<span class="token operator">:</span> <span class="token punctuation">{</span>discardComments<span class="token operator">:</span> <span class="token punctuation">{</span> removeAll<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n     <span class="token comment">// 是否展示 log</span>\n     canPrint<span class="token operator">:</span> <span class="token boolean">true</span>\n   <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F" }, "\u73AF\u5883\u53D8\u91CF")),
            React.createElement("li", null,
                React.createElement("a", { href: "#mode%E9%85%8D%E7%BD%AE" }, "mode\u914D\u7F6E"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E6%8B%86%E5%88%86%E9%85%8D%E7%BD%AE" }, "\u62C6\u5206\u914D\u7F6E")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E8%B5%84%E6%BA%90%E5%8E%8B%E7%BC%A9" }, "\u8D44\u6E90\u538B\u7F29"),
                        React.createElement("ol", null)),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E5%8E%8B%E7%BC%A9css" }, "\u538B\u7F29CSS")))))),
    'author': "dingtt",
    'contributors': [
        "dingtt",
        "dingdtt"
    ],
    'date': "2020-07-10T05:47:07.000Z",
    'updated': "2020-10-16T08:42:52.000Z",
    'excerpt': "环境变量 sourcemap cheap-source-map eval-source-map 简版 hidden-sourece-map 不会在js中添加引用，配合sentry等监控平台使用 nosources-source-map u不显示文件结构 通过nginx设置将.map文件只对固定的ip开放 mode配置 // ...",
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
