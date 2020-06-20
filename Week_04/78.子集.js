/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 1. 回溯算法
var subsets = function(nums) {
    const subsets = []
    preorderTraverse(nums, [], subsets)

    return subsets
};

let preorderTraverse = function(nums, path, subsets) {
    if (!nums.length) {
        subsets.push(path)
        return
    }

    let pathCopy = [...path]
    pathCopy.push(nums[0])
    let numsCopy = [...nums]
    numsCopy.splice(0, 1)

    preorderTraverse(numsCopy, path, subsets)
    preorderTraverse(numsCopy, pathCopy, subsets)
}

// 2. 动态规划
var subsets = function(nums) {
    const len = nums.length
    const arr = [[]]

    for (let i = 0; i < len; i++) {
        let setLen = arr.length
        for (let j = 0; j < setLen; j++) {
            let copy = [...arr[j]]
            copy.push(nums[i])
            arr.push(copy)
        }
    }

    return arr
}
// @lc code=end

