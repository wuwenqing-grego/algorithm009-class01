/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const len = s.length
    if (len % 2) {
        return false
    }

    const map = new Map()
    map.set(')', '(')
    map.set('}', '{')
    map.set(']', '[')

    const stack = new Stack(len)
    for (let i = 0; i < len; i++) {
        if (map.has(s[i])) {
            if (stack.peek() != map.get(s[i])) {
                return false
            } else {
                stack.pop()
            }
        } else {
            stack.push(s[i])
        }
    }

    if (stack.isEmpty()) {
        return true
    } else {
        return false
    }
};

class Stack {
    constructor(len) {
        this.arr = new Array(len)
        this.count = 0
    }

    push(value) {
        this.arr[this.count] = value
        this.count++
    }

    pop() {
        this.count--
    }

    peek() {
        return this.arr[this.count - 1]
    }

    isEmpty() {
        return this.count == 0
    }
}
// @lc code=end

