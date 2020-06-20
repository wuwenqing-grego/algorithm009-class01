/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 1. 暴力枚举
var maxSubArray = function(nums) {
    const len = nums.length
    let max = -Infinity

    for (let i = 0; i < len; i++) {
        let sum = 0
        for (let j = i; j < len; j++) {
            sum += nums[j]
            max = Math.max(sum, max)
        }
    }

    return max
};

// 2. 动态规划
var maxSubArray = function(nums) {
    const len = nums.length
    const maxSubStartWith = []
    maxSubStartWith[len - 1] = nums[len - 1]
    let max = nums[len - 1]

    for (let i = len - 2; i >= 0; i--) {
        maxSubStartWith[i] = Math.max(maxSubStartWith[i + 1] + nums[i], nums[i])
        max = Math.max(maxSubStartWith[i], max)
    }

    return max
}

// 3. 贪心算法，相当于正向的动态规划，sum为以当前元素结尾的最大子序列和
var maxSubArray = function(nums) {
    const len = nums.length
    let sum = nums[0]
    let max = sum

    for (let i = 1; i < len; i++) {
        sum = (sum > 0) ? sum + nums[i] : nums[i]
        max = (sum > max) ? sum : max
    }

    return max
}

// 4. 分治法
var maxSubArray = function(nums) {
    if (nums.length == 1) {
        return nums[0]
    }

    let left = 0
    let right = nums.length - 1
    let mid = Math.floor((left + right) / 2)

    let leftSum = maxSubArray(nums.slice(0, mid + 1))
    let rightSum = maxSubArray(nums.slice(mid + 1))
    let crossSum = maxCrossArray(nums, mid)

    return Math.max(leftSum, rightSum, crossSum)
}

let maxCrossArray = function(nums, mid) {
    let left = -Infinity
    let leftSum = 0
    for (let i = mid; i >= 0; i--) {
        leftSum += nums[i]
        left = Math.max(left, leftSum)
    }

    let right = -Infinity
    let rightSum = 0
    for (let i = mid + 1; i < nums.length; i++) {
        rightSum += nums[i]
        right = Math.max(right, rightSum)
    }

    return left + right
}
// @lc code=end

