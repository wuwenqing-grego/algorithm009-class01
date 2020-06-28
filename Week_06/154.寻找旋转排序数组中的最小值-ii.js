/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 1. 暴力枚举
var findMin = function(nums) {
    const len = nums.length
    if (len == 1) {return nums[0]}

    for (let i = 0; i < len - 1; i++) {
        if (nums[i] == nums[i + 1]) {continue}
        if (nums[i] > nums[i + 1]) {
            return nums[i + 1]
        }
    }

    return nums[0]
};

// 2. 二分查找
var findMin = function(nums) {
    const len = nums.length
    let left = 0
    let right = len - 1

    while (left < right) {
        let mid = Math.floor((left + right) / 2)

        if (nums[mid] > nums[right]) {
            left = mid + 1
        } else if (nums[mid] < nums[right]) {
            right = mid
        } else {
            right--
        }
    }

    return nums[left]
}
// @lc code=end

