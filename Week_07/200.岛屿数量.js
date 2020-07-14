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

// 2. DFS
var numIslands = function(grid) {
    const row = grid.length
    if (!row) {return 0}
    const col = grid[0].length
    if (!col) {return 0}

    let islands = 0
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] == 1) {
                islands++
                markIsland(grid, i, j, row, col, directions)
            }   
        }
    }

    return islands
};

let markIsland = function(grid, i, j, row, col, directions) {
    if (i == -1 || j == -1 || i == row || j == col || grid[i][j] != 1) {
        return
    }

    grid[i][j]++
    for (let k = 0; k < 4; k++) {
        markIsland(grid, i + directions[k][0], j + directions[k][1], row, col, directions)
    }
}

// 3. BFS
var numIslands = function(grid) {
    const row = grid.length
    if (!row) {return 0}
    const col = grid[0].length
    if (!col) {return 0}

    let islands = 0
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] == 1) {
                islands++
                markIsland(grid, i, j, row, col, directions)
            }   
        }
    }

    return islands
};

let markIsland = function(grid, i, j, row, col, directions) {
    const queue = []
    queue.push([i, j])
    grid[i][j]++

    while (queue.length) {
        let [x, y] = queue.shift()
        for (let k = 0; k < 4; k++) {
            let newX = x + directions[k][0]
            let newY = y + directions[k][1]

            if (newX == -1 || newY == -1 || newX == row || newY == col || grid[newX][newY] != 1) {
                continue
            }

            queue.push([newX, newY])
            grid[newX][newY]++
        }
    }
}

// 4. 并查集
var numIslands = function(grid) {

}
// @lc code=end

