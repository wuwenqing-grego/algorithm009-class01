/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
// 1. 递归解法
var preorder = function(root) {
    const ans = []
    preorderTraverse(root, ans)

    return ans
};

let preorderTraverse = function(root, ans) {
    if (!root) {return}

    ans.push(root.val)
    for (let i = 0; i < root.children.length; i++) {
        preorderTraverse(root.children[i], ans)
    }
}

// 2. 迭代解法
var preorder = function(root) {
    const ans = []
    const stack = []
    const BLACK = 0
    const RED = 1

    stack.push([BLACK, root])

    while (stack.length) {
        let [color, node] = stack.pop()

        if (!node) {continue}

        if (!color) {
            for (let i = node.children.length - 1; i >= 0; i--) {
                stack.push([BLACK, node.children[i]])
            }
            stack.push([RED, node])
        } else {
            ans.push(node.val)
        }
    }

    return ans
}
// @lc code=end

