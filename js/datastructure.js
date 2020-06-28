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

const preorder = function (node) {
    if (!node) return
    console.log('节点', node.val)
    preorder(node.left)
    preorder(node.right)
}
preorder(root)