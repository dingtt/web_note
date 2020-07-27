Blob（Binary Large Object）表示二进制类型的大对象。在 JavaScript 中 Blob 类型的对象表示不可变的类似文件对象的原始数据。

`Blob` 由一个可选的字符串 `type`（通常是 MIME 类型）和 `blobParts` 组成：

> MIME（Multipurpose Internet Mail Extensions）多用途互联网邮件扩展类型，是设定某种扩展名的文件用一种应用程序来打开的方式类型，当该扩展名文件被访问的时候，浏览器会自动使用指定应用程序来打开。多用于指定一些客户端自定义的文件名，以及一些媒体文件打开方式。
>
> 常见的 MIME 类型有：超文本标记语言文本 .html text/html、PNG图像 .png image/png、普通文本 .txt text/plain 等。

myBlob 对象含有两个属性：size 和 type。其中 `size` 属性用于表示数据的大小（以字节为单位），`type` 是 MIME 类型的字符串。Blob 表示的不一定是 JavaScript 原生格式的数据。比如 `File` 接口基于 `Blob`，继承了 blob 的功能并将其扩展使其支持用户系统上的文件
 浏览器内部为每个通过`URL.createObjectURL` 生成的 URL 存储了一个 URL → Blob 映射。生成的 URL 仅在当前文档打开的状态下才有效。我们可以调用 `URL.revokeObjectURL(url)` 方法，从内部映射中删除引用，从而允许删除 Blob（如果没有其他引用），并释放内存。

ArrayBuffer 用于表示通用的，固定长度的原始二进制数据缓冲区。你不能直接操纵 ArrayBuffer 的内容，而是需要创建一个 TypedArray 对象或 DataView 对象，

Blob 对象是不可变的，而 ArrayBuffer 是可以通过 TypedArrays 或 DataView 来操作。

ArrayBuffer 是存在内存中的，可以直接操作。而 Blob 可以位于磁盘、高速缓存内存和其他不可用的位置。

Blob 与 ArrayBuffer 对象之间是可以相互转化的：

- 使用 FileReader 的 `readAsArrayBuffer()` 方法，可以把 Blob 对象转换为 ArrayBuffer 对象；
- 使用 Blob 构造函数，如 `new Blob([new Uint8Array(data]);`，可以把 ArrayBuffer 对象转换为 Blob 对象。

