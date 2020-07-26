/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 1. 分割反转
var reverseWords = function(s) {
    return s.split(' ').map(word => word.split('').reverse().join('')).join(' ')
};

// 2. 两次反转
var reverseWords = function(s) {
    return s.split('').reverse().join('').split(' ').reverse().join(' ')
}
// @lc code=end

