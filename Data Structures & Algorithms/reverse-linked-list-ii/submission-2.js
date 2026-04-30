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
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
        // Go to leftmost
        let dummy = new ListNode(0, head);
        let before = dummy;
        for (let i = 0; i < left - 1; i++) {
            before = before.next;
        }

        let prev = null;
        let cur = before.next;
        let tail = cur;
        let swaps = right - left + 1;
        for (let i = 0; i < swaps; i++) {
            let temp = cur.next;
            cur.next = prev;
            prev = cur;
            cur = temp;
        }

        before.next = prev;
        tail.next = cur;

        return dummy.next;
    }

}
