/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 朋友圈
 */

// @lc code=start
/**
 * @param {number[][]} M
 * @return {number}
 */
// 1. DFS
var findCircleNum = function(M) {
    const len = M.length
    if (!len) {return 0}

    const visited = []
    let circle = 0
    for (let i = 0; i < len; i++) {
        if (!visited[i]) {
            dfs(i, M, len, visited)
            circle++
        }
    }

    return circle
};

let dfs = function(index, M, len, visited) {
    visited[index] = true

    for (let i = 0; i < len; i++) {
        if (M[index][i] && !visited[i]) {
            if (i == index) {continue}
            dfs(i, M, len, visited)
        }
    }
}

// 2. BFS
var findCircleNum = function(M) {
    const len = M.length
    if (!len) {return 0}

    const visited = []
    let circle = 0
    for (let i = 0; i < len; i++) {
        if (!visited[i]) {
            bfs(i, M, visited, len)
            circle++
        }
    }

    return circle
}

let bfs = function(i, M, visited, len) {
    const queue = []
    queue.push(i)
    visited[i] = true

    while (queue.length) {
        let index = queue.shift()

        for (let j = 0; j < len; j++) {
            if (M[index][j] && !visited[j]) {
                if (j == index) {continue}
                queue.push(j)
                visited[j] = true
            }
        }
    }
}

// 3. Union Find
var findCircleNum = function(M) {

}
// @lc code=end

