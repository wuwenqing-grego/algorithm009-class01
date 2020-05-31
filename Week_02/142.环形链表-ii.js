/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
// 1. 哈希表
var detectCycle = function(head) {
    let map = new Map()
    let curr = head

    while (curr != null) {
        if (map.has(curr)) {
            return curr
        } else {
            map.set(curr, 1)
            curr = curr.next
        }
    }

    return null
};

// 2. 快慢指针
var detectCycle = function(head) {
    let fast = head
    let slow = head
    let start = head

    while (fast != null && fast.next != null) {
        fast = fast.next.next
        slow = slow.next
        
        if (fast == slow) {
            while (fast != start) {
                fast = fast.next
                start = start.next
            }

            return start
        }
    }

    return null
}
// @lc code=end

