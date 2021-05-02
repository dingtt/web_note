import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "浏览器",
        "link": "HTTP/browser.html"
    },
    'next': {
        "text": "网络硬件",
        "link": "HTTP/internet-hardware.html"
    },
    config: { "root": "/", ...projectConfig, branch: 'gh-pages' },
    'pagePath': "HTTP/HTTP.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "HTTP/HTTP.html",
    'title': "HTTP协议请求方法和状态码",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>HTTP协议请求方法和状态码</h1>\n<p>HTTP是一个无状态的协议，简单的可以理解为即使同一个客户端连续两次发送请求给服务器，服务器也无法识别这个同一个客户端发的请求。为了解决 HTTP 无状态导致的问题（HTTP1.x），后来出现了 Cookie。</p>\n<p>请求部分，第一行被称作 request line，它分为三个部分，HTTP Method，也就是请求的“方法”，请求\n的路径和请求的协议和版本。</p>\n<p>响应部分，第一行被称作 response line，它也分为三个部分，协议和版本、状态码和状态文本 。</p>\n<h2 id="%E5%B8%B8%E8%A7%81%E7%9A%84http%E8%AF%B7%E6%B1%82%E6%96%B9%E6%B3%95">常见的HTTP请求方法<a class="anchor" href="#%E5%B8%B8%E8%A7%81%E7%9A%84http%E8%AF%B7%E6%B1%82%E6%96%B9%E6%B3%95">§</a></h2>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>方法</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>GET</td>\n<td>请求指定页面的信息并返回实体主体，如果是文件，返回文件内容；如果是CGI程序，返回该程序的输出数据。</td>\n</tr>\n<tr>\n<td>HEAD</td>\n<td>类似于GET，返回的响应中没有具体的内容，只有消息头，用于获取文件最好更新时间等属性信息。</td>\n</tr>\n<tr>\n<td>POST</td>\n<td>向指定的资源提交数据进行处理请求，数据包含在请求体中</td>\n</tr>\n<tr>\n<td>PUT</td>\n<td>从客户端向服务端传递数据取代指定的文档内容，如果文件不存在则创建该文件。</td>\n</tr>\n<tr>\n<td>DELETE</td>\n<td>请求服务器删除指定的内容</td>\n</tr>\n<tr>\n<td>OPTIONS</td>\n<td>用于通知或查询通信选项</td>\n</tr>\n<tr>\n<td>TRACE</td>\n<td>将服务器收到的请求行和头部直接返回给客户端，用于再使用代理的环境中检查改写请求的情况。</td>\n</tr>\n<tr>\n<td>CONNECT</td>\n<td>使用代理传输加密消息时使用的方法</td>\n</tr>\n</tbody>\n</table></div>\n<h2 id="http11%E6%94%AF%E6%8C%81%E7%9A%84%E7%8A%B6%E6%80%81%E7%A0%81">HTTP1.1支持的状态码<a class="anchor" href="#http11%E6%94%AF%E6%8C%81%E7%9A%84%E7%8A%B6%E6%80%81%E7%A0%81">§</a></h2>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>状态码</th>\n<th>已定义范围</th>\n<th>分类</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1XX</td>\n<td>100~101</td>\n<td>信息提示，请求已被接收成功，继续处理</td>\n</tr>\n<tr>\n<td>2XX</td>\n<td>200~206</td>\n<td>成功，标识请求已被成功接收、理解接受</td>\n</tr>\n<tr>\n<td>3XX</td>\n<td>300~305</td>\n<td>重定向，要完成的请求，必须进行进一步的处理</td>\n</tr>\n<tr>\n<td>4XX</td>\n<td>400~415</td>\n<td>客户端错误，请求有语法错误或请求无法实现</td>\n</tr>\n<tr>\n<td>5XX</td>\n<td>500~505</td>\n<td>服务器错误，服务器未能实现合法的请求</td>\n</tr>\n</tbody>\n</table></div>\n<h2 id="%E5%B8%B8%E8%A7%81%E7%9A%84%E7%8A%B6%E6%80%81%E7%A0%81">常见的状态码<a class="anchor" href="#%E5%B8%B8%E8%A7%81%E7%9A%84%E7%8A%B6%E6%80%81%E7%A0%81">§</a></h2>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>名称</th>\n<th>释义</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>200</td>\n<td></td>\n</tr>\n<tr>\n<td>204</td>\n<td>No Content 返回的响应中只有一个状态行和一些响应头，没有响应的Body。常用于：了解资源情况，查看对象是否存在，通过Header查看资源是否被修改</td>\n</tr>\n<tr>\n<td>206</td>\n<td>仅限GET方法，代表服务器已经成功处理了部分GET请求。配合请求头中的Range和响应头中的Content—Range，常用于断电续传，流媒体技术，如视频HLS</td>\n</tr>\n<tr>\n<td>301/302</td>\n<td>请求的URL已已移走，Response中应该包含一个Location URL，说明资源限制所处的位置。301永久重定向，旧的资源已经被永久移除了，例如更换了域名，设置旧域名301；302临时重定向，旧的资源还在，仍然可以访问，例如未登录，跳转到登录页面。</td>\n</tr>\n<tr>\n<td>304</td>\n<td>Not Modified 未修改。客户端本地已有缓存版本，并且通过request告诉了服务端，当服务端通过时间或者tag，发现没有更新的适合，就会返回一个不含body的304状态。</td>\n</tr>\n<tr>\n<td>401</td>\n<td>Unauthorized未授权错误</td>\n</tr>\n<tr>\n<td>403</td>\n<td>Forbidden 服务器拒绝请求，无权限。</td>\n</tr>\n<tr>\n<td>404</td>\n<td>Not Found 未找到，资源不存在</td>\n</tr>\n<tr>\n<td>500</td>\n<td>Internal Server Error 服务器内部错误，无法对请求提供服务</td>\n</tr>\n<tr>\n<td>503</td>\n<td>服务器暂时不可用，维护或过载等。</td>\n</tr>\n<tr>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div>\n<h2 id="http%E8%AF%B7%E6%B1%82header">HTTP请求Header<a class="anchor" href="#http%E8%AF%B7%E6%B1%82header">§</a></h2>\n<p><strong>通用头</strong></p>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>名称</th>\n<th>释义</th>\n<th></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Date</td>\n<td>日期</td>\n<td></td>\n</tr>\n<tr>\n<td>Pragma</td>\n<td>HTTP1.0 控制缓存的时效性</td>\n<td></td>\n</tr>\n<tr>\n<td>Cache-Control</td>\n<td>控制缓存的时效性</td>\n<td></td>\n</tr>\n<tr>\n<td>Connection</td>\n<td>连接方式，如果是keep-alive，并且服务端支持，则会复用连接</td>\n<td></td>\n</tr>\n<tr>\n<td>Transfer-Encodeing</td>\n<td>消息主体的编码格式</td>\n<td></td>\n</tr>\n<tr>\n<td>Via</td>\n<td>记录途中经过的代理和网关</td>\n<td></td>\n</tr>\n</tbody>\n</table></div>\n<p><strong>请求头</strong></p>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>名称</th>\n<th>释义</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Authorization</td>\n<td></td>\n</tr>\n<tr>\n<td>From</td>\n<td></td>\n</tr>\n<tr>\n<td>If-Modified-Since</td>\n<td>上传访问时的更改时间</td>\n</tr>\n<tr>\n<td>Referer</td>\n<td>来源</td>\n</tr>\n<tr>\n<td>User-agent</td>\n<td>客户端标识</td>\n</tr>\n<tr>\n<td>Accept</td>\n<td>浏览器端接受的格式</td>\n</tr>\n<tr>\n<td>Accept-Charset</td>\n<td></td>\n</tr>\n<tr>\n<td>Accept-Encoding</td>\n<td>浏览器端接受的编码方式</td>\n</tr>\n<tr>\n<td>Accept-Language</td>\n<td>浏览器端接受的语言，用于服务端判断多语言</td>\n</tr>\n<tr>\n<td>Host</td>\n<td>域名</td>\n</tr>\n<tr>\n<td>If-Match</td>\n<td></td>\n</tr>\n<tr>\n<td>If-None-Match</td>\n<td>上次访问时使用的E-Tag</td>\n</tr>\n<tr>\n<td>If-Unmodified-Since</td>\n<td></td>\n</tr>\n<tr>\n<td>Range</td>\n<td></td>\n</tr>\n</tbody>\n</table></div>\n<p><strong>响应头</strong></p>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>名称</th>\n<th>取值</th>\n<th>释义</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Location</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>Server</td>\n<td></td>\n<td>服务端语言</td>\n</tr>\n<tr>\n<td>WWW-Authenticate</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>Accept-Ranges</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>Access-Control-allow-origins</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>Set-Cookie</td>\n<td>Set-Cookie: id=aad3fWa; Expires=Wed, 21 May 2020 07:28:00 GMT;Max-Age=604800; Secure HTTPOnly SameSite</td>\n<td>Expires 属性缺省时，值为 Session时，表示是会话性 Cookie，值保存在客户端内存中，并在用户关闭浏览器时失效；Max-Age用于设置在 Cookie 失效之前需要经过的秒数;Expires 和 Max-Age 都存在，Max-Age 优先级更高；Domain 指定了 Cookie 可以送达的主机名；Path=/docs<code>，</code>/docs/Web/；Domain 和 Path 标识共同定义了 Cookie 的作用域：即 Cookie 应该发送给哪些 URL；SameSite 属性可以让 Cookie 在跨站请求时（src href get post iframe）不会被发送</td>\n</tr>\n</tbody>\n</table></div>\n<p><strong>实体头</strong></p>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>Allow</th>\n<th></th>\n<th></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Content-Encoding</td>\n<td>内容编码方式，通常是gzip</td>\n<td></td>\n</tr>\n<tr>\n<td>Content-Length</td>\n<td>内容的长度，有利于浏览器判断内容是否结束</td>\n<td></td>\n</tr>\n<tr>\n<td>Content-Type</td>\n<td>内容类型，MIME。</td>\n<td></td>\n</tr>\n<tr>\n<td>Expires</td>\n<td>过期时间，</td>\n<td></td>\n</tr>\n<tr>\n<td>Last-Modified</td>\n<td>页面最后修改时间</td>\n<td></td>\n</tr>\n<tr>\n<td>Content-language</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>Content-Location</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>Content-Range</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>Etag</td>\n<td>页面的信息摘要，用于判断是否需要重新到服务端取回页面</td>\n<td></td>\n</tr>\n</tbody>\n</table></div>\n<p>使用html的form标签提交产生的html请求，默认会产生  application/x-www-form-urlencoded  的数据 格式，当有文件上传时，则会使用multipart/form-data</p>\n<h3 id="http%E8%AF%B7%E6%B1%82%E5%A4%B4%E4%B8%AD%E4%BA%8E%E7%BC%93%E5%AD%98%E7%9B%B8%E5%85%B3%E7%9A%84header">HTTP请求头中于缓存相关的Header<a class="anchor" href="#http%E8%AF%B7%E6%B1%82%E5%A4%B4%E4%B8%AD%E4%BA%8E%E7%BC%93%E5%AD%98%E7%9B%B8%E5%85%B3%E7%9A%84header">§</a></h3>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>名称</th>\n<th>取值</th>\n<th>释义</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Cache-Control</td>\n<td>max-age=0，以秒为单位；</td>\n<td></td>\n</tr>\n<tr>\n<td>If-Modefied-Since</td>\n<td>时间</td>\n<td>从缓存文件获取的最后修改时间</td>\n</tr>\n<tr>\n<td>if-Unmodified-Since</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>If-None-Match</td>\n<td>字符哈希</td>\n<td>缓存文件的Etag</td>\n</tr>\n<tr>\n<td>If-Match</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div>\n<h3 id="http%E5%93%8D%E5%BA%94%E5%A4%B4%E4%B8%AD%E4%B8%8E%E7%BC%93%E5%AD%98%E7%9B%B8%E5%85%B3%E7%9A%84header">HTTP响应头中与缓存相关的Header<a class="anchor" href="#http%E5%93%8D%E5%BA%94%E5%A4%B4%E4%B8%AD%E4%B8%8E%E7%BC%93%E5%AD%98%E7%9B%B8%E5%85%B3%E7%9A%84header">§</a></h3>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>名称</th>\n<th>取值</th>\n<th>释义</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Cache-Control(HTTP1.1，优先于Expires)</td>\n<td>max-age=6000</td>\n<td>no-cache需要使用协商缓存来验证数据；   public客户端和代理服务器都能缓存，响应被缓存，并且在多用户间共享；private,客户端可以缓存，响应自能作为私有缓存，不能再用户之间共享；no-store，绝对禁止缓存；max-age=60，60s之后缓存过期。如果同时存在Cache-Control和Expires，优先使用前者 200(from memory cache)</td>\n</tr>\n<tr>\n<td>Date</td>\n<td>当前响应发送的时间</td>\n<td></td>\n</tr>\n<tr>\n<td>Expires(HTTP1.0)</td>\n<td>Expires:Mon, 29 Jun 2020 11:10:23 GMT</td>\n<td>强缓存，缓存过期的时间，绝对时间。<em>服务器的时间和浏览器的时间可能并不一致</em></td>\n</tr>\n<tr>\n<td>Last-modified（性能更好）</td>\n<td>绝对时间</td>\n<td>协商缓存，服务器中该资源的最后修改时间，服务器拿到请求头中的<code>If-Modified-Since</code>的字段后，其实会和这个时间做对比。单位时间是秒。未修改304</td>\n</tr>\n<tr>\n<td>ETag（优先级高，精度更准）</td>\n<td>hash值</td>\n<td>协商缓存，Etag用于某些服务器不能精确得到文件的最后修改时间，某些文件的修改非常频繁，文件修改时间变量但内容未变</td>\n</tr>\n<tr>\n<td>pragma</td>\n<td>HTTP1.0中的</td>\n<td></td>\n</tr>\n<tr>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div>\n<h4 id="%E7%BC%93%E5%AD%98%E4%BD%8D%E7%BD%AE">缓存位置<a class="anchor" href="#%E7%BC%93%E5%AD%98%E4%BD%8D%E7%BD%AE">§</a></h4>\n<p>Service Worker Cache PWA使用的 ，内存缓存Memory Cache，渲染进程结束后消失；Disk Cache 磁盘缓存</p>\n<p>图片文件是磁盘缓存。</p>\n<h3 id="http%E5%8D%8F%E8%AE%AE%E5%8E%8B%E7%BC%A9">HTTP协议压缩<a class="anchor" href="#http%E5%8D%8F%E8%AE%AE%E5%8E%8B%E7%BC%A9">§</a></h3>\n<p>Content-Encoding:gzip</p>\n<p>gzip compress deflate都是无损压缩算法，图片不适合使用gzip压缩。</p>\n<h3 id="url-encode">URL Encode<a class="anchor" href="#url-encode">§</a></h3>\n<p>URL Uniform Resource locator 统一资源定位符</p>\n<p>FTP File Transfer Protocol 文件传送协议</p>\n<p>访问方法（包含协议）：服务器域名 计算机名localhost ：端口号 文件的路径</p>\n<p>URL Encode就是把所有非英文字母，数字字符都替换成百分号（%）后加两位十六进制数，比如空格的编码为“%20”</p>\n<p>协议栈：操作系统中的网络控制软件，将消息打包加上目的地等控制信息，错误时重新发包，调节数据发送速率。</p>\n<p>网卡会将包转换为电信号，</p>\n<h3 id="https">HTTPS<a class="anchor" href="#https">§</a></h3>\n<h3 id="http-2">HTTP 2<a class="anchor" href="#http-2">§</a></h3>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "HTTP\u534F\u8BAE\u8BF7\u6C42\u65B9\u6CD5\u548C\u72B6\u6001\u7801"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>HTTP是一个无状态的协议，简单的可以理解为即使同一个客户端连续两次发送请求给服务器，服务器也无法识别这个同一个客户端发的请求。为了解决 HTTP 无状态导致的问题（HTTP1.x），后来出现了 Cookie。</p>\n<p>请求部分，第一行被称作 request line，它分为三个部分，HTTP Method，也就是请求的“方法”，请求\n的路径和请求的协议和版本。</p>\n<p>响应部分，第一行被称作 response line，它也分为三个部分，协议和版本、状态码和状态文本 。</p>\n<h2 id="%E5%B8%B8%E8%A7%81%E7%9A%84http%E8%AF%B7%E6%B1%82%E6%96%B9%E6%B3%95">常见的HTTP请求方法<a class="anchor" href="#%E5%B8%B8%E8%A7%81%E7%9A%84http%E8%AF%B7%E6%B1%82%E6%96%B9%E6%B3%95">§</a></h2>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>方法</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>GET</td>\n<td>请求指定页面的信息并返回实体主体，如果是文件，返回文件内容；如果是CGI程序，返回该程序的输出数据。</td>\n</tr>\n<tr>\n<td>HEAD</td>\n<td>类似于GET，返回的响应中没有具体的内容，只有消息头，用于获取文件最好更新时间等属性信息。</td>\n</tr>\n<tr>\n<td>POST</td>\n<td>向指定的资源提交数据进行处理请求，数据包含在请求体中</td>\n</tr>\n<tr>\n<td>PUT</td>\n<td>从客户端向服务端传递数据取代指定的文档内容，如果文件不存在则创建该文件。</td>\n</tr>\n<tr>\n<td>DELETE</td>\n<td>请求服务器删除指定的内容</td>\n</tr>\n<tr>\n<td>OPTIONS</td>\n<td>用于通知或查询通信选项</td>\n</tr>\n<tr>\n<td>TRACE</td>\n<td>将服务器收到的请求行和头部直接返回给客户端，用于再使用代理的环境中检查改写请求的情况。</td>\n</tr>\n<tr>\n<td>CONNECT</td>\n<td>使用代理传输加密消息时使用的方法</td>\n</tr>\n</tbody>\n</table></div>\n<h2 id="http11%E6%94%AF%E6%8C%81%E7%9A%84%E7%8A%B6%E6%80%81%E7%A0%81">HTTP1.1支持的状态码<a class="anchor" href="#http11%E6%94%AF%E6%8C%81%E7%9A%84%E7%8A%B6%E6%80%81%E7%A0%81">§</a></h2>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>状态码</th>\n<th>已定义范围</th>\n<th>分类</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1XX</td>\n<td>100~101</td>\n<td>信息提示，请求已被接收成功，继续处理</td>\n</tr>\n<tr>\n<td>2XX</td>\n<td>200~206</td>\n<td>成功，标识请求已被成功接收、理解接受</td>\n</tr>\n<tr>\n<td>3XX</td>\n<td>300~305</td>\n<td>重定向，要完成的请求，必须进行进一步的处理</td>\n</tr>\n<tr>\n<td>4XX</td>\n<td>400~415</td>\n<td>客户端错误，请求有语法错误或请求无法实现</td>\n</tr>\n<tr>\n<td>5XX</td>\n<td>500~505</td>\n<td>服务器错误，服务器未能实现合法的请求</td>\n</tr>\n</tbody>\n</table></div>\n<h2 id="%E5%B8%B8%E8%A7%81%E7%9A%84%E7%8A%B6%E6%80%81%E7%A0%81">常见的状态码<a class="anchor" href="#%E5%B8%B8%E8%A7%81%E7%9A%84%E7%8A%B6%E6%80%81%E7%A0%81">§</a></h2>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>名称</th>\n<th>释义</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>200</td>\n<td></td>\n</tr>\n<tr>\n<td>204</td>\n<td>No Content 返回的响应中只有一个状态行和一些响应头，没有响应的Body。常用于：了解资源情况，查看对象是否存在，通过Header查看资源是否被修改</td>\n</tr>\n<tr>\n<td>206</td>\n<td>仅限GET方法，代表服务器已经成功处理了部分GET请求。配合请求头中的Range和响应头中的Content—Range，常用于断电续传，流媒体技术，如视频HLS</td>\n</tr>\n<tr>\n<td>301/302</td>\n<td>请求的URL已已移走，Response中应该包含一个Location URL，说明资源限制所处的位置。301永久重定向，旧的资源已经被永久移除了，例如更换了域名，设置旧域名301；302临时重定向，旧的资源还在，仍然可以访问，例如未登录，跳转到登录页面。</td>\n</tr>\n<tr>\n<td>304</td>\n<td>Not Modified 未修改。客户端本地已有缓存版本，并且通过request告诉了服务端，当服务端通过时间或者tag，发现没有更新的适合，就会返回一个不含body的304状态。</td>\n</tr>\n<tr>\n<td>401</td>\n<td>Unauthorized未授权错误</td>\n</tr>\n<tr>\n<td>403</td>\n<td>Forbidden 服务器拒绝请求，无权限。</td>\n</tr>\n<tr>\n<td>404</td>\n<td>Not Found 未找到，资源不存在</td>\n</tr>\n<tr>\n<td>500</td>\n<td>Internal Server Error 服务器内部错误，无法对请求提供服务</td>\n</tr>\n<tr>\n<td>503</td>\n<td>服务器暂时不可用，维护或过载等。</td>\n</tr>\n<tr>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div>\n<h2 id="http%E8%AF%B7%E6%B1%82header">HTTP请求Header<a class="anchor" href="#http%E8%AF%B7%E6%B1%82header">§</a></h2>\n<p><strong>通用头</strong></p>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>名称</th>\n<th>释义</th>\n<th></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Date</td>\n<td>日期</td>\n<td></td>\n</tr>\n<tr>\n<td>Pragma</td>\n<td>HTTP1.0 控制缓存的时效性</td>\n<td></td>\n</tr>\n<tr>\n<td>Cache-Control</td>\n<td>控制缓存的时效性</td>\n<td></td>\n</tr>\n<tr>\n<td>Connection</td>\n<td>连接方式，如果是keep-alive，并且服务端支持，则会复用连接</td>\n<td></td>\n</tr>\n<tr>\n<td>Transfer-Encodeing</td>\n<td>消息主体的编码格式</td>\n<td></td>\n</tr>\n<tr>\n<td>Via</td>\n<td>记录途中经过的代理和网关</td>\n<td></td>\n</tr>\n</tbody>\n</table></div>\n<p><strong>请求头</strong></p>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>名称</th>\n<th>释义</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Authorization</td>\n<td></td>\n</tr>\n<tr>\n<td>From</td>\n<td></td>\n</tr>\n<tr>\n<td>If-Modified-Since</td>\n<td>上传访问时的更改时间</td>\n</tr>\n<tr>\n<td>Referer</td>\n<td>来源</td>\n</tr>\n<tr>\n<td>User-agent</td>\n<td>客户端标识</td>\n</tr>\n<tr>\n<td>Accept</td>\n<td>浏览器端接受的格式</td>\n</tr>\n<tr>\n<td>Accept-Charset</td>\n<td></td>\n</tr>\n<tr>\n<td>Accept-Encoding</td>\n<td>浏览器端接受的编码方式</td>\n</tr>\n<tr>\n<td>Accept-Language</td>\n<td>浏览器端接受的语言，用于服务端判断多语言</td>\n</tr>\n<tr>\n<td>Host</td>\n<td>域名</td>\n</tr>\n<tr>\n<td>If-Match</td>\n<td></td>\n</tr>\n<tr>\n<td>If-None-Match</td>\n<td>上次访问时使用的E-Tag</td>\n</tr>\n<tr>\n<td>If-Unmodified-Since</td>\n<td></td>\n</tr>\n<tr>\n<td>Range</td>\n<td></td>\n</tr>\n</tbody>\n</table></div>\n<p><strong>响应头</strong></p>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>名称</th>\n<th>取值</th>\n<th>释义</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Location</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>Server</td>\n<td></td>\n<td>服务端语言</td>\n</tr>\n<tr>\n<td>WWW-Authenticate</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>Accept-Ranges</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>Access-Control-allow-origins</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>Set-Cookie</td>\n<td>Set-Cookie: id=aad3fWa; Expires=Wed, 21 May 2020 07:28:00 GMT;Max-Age=604800; Secure HTTPOnly SameSite</td>\n<td>Expires 属性缺省时，值为 Session时，表示是会话性 Cookie，值保存在客户端内存中，并在用户关闭浏览器时失效；Max-Age用于设置在 Cookie 失效之前需要经过的秒数;Expires 和 Max-Age 都存在，Max-Age 优先级更高；Domain 指定了 Cookie 可以送达的主机名；Path=/docs<code>，</code>/docs/Web/；Domain 和 Path 标识共同定义了 Cookie 的作用域：即 Cookie 应该发送给哪些 URL；SameSite 属性可以让 Cookie 在跨站请求时（src href get post iframe）不会被发送</td>\n</tr>\n</tbody>\n</table></div>\n<p><strong>实体头</strong></p>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>Allow</th>\n<th></th>\n<th></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Content-Encoding</td>\n<td>内容编码方式，通常是gzip</td>\n<td></td>\n</tr>\n<tr>\n<td>Content-Length</td>\n<td>内容的长度，有利于浏览器判断内容是否结束</td>\n<td></td>\n</tr>\n<tr>\n<td>Content-Type</td>\n<td>内容类型，MIME。</td>\n<td></td>\n</tr>\n<tr>\n<td>Expires</td>\n<td>过期时间，</td>\n<td></td>\n</tr>\n<tr>\n<td>Last-Modified</td>\n<td>页面最后修改时间</td>\n<td></td>\n</tr>\n<tr>\n<td>Content-language</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>Content-Location</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>Content-Range</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>Etag</td>\n<td>页面的信息摘要，用于判断是否需要重新到服务端取回页面</td>\n<td></td>\n</tr>\n</tbody>\n</table></div>\n<p>使用html的form标签提交产生的html请求，默认会产生  application/x-www-form-urlencoded  的数据 格式，当有文件上传时，则会使用multipart/form-data</p>\n<h3 id="http%E8%AF%B7%E6%B1%82%E5%A4%B4%E4%B8%AD%E4%BA%8E%E7%BC%93%E5%AD%98%E7%9B%B8%E5%85%B3%E7%9A%84header">HTTP请求头中于缓存相关的Header<a class="anchor" href="#http%E8%AF%B7%E6%B1%82%E5%A4%B4%E4%B8%AD%E4%BA%8E%E7%BC%93%E5%AD%98%E7%9B%B8%E5%85%B3%E7%9A%84header">§</a></h3>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>名称</th>\n<th>取值</th>\n<th>释义</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Cache-Control</td>\n<td>max-age=0，以秒为单位；</td>\n<td></td>\n</tr>\n<tr>\n<td>If-Modefied-Since</td>\n<td>时间</td>\n<td>从缓存文件获取的最后修改时间</td>\n</tr>\n<tr>\n<td>if-Unmodified-Since</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>If-None-Match</td>\n<td>字符哈希</td>\n<td>缓存文件的Etag</td>\n</tr>\n<tr>\n<td>If-Match</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div>\n<h3 id="http%E5%93%8D%E5%BA%94%E5%A4%B4%E4%B8%AD%E4%B8%8E%E7%BC%93%E5%AD%98%E7%9B%B8%E5%85%B3%E7%9A%84header">HTTP响应头中与缓存相关的Header<a class="anchor" href="#http%E5%93%8D%E5%BA%94%E5%A4%B4%E4%B8%AD%E4%B8%8E%E7%BC%93%E5%AD%98%E7%9B%B8%E5%85%B3%E7%9A%84header">§</a></h3>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>名称</th>\n<th>取值</th>\n<th>释义</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Cache-Control(HTTP1.1，优先于Expires)</td>\n<td>max-age=6000</td>\n<td>no-cache需要使用协商缓存来验证数据；   public客户端和代理服务器都能缓存，响应被缓存，并且在多用户间共享；private,客户端可以缓存，响应自能作为私有缓存，不能再用户之间共享；no-store，绝对禁止缓存；max-age=60，60s之后缓存过期。如果同时存在Cache-Control和Expires，优先使用前者 200(from memory cache)</td>\n</tr>\n<tr>\n<td>Date</td>\n<td>当前响应发送的时间</td>\n<td></td>\n</tr>\n<tr>\n<td>Expires(HTTP1.0)</td>\n<td>Expires:Mon, 29 Jun 2020 11:10:23 GMT</td>\n<td>强缓存，缓存过期的时间，绝对时间。<em>服务器的时间和浏览器的时间可能并不一致</em></td>\n</tr>\n<tr>\n<td>Last-modified（性能更好）</td>\n<td>绝对时间</td>\n<td>协商缓存，服务器中该资源的最后修改时间，服务器拿到请求头中的<code>If-Modified-Since</code>的字段后，其实会和这个时间做对比。单位时间是秒。未修改304</td>\n</tr>\n<tr>\n<td>ETag（优先级高，精度更准）</td>\n<td>hash值</td>\n<td>协商缓存，Etag用于某些服务器不能精确得到文件的最后修改时间，某些文件的修改非常频繁，文件修改时间变量但内容未变</td>\n</tr>\n<tr>\n<td>pragma</td>\n<td>HTTP1.0中的</td>\n<td></td>\n</tr>\n<tr>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div>\n<h4 id="%E7%BC%93%E5%AD%98%E4%BD%8D%E7%BD%AE">缓存位置<a class="anchor" href="#%E7%BC%93%E5%AD%98%E4%BD%8D%E7%BD%AE">§</a></h4>\n<p>Service Worker Cache PWA使用的 ，内存缓存Memory Cache，渲染进程结束后消失；Disk Cache 磁盘缓存</p>\n<p>图片文件是磁盘缓存。</p>\n<h3 id="http%E5%8D%8F%E8%AE%AE%E5%8E%8B%E7%BC%A9">HTTP协议压缩<a class="anchor" href="#http%E5%8D%8F%E8%AE%AE%E5%8E%8B%E7%BC%A9">§</a></h3>\n<p>Content-Encoding:gzip</p>\n<p>gzip compress deflate都是无损压缩算法，图片不适合使用gzip压缩。</p>\n<h3 id="url-encode">URL Encode<a class="anchor" href="#url-encode">§</a></h3>\n<p>URL Uniform Resource locator 统一资源定位符</p>\n<p>FTP File Transfer Protocol 文件传送协议</p>\n<p>访问方法（包含协议）：服务器域名 计算机名localhost ：端口号 文件的路径</p>\n<p>URL Encode就是把所有非英文字母，数字字符都替换成百分号（%）后加两位十六进制数，比如空格的编码为“%20”</p>\n<p>协议栈：操作系统中的网络控制软件，将消息打包加上目的地等控制信息，错误时重新发包，调节数据发送速率。</p>\n<p>网卡会将包转换为电信号，</p>\n<h3 id="https">HTTPS<a class="anchor" href="#https">§</a></h3>\n<h3 id="http-2">HTTP 2<a class="anchor" href="#http-2">§</a></h3>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%B8%B8%E8%A7%81%E7%9A%84http%E8%AF%B7%E6%B1%82%E6%96%B9%E6%B3%95" }, "\u5E38\u89C1\u7684HTTP\u8BF7\u6C42\u65B9\u6CD5")),
            React.createElement("li", null,
                React.createElement("a", { href: "#http11%E6%94%AF%E6%8C%81%E7%9A%84%E7%8A%B6%E6%80%81%E7%A0%81" }, "HTTP1.1\u652F\u6301\u7684\u72B6\u6001\u7801")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%B8%B8%E8%A7%81%E7%9A%84%E7%8A%B6%E6%80%81%E7%A0%81" }, "\u5E38\u89C1\u7684\u72B6\u6001\u7801")),
            React.createElement("li", null,
                React.createElement("a", { href: "#http%E8%AF%B7%E6%B1%82header" }, "HTTP\u8BF7\u6C42Header"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#http%E8%AF%B7%E6%B1%82%E5%A4%B4%E4%B8%AD%E4%BA%8E%E7%BC%93%E5%AD%98%E7%9B%B8%E5%85%B3%E7%9A%84header" }, "HTTP\u8BF7\u6C42\u5934\u4E2D\u4E8E\u7F13\u5B58\u76F8\u5173\u7684Header")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#http%E5%93%8D%E5%BA%94%E5%A4%B4%E4%B8%AD%E4%B8%8E%E7%BC%93%E5%AD%98%E7%9B%B8%E5%85%B3%E7%9A%84header" }, "HTTP\u54CD\u5E94\u5934\u4E2D\u4E0E\u7F13\u5B58\u76F8\u5173\u7684Header"),
                        React.createElement("ol", null)),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#http%E5%8D%8F%E8%AE%AE%E5%8E%8B%E7%BC%A9" }, "HTTP\u534F\u8BAE\u538B\u7F29")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#url-encode" }, "URL Encode")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#https" }, "HTTPS")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#http-2" }, "HTTP 2")))))),
    'author': "dingtt",
    'contributors': [
        "dingtt",
        "dingdtt"
    ],
    'date': "2020-07-24T12:01:48.000Z",
    'updated': "2020-11-04T07:48:31.000Z",
    'excerpt': "HTTP是一个无状态的协议，简单的可以理解为即使同一个客户端连续两次发送请求给服务器，服务器也无法识别这个同一个客户端发的请求。为了解决 HTTP 无状态导致的问题（HTTP1.x），后来出现了 Cookie。 请求部分，第一行被称作 ...",
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
