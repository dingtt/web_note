# 数据结构

### 字符串

替换空格

```
console.log('  fff sss  '.replace(/\s/g,''))
```

表示数值的字符串

```
'1235678656.93'.replace()
```

*字符流中第一个不重复的字符*

```js
// let container = new Array(256).fill(-1)
let container = new Map()
let index = 0
function init(){
  container = new Map()
  index = 0
}

function insert(ch){
  const code = ch.charCodeAt(index)
  if(!container.has(code)){
    container.set(code,index)
  }else{
    container.set(code,-2)
  }
  if(index < ch.length -1){
    index ++ 
    insert(ch)
  } 
  console.log(container)
}
insert('google')
// -1 没出现过 code 出现过1次  -2 出现过多次
let first = 256
container.forEach((value,key) => {
    console.log(value,key)
    if(value !== -2 ){
        if(value < first){
            first = value
        }
    }
})
console.log(first !== 256 ? first : "#")
```

*// 字符串的排列  回溯法*



*// 字符串反转*

```
'hello world'.split(' ').reverse().join(' ') *// world hello*
```

*// 左旋转字符串*

*// 输入字符串"abcdefg"和数字2，该函数将返回左旋转2位得到的结果"cdefgab"*

```
const str = 'abcdefg'

console.log((str+str).substr(2,str.length))
```

*// 翻转单词顺序：*

### 数组

创建  

```javascript
const arr = [] 
const arr = new Array()
const arr1 = [1,1,1]
consr arr1 = (new Array(3)).fill(1)
```

方法

concat、some、

slice  

join、

sort、

pop、push shift unshift

splice(a, b, c)   a索引/b删除个数/c添加元素 splice(1, 1) 删除   splice(1, 0, 'add')  

遍历

for  forEach  

map 返回对每一项处理之后的全新数组

7个改变原数组的方法，vue劫持

数字操作的复杂度，查询为常数复杂度O(1) ，插入、删除为线性复杂度O(n)

##### 数组排成最小数字

输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。

例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323。

```js
function PrintMinNumber(numbers) {
  if (!numbers || numbers.length === 0) {
    return "";
  }
  return numbers.sort(compare).join('');
}

function compare(a, b) {
  const front = "" + a + b;
  const behind = "" + b + a;
  return front - behind;
}
```

##### 数组奇偶重排

**输入一个整数数组**，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分  双指针

```js
function reOrderArray(arr){
  let start = 0
  let end = arr.length -1 
  while(start < end){
      if(arr[start] % 2 === 1){
          start ++
      }
      if(arr[end] % 2 === 0){
          end --
      }
      [arr[start],arr[end]] = [arr[end],arr[start]]
  }
  return arr 
}
console.log(reOrderArray([0,1,2,3,4,5,6,7,8,9,0]))
```



### 二维数组 

fill([]) 不能用了填充二位数组，fill参数是引用类型的话，填充的也是引用类型，所以实际上是一样的值，一改全改。所以需要用for循环，对每一项赋值数组。

```javascript
// 验证缓存数组长度的作用  影响比较小
var arr1 = (new Array(1000000)).fill(1)
var len1 = arr1.length // 缓存数组长度
var beginTime = Date.now()
for(var i = 0; i < len1; i++){
  if(i === (len1 - 1)){
   console.log('缓存了数组长度', Date.now() - beginTime)
  }
}
// 分别运行
var beginTime2 = Date.now()
for(var i = 0; i < arr1.length; i++){
  if(i === (len1 - 1)){
   console.log('未缓存数组长度', Date.now() - beginTime2)
  }
}
```

```javascript
// 验证数组嵌套顺序  数组长度的影响  短数组在外层更快
var arr1 = (new Array(10000)).fill(1)
var arr2 = (new Array(20000)).fill(2)
var len1 = arr1.length
var len2 = arr2.length
var beginTime = Date.now()
// 分别运行
for(var i = 0; i < len2; i++){
	for(var j = 0; j < len1; j++){
	  if(i === (len2 -1) && j === (len1 - 1)){
	    console.log('长数组在外层', Date.now() - beginTime)
	  }
	}
}
var beginTime2 = Date.now()
// 分别运行 或 beginTime2
for(var m = 0; m < len1; m++){
	for(var n = 0; n < len2; n++){
	  if(m === (len1 -1) && n === (len2 - 1)){
	    console.log('短数组在外层', Date.now() - beginTime2)
	  }
	}
}

```

### 栈

后进先出，只能从栈顶添加删除元素（相当于数组的push pop）

```javascript


```

模拟实现

```js
class Stack {
  constructor() {
    this.stack = [];
  }
  push(item) {
    this.stack.push(item);
  }
  pop() {
    return this.stack.pop();
  }
  // 窥视
  peek() {
    return this.isEmpty() ? undefined : this.stack[this.size() - 1];
  }
  isEmpty() {
    return this.size() == 0;
  }
  size() {
    return this.stack.length;
  }
}

// 取栈顶
const stack = new Stack()
stack.push('老冰棍')
stack.push('巧乐兹')
stack.push('小不丁')
while(stack.size()){
  const stacktop = stack.peek() // 栈顶值
  console.log(stacktop)
  stack.pop() // 出栈
}
```

应用 进制转换 括号匹配  栈混洗 表达式求值

### 队列 —— 先进先出   只允许尾部添加，头部取出 (相当于数组的push shift)

