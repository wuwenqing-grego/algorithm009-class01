/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
// 1. 快慢指针
var hasCycle = function(head) {
    let fast = head
    let slow = head

    while (fast != null && fast.next != null) {
        fast = fast.next.next
        slow = slow.next

        if (fast == slow) {
            return true
        }
    }

    return false
};

// 2. 哈希表
var hasCycle = function(head) {
    let map = new Map()
    let curr = head

    while (curr != null) {
        if (map.has(curr)) {
            return true
        } else {
            map.set(curr, 1)
            curr = curr.next
        }
    }

    return false
}
// @lc code=end

