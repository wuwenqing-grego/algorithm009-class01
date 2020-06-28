/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 1. 二分查找
var search = function(nums, target) {
    const len = nums.length
    let left = 0
    let right = len - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (nums[mid] == target) {
            return mid
        } else if (nums[left] <= nums[mid]) {
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else if (nums[left] > nums[mid]) {
            if (target <= nums[right] && target > nums[mid]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }

    return -1
};

// 2. 找出旋转点 + 二分查找
var search = function(nums, target) {
    let index = findMin(nums)

    if (target >= nums[0] && target <= nums[index - 1]) {
        return binarySearch(nums.slice(0, index), target)
    } else {
        let temp = binarySearch(nums.slice(index), target)
        return (temp == -1) ? -1 : temp + index
    }
}

let findMin = function(nums) {
    const len = nums.length
    let left = 0
    let right = len - 1

    while (left <= right) {
        if (nums[left] <= nums[right]) {
            return left
        }

        let mid = Math.floor((left + right) / 2)

        if (nums[left] <= nums[mid]) {
            left = mid + 1
        } else {
            right = mid
        }
    }
}

let binarySearch = function(arr, target) {
    const len = arr.length
    let left = 0
    let right = len - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (arr[mid] == target) {
            return mid
        } else if (arr[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return -1
}
// @lc code=end

