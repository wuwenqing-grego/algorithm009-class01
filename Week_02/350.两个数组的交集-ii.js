/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 1. 哈希表
var intersect = function(nums1, nums2) {
    const arr = []
    let map = {}

    if (nums1.length == 0 || nums2.length == 0) {
        return arr
    }

    for (let i = 0; i < nums1.length; i++) {
        if (map[nums1[i]] == undefined) {
            map[nums1[i]] = 1
        } else {
            map[nums1[i]]++
        }
    }

    for(let i = 0; i < nums2.length; i++) {
        if (map[nums2[i]] != undefined && map[nums2[i]] > 0) {
            arr.push(nums2[i])
            map[nums2[i]]--
        }
    }

    return arr
};

// 2. 排序 + 遍历
var intersect = function(nums1, nums2) {
    const arr = []

    if (nums1.length == 0 || nums2.length == 0) {
        return arr
    }

    nums1 = nums1.sort((a, b) => a - b)
    nums2 = nums2.sort((a, b) => a - b)

    let i = 0
    let j = 0
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            i++
        } else if (nums1[i] > nums2[j]) {
            j++
        } else if (nums1[i] == nums2[j]) {
            arr.push(nums1[i])
            i++
            j++
        }
    }

    return arr
}
// @lc code=end

