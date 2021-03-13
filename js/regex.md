#  正则

string.match()

regex.test()

### 字符匹配

#### 两种模糊匹配

横向模糊匹配  {m,n} ，出现次数数量

纵向模糊匹配 [a, b, c] 任一个

#### **字符组**

范围表示法 [a-z] ，如果要匹配 - ，需要放到开头或结尾，或加 \

排除[ ^ abc] 除 "a" "b" "c"

大写为排除

\d 数字 ； \D 非数字； \s 空白符，包括各种符号； \S 非空白符，即通配符

 \w \W ， \w是字符组 [0-9a-zA-Z_] 的简写形式，即 \w 是*字母 数字*或者*下划线*的中任何一个字符  

\W   [ ^0-9a-zA-Z_]

匹配任意字符，可以使用 [\d\D]、[\w\W]、[\s\S] 和 [^] 中任何的一个。  

#### **量词**

{m,}  至少m次

{m} m次

？ {0,1} 出现不出现 

+, {1,} 至少出现一次

*, {0,}  任意次，可为0   量词 * 是贪婪的  

惰性量词  加 ?  表示从最少的开始匹配，匹配到了就行了，m个就够了，就不再尝试了

{m,n}?    {m,}?    ??    +?     *?

#### **多选分支**

/1| 2/    (|)  

 /goodbye|good/ 分支结构也是惰性的，即当前面的匹配上了，后面的就不再尝试了  

#### **案例**

匹配颜色值

```js
const c1 =  '#ffbbad #Fc01DF #FFF #ffE'
console.log(c1.match(/\#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})/g)) // 注意顺序，分支结构是惰性的，3在前头，6就被截断了
```

匹配时间

```js
const regexp = /^([01][0-9]|[2][1-4]):[0-5][0-9]$/
const regexp2 = /^(0?[0-9]|1[0-9]|[2][1-4]):(0?[0-9]|[1-5][0-9])$/
console.log(regexp.test('23:59'))
console.log(regexp.test('02:07'))
console.log(regexp2.test('7:9'))
```

{1}可以省略  

匹配日期

```js
const regexpDate = /^[0-9]{4}-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])$/
console.log(regexpDate.test('2017-06-10'))
console.log(regexpDate.test('2017-6-10'))
console.log(regexpDate.test('2017-6-9'))
```

window 操作系统文件路径  ???

```
const str = 'D:\wwwroot\hellouni\store'
```

匹配属性

因为 . 是通配符，本身就匹配双引号的，而量词 * 又是贪婪的，当遇到 container 后面双引号时，是不会

停下来，会继续匹配，直到遇到最后一个双引号为止。 解决之道，可以使用惰性匹配：

```js
const regex = /id=".*?"/
const string = '<div id="container" class="main"></div>'
console.log(string.match(regex)[0])
// 优化方案
var regex = /id="[^"]*"/
```

### 位置匹配

在ES5中共有6个锚

^    $   \b  \B  (?=p)  (?|p)

**^ $**

^（脱字符）匹配开头，在多行匹配中匹配行开头。
$（美元符号）匹配结尾，在多行匹配中匹配行结尾。  //gm

```js
 console.log('id'.replace(/^|$/g,'*')) // *id*
console.log('id\nname\nclass'.replace(/^|$/gm,'*'))
// *id*
// *name*
// *class*
```

**单词边界 \b 和 \B**    非单词边界  

\w 与 \W，\w 与 ^ $ 的之间位置

```js
console.log('id name class data.key'.replace(/\b/g,'#')) //  #id# #name# #class# #data#.#key#
```

\B 就是 \b 的反面的意思，非单词边界。  \w与\w \W与\W

```js
console.log('id name class data.key'.replace(/\B/g,'#')) // i#d n#a#m#e c#l#a#s#s d#a#t#a.k#e#y
console.log('id name class data....key'.replace(/\B/g,'#')) //  i#d n#a#m#e c#l#a#s#s d#a#t#a.#.#.#.k#e#y
```

**(?=p) 和 (?!p)**  

p前面的位置  （后面是p）， (?!p) 后面不是p，即不在p的前面

**案例**

不匹配任何东西的正则   /.^/

**字符串数字分割**

```js
console.log('123456789'.replace(/(?!^)(?=(\d{3})+$)/g,','))  // (?1^)不能是开头   （?=(\d{3}+$)） //不带$ 1,2,345
console.log("12345678 123456789".replace(/(?!\b)(?=(\d{3})+\b)/g,','))  // 12,345,678 123,456,789  (?!\b)|\B
```

```js
console.log("1888".replace(/$/g,'.00').replace(/^/g,'$ ')) // $ 1888.00
```

```js
console.log(Number(1888).toFixed(2).replace(/\B(?=(\d{3})+\b)/g, ",").replace(/^/, "$ "))
```

