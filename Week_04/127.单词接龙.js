/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
// 1. BFS
var ladderLength = function(beginWord, endWord, wordList) {
    const len = wordList.length
    const visited = []
    const queue = []
    let count = 0

    const dict = new Map()
    for (let i = 0; i < len; i++) {
        dict.set(wordList[i], i)
    }

    queue.push(beginWord)
    let index = dict.get(beginWord)
    if (index != undefined) {
        visited[index] = true
    }

    while (queue.length) {
        count++
        let currLevelLen = queue.length

        for (let i = 0; i < currLevelLen; i++) {
            let word = queue.shift()
            let found = getWordNeighbours(queue, word, dict, visited, endWord)
            if (found) {
                return count + 1
            }
        }
    }

    return 0
};

let getWordNeighbours = function(queue, word, dict, visited, endWord) {
    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < 26; j++) {
            let wordModify = word.substring(0, i) + String.fromCharCode(97 + j) + word.substring(i + 1)
            let index = dict.get(wordModify)

            if (index != undefined && !visited[index]) {
                if (wordModify == endWord) {
                    return true
                }

                queue.push(wordModify)
                visited[index] = true
            }
        }
    }

    return false
}

// 2. 双端BFS
var ladderLength = function(beginWord, endWord, wordList) {
    const len = wordList.length
    let visitedBegin = []
    let visitedEnd = []
    let queueBegin = []
    let queueEnd = []
    let count = 0

    const dict = new Map()
    for (let i = 0; i < len; i++) {
        dict.set(wordList[i], i)
    }

    queueBegin.push(beginWord)
    let begin = dict.get(beginWord)
    if (begin != undefined) {visitedBegin[begin] = true}
    queueEnd.push(endWord)
    let end = dict.get(endWord)
    if (end != undefined) {
        visitedEnd[end] = true
    } else {
        return 0
    }

    while (queueBegin.length && queueEnd.length) {
        count++
        if (queueBegin.length > queueEnd.length) {
            [queueBegin, queueEnd] = [queueEnd, queueBegin];
            [visitedBegin, visitedEnd] = [visitedEnd, visitedBegin];
        }
        let currLevelLen = queueBegin.length

        for (let i = 0; i < currLevelLen; i++) {
            let word = queueBegin.shift()
            let found = getWordNeighbours(queueBegin, word, dict, visitedBegin, visitedEnd)
            if (found) {
                return count + 1
            }
        }
    }

    return 0
};

let getWordNeighbours = function(queueBegin, word, dict, visitedBegin, visitedEnd) {
    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < 26; j++) {
            let wordModify = word.substring(0, i) + String.fromCharCode(97 + j) + word.substring(i + 1)
            let index = dict.get(wordModify)

            if (index != undefined && !visitedBegin[index]) {
                if (visitedEnd[index]) {
                    return true
                }

                queueBegin.push(wordModify)
                visitedBegin[index] = true
            }
        }
    }

    return false
}
// @lc code=end

