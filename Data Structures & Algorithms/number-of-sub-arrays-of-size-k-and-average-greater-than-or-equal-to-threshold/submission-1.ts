class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr: number[], k: number, threshold: number): number {
        let res = 0;
        let curSum = 0;

        let l = 0;
        let r = 0;

        let curK = k;
        while (r < arr.length && l < arr.length) {
            while (curK && r < arr.length) {
                curSum += arr[r];
                r++;
                curK--;
            }
            if ((curSum / k) >= threshold) res++;
            curSum -= arr[l];
            l++;
            curK++;
        }

        return res;
    }
}
