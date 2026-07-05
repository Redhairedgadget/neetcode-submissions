class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        let fast = 0;
        let slow = 0;

        while (true) {
            fast = nums[nums[fast]];
            slow = nums[slow];

            if (fast === slow) break;
        }

        let slow2 = 0;

        while (slow2 !== slow) {
            slow2 = nums[slow2];
            slow = nums[slow];
        }

        return slow
    }
}
