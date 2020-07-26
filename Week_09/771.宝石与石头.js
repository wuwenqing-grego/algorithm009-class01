/*
 * @lc app=leetcode.cn id=771 lang=javascript
 *
 * [771] 宝石与石头
 */

// @lc code=start
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
// 1. 哈希表
var numJewelsInStones = function(J, S) {
    const jewels = new Map()
    for (let i = 0; i < J.length; i++) {jewels.set(J[i], 1)}
    let numJew = 0
    for (let i = 0; i < S.length; i++) {
        if (jewels.has(S[i])) {numJew++}
    }

    return numJew
};

// 2. 正则替换
var numJewelsInStones = function(J, S) {
    let s = S
    for (let i = 0; i < J.length; i++) {
        s = s.replace(new RegExp(J[i], 'g'), '')
    }

    return S.length - s.length
}
// @lc code=end

