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
const preorderL = function (node) {
    if (!node) return
    console.log('节点L', node.val)
    preorderL(node.left)
    preorderL(node.right)
}
preorderL(root)

// 中序遍历
const preorderM = function (node) {
    if (!node) return
    preorderM(node.left)
    console.log('节点M', node.val)
    preorderM(node.right)
}
preorderM(root)

// 后序
const preorderR = function (node) {
    if (!node) return
    preorderR(node.left)
    preorderR(node.right)
    console.log('节点R', node.val)
}
preorderR(root)

// 层次


// 满足和的两项
var arr = [2, 5, 7, 9]
var target = 12
var TwoSum = function () {
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