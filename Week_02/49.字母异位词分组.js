/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// 1. 排序 + 哈希表
var groupAnagrams = function(strs) {
    const map = new Map()
    for (let i = 0; i < strs.length; i++) {
        let strID = sorted(strs[i])
        if (map.has(strID)) {
            map.get(strID).push(strs[i])
        } else {
            map.set(strID, [strs[i]])
        }
    }

    return [...map.values()]
};

let sorted = function(str) {
    return str.split('').sort().join('')
}
// @lc code=end

