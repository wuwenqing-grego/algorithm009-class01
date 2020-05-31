/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
// 1. 非同步辅助栈法
var MinStack = function() {
    this.stack = []
    this.monoStack = [Infinity]
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x)

    if (x <= this.monoStack[this.monoStack.length - 1]) {
        this.monoStack.push(x)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.stack.pop() == this.monoStack[this.monoStack.length - 1]) {
        this.monoStack.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.monoStack[this.monoStack.length - 1]
};

// 2. 同步辅助栈法
var MinStack = function() {
    this.stack = []
    this.monoStack = [Infinity]
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x)
    this.monoStack.push(Math.min(x, this.monoStack[this.monoStack.length - 1]))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
    this.monoStack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.monoStack[this.monoStack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

