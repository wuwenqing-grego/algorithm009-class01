/*
 * @lc app=leetcode.cn id=709 lang=javascript
 *
 * [709] 转换成小写字母
 */

// @lc code=start
/**
 * @param {string} str
 * @return {string}
 */
// 1. 哈希表
var toLowerCase = function(str) {
    const dict = new Map()
    for (let i = 0; i < 26; i++) {
        dict.set(String.fromCharCode(65 + i), String.fromCharCode(97 + i))
    }
    let s = ''
    for (let i = 0; i < str.length; i++) {
        s += dict.has(str[i]) ? dict.get(str[i]) : str[i]
    }

    return s
};

// 2. 位运算
var toLowerCase = function(str) {
    let s = ''
    for (let i = 0; i < str.length; i++) {
        s += String.fromCharCode(str.charCodeAt(i) | 32)
    }

    return s
};

// 3. 正则替换
var toLowerCase = function(str) {
    return str.replace(/[A-Z]/g, (char) =>
        String.fromCharCode(char.charCodeAt() + 32)
    )
};
// @lc code=end

