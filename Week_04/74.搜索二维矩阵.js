/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 1. 二分查找
var searchMatrix = function(matrix, target) {
    const row = matrix.length
    if (!row) {return false}
    const col = matrix[0].length
    if (!col) {return false}
    
    let left = 0
    let right = row * col - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        let i = Math.floor(mid / col)
        let j = mid % col

        if (matrix[i][j] > target) {
            right = mid - 1
        } else if (matrix[i][j] < target) {
            left = mid + 1
        } else {
            return true
        }
    }

    return false
};
// @lc code=end

