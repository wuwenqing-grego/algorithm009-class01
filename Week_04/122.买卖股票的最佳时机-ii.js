/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// 1. 回溯算法
var maxProfit = function(prices) {
    return makeProfit(prices, null, 0)
};

let makeProfit = function(prices, buyInPrice, profit) {
    if (!prices.length) {
        return profit
    }

    if (buyInPrice != null) {
        let sell = (prices[0] > buyInPrice) ? makeProfit(prices.slice(1), null, profit + prices[0] - buyInPrice) : -1
        let notSell = makeProfit(prices.slice(1), buyInPrice, profit)

        return Math.max(sell, notSell)
    } else {
        let buy = makeProfit(prices.slice(1), prices[0], profit)
        let notBuy = makeProfit(prices.slice(1), buyInPrice, profit)

        return Math.max(buy, notBuy)
    }
}

// 2. 一维动态规划
var maxProfit = function(prices) {
    let len = prices.length
    if (len < 2) {
        return 0
    }

    const arr = [0]
    arr[1] = (prices[1] > prices[0]) ? prices[1] - prices[0] : 0

    for (let i = 2; i <= len; i++) {
        arr[i] = Math.max(prices[i] - prices[0], arr[i - 1])

        for (let j = 1; j < i; j++) {
            if (prices[i] <= prices[j]) {
                continue
            } else {
                arr[i] = Math.max(arr[i], arr[j - 1] + prices[i] - prices[j])
            }
        }
    }

    return arr[len - 1]
}

// 3. 二维动态规划
var maxProfit = function(prices) {
    let len = prices.length
    if (len < 2) {
        return 0
    }

    const profit = []
    for (let i = 0; i < len; i++) {
        profit[i] = []
    }

    profit[0][0] = 0
    profit[0][1] = -prices[0]

    for (let i = 1; i < len; i++) {
        profit[i][0] = Math.max(profit[i - 1][0], profit[i - 1][1] + prices[i])
        profit[i][1] = Math.max(profit[i - 1][1], profit[i - 1][0] - prices[i])
    }

    return profit[len - 1][0]
}

// 4. 贪心算法
var maxProfit = function(prices) {
    if (prices.length < 2) {
        return 0
    }

    let profit = 0
    for (let i = 1; i < prices.length; i++) {
        let temp = prices[i] - prices[i - 1]
        if (temp > 0) {
            profit += temp
        }
    }

    return profit
}
// @lc code=end

