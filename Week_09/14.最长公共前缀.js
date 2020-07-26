/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
// 1. 遍历
var longestCommonPrefix = function(strs) {
    const len = strs.length
    if (!len) {return ''}

    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < len; j++) {
            if (i == strs[j].length || strs[j][i] != strs[0][i]) {return strs[0].slice(0, i)}
        }
    }

    return strs[0]
};

// 2. 遍历求前缀
var longestCommonPrefix = function(strs) {
    const len = strs.length
    if (!len) {return ''}
    
    let prefix = strs[0]
    for (let i = 1; i < len; i++) {
        let j = 0
        for (; j < Math.min(prefix.length, strs[i].length); j++) {
            if (prefix[j] != strs[i][j]) {break}
        }
        prefix = prefix.slice(0, j)
        if (prefix == '') {return prefix}
    }

    return prefix
};

// 3. 按字典排序
var longestCommonPrefix = function(strs) {
    const len = strs.length
    if (!len) {return ''}

    strs.sort()
    let prefix = ''
    for (let i = 0; i < Math.min(strs[0].length, strs[len - 1].length); i++) {
        if (strs[0][i] != strs[len - 1][i]) {break}
        prefix += strs[0][i]
    }

    return prefix
}
// @lc code=end

