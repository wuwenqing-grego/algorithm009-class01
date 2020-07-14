/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
// 1. 遍历
var hammingWeight = function(n) {
    let weight = 0
    for (let i = 0; i < 32; i++) {
        weight += (n & 1)
        n >>= 1
    }

    return weight
};

// 2. 位掩码
var hammingWeight = function(n) {
    let weight = 0
    let mask = 1
    for (let i = 0; i < 32; i++) {
        if (n & mask) {weight++}
        mask <<= 1
    }

    return weight
};

// 3. 位运算，减一
var hammingWeight = function(n) {
    let weight = 0
    while (n) {
        n &= n - 1
        weight++
    }

    return weight
};
// @lc code=end

