class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    constructor() {
        this.memo = {}
    }

    findBestValue(arr, left, right) {
        if (left > right) return 0;
        if (left === right) return arr[left];

        let key = left + ','+ right;
        if(!(key in this.memo)) {
            let curMax = Math.max(arr[left] + this.findBestValue(arr, left+ 2, right), this.findBestValue(arr, left+1, right));
            this.memo[key] = curMax;
        }

        return this.memo[key];
    }
    rob(nums) {
        if (nums.length <=2) return Math.max(...nums);
        return Math.max(this.findBestValue(nums, 0, nums.length -2), this.findBestValue(nums, 1, nums.length-1))
    }
}
