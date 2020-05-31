/*
 * @lc app=leetcode.cn id=434 lang=javascript
 *
 * [434] 字符串中的单词数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 1. 内置函数
var countSegments = function(s) {
    return s.split(' ').filter(word => word.length > 0).length
};

// 2. 顺序遍历
var countSegments = function(s) {
    let count = 0
    for (let i = 0; i < s.length; i++) {
        if ((i == 0 || s[i - 1] == ' ') && s[i] != ' ') {
            count++
        }
    }

    return count
}
// @lc code=end

