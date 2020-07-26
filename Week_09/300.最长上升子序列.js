/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 1. 动态规划
var lengthOfLIS = function(nums) {
    const len = nums.length
    if (!len) {return 0}

    const dp = [1]
    let maxLIS = 1
    for (let i = 1; i < len; i++) {
        let prev = 0
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                prev = Math.max(prev, dp[j])
            }
        }
        dp[i] = prev + 1
        maxLIS = Math.max(maxLIS, dp[i])
    }

    return maxLIS
};

// 2. 动态规划 + 二分查找，tail[i]为长度为i+1的最小末尾
var lengthOfLIS = function(nums) {
    const len = nums.length
    if (!len) {return 0}

    const tail = [nums[0]]
    for (let i = 0; i < len; i++) {
        if (nums[i] > tail[tail.length - 1]) {
            tail.push(nums[i])
        } else {
            let index = binarySearch(tail, nums[i])
            tail[index] = nums[i]
        }
    }

    return tail.length
}

let binarySearch = function(tail, num) {
    let left = 0
    let right = tail.length - 1
    while (left < right) {
        let mid = (left + right) >> 1
        if (tail[mid] < num) {
            left = mid + 1
        } else {
            right = mid
        }
    }

    return left
}
// @lc code=end

