class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    helper(nums: number[]): number {
        if (nums.length === 0) return 0;
        if (nums.length === 1) return nums[0];
        let dp = [nums[0], Math.max(nums[0], nums[1])];
        let i = 2;

        while (i < nums.length) {
            [dp[0], dp[1]] = [dp[1], Math.max(dp[1], dp[0] + nums[i])];
            i++;
        }

        return dp[1];

    }
    rob(nums: number[]): number {
        if (nums.length === 0) return 0;
        if (nums.length === 1) return nums[0];

        return Math.max(this.helper(nums.slice(1)), this.helper(nums.slice(0, -1)))
    }
}
