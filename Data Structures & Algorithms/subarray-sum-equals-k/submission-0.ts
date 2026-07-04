class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums: number[], k: number): number {
        let prefix = {0:1};
        let curSum = 0;
        let res = 0;

        for (let i = 0; i < nums.length; i++) {
            curSum += nums[i];
            const diff = curSum - k;

            if (diff in prefix) {
                res+= prefix[diff];
            }

            if (!(curSum in prefix)) prefix[curSum] = 0;
            prefix[curSum]++;
        }


        return res;
    }
}
