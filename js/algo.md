# 数据结构与算法

## 数据结构

## 数组

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
// 取栈顶
const stack = []
stack.push('老冰棍')
stack.push('巧乐兹')
stack.push('小不丁')
while(stack.length){
  const stacktop = stack[stack.length - 1] // 栈顶值
  stack.pop() // 出栈
}

```

### 队列 —— 先进先出   只允许尾部添加，头部取出 (相当于数组的push shift)

```javascript
const queue = []
queue.push('队1')
queue.push('队2')
queue.push('队3')
while(queue.length){
  const top = queue[0] // 取队首
  queue.shift(0) // 出队
}
```

### 链表

链表的增加删除元素不用挪动其他多余的的元素   链表的添加删除复杂度O(1)

```
function ListNode(val) {
    this.val = val;
    this.next = null;
}
const node1 = new ListNode('1')
const node2 = new ListNode('2')
node1.next = node2
```

访问

```javascript
const index = 10
const node = head
for(var i = 0; i < index&&node; i ++){
  node = node.next
}
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

算法题

给定一个数组，就满足两数之和的下标，可以假定最多只有一组满足条件的

### 求和求差

几乎所有的求和问题，都可以转化为**求差问题**

```javascript
// 数组中满足和的两项
var arr = [2, 5, 7, 9]
var target = 12

var TwoSum2 = function (arr, target) {
  var len = arr.length
  if (!len) return
  const map = {}
  for (let i = 0; i < len; i++) {
    const val = arr[i]
    map[val] = i // 出现过的值
    if (map[target - val] !== undefined) {
      // 新值  目标值与新值的差出现过
      return [i, map[target - val]]
    }
  }
}
var map = {
  2:0, // 12 -2 = 10
  5:1, // 12 -5 = 7
  7:2, // 12 -7 = 5
}
TwoSum2([3, 4, 5, 7], 9)
// {3: 0}  6
// {3:0,4:1} 5
// {3:0,4:1,5:2} 4
```

### 双指针算法

```javascript
 // 合并两个有序整数组成一个整数数组  双指针算法
 // 合并两个有序整数组成一个整数数组  双指针算法
function merge(nums1, m, nums2, n) {
  let i = m - 1
  let j = n - 1
  let k = m + n - 1
  while (i >= 0 && j >= 0) {
    if (nums2[j] > nums1[i]) {
      nums1[k] = nums2[j]
      j--
      k--
    } else {
      nums1[k] = nums1[i]
      i--
      k--
    }
  }
  while (j >= 0) {
    nums1[k] = nums2[j]
    j--
    k--
  }
  console.log(nums1, m, nums2, n)
}

var nums1 = [1, 2, 3, 0, 0, 0],
  m = 3
var nums2 = [2, 5, 6],
  n = 3
merge(nums1, m, nums2, n)
```

### 三数求和

```javascript
// 三数求和
function findThree(arr, target) {
  arr = arr.sort((a, b) => {
    return a - b
  }) // [-4,-1,-1,0,1,2]
  var res = []
  var len = arr.length
  for (let i = 0; i < len - 2; i++) {
    // let sum = target - arr[i]
    //   let j = i === 0 ? 1 : 0
    //   let k = i === (len -1) ? (len -2 ) : (len -1) // 因为有循环，只考虑i的一边就行了
    if (i && arr[i] === arr[i - 1]) {
      continue
    }
    let j = i + 1
    let k = len - 1
    while (j < k) {
      if (arr[j] + arr[k] + arr[i] < target) {
        console.log(i, j, k)
        j++
        while (j < k && arr[j] === arr[j - 1]) {
          j++
        }
        console.log(arr[i], arr[j], arr[k], arr[i] + arr[j] + arr[k])
      } else if (arr[j] + arr[k] + arr[i] > target) {
        console.log(i, j, k)
        k--
        while (j < k && arr[k] === arr[k + 1]) {
          k--
        }
        console.log(arr[i], arr[j], arr[k], arr[i] + arr[j] + arr[k])
      } else {
        res.push([arr[i], arr[j], arr[k]])
        j++
        k--
        while (j < k && arr[j] === arr[j - 1]) {
          j++
        }
        // 若右指针元素重复，跳过
        while (j < k && arr[k] === arr[k + 1]) {
          k--
        }
      }
    }
  }
  console.log(res)
}
var threeArr = [-1, 0, 1, 2, -1, -4]
findThree(threeArr, 0)

```

## 字符串应用

### 字符串反转

```javascript

"str".split("").reverse().join("")


```

### 回文字符串

- 正序倒序一样

- 中间避开，两头对称

```
// 判断是否是回文字符串
"str" === "str".split("").reverse().join("")
function isPalindrome(str) {
  const arr = str.split("")
  let len = arr.length
  for (let i = 0; i < len / 2; i++) {
    if (arr[i] !== arr[len - 1 - 1]) {
      return false
    }
  }
}
```



```javascript
// 最多可删除一个字符 判断是否是回文字符串*
function isPalindrome2(str) {
  // 'abcddcbay'  'yabcddcba' 'abcddcyba' 'abcdydcba'
  const arr = str.split("")
  let len = arr.length
  let i = 0
  let j = len - 1
  // 先处理两端一致的 向中间前进
  while (i < j && arr[i] === arr[j]) {
    i ++
    j --
  }
  // 到这说明不一致了  左边 + 1
  if(isPalindrome(i + 1, j)){
    return true
  }
  // 右边
  if(isPalindrome(i, j - 1)){
    return true
  }

  function isPalindrome(start, end) {
    while (start < end) {
      if (arr[start] === arr[end]) {
        start++
        end--
      } else {
        return false
      }
    }
    return true
  }
  return false
}

console.log(isPalindrome2("abcddcbay"))
console.log(isPalindrome2("yabcddcba"))
console.log(isPalindrome2("abcddcyba"))
console.log(isPalindrome2("abcdydcba"))
console.log(isPalindrome2("abcdycdcba"))
```

### 字符串匹配问题——正则表达式8