```javascript
class Queue{
  constructor(){
    this.queue = []
  }
  enqueue(item){
    this.queue.push(item)
  }
  dequeue(){
   return this.queue.shift()
  }
  front(){
  return  this.isEmpty() ? undefined : this.queue[0]
  }
  back(){
    return this.isEmpty() ? undefined : this.queue[this.size() -1]
  }
  isEmpty(){
    return this.size() == 0
  }
  size(){
    return this.queue.length
  }
}

const queue = new Queue()
queue.enqueue('队1')
queue.enqueue('队2')
queue.enqueue('队3')
while(queue.size()){
  const top = queue.front() // 取队首
  console.log(top)
  queue.dequeue(0) // 出队
}
```

### 集合

模拟集合实现

```js
// add has remove get size get values
class Set {
  constructor() {
    this.items = {};
  }
  has(value) {
    return this.items.hasOwnProperty(value);
  }
  add(value) {
    if (!this.has(value)) {
      this.items[value] = value;
      return true;
    }
    return false;
  }
  remove(value) {
    if (this.has(value)) {
      delete this.items[value];
      return true;
    }
    return false;
  }
  get size() {
   return  Object.keys(this.items).length
  }

  get value() {
    return Object.keys(this.items)
  }
}
const set = new Set()
set.add(2)
set.add(2)
set.add(3)
console.log(set.size)
console.log(set.value)
set.remove(2)
console.log(set.size)
```



### 链表

链表通过每个元素指向下一个元素的方式访问，不需要一段连续的存储空间。

链表的增加删除元素不用挪动其他多余的的元素 ，链表的添加删除复杂度为常数O(1)，查询读取元素的复杂度为线性复杂度O(n)

读取元素不能直接获取，只能顺序访问，从第一个开始找 

```js
function ListNode(val) {
    this.val = val;
    this.next = null;
    this.
}
const node1 = new ListNode('1')
const node2 = new ListNode('2')
node1.next = node2
Node
// 构造节点类
linkedList   // append   removeAt   insert remove size getHead isEmpty log 
// 双链表  prev  next  head fail
```

访问

```javascript
const index = 10
const node = head
for(var i = 0; i < index&&node; i ++){
  node = node.next
}
```

**链表数组**：数组中的每一项指向一个链表

### 哈希表

```js
class hashTable{
  constructor (){
    this.items = {}
  }
  put(key,value){
    this.items[this.keyToHash(key)] = value
  }
  get(key){
    return this.items[this.keyToHash(key)]
  }
  delete(key){
    delete (this.items[this.keyToHash(key)])
  }
  keyToHash(key){
    let hash = 0
    for(let i = 0; i < key.length; i++){
      hash += key.charCodeAt(i)
    }
  }
}

const ht = new hashTable()
ht.put('name','custom hashTable')
console.log(ht.get('name'))
ht.delete('name')
console.log(ht.get('name'))
```



## 树

树的层次：从根节点到子节点，到叶子节点，这么算

节点和树的高度：叶子节点高度为1，每往上一层高度加一，直至目标节点，累加得到的高度即为目标节点的高度。 最大的节点高度，即为树的高度。

度：一个节点有几个子节点，即称为几度

叶子节点：最后一层的节点，度为0的节点，即是叶子节点

### 二叉树

### 空树

如果部署空树，必须由根节点 左子树 右子树构成，且左右子树都是二叉树。二叉树的左右子树是严格约定不饿能交换的。

```
function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}
const node  = new TreeNode(1)
```

### 二叉树遍历

先序遍历（递归遍历）

根结点 左子树 右子树

<img src="C:\Users\10189\AppData\Roaming\Typora\typora-user-images\image-20200629094640205.png" alt="image-20200629094640205" style="zoom:50%;" />

```
const root = {
    val: 'A',
    left: {
        val: 'B',
        left: {
            val: 'D'
        },
        right: {
            val: 'E',
            left: {
                val: 'G',
                right: {
                    val: 'H'
                }
            }
        }
    },
    right: {
        val: 'C',
        left: {
            val: 'F'
        }
    }
}

// 递归边界
// 左序遍历
const preorder = function (node) {
    if (!node) return
    console.log('节点', node.val)
    preorder(node.left)
    preorder(node.right)
}
preorder(root)
// A B D E G H C F
// 先遍历左节点，左节点不为空就往下执行，右节点hold，直到某个节点N左节点为空，执行N的右节点，假如右节点也为空，则返回上层N-1的右节点
// 中序遍历（递归遍历）左子树  根结点  右子树
const preorderM = function(node){
    if(!node) return
    preorderM(node.left)
    console.log('节点M', node.val)
    preorderM(node.right)
}
preorderM(root)
// D B G H E A F C

// 后序遍历（递归遍历）
const preorderR = function(node){
    if(!node)return
    preorderR(node.left)
    preorderR(node.right)
    console.log('节点R', node.val)
}
preorderR(root)
// D H G E B F C A
// 层次遍历（迭代遍历）

```

左序遍历图

<img src="C:\Users\10189\AppData\Roaming\Typora\typora-user-images\image-20200629095254511.png" alt="image-20200629095254511" style="zoom:50%;" />



中序

<img src="C:\Users\10189\AppData\Roaming\Typora\typora-user-images\image-20200629100926203.png" alt="image-20200629100926203" style="zoom:50%;" />

## 时间复杂度和空间复杂度

<img src="https://user-gold-cdn.xitu.io/2020/4/6/1714f67c52dc8d15?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="img" style="zoom:80%;" />
