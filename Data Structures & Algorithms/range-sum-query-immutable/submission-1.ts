class NumArray {
    /**
     * @param {number[]} nums
     */
    prefixSumArr: number[] = [];

    constructor(nums: number[]) {
        let curSum = 0;
        for (let i = 0; i < nums.length; i++) {
            curSum += nums[i];
            this.prefixSumArr.push(curSum);
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left: number, right: number): number {
        let rigthSum = this.prefixSumArr[right];
        let leftSum = left > 0 ? this.prefixSumArr[left-1]: 0;
        return rigthSum - leftSum;
    }
}
