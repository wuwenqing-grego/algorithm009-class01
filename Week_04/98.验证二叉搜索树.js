/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
// 1. 暴力解法
var isValidBST = function(root) {
    if (!root) {
        return true
    }

    if (root.left) {
        if (!isValidBST(root.left)) {
            return false
        }
    }

    if (root.right) {
        if (!isValidBST(root.right)) {
            return false
        }
    }

    if (!isGreaterThanLeft(root.val, root.left)) {return false}
    if (!isSmallerThanRight(root.val, root.right)) {return false}

    return true
};

let isGreaterThanLeft = function(value, root) {
    if (!root) {
        return true
    }

    if (value <= root.val) {return false}
    if (!isGreaterThanLeft(value, root.right)) {return false}

    return true
}

let isSmallerThanRight = function(value, root) {
    if (!root) {
        return true
    }

    if (value >= root.val) {return false}
    if (!isSmallerThanRight(value, root.left)) {return false}

    return true
}

// 2. 递归解法
var isValidBST = function(root) {
    return isValid(root, -Infinity, Infinity)
}

let isValid = function(root, lower, upper) {
    if (!root) {
        return true
    }

    if (root.val <= lower || root.val >= upper) {
        return false
    }

    return isValid(root.left, lower, root.val) && isValid(root.right, root.val, upper)
}

// 3. 中序遍历
var isValidBST = function(root) {
    const arr = [-Infinity]
    return inorderTraverse(root, arr)
}

let inorderTraverse = function(root, arr) {
    if (!root) {
        return true
    }

    if (!inorderTraverse(root.left, arr)) {return false}
    if (root.val <= arr[arr.length - 1]) {return false}
    arr.push(root.val)
    if (!inorderTraverse(root.right, arr)) {return false}

    return true
}
// @lc code=end

