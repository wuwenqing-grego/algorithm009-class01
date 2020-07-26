/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 1. 动态规划
var numDecodings = function(s) {
    const len = s.length
    const dict = new Map()
    for (let i = 1; i < 27; i++) {dict.set(String(i), 1)}
    const dp = []
    dp[0] = 1
    dp[1] = (dict.has(s[0])) ? 1 : 0
    for (let i = 2; i <= len; i++) {
        dp[i] = (dict.has(s[i - 1]) ? dp[i - 1] : 0) + (dict.has(s[i - 2] + s[i - 1]) ? dp[i - 2] : 0)
    }

    return dp[len]
};

// 2. 动态规划，直接比较
var numDecodings = function(s) {
    const len = s.length
    const dp = []
    dp[0] = 1
    dp[1] = (s[0] == 0) ? 0 : 1
    for (let i = 2; i <= len; i++) {
        dp[i] = (s[i - 1] == 0 ? 0 : dp[i - 1]) + (s[i - 2] == 1 || (s[i - 2] == 2 && s[i - 1] < 7) ? dp[i - 2] : 0)
    }

    return dp[len]
};
// @lc code=end

