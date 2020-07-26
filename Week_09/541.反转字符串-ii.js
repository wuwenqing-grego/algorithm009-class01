/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
// 1. 递归
var reverseStr = function(s, k) {
    if (!s.length) {return ''}

    let reversed = ''
    let len = (s.length > k) ? k : s.length
    for (let i = 0; i < len; i++) {
        reversed += s[len - i - 1]
    }

    return reversed + s.slice(k, 2 * k) + reverseStr(s.slice(2 * k), k)
};

// 2. 循环
var reverseStr = function(s, k) {
    let str = ''
    while (s) {
        str += s.slice(0, k).split('').reverse().join('') + s.slice(k, 2 * k)
        s = s.slice(2 * k)
    }

    return str
}
// @lc code=end

