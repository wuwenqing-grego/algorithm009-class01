/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// 1. 动态规划，逆向
var longestCommonSubsequence = function(text1, text2) {
    const len1 = text1.length
    const len2 = text2.length

    const dp = new Array(len1)
    for (let i = 0; i < len1; i++) {
        dp[i] = new Array(len2)
    }

    return lcs(text1, text2, len1 - 1, len2 - 1, dp)
};

let lcs = function(str1, str2, i, j, dp) {
    if (i == -1 || j == -1) {
        return 0
    }

    if (dp[i][j]) {
        return dp[i][j]
    }

    if (str1[i] == str2[j]) {
        dp[i][j] = lcs(str1, str2, i - 1, j - 1, dp) + 1
        return dp[i][j]
    } else {
        dp[i][j] = Math.max(lcs(str1, str2, i, j - 1, dp), lcs(str1, str2, i - 1, j, dp))
        return dp[i][j]
    }
}

// 2. 动态规划，正向
var longestCommonSubsequence = function(text1, text2) {
    const len1 = text1.length
    const len2 = text2.length
    const dp = []
    for (let i = 0; i < len1 + 1; i++) {
        let temp = []
        for (let j = 0; j < len2 + 1; j++) {
            temp.push(0)
        }
        dp.push(temp)
    }

    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (text1[i - 1] == text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
            }
        }
    }

    return dp[len1][len2]
}
// @lc code=end

