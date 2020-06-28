/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 1. 动态规划
var rob = function(nums) {
    const len = nums.length
    if (!len) {return 0}
    if (len < 4) {return Math.max(...nums)}

    return Math.max(nums[0] + robStreet(nums.slice(2, len - 1)), robStreet(nums.slice(1)))
};

let robStreet = function(nums) {
    let prev = 0
    let curr = 0

    for (let i = 0; i < nums.length; i++) {
        let temp = Math.max(prev + nums[i], curr)
        prev = curr
        curr = temp
    }

    return curr
}
// @lc code=end

