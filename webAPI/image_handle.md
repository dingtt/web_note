# web图片处理

## 图片处理Blob  ArrayBuffer

### 本地图片

FileReader 

readAsDataUrl 

Base64 基于64个可打印字符，2的6次方，即为64。

三个字节，对应24比特，即4个可打印字符。

大小写字母各26各，数字10个，加号+和斜杠，共64个字符，等号=用来作为后缀。

字母 对应ASCII码

不能被3整除，需要补字节，A  QQ==  BC QKM=

btoa() 基于二进制数据创建一个base64编码的字符串

atob() 解码通过base64编码的字符串数据

### 远程图片-图片预览

解密图片时，可以考虑在Web Worker中使用fetch API获取图片数据并进行解密

fetch API 的Response对象，blob() json() text() formData()  arrayBuffer()

#### Object URL

URL.createObjectURL 

URL.revokeObjectURL(url)

#### Blob API

size 字节大小

type MIME类型   text/html   image/png text/plain

```
new Blob(blobParts, options)
```

blobParts 由 ArrayBluffer ArrayBufferView  Blob DOMString等对象构成的数组，DOMString会被编码成UTF-8

options，type默认为“”，endings，结束符\n如何被写入，transparent，native更改为适合宿主操作系统的换行符

从类型化数组和字符串创建Blob

```
let hello = new Unit8Array([72,101,108,108,111]) // 二进制格式的hello
let bolb = new Blob([hello, ' ', 'world'],tpype:'text/html')
```

##### Bolb方法

slice([start[, end[, contentType]]]) 返回一个新的对象，包含了bolb原对象中指定范围内的数据。

stream() 返回一个能读取blob内容的ReadableSream

text 返回一个Promise对象且包含blob所有内容的UTF-8格式的USVString

arrayBuffer 返回一个Promise对象且包含blob所有内容的二进制格式的ArrayBuffer

#### ArrayBuffer

通用的 固定长度的原始二进制数据缓冲区，不能直接操作，需要通过类数组对象或DataView对象来操作。

```
new ArrayBuffer(length) // length字节大小，小于MATH.MAX_SAFE_INTEGER 2**53
```

#### TypedArray

**Uint8Array**

Uint8Array 数组类型表示⼀个 8 位⽆符号整型数组，创建时内容被初始化为 0。创建完后，可以以对象
的⽅式或使⽤数组下标索引的⽅式引⽤数组中的元素。  

```js
new Uint8Array(); // ES2017 最新语法
// new Uint8Array(length);
var uint8 = new Uint8Array(2);
uint8[0] = 42;  // 负值会被+256
console.log(uint8[0]); // 42
console.log(uint8.length); // 2
console.log(uint8.BYTES_PER_ELEMENT); // 1
// new TypedArray(object);
var arr = new Uint8Array([21,31]);
console.log(arr[1]); // 31
// new Uint8Array(typedArray);
var x = new Uint8Array([21, 31]);
var y = new Uint8Array(x);
console.log(y[0]); // 21
// new Uint8Array(buffer [, byteOffset [, length]]);
var buffer = new ArrayBuffer(8);
var z = new Uint8Array(buffer, 1, 4);
```

##### **ArrayBuffer** 与 TypedArray 之间的关系  

ArrayBuffer 本身只是⼀⾏ 0 和 1 串  ，TypedArray区分分割长度

##### Blob 与ArrayBuffer

ArrayBuffer 对象⽤于表示通⽤的，固定⻓度的原始⼆进制数据缓冲区，存在内存中的  。  

Blob 类型的对象表示不可变的类似⽂件对象的原始数据。  不⼀定是 JavaScript 原⽣格式的数据，位于磁盘、⾼速缓存内存和其他不可
⽤的位置。   

**互转**

FileReader 的 readAsArrayBuffer()   

new Blob([new Uint8Array(data]);  

#### DataView  

```
new DataView(buffer [, byteOffset [, byteLength]]) // buffer   从 ArrayBuffer读取时的偏移字节⻓度起始,  // ArrayBuffer 或 SharedArrayBuffer 对象的字节⻓度
```

属性 buffer   btyeLength  btyeOffest 

方法 getInt8()、 getUint8()、 setInt8() 和 setUint8()   









