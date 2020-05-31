/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 1. 暴力枚举
var maxSlidingWindow = function(nums, k) {
    const arr = []
    for (let i = 0; i < nums.length - k + 1; i++) {
        let max = -Infinity

        for (let j = i; j < i + k; j++) {
            max = Math.max(nums[j], max)
        }
        arr.push(max)
    }

    return arr
};

// 2. 单调队列
var maxSlidingWindow = function(nums, k) {
    const window = new MonoQueue(k)
    const arr = []

    for (let i = 0; i < nums.length; i++) {
        if (i < k - 1) {
            window.push(nums[i])
        } else {
            window.push(nums[i])
            arr.push(window.max())
            window.pop(nums[i - k + 1])
        }
    }

    return arr
}

class MonoQueue {
    constructor(len) {
        this.deque = new Array(len)
        this.front = 0
        this.count = 0
        this.capacity = len
    }

    push(value) {
        while (!this.isEmpty() && value > this.getRear()) {
            this.popRear()
        }
        this.deque[(this.front + this.count) % this.capacity] = value
        this.count++
    }

    popRear() {
        this.count--
    }

    pop(value) {
        if (!this.isEmpty() && value == this.deque[this.front]) {
            this.front = (this.front + 1) % this.capacity
            this.count--
        }
    }

    max() {
        return this.getFront()
    }

    getFront() {
        if (this.isEmpty()) {
            return -1
        }

        return this.deque[this.front]
    }

    getRear() {
        if (this.isEmpty()) {
            return -1
        }
        
        return this.deque[(this.front + this.count - 1) % this.capacity]
    }

    isEmpty() {
        return this.count == 0
    }
}
// @lc code=end

