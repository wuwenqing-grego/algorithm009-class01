/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 1. 暴力枚举
var threeSum = function(nums) {
    const arr = []

    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] == 0) {
                    arr.push([nums[i], nums[j], nums[k]])
                }
            }
        }
    }

    return arr
};

// 2. 排序 + 左右夹逼
var threeSum = function(nums) {
    let arr = []
    let len = nums.length
    if (nums == null || len < 3) {
        return arr
    }

    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) {
            break
        }

        if (i > 0 && nums[i] == nums[i - 1]) {
            continue
        }

        let l = i + 1
        let r = len - 1

        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r]

            if (sum == 0) {
                arr.push([nums[i], nums[l], nums[r]])
                l++
                r--
                while (l < r && nums[l] == nums[l - 1]) {
                    l++
                }
                while (l < r && nums[r] == nums[r + 1]) {
                    r--
                }
            } else if (sum < 0) {
                l++
                while (l < r && nums[l] == nums[l - 1]) {
                    l++
                }
            } else if (sum > 0) {
                r--
                while (l < r && nums[r] == nums[r + 1]) {
                    r--
                }
            }
        }
    }

    return arr
}
// @lc code=end

