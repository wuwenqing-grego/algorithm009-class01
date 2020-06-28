/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// 1. 动态规划，逆向
var coinChange = function(coins, amount) {
    const coinNum = []

    return dp(coins, amount, coinNum)
};

let dp = function(coins, amount, coinNum) {
    if (!amount) {return 0}
    if (amount < 0) {return -1}
    if (coinNum[amount]) {return coinNum[amount]}

    let min = Infinity
    for (let i = 0; i < coins.length; i++) {
        let temp = dp(coins, amount - coins[i], coinNum)
        if (temp < 0) {continue}
        min = Math.min(min, temp)
    }

    coinNum[amount] = (min == Infinity) ? -1 : min + 1

    return coinNum[amount]
}

// 2. 动态规划，正向
var coinChange = function(coins, amount) {
    const dp = [0]
    for (let i = 1; i <= amount; i++) {dp[i] = amount + 1}

    for (let i = 1; i <= amount; i++) {
        for (let j = 0 ; j < coins.length; j++) {
            let temp = i - coins[j]
            if (temp < 0) {continue}
            dp[i] = Math.min(dp[i], dp[temp] + 1)
        }
    }

    return (dp[amount] == amount + 1) ? -1 : dp[amount]
}
// @lc code=end

