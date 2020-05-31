/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
// 1. 迭代解法
var addDigits = function(num) {
    let sum = num
    while (sum > 9) {
        sum = sumDigits(sum)
    }

    return sum
};

let sumDigits = function(n) {
    let sum = 0
    let num = n

    while (num != 0) {
        sum += num % 10
        num = Math.floor(num / 10)
    }

    return sum
}

// 2. 数学方法
var addDigits = function(num) {
    return (num - 1) % 9 + 1
}
// @lc code=end

