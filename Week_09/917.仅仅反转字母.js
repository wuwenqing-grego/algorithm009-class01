/*
 * @lc app=leetcode.cn id=917 lang=javascript
 *
 * [917] 仅仅反转字母
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
// 1. 正则替换
var reverseOnlyLetters = function(S) {
    const invertS = S.replace(/[^a-zA-Z]/g, '').split('')
    let str = ''
    for (let i = 0; i < S.length; i++) {
        str += /[a-zA-Z]/.test(S[i]) ? invertS.pop() : S[i]
    }

    return str
};

// 2. 双指针
var reverseOnlyLetters = function(S) {
    let index = S.length - 1
    let str = ''
    for (let i = 0; i < S.length; i++) {
        while (index >= 0 && /[^a-zA-Z]/.test(S[index])) {index--}
        str += /[a-zA-Z]/.test(S[i]) ? S[index--] : S[i]
    }

    return str
}
// @lc code=end

