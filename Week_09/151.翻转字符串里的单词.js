/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 1. 正则分割
var reverseWords = function(s) {
    return s.trim().split(/ +/).reverse().join(' ')
};

// 2. 栈
var reverseWords = function(s) {
    let left = 0
    let right = s.length - 1
    while (left <= right && s[left] == ' ') {left++}
    while (left <= right && s[right] == ' ') {right--}
    const stack = []
    for (let i = left; i <= right; i++) {
        if (s[i] == ' ') {continue}
        let word = ''
        while (i <= right && s[i] != ' ') {
            word += s[i++]
        }
        stack.push(word)
    }
    let str = ''
    while (stack.length) {
        str += stack.pop() + ' '
    }

    return str.slice(0, str.length - 1)
}
// @lc code=end

