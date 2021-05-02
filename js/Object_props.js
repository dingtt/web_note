import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "JavaScript基础",
        "link": "js/basics.html"
    },
    'next': {
        "text": "执行上下文",
        "link": "js/context.html"
    },
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "js/Object.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "js/Object.html",
    'title': "基础",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>基础</h1>\n<h2 id="javascript%E5%AF%B9%E8%B1%A1">JavaScript对象<a class="anchor" href="#javascript%E5%AF%B9%E8%B1%A1">§</a></h2>\n<h3 id="%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86">基础知识<a class="anchor" href="#%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86">§</a></h3>\n<p>即使完全相同的两个对象，也并非同一个对象，因为对象是引用类型。</p>\n<h3 id="%E5%AF%B9%E8%B1%A1%E5%88%86%E7%B1%BB">对象分类<a class="anchor" href="#%E5%AF%B9%E8%B1%A1%E5%88%86%E7%B1%BB">§</a></h3>\n<ul>\n<li>\n<p>宿主对象（host  Objects）：由JavaScript宿主环境提供的对象，它们的行为完全由宿主环境决定。</p>\n</li>\n<li>\n<p>内置对象（Built-in  Objects）：由JavaScript语言提供的对象。</p>\n<ul>\n<li>固有对象（Intrinsic  Objects  ）：由标准规定，随着JavaScript运行时创建而自动创建的对象实例。</li>\n<li>原生对象（Native  Objects）：可以由用户通过Array、RegExp等内置构造器或者特殊语法创建的对 象。</li>\n<li>普通对象（Ordinary  Objects）：由{}语法、Object构造器或者class关键字定义类创建的对象，它能够 被原型继承。</li>\n</ul>\n</li>\n</ul>\n<h4 id="%E5%AE%BF%E4%B8%BB%E5%AF%B9%E8%B1%A1">宿主对象<a class="anchor" href="#%E5%AE%BF%E4%B8%BB%E5%AF%B9%E8%B1%A1">§</a></h4>\n<p>浏览器环境中的全局对象window，属性一部分雷子JavaScript，一部分来自浏览器环境。也分区固有和用户可创建两种。</p>\n<h4 id="%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1">内置对象<a class="anchor" href="#%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1">§</a></h4>\n<h5 id="%E5%9B%BA%E6%9C%89%E5%AF%B9%E8%B1%A1">固有对象<a class="anchor" href="#%E5%9B%BA%E6%9C%89%E5%AF%B9%E8%B1%A1">§</a></h5>\n<p>固有对象是由标准规定，随着JavaScript运行时创建而自动创建的对象实例。固有对象在JS代码执行前就已经存在。</p>\n<h6 id="%E4%B8%89%E4%B8%AA%E5%80%BC">三个值<a class="anchor" href="#%E4%B8%89%E4%B8%AA%E5%80%BC">§</a></h6>\n<p>Infinity、NaN、undefined</p>\n<h6 id="%E4%B9%9D%E4%B8%AA%E5%87%BD%E6%95%B0"><strong>九个函数</strong><a class="anchor" href="#%E4%B9%9D%E4%B8%AA%E5%87%BD%E6%95%B0">§</a></h6>\n<p>eval\nisFinite\nisNaN\nparseFloat\nparseInt\ndecodeURI\ndecodeURIComponent\nencodeURI\nencodeURIComponen</p>\n<h6 id="%E6%9E%84%E9%80%A0%E5%99%A8"><strong>构造器</strong><a class="anchor" href="#%E6%9E%84%E9%80%A0%E5%99%A8">§</a></h6>\n<p>Array、Date、RegExp、Promise、Proxy、Map、WeakMap、Set、WeapSet、Function、Boolean、 String、Number、Symbol、Object、Error、EvalError、RangeError、ReferenceError、SyntaxError、TypeError URIError、ArrayBuffer、SharedArrayBuffer、DataView、Typed  Array、Float32Array、Float64Array、 Int8Array、Int16Array、Int32Array、UInt8Array、UInt16Array、UInt32Array、UInt8ClampedArray</p>\n<h6 id="%E5%9B%9B%E4%B8%AA%E7%94%A8%E4%BA%8E%E5%BD%93%E4%BD%9C%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4%E7%9A%84%E5%AF%B9%E8%B1%A1">四个用于当作命名空间的对象<a class="anchor" href="#%E5%9B%9B%E4%B8%AA%E7%94%A8%E4%BA%8E%E5%BD%93%E4%BD%9C%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4%E7%9A%84%E5%AF%B9%E8%B1%A1">§</a></h6>\n<p>Atomics\nJSON\nMath\nReflect</p>\n<h5 id="%E5%8E%9F%E7%94%9F%E5%AF%B9%E8%B1%A1">原生对象<a class="anchor" href="#%E5%8E%9F%E7%94%9F%E5%AF%B9%E8%B1%A1">§</a></h5>\n<p>能够通过语言本身的构造器创建的对象称为原生对象，在JavaScript标准中，提供了30 多个构造器</p>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>基本类型</th>\n<th>基础功能和数据结构</th>\n<th>错误类型</th>\n<th>二进制操作</th>\n<th>带类型的数组</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Boolean</td>\n<td>Array</td>\n<td>Error</td>\n<td>ArrayBuffer</td>\n<td>Float32Array</td>\n</tr>\n<tr>\n<td>String</td>\n<td>Date</td>\n<td>EvalError</td>\n<td>SharedArrayBuffer</td>\n<td>Float64Array</td>\n</tr>\n<tr>\n<td>Number</td>\n<td>RegExp</td>\n<td>RangeError</td>\n<td>DataView</td>\n<td>Int8Array</td>\n</tr>\n<tr>\n<td>Symbol</td>\n<td>Promise</td>\n<td>ReferenceError</td>\n<td></td>\n<td>Int16Array</td>\n</tr>\n<tr>\n<td>Object</td>\n<td>Proxy</td>\n<td>SyntaxError</td>\n<td></td>\n<td>Int32Array</td>\n</tr>\n<tr>\n<td></td>\n<td>Map</td>\n<td>TypeError</td>\n<td></td>\n<td>UInt8Array</td>\n</tr>\n<tr>\n<td></td>\n<td>WeakMap</td>\n<td>URLError</td>\n<td></td>\n<td>UInt16Array</td>\n</tr>\n<tr>\n<td></td>\n<td>Set</td>\n<td></td>\n<td></td>\n<td>UInt32Array</td>\n</tr>\n<tr>\n<td></td>\n<td>WeakSet</td>\n<td></td>\n<td></td>\n<td>UInt8ClampedArray</td>\n</tr>\n<tr>\n<td></td>\n<td>Function</td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div>\n<h5 id="%E5%87%BD%E6%95%B0%E5%AF%B9%E8%B1%A1%E5%92%8C%E6%9E%84%E9%80%A0%E5%99%A8%E5%AF%B9%E8%B1%A1">函数对象和构造器对象<a class="anchor" href="#%E5%87%BD%E6%95%B0%E5%AF%B9%E8%B1%A1%E5%92%8C%E6%9E%84%E9%80%A0%E5%99%A8%E5%AF%B9%E8%B1%A1">§</a></h5>\n<p>用对象来模拟函数和构造器</p>\n<p>函数对象的定义是：具有[[call]]私有字段的对象，构造器对象的定义是：具有私有字段[[construct]]的对 象。</p>\n<p>任何对象只需要实现[[call]]，它就是一个函数对象，可以去作为函数被调用。而如果它能 实现[[construct]]，它就是一个构造器对象，可以作为构造器被调用。</p>\n<blockquote>\n<p>[[call]]私有字段必须是一个引擎中定义的函数，需要接受this值和调用参数，并且会产生域的 切换</p>\n</blockquote>\n<p>对于宿主和内置对象来说，它们实现[[call]]（作为函数被调用）和[[construct]]（作为构造器被调用）不总 是一致的。比如内置对象  Date  在作为构造器调用时产生新的对象，作为函数时，则产生字符串。</p>\n<p>而浏览器宿主环境中，提供的Image构造器，则根本不允许被作为函数调用。</p>\n<p>基本类型（String、Number、Boolean），它们的构造器被当作函数调用，则产生类型转换的效果。</p>\n<p>如基本类型（String、Number、Boolean），它们的构造器被当作函数调用，则产生类型转换的效果。</p>\n<pre class="language-autoit"><code class="language-autoit"><span class="token function">new</span><span class="token punctuation">(</span> a <span class="token operator">=</span><span class="token operator">></span> <span class="token number">0</span> <span class="token punctuation">)</span> <span class="token operator">/</span><span class="token operator">/</span> error\n</code></pre>\n<p>如基本类型（String、Number、Boolean），它们的构造器被当作函数调用，则产生类型转换的效果。</p>\n<p>对于用户使用  function  语法或者Function构造器创建的对象来说，[[call]]和[[construct]]行为总是相似的。</p>\n<pre class="language-autoit"><code class="language-autoit">function <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span>{\n  return <span class="token number">1</span>\n}\nvar v1 <span class="token operator">=</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nvar v2 <span class="token operator">=</span> new <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre>\n<p>构造器实例化，[[contruct]]的执行过程</p>\n<ol>\n<li>以Object.protope为原型创建一个对象</li>\n<li>以新对象为this，执行函数的[[call]]</li>\n<li>如果[[call]]的返回值是对象，那么返回这个对象，否则返回第一步的对象</li>\n</ol>\n<h4 id="%E7%89%B9%E6%AE%8A%E8%A1%8C%E4%B8%BA%E7%9A%84%E5%AF%B9%E8%B1%A1">特殊行为的对象<a class="anchor" href="#%E7%89%B9%E6%AE%8A%E8%A1%8C%E4%B8%BA%E7%9A%84%E5%AF%B9%E8%B1%A1">§</a></h4>\n<p>Array：Array的length属性根据最大的下标自动发生变化。\nObject.prototype：作为所有正常对象的默认原型，不能再给它设置原型了。\nString：为了支持下标运算，String的正整数属性访问会去字符串里查找。\nArguments：arguments的非负整数型下标属性跟对应的变量联动。</p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u57FA\u7840"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="javascript%E5%AF%B9%E8%B1%A1">JavaScript对象<a class="anchor" href="#javascript%E5%AF%B9%E8%B1%A1">§</a></h2>\n<h3 id="%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86">基础知识<a class="anchor" href="#%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86">§</a></h3>\n<p>即使完全相同的两个对象，也并非同一个对象，因为对象是引用类型。</p>\n<h3 id="%E5%AF%B9%E8%B1%A1%E5%88%86%E7%B1%BB">对象分类<a class="anchor" href="#%E5%AF%B9%E8%B1%A1%E5%88%86%E7%B1%BB">§</a></h3>\n<ul>\n<li>\n<p>宿主对象（host  Objects）：由JavaScript宿主环境提供的对象，它们的行为完全由宿主环境决定。</p>\n</li>\n<li>\n<p>内置对象（Built-in  Objects）：由JavaScript语言提供的对象。</p>\n<ul>\n<li>固有对象（Intrinsic  Objects  ）：由标准规定，随着JavaScript运行时创建而自动创建的对象实例。</li>\n<li>原生对象（Native  Objects）：可以由用户通过Array、RegExp等内置构造器或者特殊语法创建的对 象。</li>\n<li>普通对象（Ordinary  Objects）：由{}语法、Object构造器或者class关键字定义类创建的对象，它能够 被原型继承。</li>\n</ul>\n</li>\n</ul>\n<h4 id="%E5%AE%BF%E4%B8%BB%E5%AF%B9%E8%B1%A1">宿主对象<a class="anchor" href="#%E5%AE%BF%E4%B8%BB%E5%AF%B9%E8%B1%A1">§</a></h4>\n<p>浏览器环境中的全局对象window，属性一部分雷子JavaScript，一部分来自浏览器环境。也分区固有和用户可创建两种。</p>\n<h4 id="%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1">内置对象<a class="anchor" href="#%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1">§</a></h4>\n<h5 id="%E5%9B%BA%E6%9C%89%E5%AF%B9%E8%B1%A1">固有对象<a class="anchor" href="#%E5%9B%BA%E6%9C%89%E5%AF%B9%E8%B1%A1">§</a></h5>\n<p>固有对象是由标准规定，随着JavaScript运行时创建而自动创建的对象实例。固有对象在JS代码执行前就已经存在。</p>\n<h6 id="%E4%B8%89%E4%B8%AA%E5%80%BC">三个值<a class="anchor" href="#%E4%B8%89%E4%B8%AA%E5%80%BC">§</a></h6>\n<p>Infinity、NaN、undefined</p>\n<h6 id="%E4%B9%9D%E4%B8%AA%E5%87%BD%E6%95%B0"><strong>九个函数</strong><a class="anchor" href="#%E4%B9%9D%E4%B8%AA%E5%87%BD%E6%95%B0">§</a></h6>\n<p>eval\nisFinite\nisNaN\nparseFloat\nparseInt\ndecodeURI\ndecodeURIComponent\nencodeURI\nencodeURIComponen</p>\n<h6 id="%E6%9E%84%E9%80%A0%E5%99%A8"><strong>构造器</strong><a class="anchor" href="#%E6%9E%84%E9%80%A0%E5%99%A8">§</a></h6>\n<p>Array、Date、RegExp、Promise、Proxy、Map、WeakMap、Set、WeapSet、Function、Boolean、 String、Number、Symbol、Object、Error、EvalError、RangeError、ReferenceError、SyntaxError、TypeError URIError、ArrayBuffer、SharedArrayBuffer、DataView、Typed  Array、Float32Array、Float64Array、 Int8Array、Int16Array、Int32Array、UInt8Array、UInt16Array、UInt32Array、UInt8ClampedArray</p>\n<h6 id="%E5%9B%9B%E4%B8%AA%E7%94%A8%E4%BA%8E%E5%BD%93%E4%BD%9C%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4%E7%9A%84%E5%AF%B9%E8%B1%A1">四个用于当作命名空间的对象<a class="anchor" href="#%E5%9B%9B%E4%B8%AA%E7%94%A8%E4%BA%8E%E5%BD%93%E4%BD%9C%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4%E7%9A%84%E5%AF%B9%E8%B1%A1">§</a></h6>\n<p>Atomics\nJSON\nMath\nReflect</p>\n<h5 id="%E5%8E%9F%E7%94%9F%E5%AF%B9%E8%B1%A1">原生对象<a class="anchor" href="#%E5%8E%9F%E7%94%9F%E5%AF%B9%E8%B1%A1">§</a></h5>\n<p>能够通过语言本身的构造器创建的对象称为原生对象，在JavaScript标准中，提供了30 多个构造器</p>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>基本类型</th>\n<th>基础功能和数据结构</th>\n<th>错误类型</th>\n<th>二进制操作</th>\n<th>带类型的数组</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Boolean</td>\n<td>Array</td>\n<td>Error</td>\n<td>ArrayBuffer</td>\n<td>Float32Array</td>\n</tr>\n<tr>\n<td>String</td>\n<td>Date</td>\n<td>EvalError</td>\n<td>SharedArrayBuffer</td>\n<td>Float64Array</td>\n</tr>\n<tr>\n<td>Number</td>\n<td>RegExp</td>\n<td>RangeError</td>\n<td>DataView</td>\n<td>Int8Array</td>\n</tr>\n<tr>\n<td>Symbol</td>\n<td>Promise</td>\n<td>ReferenceError</td>\n<td></td>\n<td>Int16Array</td>\n</tr>\n<tr>\n<td>Object</td>\n<td>Proxy</td>\n<td>SyntaxError</td>\n<td></td>\n<td>Int32Array</td>\n</tr>\n<tr>\n<td></td>\n<td>Map</td>\n<td>TypeError</td>\n<td></td>\n<td>UInt8Array</td>\n</tr>\n<tr>\n<td></td>\n<td>WeakMap</td>\n<td>URLError</td>\n<td></td>\n<td>UInt16Array</td>\n</tr>\n<tr>\n<td></td>\n<td>Set</td>\n<td></td>\n<td></td>\n<td>UInt32Array</td>\n</tr>\n<tr>\n<td></td>\n<td>WeakSet</td>\n<td></td>\n<td></td>\n<td>UInt8ClampedArray</td>\n</tr>\n<tr>\n<td></td>\n<td>Function</td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div>\n<h5 id="%E5%87%BD%E6%95%B0%E5%AF%B9%E8%B1%A1%E5%92%8C%E6%9E%84%E9%80%A0%E5%99%A8%E5%AF%B9%E8%B1%A1">函数对象和构造器对象<a class="anchor" href="#%E5%87%BD%E6%95%B0%E5%AF%B9%E8%B1%A1%E5%92%8C%E6%9E%84%E9%80%A0%E5%99%A8%E5%AF%B9%E8%B1%A1">§</a></h5>\n<p>用对象来模拟函数和构造器</p>\n<p>函数对象的定义是：具有[[call]]私有字段的对象，构造器对象的定义是：具有私有字段[[construct]]的对 象。</p>\n<p>任何对象只需要实现[[call]]，它就是一个函数对象，可以去作为函数被调用。而如果它能 实现[[construct]]，它就是一个构造器对象，可以作为构造器被调用。</p>\n<blockquote>\n<p>[[call]]私有字段必须是一个引擎中定义的函数，需要接受this值和调用参数，并且会产生域的 切换</p>\n</blockquote>\n<p>对于宿主和内置对象来说，它们实现[[call]]（作为函数被调用）和[[construct]]（作为构造器被调用）不总 是一致的。比如内置对象  Date  在作为构造器调用时产生新的对象，作为函数时，则产生字符串。</p>\n<p>而浏览器宿主环境中，提供的Image构造器，则根本不允许被作为函数调用。</p>\n<p>基本类型（String、Number、Boolean），它们的构造器被当作函数调用，则产生类型转换的效果。</p>\n<p>如基本类型（String、Number、Boolean），它们的构造器被当作函数调用，则产生类型转换的效果。</p>\n<pre class="language-autoit"><code class="language-autoit"><span class="token function">new</span><span class="token punctuation">(</span> a <span class="token operator">=</span><span class="token operator">></span> <span class="token number">0</span> <span class="token punctuation">)</span> <span class="token operator">/</span><span class="token operator">/</span> error\n</code></pre>\n<p>如基本类型（String、Number、Boolean），它们的构造器被当作函数调用，则产生类型转换的效果。</p>\n<p>对于用户使用  function  语法或者Function构造器创建的对象来说，[[call]]和[[construct]]行为总是相似的。</p>\n<pre class="language-autoit"><code class="language-autoit">function <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span>{\n  return <span class="token number">1</span>\n}\nvar v1 <span class="token operator">=</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nvar v2 <span class="token operator">=</span> new <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre>\n<p>构造器实例化，[[contruct]]的执行过程</p>\n<ol>\n<li>以Object.protope为原型创建一个对象</li>\n<li>以新对象为this，执行函数的[[call]]</li>\n<li>如果[[call]]的返回值是对象，那么返回这个对象，否则返回第一步的对象</li>\n</ol>\n<h4 id="%E7%89%B9%E6%AE%8A%E8%A1%8C%E4%B8%BA%E7%9A%84%E5%AF%B9%E8%B1%A1">特殊行为的对象<a class="anchor" href="#%E7%89%B9%E6%AE%8A%E8%A1%8C%E4%B8%BA%E7%9A%84%E5%AF%B9%E8%B1%A1">§</a></h4>\n<p>Array：Array的length属性根据最大的下标自动发生变化。\nObject.prototype：作为所有正常对象的默认原型，不能再给它设置原型了。\nString：为了支持下标运算，String的正整数属性访问会去字符串里查找。\nArguments：arguments的非负整数型下标属性跟对应的变量联动。</p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#javascript%E5%AF%B9%E8%B1%A1" }, "JavaScript\u5BF9\u8C61"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86" }, "\u57FA\u7840\u77E5\u8BC6")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E5%AF%B9%E8%B1%A1%E5%88%86%E7%B1%BB" }, "\u5BF9\u8C61\u5206\u7C7B"),
                        React.createElement("ol", null)))))),
    'author': "dingtt",
    'contributors': [
        "dingtt"
    ],
    'date': "2021-05-02T08:22:31.000Z",
    'updated': null,
    'excerpt': "JavaScript对象 基础知识 即使完全相同的两个对象，也并非同一个对象，因为对象是引用类型。 对象分类 - 宿主对象（host Objects）：由JavaScript宿主环境提供的对象，它们的行为完全由宿主环境决定。 - 内置对象（Built-in Ob...",
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
