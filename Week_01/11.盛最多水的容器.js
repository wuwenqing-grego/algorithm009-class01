/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// 1. 暴力枚举
var maxArea = function(height) {
    let max = -1
    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let area = (j - i) * Math.min(height[i], height[j])
            if (max < area) {
                max = area
            }
        }
    }

    return max
};

// 2. 左右夹逼
var maxArea = function(height) {
    let max = -1
    for (let i = 0, j = height.length - 1; i < j; ) {
        let minHeight = height[i] < height[j] ? height[i++] : height[j--]
        let area = minHeight * (j - i + 1)
        max = Math.max(max, area)
    }

    return max
};
// @lc code=end

