/*
 * @lc app=leetcode.cn id=874 lang=javascript
 *
 * [874] 模拟行走机器人
 */

// @lc code=start
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
// 1. 逐步检测，哈希表记录障碍坐标
var robotSim = function(commands, obstacles) {
    let origin = [0, 0]
    const dx = [0, 1, 0, -1]
    const dy = [1, 0, -1, 0]
    let dir = 0
    let maxRadius = 0

    const obstMap = new Map()
    for (let i = 0; i < obstacles.length; i++) {
        obstMap.set(obstacles[i].toString(), 1)
    }

    for (let i = 0; i < commands.length; i++) {
        if (commands[i] < 0) {
            dir = (dir + (2 * commands[i] + 7)) % 4
            continue
        }

        origin = runCommand(commands[i], dx[dir], dy[dir], obstMap, origin)
        maxRadius = Math.max(maxRadius, origin[0] ** 2 + origin[1] ** 2)
    }

    return maxRadius
};

let runCommand = function(dist, dx, dy, obstMap, origin) {
    for (let i = 0; i < dist; i++) {
        if (obstMap.has([origin[0] + dx, origin[1] + dy].toString())) {
            return origin
        }

        origin = [origin[0] + dx, origin[1] + dy]
    }

    return origin
}
// @lc code=end

