/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
// 1. 二维动态规划
var minPathSum = function(grid) {
    const row = grid.length
    if (!row) {return 0}
    const col = grid[0].length
    if (!col) {return 0}

    const dp = []
    for (let i = 0; i < row; i++) {dp.push([])}
    dp[0][0] = grid[0][0]
    for (let i = 1; i < col; i++) {dp[0][i] = dp[0][i - 1] + grid[0][i]}
    for (let i = 1; i < row; i++) {dp[i][0] = dp[i - 1][0] + grid[i][0]}

    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
        }
    }

    return dp[row - 1][col - 1]
};

// 2. 一维动态规划
var minPathSum = function(grid) {
    const row = grid.length
    if (!row) {return 0}
    const col = grid[0].length
    if (!col) {return 0}

    const dp = []
    dp[0] = grid[0][0]
    for (let i = 1; i < col; i++) {dp[i] = dp[i - 1] + grid[0][i]}
    for (let i = 1; i < row; i++) {
        dp[0] += grid[i][0]
        for (let j = 1; j < col; j++) {
            dp[j] = Math.min(dp[j], dp[j - 1]) + grid[i][j]
        }
    }

    return dp[col - 1]
}
// @lc code=end

