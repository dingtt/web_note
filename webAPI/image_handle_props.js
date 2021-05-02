import projectConfig from '/pagic.config.js';
export default {
    'prev': undefined,
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "webAPI/image_handle.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "webAPI/image_handle.html",
    'title': "web图片处理",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>web图片处理</h1>\n<h2 id="%E5%9B%BE%E7%89%87%E5%A4%84%E7%90%86blob--arraybuffer">图片处理Blob  ArrayBuffer<a class="anchor" href="#%E5%9B%BE%E7%89%87%E5%A4%84%E7%90%86blob--arraybuffer">§</a></h2>\n<h3 id="%E6%9C%AC%E5%9C%B0%E5%9B%BE%E7%89%87">本地图片<a class="anchor" href="#%E6%9C%AC%E5%9C%B0%E5%9B%BE%E7%89%87">§</a></h3>\n<p>FileReader</p>\n<p>readAsDataUrl</p>\n<p>Base64 基于64个可打印字符，2的6次方，即为64。</p>\n<p>三个字节，对应24比特，即4个可打印字符。</p>\n<p>大小写字母各26各，数字10个，加号+和斜杠，共64个字符，等号=用来作为后缀。</p>\n<p>字母 对应ASCII码</p>\n<p>不能被3整除，需要补字节，A  QQ==  BC QKM=</p>\n<p>btoa() 基于二进制数据创建一个base64编码的字符串</p>\n<p>atob() 解码通过base64编码的字符串数据</p>\n<h3 id="%E8%BF%9C%E7%A8%8B%E5%9B%BE%E7%89%87-%E5%9B%BE%E7%89%87%E9%A2%84%E8%A7%88">远程图片-图片预览<a class="anchor" href="#%E8%BF%9C%E7%A8%8B%E5%9B%BE%E7%89%87-%E5%9B%BE%E7%89%87%E9%A2%84%E8%A7%88">§</a></h3>\n<p>解密图片时，可以考虑在Web Worker中使用fetch API获取图片数据并进行解密</p>\n<p>fetch API 的Response对象，blob() json() text() formData()  arrayBuffer()</p>\n<h4 id="object-url">Object URL<a class="anchor" href="#object-url">§</a></h4>\n<p>URL.createObjectURL</p>\n<p>URL.revokeObjectURL(url)</p>\n<h4 id="blob-api">Blob API<a class="anchor" href="#blob-api">§</a></h4>\n<p>size 字节大小</p>\n<p>type MIME类型   text/html   image/png text/plain</p>\n<pre class="language-autoit"><code class="language-autoit">new <span class="token function">Blob</span><span class="token punctuation">(</span>blobParts<span class="token punctuation">,</span> options<span class="token punctuation">)</span>\n</code></pre>\n<p>blobParts 由 ArrayBluffer ArrayBufferView  Blob DOMString等对象构成的数组，DOMString会被编码成UTF-8</p>\n<p>options，type默认为“”，endings，结束符\n如何被写入，transparent，native更改为适合宿主操作系统的换行符</p>\n<p>从类型化数组和字符串创建Blob</p>\n<pre class="language-autoit"><code class="language-autoit">let hello <span class="token operator">=</span> new <span class="token function">Unit8Array</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">72</span><span class="token punctuation">,</span><span class="token number">101</span><span class="token punctuation">,</span><span class="token number">108</span><span class="token punctuation">,</span><span class="token number">108</span><span class="token punctuation">,</span><span class="token number">111</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">/</span><span class="token operator">/</span> 二进制格式的hello\nlet bolb <span class="token operator">=</span> new <span class="token function">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span>hello<span class="token punctuation">,</span> <span class="token string">\' \'</span><span class="token punctuation">,</span> <span class="token string">\'world\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>tpype<span class="token punctuation">:</span><span class="token string">\'text/html\'</span><span class="token punctuation">)</span>\n</code></pre>\n<h5 id="bolb%E6%96%B9%E6%B3%95">Bolb方法<a class="anchor" href="#bolb%E6%96%B9%E6%B3%95">§</a></h5>\n<p>slice([start[, end[, contentType]]]) 返回一个新的对象，包含了bolb原对象中指定范围内的数据。</p>\n<p>stream() 返回一个能读取blob内容的ReadableSream</p>\n<p>text 返回一个Promise对象且包含blob所有内容的UTF-8格式的USVString</p>\n<p>arrayBuffer 返回一个Promise对象且包含blob所有内容的二进制格式的ArrayBuffer</p>\n<h4 id="arraybuffer">ArrayBuffer<a class="anchor" href="#arraybuffer">§</a></h4>\n<p>通用的 固定长度的原始二进制数据缓冲区，不能直接操作，需要通过类数组对象或DataView对象来操作。</p>\n<pre class="language-autoit"><code class="language-autoit">new <span class="token function">ArrayBuffer</span><span class="token punctuation">(</span>length<span class="token punctuation">)</span> <span class="token operator">/</span><span class="token operator">/</span> length字节大小，小于MATH<span class="token punctuation">.</span>MAX_SAFE_INTEGER <span class="token number">2</span><span class="token operator">*</span><span class="token operator">*</span><span class="token number">53</span>\n</code></pre>\n<h4 id="typedarray">TypedArray<a class="anchor" href="#typedarray">§</a></h4>\n<p><strong>Uint8Array</strong></p>\n<p>Uint8Array 数组类型表示⼀个 8 位⽆符号整型数组，创建时内容被初始化为 0。创建完后，可以以对象\n的⽅式或使⽤数组下标索引的⽅式引⽤数组中的元素。</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ES2017 最新语法</span>\n<span class="token comment">// new Uint8Array(length);</span>\n<span class="token keyword">var</span> uint8 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nuint8<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>  <span class="token comment">// 负值会被+256</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>uint8<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 42</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>uint8<span class="token punctuation">.</span><span class="token property-access">length</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>uint8<span class="token punctuation">.</span><span class="token constant">BYTES_PER_ELEMENT</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>\n<span class="token comment">// new TypedArray(object);</span>\n<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">21</span><span class="token punctuation">,</span><span class="token number">31</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 31</span>\n<span class="token comment">// new Uint8Array(typedArray);</span>\n<span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>y<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 21</span>\n<span class="token comment">// new Uint8Array(buffer [, byteOffset [, length]]);</span>\n<span class="token keyword">var</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayBuffer</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> z <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h5 id="arraybuffer-%E4%B8%8E-typedarray-%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B3%E7%B3%BB"><strong>ArrayBuffer</strong> 与 TypedArray 之间的关系<a class="anchor" href="#arraybuffer-%E4%B8%8E-typedarray-%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B3%E7%B3%BB">§</a></h5>\n<p>ArrayBuffer 本身只是⼀⾏ 0 和 1 串  ，TypedArray区分分割长度</p>\n<h5 id="blob-%E4%B8%8Earraybuffer">Blob 与ArrayBuffer<a class="anchor" href="#blob-%E4%B8%8Earraybuffer">§</a></h5>\n<p>ArrayBuffer 对象⽤于表示通⽤的，固定⻓度的原始⼆进制数据缓冲区，存在内存中的  。</p>\n<p>Blob 类型的对象表示不可变的类似⽂件对象的原始数据。  不⼀定是 JavaScript 原⽣格式的数据，位于磁盘、⾼速缓存内存和其他不可\n⽤的位置。</p>\n<p><strong>互转</strong></p>\n<p>FileReader 的 readAsArrayBuffer()</p>\n<p>new Blob([new Uint8Array(data]);</p>\n<h4 id="dataview">DataView<a class="anchor" href="#dataview">§</a></h4>\n<pre class="language-autoit"><code class="language-autoit">new <span class="token function">DataView</span><span class="token punctuation">(</span>buffer <span class="token punctuation">[</span><span class="token punctuation">,</span> byteOffset <span class="token punctuation">[</span><span class="token punctuation">,</span> byteLength<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">/</span><span class="token operator">/</span> buffer   从 ArrayBuffer读取时的偏移字节⻓度起始<span class="token punctuation">,</span>  <span class="token operator">/</span><span class="token operator">/</span> ArrayBuffer 或 SharedArrayBuffer 对象的字节⻓度\n</code></pre>\n<p>属性 buffer   btyeLength  btyeOffest</p>\n<p>方法 getInt8()、 getUint8()、 setInt8() 和 setUint8()</p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "web\u56FE\u7247\u5904\u7406"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E5%9B%BE%E7%89%87%E5%A4%84%E7%90%86blob--arraybuffer">图片处理Blob  ArrayBuffer<a class="anchor" href="#%E5%9B%BE%E7%89%87%E5%A4%84%E7%90%86blob--arraybuffer">§</a></h2>\n<h3 id="%E6%9C%AC%E5%9C%B0%E5%9B%BE%E7%89%87">本地图片<a class="anchor" href="#%E6%9C%AC%E5%9C%B0%E5%9B%BE%E7%89%87">§</a></h3>\n<p>FileReader</p>\n<p>readAsDataUrl</p>\n<p>Base64 基于64个可打印字符，2的6次方，即为64。</p>\n<p>三个字节，对应24比特，即4个可打印字符。</p>\n<p>大小写字母各26各，数字10个，加号+和斜杠，共64个字符，等号=用来作为后缀。</p>\n<p>字母 对应ASCII码</p>\n<p>不能被3整除，需要补字节，A  QQ==  BC QKM=</p>\n<p>btoa() 基于二进制数据创建一个base64编码的字符串</p>\n<p>atob() 解码通过base64编码的字符串数据</p>\n<h3 id="%E8%BF%9C%E7%A8%8B%E5%9B%BE%E7%89%87-%E5%9B%BE%E7%89%87%E9%A2%84%E8%A7%88">远程图片-图片预览<a class="anchor" href="#%E8%BF%9C%E7%A8%8B%E5%9B%BE%E7%89%87-%E5%9B%BE%E7%89%87%E9%A2%84%E8%A7%88">§</a></h3>\n<p>解密图片时，可以考虑在Web Worker中使用fetch API获取图片数据并进行解密</p>\n<p>fetch API 的Response对象，blob() json() text() formData()  arrayBuffer()</p>\n<h4 id="object-url">Object URL<a class="anchor" href="#object-url">§</a></h4>\n<p>URL.createObjectURL</p>\n<p>URL.revokeObjectURL(url)</p>\n<h4 id="blob-api">Blob API<a class="anchor" href="#blob-api">§</a></h4>\n<p>size 字节大小</p>\n<p>type MIME类型   text/html   image/png text/plain</p>\n<pre class="language-autoit"><code class="language-autoit">new <span class="token function">Blob</span><span class="token punctuation">(</span>blobParts<span class="token punctuation">,</span> options<span class="token punctuation">)</span>\n</code></pre>\n<p>blobParts 由 ArrayBluffer ArrayBufferView  Blob DOMString等对象构成的数组，DOMString会被编码成UTF-8</p>\n<p>options，type默认为“”，endings，结束符\n如何被写入，transparent，native更改为适合宿主操作系统的换行符</p>\n<p>从类型化数组和字符串创建Blob</p>\n<pre class="language-autoit"><code class="language-autoit">let hello <span class="token operator">=</span> new <span class="token function">Unit8Array</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">72</span><span class="token punctuation">,</span><span class="token number">101</span><span class="token punctuation">,</span><span class="token number">108</span><span class="token punctuation">,</span><span class="token number">108</span><span class="token punctuation">,</span><span class="token number">111</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">/</span><span class="token operator">/</span> 二进制格式的hello\nlet bolb <span class="token operator">=</span> new <span class="token function">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span>hello<span class="token punctuation">,</span> <span class="token string">\' \'</span><span class="token punctuation">,</span> <span class="token string">\'world\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>tpype<span class="token punctuation">:</span><span class="token string">\'text/html\'</span><span class="token punctuation">)</span>\n</code></pre>\n<h5 id="bolb%E6%96%B9%E6%B3%95">Bolb方法<a class="anchor" href="#bolb%E6%96%B9%E6%B3%95">§</a></h5>\n<p>slice([start[, end[, contentType]]]) 返回一个新的对象，包含了bolb原对象中指定范围内的数据。</p>\n<p>stream() 返回一个能读取blob内容的ReadableSream</p>\n<p>text 返回一个Promise对象且包含blob所有内容的UTF-8格式的USVString</p>\n<p>arrayBuffer 返回一个Promise对象且包含blob所有内容的二进制格式的ArrayBuffer</p>\n<h4 id="arraybuffer">ArrayBuffer<a class="anchor" href="#arraybuffer">§</a></h4>\n<p>通用的 固定长度的原始二进制数据缓冲区，不能直接操作，需要通过类数组对象或DataView对象来操作。</p>\n<pre class="language-autoit"><code class="language-autoit">new <span class="token function">ArrayBuffer</span><span class="token punctuation">(</span>length<span class="token punctuation">)</span> <span class="token operator">/</span><span class="token operator">/</span> length字节大小，小于MATH<span class="token punctuation">.</span>MAX_SAFE_INTEGER <span class="token number">2</span><span class="token operator">*</span><span class="token operator">*</span><span class="token number">53</span>\n</code></pre>\n<h4 id="typedarray">TypedArray<a class="anchor" href="#typedarray">§</a></h4>\n<p><strong>Uint8Array</strong></p>\n<p>Uint8Array 数组类型表示⼀个 8 位⽆符号整型数组，创建时内容被初始化为 0。创建完后，可以以对象\n的⽅式或使⽤数组下标索引的⽅式引⽤数组中的元素。</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ES2017 最新语法</span>\n<span class="token comment">// new Uint8Array(length);</span>\n<span class="token keyword">var</span> uint8 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nuint8<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>  <span class="token comment">// 负值会被+256</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>uint8<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 42</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>uint8<span class="token punctuation">.</span><span class="token property-access">length</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>uint8<span class="token punctuation">.</span><span class="token constant">BYTES_PER_ELEMENT</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>\n<span class="token comment">// new TypedArray(object);</span>\n<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">21</span><span class="token punctuation">,</span><span class="token number">31</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 31</span>\n<span class="token comment">// new Uint8Array(typedArray);</span>\n<span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>y<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 21</span>\n<span class="token comment">// new Uint8Array(buffer [, byteOffset [, length]]);</span>\n<span class="token keyword">var</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayBuffer</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> z <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h5 id="arraybuffer-%E4%B8%8E-typedarray-%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B3%E7%B3%BB"><strong>ArrayBuffer</strong> 与 TypedArray 之间的关系<a class="anchor" href="#arraybuffer-%E4%B8%8E-typedarray-%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B3%E7%B3%BB">§</a></h5>\n<p>ArrayBuffer 本身只是⼀⾏ 0 和 1 串  ，TypedArray区分分割长度</p>\n<h5 id="blob-%E4%B8%8Earraybuffer">Blob 与ArrayBuffer<a class="anchor" href="#blob-%E4%B8%8Earraybuffer">§</a></h5>\n<p>ArrayBuffer 对象⽤于表示通⽤的，固定⻓度的原始⼆进制数据缓冲区，存在内存中的  。</p>\n<p>Blob 类型的对象表示不可变的类似⽂件对象的原始数据。  不⼀定是 JavaScript 原⽣格式的数据，位于磁盘、⾼速缓存内存和其他不可\n⽤的位置。</p>\n<p><strong>互转</strong></p>\n<p>FileReader 的 readAsArrayBuffer()</p>\n<p>new Blob([new Uint8Array(data]);</p>\n<h4 id="dataview">DataView<a class="anchor" href="#dataview">§</a></h4>\n<pre class="language-autoit"><code class="language-autoit">new <span class="token function">DataView</span><span class="token punctuation">(</span>buffer <span class="token punctuation">[</span><span class="token punctuation">,</span> byteOffset <span class="token punctuation">[</span><span class="token punctuation">,</span> byteLength<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">/</span><span class="token operator">/</span> buffer   从 ArrayBuffer读取时的偏移字节⻓度起始<span class="token punctuation">,</span>  <span class="token operator">/</span><span class="token operator">/</span> ArrayBuffer 或 SharedArrayBuffer 对象的字节⻓度\n</code></pre>\n<p>属性 buffer   btyeLength  btyeOffest</p>\n<p>方法 getInt8()、 getUint8()、 setInt8() 和 setUint8()</p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%9B%BE%E7%89%87%E5%A4%84%E7%90%86blob--arraybuffer" }, "\u56FE\u7247\u5904\u7406Blob  ArrayBuffer"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E6%9C%AC%E5%9C%B0%E5%9B%BE%E7%89%87" }, "\u672C\u5730\u56FE\u7247")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E8%BF%9C%E7%A8%8B%E5%9B%BE%E7%89%87-%E5%9B%BE%E7%89%87%E9%A2%84%E8%A7%88" }, "\u8FDC\u7A0B\u56FE\u7247-\u56FE\u7247\u9884\u89C8"),
                        React.createElement("ol", null)))))),
    'author': "dingtt",
    'contributors': [
        "dingtt"
    ],
    'date': "2021-05-02T08:22:31.000Z",
    'updated': null,
    'excerpt': "图片处理Blob ArrayBuffer 本地图片 FileReader readAsDataUrl Base64 基于64个可打印字符，2的6次方，即为64。 三个字节，对应24比特，即4个可打印字符。 大小写字母各26各，数字10个，加号+和斜杠，共64个字符，等号=用来作为...",
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
