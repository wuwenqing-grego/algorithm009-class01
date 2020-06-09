/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
// 1. 回溯算法
var generateParenthesis = function(n) {
    const arr = []
    preorderTraverse('', n, n, arr)

    return arr
};

let preorderTraverse = function(str, leftParen, rightParen, arr) {
    if (leftParen > rightParen) {
        return
    }

    if (rightParen == 0) {
        arr.push(str)
        return
    }

    if (leftParen) {
        preorderTraverse(str + '(', leftParen - 1, rightParen, arr)
    }
    preorderTraverse(str + ')', leftParen, rightParen - 1, arr)
}

// 2. 动态规划
var generateParenthesis = function(n) {
    const arr = [['']]

    for (let i = 1; i <= n; i++) {
        parenthesisCombination(i, arr)
    }

    return arr[n]
}

let parenthesisCombination = function(n, arr) {
    arr[n] = []
    let nParen = arr[n]

    for (let i = 0; i < n; i++) {
        for (let j in arr[i]) {
            for (let k in arr[n - 1 - i]) {
                nParen.push('(' + arr[i][j] + ')' + arr[n - 1 - i][k])
            }
        }
    }
}
// @lc code=end

