class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums, i = 0, memo={}) {
        if (nums.length === i) return 0;
        if (i === nums.length - 1) return nums[i];

        if(!(i in memo)) {
            memo[i] = Math.max(nums[i] + this.rob(nums, i + 2, memo), this.rob(nums, i + 1, memo));
        }

        return memo[i]
    }
}
