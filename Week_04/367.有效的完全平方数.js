/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
// 1. 暴力枚举
var isPerfectSquare = function(num) {
    for (let i = 1; i * i <= num; i++) {
        if (i * i == num) {
            return true
        }
    }

    return false
};

// 2. 二分查找
var isPerfectSquare = function(num) {
    let left = 1
    let right = num

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (mid * mid == num) {
            return true
        } else if (mid * mid < num) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return false
}

// 3. 数学方法
var isPerfectSquare = function(num) {
    let oddNum = 1
    while (num > 0) {
        num -= oddNum
        oddNum += 2
    }

    return num == 0
}

// 4. 牛顿迭代法
var isPerfectSquare = function(num) {
    let root = num
    while (root * root > num) {
        root = Math.floor((root + num / root) / 2)
    }

    return root * root == num
}
// @lc code=end

