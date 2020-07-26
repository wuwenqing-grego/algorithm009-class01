/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
// 1. 分布处理
var myAtoi = function(str) {
    const s = str.trimStart()
    if (!s.length) {return 0}

    let i = 0
    let sign = 1
    if (s[i] == '+' || s[i] == '-') {
        sign = s[i] == '+' ? 1 : -1
        i++
    }

    let num = 0
    const MAX = 2 ** 31 - 1
    let digit = 0
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        digit = s[i] - '0'
        if (Math.floor(MAX / 10) < num || Math.floor(MAX / 10) == num && MAX % 10 < digit) {
            return sign == 1 ? MAX : -MAX - 1
        }

        num = 10 * num + digit
        i++
    }

    return sign * num
};
// @lc code=end

