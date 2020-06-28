/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
// 1. BFS
var largestValues = function(root) {
    const ans = []
    if (!root) {return ans}

    const queue = []
    queue.push(root)

    while (queue.length) {
        let currLevel = queue.length
        let max = -Infinity

        for (let i = 0; i < currLevel; i++) {
            let node = queue.shift()
            max = Math.max(max, node.val)

            if (node.left) {queue.push(node.left)}
            if (node.right) {queue.push(node.right)}
        }
        
        ans.push(max)
    }

    return ans
};

// 2. DFS
var largestValues = function(root) {
    const ans = []
    dfs(root, ans, 0)

    return ans
}

let dfs = function(root, ans, depth) {
    if (!root) {return}

    ans[depth] = (ans[depth] == undefined) ? root.val : Math.max(ans[depth], root.val)

    dfs(root.left, ans, depth + 1)
    dfs(root.right, ans, depth + 1)
}
// @lc code=end

