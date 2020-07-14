/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
// 1. 位运算，拼接
var reverseBits = function(n) {
    let ans = 0
    for (let i = 31; i >= 0; i--) {
        ans += (n & 1) << i
        n >>= 1
        if (!n) {break}
    }

    return ans >>> 0
};

// 2. 位运算，换位
var reverseBits = function(n) {
    let ans = 0
    for (let i = 0; i < 32; i++) {
        ans <<= 1
        ans |= n & 1
        n >>= 1
    }

    return ans >>> 0
}
// @lc code=end

