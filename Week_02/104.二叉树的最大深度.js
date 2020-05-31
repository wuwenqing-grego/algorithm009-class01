/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
// 1. 递归解法
var maxDepth = function(root) {
    if (root == null) {
        return 0
    }

    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

// 2. BFS
var maxDepth = function(root) {
    if (root == null) {
        return 0
    }

    const queue = []
    queue.push(root)
    let depth = 0

    while (queue.length) {
        depth++
        let len = queue.length
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            if (node.left) {queue.push(node.left)}
            if (node.right) {queue.push(node.right)}
        }
    }

    return depth
}
// @lc code=end

