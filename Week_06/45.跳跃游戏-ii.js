/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 1. 贪心算法，逆向
var jump = function(nums) {
    let index = nums.length - 1
    let jumps = 0
    
    while (index) {
        for (let i = 0; i < index; i++) {
            if (nums[i] >= index - i) {
                jumps++
                index = i
                break
            }
        }
    }
    
    return jumps
};

// 2. 贪心算法，正向
var jump = function(nums) {
    const len = nums.length
    let maxBorder = 0
    let end = 0
    let jumps = 0

    for (let i = 0; i < len - 1; i++) {
        maxBorder = Math.max(maxBorder, i + nums[i])

        if (i == end) {
            end = maxBorder
            jumps++
        }
    }

    return jumps
}
// @lc code=end

