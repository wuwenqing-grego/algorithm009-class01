/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// 1. 递归解法
var buildTree = function(preorder, inorder) {
    if (preorder.length == 0) {
        return null
    }

    let inRootIndex = inorder.indexOf(preorder[0])

    let root = new TreeNode(preorder[0])
    root.left = buildTree(preorder.slice(1, 1 + inRootIndex), inorder.slice(0, inRootIndex))
    root.right = buildTree(preorder.slice(inRootIndex + 1), inorder.slice(inRootIndex + 1))

    return root
};

// 2. 递归 + 哈希表
var buildTree = function(preorder, inorder) {
    const len = inorder.length
    const map = new Map()
    for (let i = 0; i < len; i++) {
        map.set(inorder[i], i)
    }

    return builder(preorder, inorder, 0, len - 1, 0, len - 1, map)
}

let builder = function(preorder, inorder, preLeft, preRight, inLeft, inRight, map) {
    if (preLeft > preRight) {
        return null
    }

    let inRoot = map.get(preorder[preLeft])
    let leftLen = inRoot - inLeft

    let root = new TreeNode(preorder[preLeft])
    root.left = builder(preorder, inorder, preLeft + 1, preLeft + leftLen, inLeft, inRoot - 1, map)
    root.right = builder(preorder, inorder, preLeft + leftLen + 1, preRight, inRoot + 1, inRight, map)

    return root
}

// 3. 迭代解法
var buildTree = function(preorder, inorder) {
    if (!preorder.length) {
        return null
    }

    const roots = []
    let preIndex = 0
    let inIndex = 0
    
    let curRoot = new TreeNode(preorder[preIndex])
    let root = curRoot
    roots.push(curRoot)
    preIndex++
    
    while (preIndex < preorder.length) {
        if (curRoot.val == inorder[inIndex]) {
            while (roots.length && roots[roots.length - 1].val == inorder[inIndex]) {
                curRoot = roots.pop()
                inIndex++
            }
            
            curRoot.right = new TreeNode(preorder[preIndex])
            curRoot = curRoot.right
            roots.push(curRoot)
            preIndex++
        } else {
            curRoot.left = new TreeNode(preorder[preIndex])
            curRoot = curRoot.left
            roots.push(curRoot)
            preIndex++
        }
    }

    return root
}
// @lc code=end

