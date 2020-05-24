/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
// 1. 互相映射
var wordPattern = function(pattern, str) {
    let patternArr = pattern.split('')
    let strArr = str.split(' ')

    if (patternArr.length != strArr.length) {
        return false
    }

    return compare(patternArr, strArr) && compare(strArr, patternArr)
};

let compare = function(patternArr, strArr) {
    let map = {}
    for (let i = 0; i < patternArr.length; i++) {
        if (map[patternArr[i]] == undefined) {
            map[patternArr[i]] = strArr[i]
        } else if (map[patternArr[i]] != strArr[i]) {
            return false
        }
    }

    return true
}

// 2. 映射到第三方集合
var wordPattern = function(pattern, str) {
    let strArr = str.split(' ')

    if (pattern.length != strArr.length) {
        return false
    }

    for (let i = 0; i < pattern.length; i++) {
        if (pattern.indexOf(pattern[i]) != strArr.indexOf(strArr[i])) {
            return false
        }
    }

    return true
};
// @lc code=end

