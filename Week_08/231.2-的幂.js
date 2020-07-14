/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
// 1. 位运算，减一
var isPowerOfTwo = function(n) {
    return n > 0 && (n & (n - 1)) == 0
};

// 2. 取模
var isPowerOfTwo = function(n) {
    if (n <= 0) {return false}
    while (n % 2 == 0) {n /= 2}
    return n == 1
};

// 3. 位运算，取反
var isPowerOfTwo = function(n) {
    return n > 0 && (n & -n) == n
}
// @lc code=end

