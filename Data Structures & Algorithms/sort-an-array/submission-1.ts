// Merge sort
class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    merge(arr1: number[], arr2: number[]) {
        let res = [];
        let i1 = 0;
        let i2 = 0;

        while (i1 < arr1.length && i2 < arr2.length) {
            if (arr1[i1] <= arr2[i2]) {
                res.push(arr1[i1])
                i1++;
            } else {
                res.push(arr2[i2])
                i2++;
            }
        }

        // tails
        while (i1 < arr1.length){
            res.push(arr1[i1]);
            i1++;
        }

        while (i2 < arr2.length){
            res.push(arr2[i2]);
            i2++;
        }

        return res;
    }

    helper(curArr: number[]): number[] {
        if (curArr.length <= 1) return curArr;

        let mid = Math.floor(curArr.length/2);
        let left = this.helper(curArr.slice(0, mid));
        let right = this.helper(curArr.slice(mid, curArr.length));
        return this.merge(left, right);
    }

    sortArray(nums: number[]): number[] {
        return this.helper(nums);
    }
}
