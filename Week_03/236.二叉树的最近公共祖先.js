/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 1. 递归解法
var lowestCommonAncestor = function(root, p, q) {
    if (root == null || root == p || root == q) {
        return root
    }

    let left = lowestCommonAncestor(root.left, p, q)
    let right = lowestCommonAncestor(root.right, p, q)

    if (left == null) {return right}
    if (right == null) {return left}

    return root
};

// 2. DFS
var lowestCommonAncestor = function(root, p, q) {
    if (root == null || root == p || root == q) {
        return root
    }

    const pathToP = []
    const pathToQ = []
    preorderTraverse(root, p, pathToP)
    preorderTraverse(root, q, pathToQ)

    let ancestor = null
    for (let i = 0; i < Math.min(pathToP.length, pathToQ.length); i++) {
        if (pathToP[i] == pathToQ[i]) {
            ancestor = pathToP[i]
        }
    }

    return ancestor
}

let preorderTraverse = function(root, node, path) {
    if (root == null) {
        return false
    }

    if (root == node) {
        path.push(node)
        return true
    }

    path.push(root)

    let found = false
    found = preorderTraverse(root.left, node, path)
    if (!found) {
        found = preorderTraverse(root.right, node, path)
    }

    if (!found) {
        path.pop()
    }

    return found
}
// @lc code=end

