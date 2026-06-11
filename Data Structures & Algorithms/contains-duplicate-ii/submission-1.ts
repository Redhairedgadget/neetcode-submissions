class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums: number[], k: number): boolean {
        // if (k < 2 || nums.length < 2) return false;
        const numSet = new Set<number>();
        let l = 0;
        let r = 0;

        while (r < nums.length && l < nums.length) {
            while (Math.abs(r - l) <= k && r < nums.length) {
                if (numSet.has(nums[r])) return true;
                else numSet.add(nums[r]);

                r++;
            }
            numSet.delete(nums[l]);
            l++;
        }

        return false;
    }
}
