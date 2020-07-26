/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 1. 动态规划
var longestValidParentheses = function(s) {
    const str = ')' + s
    const len = str.length
    const dp = new Array(len).fill(0)
    let max = 0
    for (let i = 2; i < len; i++) {
        if (str[i] == '(') {continue}
        dp[i] = str[i - 1] == '(' ? dp[i - 2] + 2 : (str[i - dp[i - 1] - 1] == '(' ? dp[i - 1] + 2 + dp[i - dp[i - 1] - 2] : 0)
        max = Math.max(max, dp[i])
    }

    return max
};

// 2. 栈
var longestValidParentheses = function(s) {
    const len = s.length
    const stack = [-1]
    let max = 0
    for (let i = 0; i < len; i++) {
        if (s[i] == '(') {
            stack.push(i)
        } else if (stack[stack.length - 1] == -1 || s[stack[stack.length - 1]] == ')') {
            stack.push(i)
        } else {
            stack.pop()
            max = Math.max(max, i - stack[stack.length - 1])
        }
    }

    return max
}
// @lc code=end

