/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 1. 预处理
var lengthOfLastWord = function(s) {
    const arr = s.trimEnd().split(' ')
    
    return arr[arr.length - 1].length
};

// 2. 遍历
var lengthOfLastWord = function(s) {
    let len = 0
    let i = s.length - 1
    while (i >= 0 && s[i] == ' ') {i--}
    while (i >= 0 && s[i] != ' ') {
        len++
        i--
    }

    return len
}
// @lc code=end

