/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
// 1. 暴力解法
var reversePrint = function(head) {
    const arr = []
    while (head != null) {
        arr.push(head.val)
        head = head.next
    }

    return arr.reverse()
}

// 2. 递归解法
var reversePrint = function(head) {
    if (head == null) {
        return []
    }

    const arr = []
    reverseList(arr, head)
    
    return arr
};

let reverseList = function(arr, head) {
    if (head.next == null) {
        arr.push(head.val)
        return
    }

    reverseList(arr, head.next)
    arr.push(head.val)
};

// 3. 辅助栈
var reversePrint = function(head) {
    const arr = []
    const stack = []

    while (head != null) {
        stack.push(head.val)
        head = head.next
    }

    while (stack.length) {
        arr.push(stack.pop())
    }

    return arr
}