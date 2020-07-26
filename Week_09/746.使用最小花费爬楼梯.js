/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
// 1. 动态规划
var minCostClimbingStairs = function(cost) {
    const len = cost.length
    const dp = []
    dp[0] = 0
    dp[1] = Math.min(cost[0], cost[1])
    for (let i = 2; i < len; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i], dp[i - 2] + cost[i - 1])
    }

    return dp[len - 1]
};

// 2. 动态规划，空间优化
var minCostClimbingStairs = function(cost) {
    const len = cost.length
    let prev = 0
    let curr = Math.min(cost[0], cost[1])
    for (let i = 2; i < len; i++) {
        [prev, curr] = [curr, Math.min(curr + cost[i], prev + cost[i - 1])]
    }

    return curr
}
// @lc code=end

