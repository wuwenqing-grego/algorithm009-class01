/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 1. 利用Set去重
var containsDuplicate = function(nums) {
    return !(nums.length === [...new Set(nums)].length)
};

// 2. 哈希表
var containsDuplicate = function(nums) {
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            return true
        } else {
            map.set(nums[i], 1)
        }
    }

    return false
}

// 3. 排序
var containsDuplicate = function(nums) {
    nums.sort()

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] == nums[i + 1]) {
            return true
        }
    }

    return false
}
// @lc code=end

