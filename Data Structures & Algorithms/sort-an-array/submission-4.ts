// Quick sort
class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    helper(arr: number[], l: number, r: number): void {
        if (l >= r) return;

        let pivot = arr[r];
        let cur = l;
        let prev = l;

        while (cur < r) {
            if (arr[cur] < pivot) {
                [arr[cur], arr[prev]] = [arr[prev], arr[cur]];
                prev++;
            }
            cur++;
        }

        // final swap
        [arr[r], arr[prev]] = [arr[prev], arr[r]];

        this.helper(arr, l, prev-1);
        this.helper(arr, prev+1, r);
    }

    sortArray(nums: number[]): number[] {
        this.helper(nums, 0, nums.length-1);
        return nums;
    }
}
