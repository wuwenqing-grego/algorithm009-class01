/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
// 1. 动态规划
var plusOne = function(digits) {
    let l = digits.length
    if (l == 0) {
        return [1]
    }
    if (digits[l - 1] < 9) {
        digits[l - 1] += 1
        return digits
    } else {
        digits.pop()
        let newDigits = plusOne(digits)
        newDigits.push(0)
        return newDigits
    }
};

// 2. 循环展开
var plusOne = function(digits) {
    let l = digits.length

    for (let i = l - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++
            return digits
        } else {
            digits[i] = 0
        }
    }

    digits.unshift(1)
    return digits
}
// @lc code=end

