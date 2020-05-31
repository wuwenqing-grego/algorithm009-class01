/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
// 1. 暴力枚举
var fizzBuzz = function(n) {
    const arr = []

    for (let i = 1; i <= n; i++) {
        if (i % 15 == 0) {
            arr.push('FizzBuzz')
        } else if (i % 3 == 0) {
            arr.push('Fizz')
        } else if (i % 5 == 0) {
            arr.push('Buzz')
        } else {
            arr.push(`${i}`)
        }
    }

    return arr
};

// 2. 哈希表
var fizzBuzz = function(n) {
    const arr = []
    const map = new Map()
    map.set(3, 'Fizz')
    map.set(5, 'Buzz')

    for (let i = 1; i <= n; i++) {
        let str = ''

        map.forEach((value, key) => {
            if (i % key == 0) {
                str += value
            }
        })

        if (str == '') {
            str = `${i}`
        }

        arr.push(str)
    }

    return arr
}
// @lc code=end

