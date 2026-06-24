class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums: number[]): number {
        let pre = [0];
        let suf = [0];

        let curPreSum = 0;

        for (let i = 0; i < nums.length; i++) {
            curPreSum += nums[i];
            pre.push(curPreSum)
        }

        let curSufSum = 0;

        for (let i = nums.length - 1; i > -1; i--) {
            curSufSum += nums[i];
            suf.push(curSufSum)
        }

        console.log(pre, suf)

        for (let i = 0; i < nums.length; i++) {
            if (pre[i] === suf[nums.length - i - 1]) return i;
        }

        return -1;
    }
}
