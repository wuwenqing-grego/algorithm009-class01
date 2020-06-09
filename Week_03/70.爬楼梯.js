/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 1. 记忆递归
const mem = []
var climbStairs = function(n) {
    if (n == 1) {
        return 1
    }
    if (n == 2) {
        return 2
    }
    if (mem[n]) {
        return mem[n]
    }

    let num = climbStairs(n - 1) + climbStairs(n - 2)
    mem[n] = num
    return num
};

// 2. 斐波那契数列
var climbStairs = function(n) {
    const sqrt_5 = Math.sqrt(5)
    const fib_n = Math.pow((1 + sqrt_5) / 2, n + 1) - Math.pow((1 - sqrt_5) / 2,n + 1)
    
    return Math.round(fib_n / sqrt_5)
}

// 3. 动态规划
var climbStairs = function(n) {
    const arr = []
    arr[1] = 1
    arr[2] = 2

    for (let i = 3; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }

    return arr[n]
}
// @lc code=end

