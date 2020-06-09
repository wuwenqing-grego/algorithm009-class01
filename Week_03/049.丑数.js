/**
 * @param {number} n
 * @return {number}
 */
// 1. 动态规划
var nthUglyNumber = function(n) {
    const arr = new Array(n)
    arr[0] = 1
    let p2 = 0
    let p3 = 0
    let p5 = 0

    for (let i = 1; i < n; i++) {
        arr[i] = Math.min(arr[p2] * 2, arr[p3] * 3, arr[p5] * 5)

        if (arr[i] == arr[p2] * 2) {p2++}
        if (arr[i] == arr[p3] * 3) {p3++}
        if (arr[i] == arr[p5] * 5) {p5++}
    }

    return arr[n - 1]
};

// 2. 大顶堆
var nthUglyNumber = function(n) {

}