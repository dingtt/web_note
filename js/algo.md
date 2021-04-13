# 算法

### 数组

#### 数组扁平化 + 去重 + 排序

```
Array.from(new Set(arr.flat(Infinity))).sort((a,b)=>{ return a-b})
```

给定一个数组，就满足两数之和的下标，可以假定最多只有一组满足条件的

```javascript

```

### 排序

`avaScript` 的 `sort` 方法的实现原理，当数组长度小于等于 10 的时候，采用插入排序，大于 10 的时候，采用快排，快排的平均时间复杂度是 O(nlogn)O(nlogn)O(nlogn)。

#### 桶排序

#### 插入排序

#### 冒泡排序   

```javascript
const arr =[7,4,22,4,75,43,9]
function popSort(arr){
     // 需要重复len-1次
  for(let i = 0; i < arr.length - 1; i ++){
  	// 干活的部分
  	 for(let j= 0;j < arr.length - i; j++){
  	 	if(arr[j] < arr[j+1]){
  	 	  // const temp = arr[j]
  	 	  // arr[j] = arr[j+1]
  	 	  // arr[j + 1] = temp
            [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
  	 	}
  	 }
  }
}
popSort(arr)
console.log(arr)
```

#### 快速排序——左右快排

```javascript
const quickSort = arr => {
    if(arr.length <=1) {
        return arr
    }
    const left = []
    const right = []
    const current = arr.splice(0,1)
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < current){
            left.push(arr[i])
        }
        if(arr[i] >= current){
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(current,quickSort(right))
}
console.log(quickSort(arr))
```

#### **快速排序——原地快排**

事件复杂度  O(n * log n)

```javascript
var arr = [7,4,22,4,75,43,9,43,24,55,3,22,18,97,56]

console.log(quickSort(arr))
```

#### 归并排序

### 阶乘与排列组合

**阶乘**

n * (n-1) * (n-2) * ... * 2 * 1

**排列组合** Amn C mn*

n \* (n-1) \* (n-2) \* (n-3) \* (n -m + 1)

n \* (n-1) \* (n-2) \* (n-3) \* (n -m + 1) / m \* (m- 1) \* (m-2)* ... * 1

```js
function factorial(n,end){
  // let res = 1
  if(n <= end){
    return end
  }
  return n * factorial(n-1,end)
}

console.log(factorial(4,1),factorial(4,2),factorial(4,3))

function rank(n,m){
  if(n < m) return
  return factorial(n,(n- m +1))
}

function compose(n,m){
  if(n < m) return
  return factorial(n,(n-m +1))/ factorial(m,1)
}
// // A42 12
console.log(rank(4,2))
// // C42 6
console.log(compose(4,2))
```

### 动态规划

#### 暴力递归斐波那契

每个n需要计算两次，时间复杂度O(2^n)

```js
function fib(n) {
  // 递归出口
  if (n === 1 || n === 2) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}
```

#### 中间存储fib

每个n都只计算一次，时间复杂度O(n)

```js
function storefib(n) {
  let store = {}
  return help(store, n)
}
function fib(n){
  if(n ===1 || n ===2){
      return 1
  }
  return fib(n-1) + fib(n-2)
}

function help(store, n) {
  if (n === 1 || n === 2) {
      return 1
  }
  if (store[n]) return store[n]
  store[n] = help(store,n - 1) + help(store,n - 2)
  return store[n]
}
const timer1 = Date.now()
console.log(storefib(30))
const timer2 = Date.now()
console.log('store',timer2 - timer1)
console.log(fib(30))
console.log('fib',Date.now() - timer2)
```

**动态规划fib**

```js
function dpfib(n){  // 循环迭代 从底开始
  let dp = []
  dp[1] = dp[2] = 1
  for(let i = 3; i <= n; i ++){
      dp[i] = dp[i-1] + dp[i-2]
  }
  return dp[n]
}
```

**动态规划找零**   ???

```js
class Change {
    constructor(types) {
        this.types = types
        this.cache = {}
    }
    makeChange(amount) {
        // 求和问题转为求差
        let min = []
        if (!amount) {
            return []
        }
        if (this.cache[amount]) {
            return this.cache[amount]
        }
        for (let i = 0; i < this.types.length; i++) {
            let leftAmount = amount - this.types[i] // 
            let newMin
            if (leftAmount >= 0) { // 
                newMin = this.makeChange(leftAmount)
            }
            // 如果存在更小的数
            if (leftAmount >= 0  && (newMin.length < min.length -1) ||!min.length) {
                    min = [this.types[i]].concat(newMin)
            }
        }
        return this.cache[amount] = min
    }
}

const change = new Change([1, 5, 10, 20, 50])
console.log(change.makeChange(9))
console.log(change.makeChange(11))
console.log(change.makeChange(27))
```

#### 二分查找

二分查找的输入是一个有序的元素列表

```js
var search = function(nums, target) {
   // 确定中间元素  while
   let low = 0
   let high = nums.length - 1
   while(low <= high){    //  3 4
    let m =  Math.floor((low + high)/2)
     if(nums[m] > target){
       high = m - 1
     }else if(nums[m] < target){
        low = m + 1
     }else{
       return m
       break
     }
   }  
   return -1 
};
```



#### 贪心算法

还是继续找零



#### 求和求差

几乎所有的求和问题，都可以转化为**求差问题**

##### 两数求和

```javascript
// 数组中满足和的两项
var arr = [2, 5, 7, 9]
var target = 12

var TwoSum2 = function (arr, target) {
  var len = arr.length
  if (!len) return
  const map = {}
  for (let i = 0; i < len; i++) {
    const val = arr[i] // 新值
    if (map[target - val] !== undefined) {
      // 目标值与新值的差出现过
      return [map[target - val],i]
    }
    map[val] = i 
  }
}
// 空间复杂度
var map = {
  2:0, // 12 -2 = 10
  5:1, // 12 -5 = 7
  7:2, // 12 -7 = 5
}
TwoSum2([3, 4, 5, 7], 9)
// {3: 0}  6
// {3:0,4:1} 5
// {3:0,4:1,5:2} 4
// lastindexOf
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

#### 字符串应用

最大公共前缀

最大公共路径

#### 字符串反转

```javascript

"str".split("").reverse().join("")


```

#### 回文字符串

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