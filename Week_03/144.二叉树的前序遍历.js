/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function(root) {
    const arr = []
    traverse(root, arr)    

    return arr
};

let traverse = function(root, arr) {
    if (root == null) {
        return
    }

    arr.push(root.val)
    traverse(root.left, arr)
    traverse(root.right, arr)
}

// 2. DFS
var preorderTraversal = function(root) {
    let node = root
    const stack = []
    const arr = []

    while (node || stack.length) {
        while (node) {
            arr.push(node.val)
            stack.push(node.right)
            node = node.left
        }

        node = stack.pop()
    }

    return arr
}

// 3. 红黑栈
var preorderTraversal = function(root) {
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
            stack.push([BLACK, node.left])
            stack.push([RED, node])
        } else {
            arr.push(node.val)
        }
    }

    return arr
}
// @lc code=end

