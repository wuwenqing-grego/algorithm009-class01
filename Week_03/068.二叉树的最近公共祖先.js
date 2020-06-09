/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
// 1. 递归解法
let lowestCommonAncestor = function(root, p, q) {
    if (root == null || root == p || root == q) {
        return root
    }

    let left = lowestCommonAncestor(root.left, p, q)
    let right = lowestCommonAncestor(root.right, p, q)

    if (!left) {return right}
    if (!right) {return left}

    return root
}

// 2. 前序搜索
let lowestCommonAncestor = function(root, p, q) {
    if (root == null || root == p || root == q) {
        return root
    }

    const pathToP = []
    const pathToQ = []
    preorderSearch(root, p, pathToP)
    preorderSearch(root, q, pathToQ)

    let len = Math.min(pathToP.length, pathToQ.length)
    let ancestor = null
    for (let i = 0; i < len; i++) {
        if (pathToP[i] == pathToQ[i]) {
            ancestor = pathToP[i]
        }
    }

    return ancestor
}

let preorderSearch = function(root, node, path) {
    if (root == null) {
        return
    }
    
    path.push(root)
    let found = false
    
    if (root == node) {
        found = true
    }

    if (!found) {found = preorderSearch(root.left, node, path)}
    if (!found) {found = preorderSearch(root.right, node, path)}

    if (!found) {
        path.pop()
    }

    return found
}

// 测试样例
class TreeNode {
    constructor(value) {
        this.val = value
        this.left = null
        this.right = null
    }
}

let buildTree = function(arr) {
    const tree = []

    for (let i = 0; i < arr.length; i++) {
        let node = null

        if (arr[i] != null) {
            node = new TreeNode(arr[i])
        }
        
        tree.push(node)
    }

    for (let i = 0; i * 2 < tree.length - 1; i++) {
        tree[i].left = tree[2 * i + 1]
        tree[i].right = tree[2 * i + 2]
    }

    return tree
}

const tree = buildTree([3,5,1,6,2,0,8,null,null,7,4])
console.log(lowestCommonAncestor(tree[0], tree[0], tree[10]))