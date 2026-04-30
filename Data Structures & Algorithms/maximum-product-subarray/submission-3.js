class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    max = -Infinity;
    memo = {}

    traverse(nums, left, right) {
        let key = left + ',' + right;
        if (left === right) {
            this.memo[key] = nums[left]
        }
        else {
            if (!(key in this.memo)) {
                let res = nums[right];
                res = res * this.traverse(nums, left, right-1);
                this.memo[key] = res;
            }
        }
        this.max = Math.max(this.max, this.memo[key])
        return this.memo[key]
    }

    maxProduct(nums) {
        for (let i = 0; i < nums.length; i++) {
            this.traverse(nums, i, nums.length-1)
        }

        return this.max;
    }
}
