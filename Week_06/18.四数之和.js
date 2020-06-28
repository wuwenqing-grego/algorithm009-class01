/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// 1. 排序 + 双指针，注意去重与剪枝
var fourSum = function(nums, target) {
    const len = nums.length
    const ans = []
    if (len < 4) {return ans}
    
    nums.sort((a, b) => a - b)
    
    for (let i = 0; i < len - 3; i++) {
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {break}
        
        if (i > 0 && nums[i] == nums[i - 1]) {continue}
        
        let targetOfThree = target - nums[i]
        
        for (let j = i + 1; j < len - 2; j++) {
            if (nums[j] + nums[j + 1] + nums[j + 2]> targetOfThree) {break}
            
            if (j > i + 1 && nums[j] == nums[j - 1]) {continue}
            
            let targetOfTwo = targetOfThree - nums[j]
            let left = j + 1
            let right = len - 1
            
            while (left < right) {
                let sum = nums[left] + nums[right]
                
                if (sum == targetOfTwo) {
                    ans.push([nums[i], nums[j], nums[left], nums[right]])
                    left++
                    right--
                    while (left < right && nums[left] == nums[left - 1]) {left++}
                    while (left < right && nums[right] == nums[right + 1]) {right--}
                } else if (sum < targetOfTwo) {
                    left++
                    while (left < right && nums[left] == nums[left - 1]) {left++}
                } else {
                    right--
                    while (left < right && nums[right] == nums[right + 1]) {right--}
                }
            }
        }
    }
    
    return ans
};
// @lc code=end

