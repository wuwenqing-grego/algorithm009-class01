/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
// 1. 动态规划
var minDistance = function(word1, word2) {
    const len1 = word1.length
    const len2 = word2.length
    const dp = [[]]
    for (let i = 0; i <= len2; i++) {dp[0].push(i)}
    for (let i = 1; i <= len1; i++) {dp.push([i])}

    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (word1[i - 1] == word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]
            } else {
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1
            }
        }
    }

    return dp[len1][len2]
};
// @lc code=end

