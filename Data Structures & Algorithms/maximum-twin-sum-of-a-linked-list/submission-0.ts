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
     * @return {number}
     */
    pairSum(head: ListNode | null): number {
        // get to the middle
        let fast = head;
        let slow = head;

        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }

        // add all twins to stack
        let stack = [];

        while (slow) {
            stack.push(slow);
            slow = slow.next;
        }

        // check all sums
        let maxSum = -Infinity;
        let slow2 = head;
        
        while (slow2 && stack.length) {
            const twin = stack.pop();
            const newSum = slow2.val + twin.val;
            maxSum = Math.max(newSum, maxSum);
            slow2 = slow2.next;
        } 
        return maxSum;
    }
}
