/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
// 1. 迭代解法
var reverseList = function(head) {
    let prev = null
    let curr = head

    while (curr != null) {
        let temp = curr.next
        curr.next = prev

        prev = curr
        curr = temp
    }

    return prev
};

// 2. 递归解法
var reverseList = function(head) {
    if (head == null || head.next == null) {
        return head
    }

    let newHead = reverseList(head.next)
    head.next.next = head
    head.next = null

    return newHead
}
// @lc code=end

