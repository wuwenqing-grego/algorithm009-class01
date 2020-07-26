/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// 1. 调用函数
var reverseString = function(s) {
    s.reverse()
};

// 2. 双指针
var reverseString = function(s) {
    const len = s.length
    let left = 0
    let right = len - 1
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]]
        left++
        right--
    }
}
// @lc code=end

