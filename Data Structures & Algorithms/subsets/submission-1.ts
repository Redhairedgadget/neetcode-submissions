class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const res: number[][] = [];

        function backtrack(start: number, curr: number[]) {
            res.push([...curr]);
            for (let i = start; i < nums.length; i++) {
                curr.push(nums[i]);
                backtrack(i + 1, curr);
                curr.pop();
            }
        }

        backtrack(0, []);
        return res;
    }
}