***货币格式化问题***

***密码校验***

```js
// 必须数字或字母 
const regex = /^[0-9a-zA-Z]{6,12}$/
// 必须包含数字 位置匹配，接下来的字符，必须包含个数字。
const regex = /(?=.*[0-9])^[0-9a-zA-Z]{6,12}$/
// 同时包含数字 小写字母
const regex = /(?=.*[0-9])(?=.*[a-z])^[0-9a-zA-Z]{6,12}$/
//  至少两种，用分支结构
var regex = /((?=.*[0-9])(?=.*[a-z])|(?=.*[0-9])(?=.*[A-Z])|(?=.*[a-z])(?=.*[AZ]))^[0-9A-Za-z]{6,12}$/;
// 反向思维  不能全部都是数字  
const regex = /(?!^[0-9]{6,12}$)^[0-9a-zA-Z]{6,12}$/
//不能全部都是小写字母 ...
const regex = /(?!^[0-9]{6,12}$)(?!^[a-z]{6,12}$)(?!^[A-Z]{6,12}$)^[0-9a-zA-Z]{6,12}$/
```



#### 分组和分支结构

分组  （ab）

分支结构 （p1|p2）

**提取数据**

分组引用   string.match(regexp)   返回整体匹配 分组

```js
// 匹配
console.log('2020-11-01'.match(/(\d{4})-(\d{2})-(\d{2})/))
// ["2020-11-01", "2020", "11", "01", index: 0, input: "2020-11-01", groups: undefined]
console.log(/(\d{4})-(\d{2})-(\d{2})/.exec('2020-11-01'))

var regex = /(\d{4})-(\d{2})-(\d{2})/;
var string = "2017-06-12";
regex.test(string); // 正则操作即可，例如
//regex.exec(string);
//string.match(regex);
console.log(RegExp.$1); // "2017"
console.log(RegExp.$2); // "06"
console.log(RegExp.$3); // "12"
```

```js
// 替换 排序
console.log('2020-11-01'.replace(/(\d{4})-(\d{2})-(\d{2})/,'$3-$2-$1')) // 01-11-2020
console.log('2020-11-01'.replace(/(\d{4})-(\d{2})-(\d{2})/,function(match, year, month, day){
    console.log(RegExp.$1,RegExp.$2,RegExp.$3) // 全局变量
    return args.join('* ')
}))
// args 是同上的一大长串，RegExp.$1 才是分组
```

//  RegExp.$1   '$1'  横杠转驼峰

```js
console.log('border-right-width'.replace(/-([a-z]{1})/g,function(){console.log(RegExp.$1); return RegExp.$1.toUpperCase()}))
// -r, w
// -w, w
// borderWightWidth
```

##### 反向引用  

在正则本身中引用分组，只能引用前面的分组。 \1 \2 \3

```js
var regex = /\d{4}(-|\/|\.)\d{2}(-|\/|\.)\d{2}/;
"2020-11-06" "2020/11/06" "2020.11.06"  "2020/11-06"
var regex = /\d{4}(-|\/|\.)\d{2}\1\d{2}/; // 后面引用前面的符号，保持一致  \1 \2 \3
```

##### 括号嵌套

以左括号为准   /1 /2 /3 /4 第 1 2 3 4 个

\10 表示第10个分组，匹配 \1 和 0 的话，使用 (?:\1)0 或者 \1(?:0)。 

**引用不存在**

引用不存在, \2 就表示 “\2” 对2 进行转义

**分组后面有量词**

分组捕获到的数据是最后一次匹配

```js
console.log('1234'.match(/(\d)+/))
// ["1234", "4", index: 0, input: "1234", groups: undefined]
```

**非捕获括号** 

(?:p) 和 (?:p1|p2|p3)  

**案例**

去除字符串首尾空格

```js
console.log('  1234  '.replace(/^\s+|\s+$/g,''))
```

首字母大写

```js
console.log('hello world hei'.replace(/(^|\s)\w/g,function(c){return c.toUpperCase()}))
console.log('hello world hei'.replace(/(?:^|\s)\w/g,function(c){return c.toUpperCase()}))
```

驼峰化   （.）表示首字母

```js
console.log('-hello-world-hei'.replace(/[_-\s](.)?/g,function(match,c){
    return c ? c.toUpperCase() : ''
    }
    ))
    console.log('hello-world-hei'.replace(/[_-\s]+(.)?/g,function(match,c){
    return c ? c.toUpperCase() : ''
    }
    ))
```

中划线化

```js
console.log('BorderRightWidth'.replace(/([A-Z])/g,'-$1').replace(/[-_\s]+/g,'-').toLowerCase()) //  -border-right-width
```

html转义与反转义



匹配成对标签   （引用 加 + ）， 反向引用

