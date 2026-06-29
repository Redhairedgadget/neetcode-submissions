class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let res = new Array(nums.length).fill(1);

        let pref = 1;
        for (let i = 0; i < nums.length; i++) {
            res[i] = pref;
            pref *= nums[i]
        }

        let post = 1;
        for (let i = nums.length - 1; i > -1; i--) {
            res[i] = post * res[i];
            post *= nums[i];
        }

        return res;
    }
}
