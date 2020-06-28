/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 1. 动态规划，逆向
var rob = function(nums) {
    const len = nums.length
    if (!len) {return 0}
    const money = []

    return dp(nums, len - 1, money)
};

let dp = function(nums, index, money) {
    if (!index) {return nums[0]}
    if (index < 0) {return 0}
    if (money[index] != undefined) {return money[index]}

    money[index] = Math.max(dp(nums, index - 1, money), dp(nums, index - 2, money) + nums[index])
    
    return money[index]
}

// 2. 动态规划，正向
var rob = function(nums) {
    const len = nums.length
    if (!len) {return 0}

    const dp = []
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])

    for (let i = 2; i < len; i++) [
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
    ]

    return dp[len - 1]
}

// 3. 动态规划，空间优化
var rob = function(nums) {
    const len = nums.length
    if (!len) {return 0}

    let prev = 0
    let curr = 0

    for (let i = 0; i < len; i++) {
        let temp = Math.max(prev + nums[i], curr)
        prev = curr
        curr = temp
    }

    return curr
}
// @lc code=end

