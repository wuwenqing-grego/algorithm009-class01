/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 1. 暴力枚举
var findMin = function(nums) {
    const len = nums.length
    if (len == 1) return nums[0]

    for (let i = 0; i < len - 1; i++) {
        if (nums[i + 1] < nums[i]) {
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

    while (left <= right) {
        if (nums[left] <= nums[right]) {
            return nums[left]
        }
        
        let mid = Math.floor((left + right) / 2)

        if (nums[left] <= nums[mid]) {
            left = mid + 1
        } else {
            right = mid
        }
    }
}

// 3. 二分查找，向右比较
var findMin = function(nums) {
    const len = nums.length
    let left = 0
    let right = len - 1

    while (left < right) {
        let mid = Math.floor((left + right) / 2)

        if (nums[mid] < nums[right]) {
            right = mid
        } else if (nums[mid] > nums[right]) {
            left = mid + 1
        }
    }

    return nums[left]
}
// @lc code=end

