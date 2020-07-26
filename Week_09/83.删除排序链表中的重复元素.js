/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
// 1. 双指针
var deleteDuplicates = function(head) {
    if (!head || !head.next) {return head}
    let prev = head
    let curr = head.next
    while (prev && curr) {
        while (curr && curr.val == prev.val) {
            curr = curr.next
        }
        prev.next = curr
        prev = curr
        curr = curr ? curr.next : curr
    }

    return head
};

// 2. 单指针
var deleteDuplicates = function(head) {
    let curr = head
    while (curr && curr.next) {
        if (curr.val == curr.next.val) {
            curr.next = curr.next.next
        } else {
            curr = curr.next
        }
    }

    return head
};
// @lc code=end

