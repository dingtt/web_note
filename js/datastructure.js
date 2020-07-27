const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D",
    },
    right: {
      val: "E",
      left: {
        val: "G",
        right: {
          val: "H",
        },
      },
    },
  },
  right: {
    val: "C",
    left: {
      val: "F",
    },
  },
}

// 递归边界
// 左序遍历
const preorderL = function (node) {
  if (!node) return
  console.log("节点L", node.val)
  preorderL(node.left)
  preorderL(node.right)
}
preorderL(root)

// 中序遍历
const preorderM = function (node) {
  if (!node) return
  preorderM(node.left)
  console.log("节点M", node.val)
  preorderM(node.right)
}
preorderM(root)

// 后序
const preorderR = function (node) {
  if (!node) return
  preorderR(node.left)
  preorderR(node.right)
  console.log("节点R", node.val)
}
preorderR(root)

// 层次

// 满足和的两项
var arr = [2, 5, 7, 9]
var target = 12
var TwoSum = function (arr, target) {
  const has = {}
  for (let i = 0; i < arr.length; i++) {
    if (has[target - arr[i]] !== undefined) {
      console.log(has[target - arr[i]], i)
      return [has[target - arr[i]], i]
    }
    has[arr[i]] = i
  }
}
TwoSum(arr, target)

var TwoSum2 = function (arr, target) {
  var len = arr.length
  const obj = {}
  if (!len) return
  for (let i = 0; i < len; i++) {
    obj[arr[i]] = i // 出现过的值
    if (obj[target - arr[i]] !== undefined) {
      // 新值  与新值得差出现过
      return [i, obj[target - arr[i]]]
    }
  }
}
TwoSum2([3, 4, 5, 7], 9)
// {3: 0}  6
// {3:0,4:1} 5
// {3:0,4:1,5:2} 4

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

//  错误思路
//   var i = 0
//   var j = len - 1
//   var res = []
//   while(i < j){
//       var val = target - nums[i] - nums[j]
//       if(nums.indexOf(val) > -1){
//         // res.push([i, j, nums.indexOf(val)])
//         res.push([nums[i], nums[j], val])
//       }
//       i ++
//       j --
//   }

// 字符串反转

"str".split("").reverse().join("")

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

// 最多可删除一个字符 判断是否是回文字符串

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
