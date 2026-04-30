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
        let dummy = new ListNode(0, head);
        let lPrev = dummy;
        let cur = head;

        for (let i = 0; i < left-1; i++) {
            lPrev = cur;
            cur = cur.next;
        }

        let prev = null;
        for (let i = 0; i < right-left+1; i++) {
            let temp = cur.next
            cur.next = prev;
            prev = cur;
            cur = temp;
        }

        lPrev.next.next = cur;
        lPrev.next = prev;

        return dummy.next;
    }
}
