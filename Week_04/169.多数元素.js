/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 1. 哈希表
var majorityElement = function(nums) {
    const memo = new Map()
    const len = nums.length
    if (len == 1) {return nums[0]}
    
    for (let i = 0; i < len; i++) {
        if (memo.has(nums[i])) {
            let freq = memo.get(nums[i]) + 1
            if (freq > Math.floor(len / 2)) {
                return nums[i]
            }
            memo.set(nums[i], freq)
        } else {
            memo.set(nums[i], 1)
        }
    }
};

// 2. 排序
var majorityElement = function(nums) {
    nums.sort()
    return nums[Math.floor(nums.length / 2)]
}

// 3. 随机数
var majorityElement = function(nums) {
    const len = nums.length
    let lastValue = Infinity

    while (true) {
        let index = getRandomIndex(len)
        if (nums[index] == lastValue) {continue}

        let freq = count(nums, len, index)
        if (freq > Math.floor(len / 2)) {
            return nums[index]
        }

        lastValue = nums[index]
    }
}

let getRandomIndex = function(len) {
    return Math.floor(Math.random() * len)
}

let count = function(nums, len, index) {
    let freq = 0
    for (let i = 0; i < len; i++) {
        if (nums[i] == nums[index]) {
            freq++
        }
    }

    return freq
}

// 4. 摩尔投票法
var majorityElement = function(nums) {
    let count = 0
    let candidate = null

    for (let i = 0; i < nums.length; i++) {
        if (!count) {
            candidate = nums[i]
        }

        count += (candidate == nums[i]) ? 1 : -1
    }

    return candidate
}
// @lc code=end

