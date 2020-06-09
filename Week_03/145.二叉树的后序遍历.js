/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 1. 递归解法
var postorderTraversal = function(root) {
    const arr = []
    traverse(root, arr)

    return arr
};

let traverse = function(root, arr) {
    if (root == null) {
        return
    }

    traverse(root.left, arr)
    traverse(root.right, arr)
    arr.push(root.val)
}

// 2. DFS
var postorderTraversal = function(root) {
    let node = root
    const stack = []
    const arr = []

    while (node || stack.length) {
        while (node) {
            arr.push(node.val)
            stack.push(node.left)
            node = node.right
        }

        node = stack.pop()
    }

    return arr.reverse()
}

// 3. 红黑栈
var postorderTraversal = function(root) {
    const arr = []
    const stack = []
    const BLACK = 0
    const RED = 1
    stack.push([BLACK, root])

    while (stack.length) {
        let [color, node] = stack.pop()

        if (node == null) {
            continue
        }

        if (!color) {
            stack.push([RED, node])
            stack.push([BLACK, node.right])
            stack.push([BLACK, node.left])
        } else {
            arr.push(node.val)
        }
    }

    return arr
}
// @lc code=end