```js
// 匹配一个开标签，可以使用正则 <[^>]+>，  ^> 表示非>
// 匹配一个闭标签，可以使用 <\/[^>]+>，
var regex = /<([^>]+)>[\d\D]*<\/\1>/;
```

#### 回溯法原理  

回溯法也称试探法（判断回文字符串）（深度优先搜索算法  ）（撞南墙回头）

没有回溯的匹配

有回溯的匹配

贪婪量词  {1,3} 先按照3个去匹配，匹配不到减掉一个，按2去匹配

```js
console.log('12345'.match(/(\d{1,3})(\d{1,3})/))  // 多个贪婪量词，前面的优先
["12345", "123", "45", index: 0, input: "12345", groups: undefined]
```

惰性量词

```js
var string = "12345";
var regex = /(\d{1,3}?)(\d{1,3})/;
console.log( string.match(regex) );
// => ["1234", "1", "234", index: 0, input: "12345"]
```

分支结构也是惰性的，比如 /can|candy/，去匹配字符串 "candy"，得到的结果是 "can"

#### 正则的拆分

**结构和操作符**

字符字面量、字符组 []、量词{} ?  * + 、锚 ^ $ \b、分组 () (?:ab)、选择分支 | 、反向引用。  

优先级  转义符  括号/方括号 量词  位置和序列  管道符竖杠

**元字符转义**

^、$、.、*、+、?、|、\、/、(、)、[、]、{、}、=、!、:、- ,     匹配这些字符本身，可以一律转义

[abc]   /\ [abc]/   /\ [abc \]/    {1,3}  /\ {1,3}/  /\ {1,3\ }/    第一个括号被转义了，第二个括号自然也无法成对，可以不转移

/\(123\)/   括号需要前后都转义

=、!、:、-、, 等符号，只要不在特殊结构中，并不需要转义。  

^、$、.、*、+、?、|、\、/ 等字符，只要不在字符组内，都需要转义的 ，都是正则会用到的符号。

**案例**

***匹配身份证号***

```
 /^(\d{15}|\d{17}[\dxX])$/
```

***匹配ip地址（）***

```
// 255.111.111.0
// ((…)\.){3}(…) (...)内涵五个小分支
//  1 01 001 ,  11 011 , 100 199 200 255
（0{0,2}\d）(0?\d{2}) (1\d{2}) (2[0-4]/d) (25[0-5])
```

string.search(/\?/)  判断是否有问号

拆分支

不需要使用分组引用和反向引用时，此时可以使用非捕获分组。   （?: ...）

#### 正则表达式的四种操作

验证、

reg.test rer.exec  string.match()  string.serach()

切分、

string.spilt(regexp) // 正则

提取、

regex.match  数组

regex.exec()  数组

regex.test(string);     RegExp.$1 

regex.search()  RegExp.$1

regex.replace()   第二个参数可为 function(){}

替换  

replace

```
String#search // 会把字符串参数修成正则 "."  "\\."  /\./
String#split
String#match // 会把字符串参数修成正则  没有g返回标准格式，整体+分组，下一个目标，目标字符串，有g返回的是所有匹配的内容，没有匹配时，不管有无g，都返回null
String#replace
RegExp#test  test 整体匹配时需要使用 ^ 和 $  
RegExp#exec  能接着上一次匹配的内容继续匹配
```

使用构造函数需要写\ 反斜杠

## RegExp 对象用于存储检索规则
- test()

  - test() 方法检索字符串中的指定值。返回值是 true 或 false。

- exec()

  - exec() 方法检索字符串中的指定值。返回值是被找到的值。如果没有发现匹配，则返回 null。

- compile()

  - 既可以改变检索规则，也可以添加或删除第二个参数

## 创建方式

  - 字面量语法

    - /pattern/attributes

  - 创建 RegExp 对象的语法

    - new RegExp(pattern, attributes);

      - 参数 pattern 是一个字符串，指定了正则表达式的模式或其他正则表达式。
      - 参数 attributes 是一个可选的字符串，包含属性 "g"、"i" 和 "m"，分别用于指定全局匹配、区分大小写的匹配和多行匹配。
      - 如果 pattern 是正则表达式，而不是字符串，则必须省略该参数

- 实战

  - 把一个字符串中所有的英文,都给删除

    - 制定英文匹配规则

      - 一个或者多个英文字母
      - [A-Za-z]+

        - [A-z]+

    - doc = doc.replace(/[A-Za-z]+/g, '');

  - 验证一个字符串是否是电话号码

    - 指定电话号码匹配规则

      - 首位1, 次位358, 其余9位纯数字
      - /^[1][358][0-9]{9}$/

  - 检索出一个字符串中的电话号码

    -  var reg = /[1][358][0-9]{9}/g;
    -  调用方法

       -  do {
       -  var result = reg.exec(str);
       -  console.log(result);
       -  }while (result != null);