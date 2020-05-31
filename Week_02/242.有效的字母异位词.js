/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 1. 哈希表
var isAnagram = function(s, t) {
    if (s.length != t.length) {
        return false
    }

    const len = s.length
    const map = new Map()

    for (let i = 0; i < len; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1)
        } else {
            map.set(s[i], 1)
        }

        if (map.has(t[i])) {
            map.set(t[i], map.get(t[i]) - 1)
        } else {
            map.set(t[i], -1)
        }
    }

    for (let value of map.values()) {
        if (value != 0) {
            return false
        }
    }

    return true
};

// 2. 排序
var isAnagram = function(s, t) {
    if (s.length != t.length) {
        return false
    }
    
    return s.split('').sort().join('') === t.split('').sort().join('')
}
// @lc code=end

