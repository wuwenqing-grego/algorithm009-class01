/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 1. 两次遍历
var moveZeroes = function(nums) {
    let j = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[j] = nums[i]
            j++
        }
    }

    for (let i = j; i < nums.length; i++) {
        nums[i] = 0
    }
};

// 2. 一次遍历
var moveZeroes = function(nums) {
    let j = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            if (i > j) {
                nums[j] = nums[i]
                nums[i] = 0
            }
            j++
        }
    }
};
// @lc code=end

