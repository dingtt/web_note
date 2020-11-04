# 正则
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