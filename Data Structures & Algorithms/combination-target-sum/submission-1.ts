class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const res = [];
        const calculatedSet = new Set<string>();

        function helper(i: number, curSum: number, curSub: number[] = []): void {
            if (curSum === 0) {
                let key = curSub.join(',');
                if (!calculatedSet.has(key)) {
                    calculatedSet.add(key);
                    res.push([...curSub]);
                }
                return;
            }

            if (curSum < 0) return;
            if (i >= nums.length) return;

            curSub.push(nums[i])
            // substract current and move on
            helper(i + 1, curSum - nums[i], curSub);
            // substract current and stay
            helper(i, curSum - nums[i], curSub);

            // dont's substract current and move on
            curSub.pop();
            helper(i + 1, curSum, curSub);

        }
        
        helper(0, target)

        return res;
    }
}
