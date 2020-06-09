/**
 * @param {number} k
 * @return {number}
 */
// 1. 动态规划
var getKthMagicNumber = function(k) {
    const arr = []
    arr[0] = 1

    let p3 = 0
    let p5 = 0
    let p7 = 0

    for (let i = 1; i < k; i++) {
        arr[i] = Math.min(arr[p3] * 3, arr[p5] * 5, arr[p7] * 7)

        if (arr[i] == arr[p3] * 3) {p3++}
        if (arr[i] == arr[p5] * 5) {p5++}
        if (arr[i] == arr[p7] * 7) {p7++}
    }

    return arr[k - 1]
};