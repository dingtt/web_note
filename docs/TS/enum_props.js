import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "TS基础",
        "link": "TS/basics.html"
    },
    'next': {
        "link": "vue/index.html",
        "text": "Vue"
    },
    config: { "root": "/", ...projectConfig, branch: 'gh-pages' },
    'pagePath': "TS/enum.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "TS/enum.html",
    'title': "TS枚举 类型 接口 泛型",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>TS枚举 类型 接口 泛型</h1>\n<p>数字枚举</p>\n<p>字符串枚举</p>\n<p>异构枚举</p>\n<p>反向映射</p>\n<p>常量枚举</p>\n<p>枚举成员类型</p>\n<p>假设枚举的所有成员都是字面量类型的值，那么枚举的每个成员和枚举值本身都可以作为类型来使用。</p>\n<p>联合枚举类型</p>\n<pre class="language-autoit"><code class="language-autoit"><span class="token keyword">enum</span> Direction {\n    Up<span class="token punctuation">,</span>\n    Down<span class="token punctuation">,</span>\n    Left<span class="token punctuation">,</span>\n    Right\n}\n\ndeclare let a<span class="token punctuation">:</span> Direction\n</code></pre>\n<p>把 <code>a</code> 声明为 <code>Direction</code> 类型，可以看成我们声明了一个联合类型 <code>Direction.Up | Direction.Down | Direction.Left | Direction.Right</code></p>\n<h4 id="%E6%9E%9A%E4%B8%BE%E5%90%88%E5%B9%B6">枚举合并<a class="anchor" href="#%E6%9E%9A%E4%B8%BE%E5%90%88%E5%B9%B6">§</a></h4>\n<p>分开声明，自动合并</p>\n<h3 id="%E6%8E%A5%E5%8F%A3">接口<a class="anchor" href="#%E6%8E%A5%E5%8F%A3">§</a></h3>\n<p>可选属性  只读属性  函数类型</p>\n<pre class="language-autoit"><code class="language-autoit">say<span class="token punctuation">:</span> <span class="token punctuation">(</span>words<span class="token punctuation">:</span> string<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> string\n\ninterface Say {\n    <span class="token punctuation">(</span>words<span class="token punctuation">:</span> string<span class="token punctuation">)</span> <span class="token punctuation">:</span> string\n}\nsay<span class="token punctuation">:</span>Say\n</code></pre>\n<h4 id="%E5%B1%9E%E6%80%A7%E6%A3%80%E6%9F%A5">属性检查<a class="anchor" href="#%E5%B1%9E%E6%80%A7%E6%A3%80%E6%9F%A5">§</a></h4>\n<p>类型断言，字符串索引签名，</p>\n<p>可索引类型</p>\n<pre class="language-autoit"><code class="language-autoit">interface Phone {\n    <span class="token punctuation">[</span>name<span class="token punctuation">:</span> string<span class="token punctuation">]</span><span class="token punctuation">:</span> string\n}\n</code></pre>\n<h4 id="%E7%BB%A7%E6%89%BF%E6%8E%A5%E5%8F%A3">继承接口<a class="anchor" href="#%E7%BB%A7%E6%89%BF%E6%8E%A5%E5%8F%A3">§</a></h4>\n<h3 id="%E7%B1%BB">类<a class="anchor" href="#%E7%B1%BB">§</a></h3>\n<h4 id="%E6%8A%BD%E8%B1%A1%E7%B1%BB">抽象类<a class="anchor" href="#%E6%8A%BD%E8%B1%A1%E7%B1%BB">§</a></h4>\n<p>抽象类做为其它派生类的基类使用,它们一般不会直接被实例化,不同于接口,抽象类可以包含成员的实现细节。</p>\n<pre class="language-autoit"><code class="language-autoit">abstract class Animal {\n    abstract <span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> void<span class="token comment">;</span>\n    <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> void {\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'roaming the earch...\'</span><span class="token punctuation">)</span><span class="token comment">;</span>\n    }\n}\n<span class="token operator">/</span><span class="token operator">/</span> 不能直接实例化抽象类，通常需要我们创建子类继承 extends 基类<span class="token punctuation">,</span>然后可以实例化子类。\n</code></pre>\n<h4 id="%E8%AE%BF%E9%97%AE%E9%99%90%E5%AE%9A%E7%AC%A6">访问限定符<a class="anchor" href="#%E8%AE%BF%E9%97%AE%E9%99%90%E5%AE%9A%E7%AC%A6">§</a></h4>\n<p>public 默认 protected 类和子类可访问  private 类内部可访问</p>\n<h3 id="%E6%B3%9B%E5%9E%8B">泛型<a class="anchor" href="#%E6%B3%9B%E5%9E%8B">§</a></h3>\n<p>它是一种特殊的变量，只用于表示类型而不是值。</p>\n<pre class="language-autoit"><code class="language-autoit">function returnItem<span class="token operator">&lt;</span>T<span class="token operator">></span><span class="token punctuation">(</span>para<span class="token punctuation">:</span> T<span class="token punctuation">)</span><span class="token punctuation">:</span> T {\n    return para\n}\n</code></pre>\n<h4 id="%E5%A4%9A%E4%B8%AA%E7%B1%BB%E5%9E%8B%E7%9A%84%E6%B3%9B%E5%9E%8B">多个类型的泛型<a class="anchor" href="#%E5%A4%9A%E4%B8%AA%E7%B1%BB%E5%9E%8B%E7%9A%84%E6%B3%9B%E5%9E%8B">§</a></h4>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">swap</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">></span></span></span><span class="token punctuation">(</span>tuple<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">U</span><span class="token punctuation">,</span> <span class="token constant">T</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">[</span>tuple<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> tuple<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">swap</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token string">\'seven\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [\'seven\', 7]</span>\n</code></pre>\n<h4 id="%E6%B3%9B%E5%9E%8B%E5%8F%98%E9%87%8F">泛型变量<a class="anchor" href="#%E6%B3%9B%E5%9E%8B%E5%8F%98%E9%87%8F">§</a></h4>\n<pre class="language-autoit"><code class="language-autoit">function getArrayLength<span class="token operator">&lt;</span>T<span class="token operator">></span><span class="token punctuation">(</span>arg<span class="token punctuation">:</span> Array<span class="token operator">&lt;</span>T<span class="token operator">></span><span class="token punctuation">)</span> {\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span>arg as Array<span class="token operator">&lt;</span>any<span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">/</span><span class="token operator">/</span> ok\n  return arg\n}\n<span class="token operator">/</span><span class="token operator">/</span> T<span class="token punctuation">[</span><span class="token punctuation">]</span>\n</code></pre>\n<h4 id="%E6%B3%9B%E5%9E%8B%E6%8E%A5%E5%8F%A3">泛型接口<a class="anchor" href="#%E6%B3%9B%E5%9E%8B%E6%8E%A5%E5%8F%A3">§</a></h4>\n<pre class="language-autoit"><code class="language-autoit">interface ReturnItemFn<span class="token operator">&lt;</span>T<span class="token operator">></span> {\n    <span class="token punctuation">(</span>para<span class="token punctuation">:</span> T<span class="token punctuation">)</span><span class="token punctuation">:</span> T\n}\n<span class="token keyword">const</span> returnItem<span class="token punctuation">:</span> ReturnItemFn<span class="token operator">&lt;</span>number<span class="token operator">></span> <span class="token operator">=</span> para <span class="token operator">=</span><span class="token operator">></span> para\n</code></pre>\n<p>泛型类</p>\n<pre class="language-autoit"><code class="language-autoit">\n</code></pre>\n<p>泛型约束</p>\n<p>extends</p>\n<p>泛型约束与索引类型</p>\n<pre class="language-autoit"><code class="language-autoit">function getValue<span class="token operator">&lt;</span>T extends object<span class="token punctuation">,</span> U extends keyof T<span class="token operator">></span><span class="token punctuation">(</span>obj<span class="token punctuation">:</span> T<span class="token punctuation">,</span> key<span class="token punctuation">:</span> U<span class="token punctuation">)</span> {\n  return obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">/</span><span class="token operator">/</span> ok\n}\nfunction getValue<span class="token operator">&lt;</span>t extends object<span class="token punctuation">,</span> U extends key of T<span class="token operator">></span><span class="token punctuation">(</span>obj<span class="token punctuation">:</span>T<span class="token punctuation">,</span>key<span class="token punctuation">:</span>U<span class="token punctuation">)</span><span class="token punctuation">:</span> U as key of T {\n   return obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span>\n}\n</code></pre>\n<h4 id="%E5%A4%9A%E9%87%8D%E7%B1%BB%E5%9E%8B%E8%BF%9B%E8%A1%8C%E6%B3%9B%E5%9E%8B%E7%BA%A6%E6%9D%9F">多重类型进行泛型约束<a class="anchor" href="#%E5%A4%9A%E9%87%8D%E7%B1%BB%E5%9E%8B%E8%BF%9B%E8%A1%8C%E6%B3%9B%E5%9E%8B%E7%BA%A6%E6%9D%9F">§</a></h4>\n<p>接口包一层，或者使用交叉类型 &amp;</p>\n<h4 id="%E6%B3%9B%E5%9E%8B%E4%B8%8E-new">泛型与 new<a class="anchor" href="#%E6%B3%9B%E5%9E%8B%E4%B8%8E-new">§</a></h4>\n<p><code>{new(): T}</code> 就表示此泛型 T 是可被构造的，在被实例化后的类型是泛型 T。</p>\n<h3 id="%E7%B1%BB%E5%9E%8B%E5%AE%88%E5%8D%AB">类型守卫<a class="anchor" href="#%E7%B1%BB%E5%9E%8B%E5%AE%88%E5%8D%AB">§</a></h3>\n<p>instanceof</p>\n<p>in</p>\n<p>字面量类型守卫</p>\n<h3 id="%E7%B1%BB%E5%9E%8B%E5%85%BC%E5%AE%B9%E6%80%A7">类型兼容性<a class="anchor" href="#%E7%B1%BB%E5%9E%8B%E5%85%BC%E5%AE%B9%E6%80%A7">§</a></h3>\n<p>结构类型兼容   &lt;=   多的可以赋值给少的  ；</p>\n<p>函数兼容 &gt;= ，参数少的可以赋值给参数多的；</p>\n<p>枚举的兼容性，枚举和数字类型相互兼容。</p>\n<p>类的类型兼容性，仅仅只有实例成员和方法会相比较，构造函数和静态成员不会被检查，私有的和受保护的成员必须来自于相同的类。</p>\n<p>参比图片，项目信息，执法手动上传，通道数据</p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "TS\u679A\u4E3E \u7C7B\u578B \u63A5\u53E3 \u6CDB\u578B"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>数字枚举</p>\n<p>字符串枚举</p>\n<p>异构枚举</p>\n<p>反向映射</p>\n<p>常量枚举</p>\n<p>枚举成员类型</p>\n<p>假设枚举的所有成员都是字面量类型的值，那么枚举的每个成员和枚举值本身都可以作为类型来使用。</p>\n<p>联合枚举类型</p>\n<pre class="language-autoit"><code class="language-autoit"><span class="token keyword">enum</span> Direction {\n    Up<span class="token punctuation">,</span>\n    Down<span class="token punctuation">,</span>\n    Left<span class="token punctuation">,</span>\n    Right\n}\n\ndeclare let a<span class="token punctuation">:</span> Direction\n</code></pre>\n<p>把 <code>a</code> 声明为 <code>Direction</code> 类型，可以看成我们声明了一个联合类型 <code>Direction.Up | Direction.Down | Direction.Left | Direction.Right</code></p>\n<h4 id="%E6%9E%9A%E4%B8%BE%E5%90%88%E5%B9%B6">枚举合并<a class="anchor" href="#%E6%9E%9A%E4%B8%BE%E5%90%88%E5%B9%B6">§</a></h4>\n<p>分开声明，自动合并</p>\n<h3 id="%E6%8E%A5%E5%8F%A3">接口<a class="anchor" href="#%E6%8E%A5%E5%8F%A3">§</a></h3>\n<p>可选属性  只读属性  函数类型</p>\n<pre class="language-autoit"><code class="language-autoit">say<span class="token punctuation">:</span> <span class="token punctuation">(</span>words<span class="token punctuation">:</span> string<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> string\n\ninterface Say {\n    <span class="token punctuation">(</span>words<span class="token punctuation">:</span> string<span class="token punctuation">)</span> <span class="token punctuation">:</span> string\n}\nsay<span class="token punctuation">:</span>Say\n</code></pre>\n<h4 id="%E5%B1%9E%E6%80%A7%E6%A3%80%E6%9F%A5">属性检查<a class="anchor" href="#%E5%B1%9E%E6%80%A7%E6%A3%80%E6%9F%A5">§</a></h4>\n<p>类型断言，字符串索引签名，</p>\n<p>可索引类型</p>\n<pre class="language-autoit"><code class="language-autoit">interface Phone {\n    <span class="token punctuation">[</span>name<span class="token punctuation">:</span> string<span class="token punctuation">]</span><span class="token punctuation">:</span> string\n}\n</code></pre>\n<h4 id="%E7%BB%A7%E6%89%BF%E6%8E%A5%E5%8F%A3">继承接口<a class="anchor" href="#%E7%BB%A7%E6%89%BF%E6%8E%A5%E5%8F%A3">§</a></h4>\n<h3 id="%E7%B1%BB">类<a class="anchor" href="#%E7%B1%BB">§</a></h3>\n<h4 id="%E6%8A%BD%E8%B1%A1%E7%B1%BB">抽象类<a class="anchor" href="#%E6%8A%BD%E8%B1%A1%E7%B1%BB">§</a></h4>\n<p>抽象类做为其它派生类的基类使用,它们一般不会直接被实例化,不同于接口,抽象类可以包含成员的实现细节。</p>\n<pre class="language-autoit"><code class="language-autoit">abstract class Animal {\n    abstract <span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> void<span class="token comment">;</span>\n    <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> void {\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'roaming the earch...\'</span><span class="token punctuation">)</span><span class="token comment">;</span>\n    }\n}\n<span class="token operator">/</span><span class="token operator">/</span> 不能直接实例化抽象类，通常需要我们创建子类继承 extends 基类<span class="token punctuation">,</span>然后可以实例化子类。\n</code></pre>\n<h4 id="%E8%AE%BF%E9%97%AE%E9%99%90%E5%AE%9A%E7%AC%A6">访问限定符<a class="anchor" href="#%E8%AE%BF%E9%97%AE%E9%99%90%E5%AE%9A%E7%AC%A6">§</a></h4>\n<p>public 默认 protected 类和子类可访问  private 类内部可访问</p>\n<h3 id="%E6%B3%9B%E5%9E%8B">泛型<a class="anchor" href="#%E6%B3%9B%E5%9E%8B">§</a></h3>\n<p>它是一种特殊的变量，只用于表示类型而不是值。</p>\n<pre class="language-autoit"><code class="language-autoit">function returnItem<span class="token operator">&lt;</span>T<span class="token operator">></span><span class="token punctuation">(</span>para<span class="token punctuation">:</span> T<span class="token punctuation">)</span><span class="token punctuation">:</span> T {\n    return para\n}\n</code></pre>\n<h4 id="%E5%A4%9A%E4%B8%AA%E7%B1%BB%E5%9E%8B%E7%9A%84%E6%B3%9B%E5%9E%8B">多个类型的泛型<a class="anchor" href="#%E5%A4%9A%E4%B8%AA%E7%B1%BB%E5%9E%8B%E7%9A%84%E6%B3%9B%E5%9E%8B">§</a></h4>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">swap</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">></span></span></span><span class="token punctuation">(</span>tuple<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">U</span><span class="token punctuation">,</span> <span class="token constant">T</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">[</span>tuple<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> tuple<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">swap</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token string">\'seven\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [\'seven\', 7]</span>\n</code></pre>\n<h4 id="%E6%B3%9B%E5%9E%8B%E5%8F%98%E9%87%8F">泛型变量<a class="anchor" href="#%E6%B3%9B%E5%9E%8B%E5%8F%98%E9%87%8F">§</a></h4>\n<pre class="language-autoit"><code class="language-autoit">function getArrayLength<span class="token operator">&lt;</span>T<span class="token operator">></span><span class="token punctuation">(</span>arg<span class="token punctuation">:</span> Array<span class="token operator">&lt;</span>T<span class="token operator">></span><span class="token punctuation">)</span> {\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span>arg as Array<span class="token operator">&lt;</span>any<span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">/</span><span class="token operator">/</span> ok\n  return arg\n}\n<span class="token operator">/</span><span class="token operator">/</span> T<span class="token punctuation">[</span><span class="token punctuation">]</span>\n</code></pre>\n<h4 id="%E6%B3%9B%E5%9E%8B%E6%8E%A5%E5%8F%A3">泛型接口<a class="anchor" href="#%E6%B3%9B%E5%9E%8B%E6%8E%A5%E5%8F%A3">§</a></h4>\n<pre class="language-autoit"><code class="language-autoit">interface ReturnItemFn<span class="token operator">&lt;</span>T<span class="token operator">></span> {\n    <span class="token punctuation">(</span>para<span class="token punctuation">:</span> T<span class="token punctuation">)</span><span class="token punctuation">:</span> T\n}\n<span class="token keyword">const</span> returnItem<span class="token punctuation">:</span> ReturnItemFn<span class="token operator">&lt;</span>number<span class="token operator">></span> <span class="token operator">=</span> para <span class="token operator">=</span><span class="token operator">></span> para\n</code></pre>\n<p>泛型类</p>\n<pre class="language-autoit"><code class="language-autoit">\n</code></pre>\n<p>泛型约束</p>\n<p>extends</p>\n<p>泛型约束与索引类型</p>\n<pre class="language-autoit"><code class="language-autoit">function getValue<span class="token operator">&lt;</span>T extends object<span class="token punctuation">,</span> U extends keyof T<span class="token operator">></span><span class="token punctuation">(</span>obj<span class="token punctuation">:</span> T<span class="token punctuation">,</span> key<span class="token punctuation">:</span> U<span class="token punctuation">)</span> {\n  return obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">/</span><span class="token operator">/</span> ok\n}\nfunction getValue<span class="token operator">&lt;</span>t extends object<span class="token punctuation">,</span> U extends key of T<span class="token operator">></span><span class="token punctuation">(</span>obj<span class="token punctuation">:</span>T<span class="token punctuation">,</span>key<span class="token punctuation">:</span>U<span class="token punctuation">)</span><span class="token punctuation">:</span> U as key of T {\n   return obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span>\n}\n</code></pre>\n<h4 id="%E5%A4%9A%E9%87%8D%E7%B1%BB%E5%9E%8B%E8%BF%9B%E8%A1%8C%E6%B3%9B%E5%9E%8B%E7%BA%A6%E6%9D%9F">多重类型进行泛型约束<a class="anchor" href="#%E5%A4%9A%E9%87%8D%E7%B1%BB%E5%9E%8B%E8%BF%9B%E8%A1%8C%E6%B3%9B%E5%9E%8B%E7%BA%A6%E6%9D%9F">§</a></h4>\n<p>接口包一层，或者使用交叉类型 &amp;</p>\n<h4 id="%E6%B3%9B%E5%9E%8B%E4%B8%8E-new">泛型与 new<a class="anchor" href="#%E6%B3%9B%E5%9E%8B%E4%B8%8E-new">§</a></h4>\n<p><code>{new(): T}</code> 就表示此泛型 T 是可被构造的，在被实例化后的类型是泛型 T。</p>\n<h3 id="%E7%B1%BB%E5%9E%8B%E5%AE%88%E5%8D%AB">类型守卫<a class="anchor" href="#%E7%B1%BB%E5%9E%8B%E5%AE%88%E5%8D%AB">§</a></h3>\n<p>instanceof</p>\n<p>in</p>\n<p>字面量类型守卫</p>\n<h3 id="%E7%B1%BB%E5%9E%8B%E5%85%BC%E5%AE%B9%E6%80%A7">类型兼容性<a class="anchor" href="#%E7%B1%BB%E5%9E%8B%E5%85%BC%E5%AE%B9%E6%80%A7">§</a></h3>\n<p>结构类型兼容   &lt;=   多的可以赋值给少的  ；</p>\n<p>函数兼容 &gt;= ，参数少的可以赋值给参数多的；</p>\n<p>枚举的兼容性，枚举和数字类型相互兼容。</p>\n<p>类的类型兼容性，仅仅只有实例成员和方法会相比较，构造函数和静态成员不会被检查，私有的和受保护的成员必须来自于相同的类。</p>\n<p>参比图片，项目信息，执法手动上传，通道数据</p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%8E%A5%E5%8F%A3" }, "\u63A5\u53E3"),
                React.createElement("ol", null)),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E7%B1%BB" }, "\u7C7B"),
                React.createElement("ol", null)),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%B3%9B%E5%9E%8B" }, "\u6CDB\u578B"),
                React.createElement("ol", null)),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E7%B1%BB%E5%9E%8B%E5%AE%88%E5%8D%AB" }, "\u7C7B\u578B\u5B88\u536B")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E7%B1%BB%E5%9E%8B%E5%85%BC%E5%AE%B9%E6%80%A7" }, "\u7C7B\u578B\u517C\u5BB9\u6027")))),
    'author': "dingdtt",
    'contributors': [
        "dingdtt"
    ],
    'date': "2020-08-06T07:47:00.000Z",
    'updated': "2020-11-04T07:48:53.000Z",
    'excerpt': "数字枚举 字符串枚举 异构枚举 反向映射 常量枚举 枚举成员类型 假设枚举的所有成员都是字面量类型的值，那么枚举的每个成员和枚举值本身都可以作为类型来使用。 联合枚举类型 enum Direction { Up, Down, Left, Right } decla...",
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
