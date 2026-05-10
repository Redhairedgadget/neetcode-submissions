class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums: number[], k: number): number {
        function helper(l: number, r: number) {
            console.log(l, r)
            if (l >= r) return;

            let prev = l;
            let cur = l;
            let pivot = nums[r];

            while (cur < r) {
                if (nums[cur] < pivot) {
                    [nums[cur], nums[prev]] = [nums[prev], nums[cur]];
                    prev++;
                }
                cur++;
            }
            
            // pivot swap
            [nums[r], nums[prev]] = [nums[prev], nums[r]];

            helper(l, prev-1);
            helper(prev+1, r);
        }

        helper(0, nums.length - 1);
        return nums[nums.length - k];
    }
}
