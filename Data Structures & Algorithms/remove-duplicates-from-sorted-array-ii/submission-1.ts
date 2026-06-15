class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
        if (nums.length <= 2) return nums.length;
        let prev = 2;
        let cur = 2;

        while (cur < nums.length) {
            // three numbers are repeating
            if (nums[cur] !== nums[prev - 2]) {
                nums[prev] = nums[cur];
                prev++;
            }
            cur++;
        }

        return prev;
    }
}
