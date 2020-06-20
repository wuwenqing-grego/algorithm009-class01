/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// 1. 快速幂 + 递归
var myPow = function(x, n) {
    return (n >= 0) ? quickPow(x, n) : 1 / quickPow(x, -n)
};

let quickPow = function(x, n) {
    if (n == 0) {
        return 1
    }

    let temp = quickPow(x, Math.floor(n / 2))
    let pow = (n % 2 == 0) ? temp * temp : temp * temp * x

    return pow
}

// 2. 快速幂 + 迭代
var myPow = function(x, n) {
    if (n == -2147483648) {
        return myPow(x, n + 1) / x
    }

    return (n >= 0) ? quickPow(x, n) : 1 / quickPow(x, -n)
}

let quickPow = function(x, n) {
    let pow = 1
    let x_contribute = x

    while (n > 0) {
        if (n & 1 == 1) {
            pow *= x_contribute
        }

        x_contribute *= x_contribute
        n = n >> 1
    }

    return pow
}
// @lc code=end

