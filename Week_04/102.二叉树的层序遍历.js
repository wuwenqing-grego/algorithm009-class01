/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
// 1. BFS
var levelOrder = function(root) {
    const ans = []
    if (!root) {return ans}

    const queue = []
    queue.push(root)

    while (queue.length) {
        let len = queue.length
        let currLevel = []

        for (let i = 0; i < len; i++) {
            let node = queue.shift()

            currLevel.push(node.val)
            if (node.left) {queue.push(node.left)}
            if (node.right) {queue.push(node.right)}
        }
        
        ans.push(currLevel)
    }

    return ans
};

// 2. DFS
var levelOrder = function(root) {
    const ans = []
    if (!root) {return ans}

    dfs(0, root, ans)
    return ans
}

let dfs = function(depth, node, ans) {
    if (!node) {return}
    if (ans.length - 1 < depth) {
        ans.push([])
    }

    ans[depth].push(node.val)
    dfs(depth + 1, node.left, ans)
    dfs(depth + 1, node.right, ans)
}
// @lc code=end

