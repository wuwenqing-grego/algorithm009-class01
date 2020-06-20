/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
// 1. 贪心算法
var lemonadeChange = function(bills) {
    const cash = [0, 0]

    for (let i = 0; i < bills.length; i++) {
        switch (bills[i]) {
            case 5:
                cash[0]++
                break
            case 10:
                if (cash[0] > 0) {
                    cash[0]--
                    cash[1]++
                } else {
                    return false
                }

                break
            case 20:
                if (cash[0] > 0 && cash[1] > 0) {
                    cash[0]--
                    cash[1]--
                } else if (cash[0] > 2) {
                    cash[0] -= 3
                } else {
                    return false
                }

                break
        }
    }

    return true
};
// @lc code=end

