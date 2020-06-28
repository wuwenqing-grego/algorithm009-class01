/*
 * @lc app=leetcode.cn id=363 lang=javascript
 *
 * [363] 矩形区域不超过 K 的最大数值和
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
// 1. 暴力枚举 + 前缀和预处理
var maxSumSubmatrix = function(matrix, k) {
    const row = matrix.length
    if (!row) {return 0}
    const col = matrix[0].length
    if (!col) {return 0}
    let ans = -Infinity

    const prefix = []
    for (let i = 0; i < row; i++) {
        prefix[i] = [0]
        for (let j = 1; j <= col; j++) {
            prefix[i][j] = prefix[i][j - 1] + matrix[i][j - 1]
        }
    }

    for (let left = 0; left < col; left++) {
        for (let right = left; right < col; right++) {
            let rowSum = []
            for (let i = 0; i < row; i++) {
                rowSum[i] = prefix[i][right + 1] - prefix[i][left]
            }

            ans = Math.max(ans, maxSum(rowSum, k))
        }
    }

    return ans
};

let maxSum = function(rowSum, k) {
    const len = rowSum.length
    let max = -Infinity
    let sum = [0]

    for (let i = 1; i <= len; i++) {
        sum[i] = sum[i - 1] + rowSum[i - 1]
    }

    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            let temp = sum[j + 1] - sum[i]
            if (temp <= k) {max = Math.max(max, temp)}
        }
    }

    return max
}

// 2. 暴力枚举 + 前缀和预处理 + 最大子序和
var maxSumSubmatrix = function(matrix, k) {
    const row = matrix.length
    if (!row) {return 0}
    const col = matrix[0].length
    if (!col) {return 0}
    let ans = -Infinity

    const prefix = []
    for (let i = 0; i < row; i++) {
        prefix[i] = [0]
        for (let j = 1; j <= col; j++) {
            prefix[i][j] = prefix[i][j - 1] + matrix[i][j - 1]
        }
    }

    for (let left = 0; left < col; left++) {
        for (let right = left; right < col; right++) {
            let rowSum = []
            for (let i = 0; i < row; i++) {
                rowSum[i] = prefix[i][right + 1] - prefix[i][left]
            }

            ans = Math.max(ans, maxSum(rowSum, k))
        }
    }

    return ans
};

let maxSum = function(rowSum, k) {
    let maxSub = maxSubArray(rowSum, k)
    if (maxSub <= k) {return maxSub}

    const len = rowSum.length
    let max = -Infinity
    let sum = [0]

    for (let i = 1; i <= len; i++) {
        sum[i] = sum[i - 1] + rowSum[i - 1]
    }

    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            let temp = sum[j + 1] - sum[i]
            if (temp <= k) {max = Math.max(max, temp)}
        }
    }

    return max
}

let maxSubArray = function(rowSum, k) {
    const len = rowSum.length
    let sum = rowSum[0]
    let max = sum

    for (let i = 1; i < len; i++) {
        sum = (sum > 0) ? sum + rowSum[i] : rowSum[i]
        max = (sum > max) ? sum : max
    }

    return (max <= k) ? max : k + 1
}
// @lc code=end

