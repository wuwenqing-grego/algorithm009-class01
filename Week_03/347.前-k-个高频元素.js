/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 1. 暴力排序
var topKFrequent = function(nums, k) {
    const map = new Map()
    const arr = []

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
        } else {
            map.set(nums[i], 1)
            arr.push(nums[i])
        }
    }

    arr.sort((a, b) => {
        return map.get(b) - map.get(a)
    })

    return arr
};

// 2. 小顶堆
var topKFrequent = function(nums, k) {
    const map = new Map()
    const arr = []
    const minHeap = new MinHeap(k, map)

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
        } else {
            map.set(nums[i], 1)
            arr.push(nums[i])
        }
    }

    for (let i = 0; i < arr.length; i++) {
        minHeap.push(arr[i])
    }

    return minHeap.heap
}

class MinHeap {
    constructor(k, map) {
        this.heap = []
        this.capacity = k
        this.map = map
    }

    push(value) {
        if (this.size() < this.capacity) {
            this.heap.push(value)
            this.heapifyUp()
        } else if (this.map.get(value) > this.min()) {
            this.pop()
            this.heap.push(value)
            this.heapifyUp()
        }
    }

    heapifyUp() {
        let index = this.size() - 1
        let parent = this.getParentIndex(index)

        while (index > 0 && this.freq(index) < this.freq(parent)) {
            this.swap(index, parent)
            index = parent
            parent = this.getParentIndex(index)
        }
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2)
    }

    pop() {
        this.swap(0, this.size() - 1)
        this.heap.pop()
        this.heapifyDown()
    }

    heapifyDown() {
        let index = 0
        let leftChild = this.getLeftChildIndex(index)
        let rightChild = this.getRightChildIndex(index)
        let child = 0

        while (leftChild < this.size()) {
            if (rightChild < this.size() && this.freq(rightChild) < this.freq(leftChild)) {
                child = rightChild
            } else {
                child = leftChild
            }

            if (this.freq(index) <= this.freq(child)) {
                break
            } else {
                this.swap(index, child)
                index = child
                leftChild = this.getLeftChildIndex(index)
                rightChild = this.getRightChildIndex(index)
            }
        }
    }

    getLeftChildIndex(index) {
        return 2 * index + 1
    }

    getRightChildIndex(index) {
        return 2 * index + 2
    }

    size() {
        return this.heap.length
    }

    min() {
        return this.freq(0)
    }

    freq(index) {
        return this.map.get(this.heap[index])
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
    }
}

// 3. 桶排序
var topKFrequent = function(nums, k) {
    const map = new Map()
    const arr = []
    const ans = []

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
        } else {
            map.set(nums[i], 1)
        }
    }

    map.forEach((value, key) => {
        if (arr[value] == undefined) {
            arr[value] = []
        }

        arr[value].push(key)
    })

    const len = arr.length
    for (let i = 1; ans.length < k; i++) {
        if (arr[len - i] == undefined) {
            continue
        }
        ans.push(...arr[len - i])
    }

    return ans
}
// @lc code=end

