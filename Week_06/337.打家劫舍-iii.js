/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
// 1. 动态规划，自顶向下
var rob = function(root) {
    const memo = new Map()

    return dp(root, memo)
};

let dp = function(root, memo) {
    if (!root) {return 0}
    if (memo.has(root)) {return memo.get(root)}

    let left = (root.left) ? dp(root.left.left, memo) + dp(root.left.right, memo) : 0
    let right = (root.right) ? dp(root.right.left, memo) + dp(root.right.right, memo) : 0
    let robThisOne = root.val + left + right
    let skipThisOne = dp(root.left, memo) + dp(root.right, memo)
    memo.set(root, Math.max(robThisOne, skipThisOne))

    return memo.get(root)
}

// 2. 动态规划，重新定义
var rob = function(root) {
    let robRoot = robNode(root)

    return Math.max(robRoot[0], robRoot[1])
}

let robNode = function(root) {
    if (!root) {return [0, 0]}
    let arr = []

    let left = robNode(root.left)
    let right = robNode(root.right)

    arr[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1])
    arr[1] = left[0] + right[0] + root.val

    return arr
}
// @lc code=end

