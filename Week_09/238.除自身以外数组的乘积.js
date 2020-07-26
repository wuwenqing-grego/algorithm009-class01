/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 1. 左右乘积列表
var productExceptSelf = function(nums) {
    const len = nums.length
    const left = [1]
    const right = [1]
    const ans = []
    for (let i = 1; i < len; i++) {
        left[i] = left[i - 1] * nums[i - 1]
        right[i] = right[i - 1] * nums[len - i]
    }
    for (let i = 0; i < len; i++) {
        ans.push(left[i] * right[len - 1 - i])
    }

    return ans
};

// 2. 左右乘积，空间优化
var productExceptSelf = function(nums) {
    const len = nums.length
    const ans = [1]
    for (let i = 1; i < len; i++) {
        ans[i] = ans[i - 1] * nums[i - 1]
    }
    let right = 1
    for (let i = len - 2; i >= 0; i--) {
        right *= nums[i + 1]
        ans[i] *= right
    }

    return ans
};
// @lc code=end

