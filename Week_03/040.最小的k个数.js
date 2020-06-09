/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
// 1. 排序
var getLeastNumbers = function(arr, k) {
    if (arr.length == 0 || k == 0) {
        return []
    }

    arr.sort((a, b) => {
        return a - b
    })
    
    return arr.slice(0, k)
};

// 2. 大顶堆
var getLeastNumbers = function(arr, k) {
    if (arr.length == 0 || k == 0) {
        return []
    }

    const maxHeap = new MaxHeap(k)
    for (let i = 0; i < arr.length; i++) {
        maxHeap.insert(arr[i])
    }

    return maxHeap.heap
}

class MaxHeap {
    constructor(k) {
        this.heap = []
        this.capacity = k
    }

    insert(value) {
        if (this.size() < this.capacity) {
            this.heap.push(value)
            this.heapifyUp(this.size() - 1)
        } else if (value < this.max()) {
            this.extract()
            this.heap.push(value)
            this.heapifyUp(this.size() - 1)
        }
    }

    heapifyUp(index) {
        let parent = this.getParentIndex(index)

        while (index > 0 && this.heap[parent] < this.heap[index]) {
            this.swap(index, parent)
            index = parent
            parent = this.getParentIndex(index)
        }
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2)
    }

    extract() {
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
    }  

    heapifyDown(index) {
        let leftChild = this.getLeftChildIndex(index)
        let rightChild = this.getRightChildIndex(index)
        let child = 0

        while (leftChild < this.size()) {
            if (rightChild < this.size() && this.heap[rightChild] > this.heap[leftChild]) {
                child = rightChild
            } else {
                child = leftChild
            }

            if (this.heap[index] >= this.heap[child]) {
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

    max() {
        return this.heap[0]
    }

    size() {
        return this.heap.length
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
    }
}

// 3. 快排
var getLeastNumbers = function(arr, k) {
    const len = arr.length
    if (len == 0 || k == 0) {
        return []
    } else if (len == k) {
        return arr
    }

    quickSort(arr, 0, len - 1, k)

    return arr.slice(0, k)
}

let quickSort = function(arr, left, right, k) {
    let index = partition(arr, left, right)

    if (index == k) {
        return
    } else if (index < k) {
        quickSort(arr, index + 1, right, k)
    } else {
        quickSort(arr, left, index - 1, k)
    }
}

let partition = function(arr, left, right) {
    let pivot = arr[right]
    let j = left

    for (let i = left; i < right; i++) {
        if (arr[i] < pivot) {
            swap(arr, i, j)
            j++
        }
    }

    swap(arr, j, right)

    return j
}

let swap = function(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]]
}