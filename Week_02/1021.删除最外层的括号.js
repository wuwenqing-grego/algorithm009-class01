/*
 * @lc app=leetcode.cn id=1021 lang=javascript
 *
 * [1021] 删除最外层的括号
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    let str = ''
    let count = 1

    for (let i = 1; i < S.length; i++) {
        if (S[i] == '(') {
            count++
        } else {
            count--
        }
        
        if (count == 0) {
            i++
            count = 1
        } else {
            str += S[i]
        }
    }

    return str
};
// @lc code=end

