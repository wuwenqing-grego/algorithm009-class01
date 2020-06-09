/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function(root) {
    const arr = []
    traverse(root, arr)

    return arr
};

let traverse = function(root, arr) {
    if (root == null) {
        return
    }

    traverse(root.left, arr)
    arr.push(root.val)
    traverse(root.right, arr)
}

// 2. DFS
var inorderTraversal = function(root) {
    let node = root
    const stack = []
    const arr = []

    while (node || stack.length) {
        while (node) {
            stack.push(node)
            node = node.left
        }

        node = stack.pop()
        arr.push(node.val)
        node = node.right
    }

    return arr
}

// 3. 红黑栈
var inorderTraversal = function(root) {
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
            stack.push([BLACK, node.right])
            stack.push([RED, node])
            stack.push([BLACK, node.left])
        } else {
            arr.push(node.val)
        }
    }

    return arr
}
// @lc code=end

