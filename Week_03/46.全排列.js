/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 1. 递归解法
var permute = function(nums) {
    let len = nums.length
    if (len == 1) {
        return [nums]
    }

    let lastNum = nums.pop()
    let perm = permute(nums)
    let arr = []

    for (let i = 0; i < perm.length; i++) {
        for (let j = 0; j <= len - 1; j++) {
            let copy = [...perm[i]]
            copy.splice(j, 0, lastNum)
            arr.push(copy)
        }
    }

    return arr
}

// 2. 动态规划
var permute = function(nums) {
    const len = nums.length
    const arr = []
    arr[0] = [[nums[0]]]

    for (let n = 1; n < len; n++) {
        arr[n] = []

        for (let i = 0; i < arr[n - 1].length; i++) {
            for (let j = 0; j <= n; j++) {
                let copy = [...arr[n - 1][i]]
                copy.splice(j, 0, nums[n])
                arr[n].push(copy)
            }
        }
    }

    return arr[len - 1]
};

// 3. 回溯算法
var permute = function(nums) {
    const arr = []
    preorderTraverse(nums, [], arr)

    return arr
}

let preorderTraverse = function(nums, path, arr) {
    if (!nums.length) {
        arr.push(path)
        return
    }

    for (let i = 0; i < nums.length; i++) {
        let copyNums = [...nums]
        copyNums.splice(i, 1)
        let copyPath = [...path]
        copyPath.push(nums[i])

        preorderTraverse(copyNums, copyPath, arr)
    }
}
// @lc code=end

