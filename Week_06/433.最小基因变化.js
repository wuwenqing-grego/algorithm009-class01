/*
 * @lc app=leetcode.cn id=433 lang=javascript
 *
 * [433] 最小基因变化
 */

// @lc code=start
/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
// 1. BFS
var minMutation = function(start, end, bank) {
    const geneBank = new Map()
    for (let i = 0; i < bank.length; i++) {geneBank.set(bank[i], i)}
    if (!geneBank.has(end)) {return -1}

    let mutation = 0
    const queue = []
    const visited = []
    let index = geneBank.get(start)
    queue.push(start)
    if (index) {visited[index] = true}

    while (queue.length) {
        let currLevel = queue.length
        mutation++

        for (let i = 0; i < currLevel; i++) {
            let gene = queue.shift()
            let found = getTargetGene(gene, end, queue, geneBank, visited)
            if (found) {return mutation}
        }
    }

    return -1
};

let getTargetGene = function(gene, end, queue, geneBank, visited) {
    const elem = ['A', 'C', 'G', 'T']
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 4; j++) {
            let geneMutated = gene.substring(0, i) + elem[j] + gene.substring(i + 1)
            let index = geneBank.get(geneMutated)

            if (index != undefined && !visited[index]) {
                if (geneMutated == end) {
                    return true
                }

                queue.push(geneMutated)
                visited[index] = true
            }
        }
    }

    return false
}

// 2. 双向BFS
var minMutation = function(start, end, bank) {
    const geneBank = new Map()
    for (let i = 0; i < bank.length; i++) {geneBank.set(bank[i], i)}
    if (!geneBank.has(end)) {return -1}

    let mutation = 0
    let queueStart = []
    let visitedStart = []
    let queueEnd = []
    let visitedEnd = []
    
    queueStart.push(start)
    let index = geneBank.get(start)
    if (index) {visitedStart[index] = true}
    queueEnd.push(end)
    index = geneBank.get(end)
    visitedEnd[index] = true

    while (queueStart.length && queueEnd.length) {
        if (queueStart.length > queueEnd.length) {
            [queueStart, queueEnd] = [queueEnd, queueStart];
            [visitedStart, visitedEnd] = [visitedEnd, visitedStart];
        }

        let currLevel = queueStart.length
        mutation++

        for (let i = 0; i < currLevel; i++) {
            let gene = queueStart.shift()
            let found = getTargetGene(gene, queueStart, geneBank, visitedStart, visitedEnd)
            if (found) {return mutation}
        }
    }

    return -1
};

let getTargetGene = function(gene, queue, geneBank, visitedStart, visitedEnd) {
    const elem = ['A', 'C', 'G', 'T']
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 4; j++) {
            let geneMutated = gene.substring(0, i) + elem[j] + gene.substring(i + 1)
            let index = geneBank.get(geneMutated)

            if (index != undefined && !visitedStart[index]) {
                if (visitedEnd[index]) {
                    return true
                }

                queue.push(geneMutated)
                visitedStart[index] = true
            }
        }
    }

    return false
}
// @lc code=end

