/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// 1. 双指针
var validPalindrome = function(s) {
    const len = s.length
    if (len < 3) {return true}

    let left = 0
    let right = len - 1
    while (left < right) {
        if (s[left] != s[right]) {
            return isPalindrome(s, left, right - 1) || isPalindrome(s, left + 1, right)
        }
        left++
        right--
    }

    return true
};

let isPalindrome = function(s, left, right) {
    while (left < right) {
        if (s[left++] != s[right--]) {return false}
    }

    return true
}
// @lc code=end

