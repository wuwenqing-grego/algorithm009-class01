/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
// 1. 回溯算法(Flood Fill: 洪水算法/网格类DFS)
var numIslands = function(grid) {
    let islands = 0
    const row = grid.length
    if (row == 0) {
        return islands
    }
    const col = grid[0].length
    if (col == 0) {
        return islands
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] == 1) {
                markIsland(grid, i, j, row, col)
                islands++
            }
        }
    }

    return islands
};

let markIsland = function(grid, i, j, row, col) {
    if (i == row || i == -1 || j == col || j == -1 || grid[i][j] != 1) {
        return
    }

    grid[i][j]++
    markIsland(grid, i + 1, j, row, col)
    markIsland(grid, i, j + 1, row, col)
    markIsland(grid, i - 1, j, row, col)
    markIsland(grid, i, j - 1, row, col)
}

// 2. 并查集
var numIslands = function(grid) {

}
// @lc code=end

