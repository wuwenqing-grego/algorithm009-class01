/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
// 1. 暴力枚举
var largestRectangleArea = function(heights) {
    let max = 0

    for (let i = 0; i < heights.length; i++) {
        let area = maxWidth(heights, i) * heights[i]
        max = Math.max(area, max)
    }

    return max
};

let maxWidth = function(heights, i) {
    let left = i
    let right = i

    while (left > 0 && heights[left - 1] >= heights[i]) {
        left--
    }
    while (right < heights.length - 1 && heights[right + 1] >= heights[i]) {
        right++
    }

    return right - left + 1
}

// 2. 单调栈
var largestRectangleArea = function(heights) {
    let h = heights
    h.unshift(0)
    h.push(0)
    const stack = new MonoStack(h)

    for (let i = 1; i < h.length; i++) {
        stack.push(i)
    }

    return stack.maxArea
}

class MonoStack {
    constructor(h) {
        this.heights = h
        this.arr = [0]
        this.maxArea = 0
    }

    push(i) {
        while (this.heights[i] < this.heights[this.peek()]) {
            this.pop(i)
        }

        this.arr.push(i)
    }

    pop(i) {
        let top = this.arr.pop()
        let area = this.heights[top] * (i - this.peek() - 1)
        this.maxArea = Math.max(this.maxArea, area)
    }

    peek() {
        return this.arr[this.arr.length - 1]
    }
}
// @lc code=end

