/*
 * @lc app=leetcode.cn id=299 lang=javascript
 *
 * [299] 猜数字游戏
 */

// @lc code=start
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
// 1. 一个桶遍历
var getHint = function(secret, guess) {
    const bucket = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let bull = 0
    let cow = 0

    for (let i = 0; i < secret.length; i++) {
        if (secret[i] == guess[i]) {
            bull++
        } else {
            bucket[secret[i] - '0']++
            bucket[guess[i] - '0']--
        }
    }

    for (let i = 0; i < 10; i++) {
        if (bucket[i] > 0) {
            cow += bucket[i]
        }
    }

    cow = secret.length - bull - cow

    return `${bull}A${cow}B`
};

// 2. 哈希存储
var getHint = function(secret, guess) {
    let bull = 0
    let cow = 0
    let map = new Map()
    let noBullGuess = ''

    for (let i = 0; i < secret.length; i++) {
        let s = secret[i]
        let g = guess[i]
        if (s == g) {
            bull++
        } else {
            if (map.has(s)) {
                map.set(s, map.get(s) + 1)
            } else {
                map.set(s, 1)
            }

            noBullGuess += g
        }
    }

    for (let i = 0; i < noBullGuess.length; i++) {
        let n = noBullGuess[i]
        if (map.has(n) && map.get(n) > 0) {
            cow++
            map.set(n, map.get(n) - 1)
        }
    }

    return `${bull}A${cow}B`
}
// @lc code=end

