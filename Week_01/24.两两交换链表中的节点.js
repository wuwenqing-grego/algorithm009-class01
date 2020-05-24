/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 1. 递归解法
var swapPairs = function(head) {
    if (head == null || head.next == null) {
        return head
    }

    let nextNode = head.next
    head.next = swapPairs(nextNode.next)
    nextNode.next = head

    return nextNode
};

// 2. 迭代解法
var swapPairs = function(head) {
    let thead = new ListNode(0)
    thead.next = head
    let tmp = thead

    while (tmp.next != null && tmp.next.next != null) {
        let first  = tmp.next
        let second = tmp.next.next

        tmp.next = first.next
        first.next = second.next
        second.next = first
        tmp = first
    }

    return thead.next
}
// @lc code=end

