/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        if (!head) return false;
        let fast = head.next;
        let slow = head;

        while (fast && fast.next) {
            if (fast === slow) {
                return true;
            }

            fast = fast.next.next;
            slow = slow.next;
        }

        return false;
    }
}
