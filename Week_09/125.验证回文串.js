/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// 1. 正则 + 双指针
var isPalindrome = function(s) {
    let str = s.replace(/\W|_/g, '').toLowerCase()

    let left = 0
    let right = str.length - 1
    while (left < right) {
        if (str[left] != str[right]) {return false}
        left++
        right--
    }

    return true
};

// 2. 正则 + 反转
var isPalindrome = function(s) {
    let str = s.replace(/\W|_/g, '').toLowerCase()

    return str.split('').reverse().join('') == str
};
// @lc code=end

