class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    arrangeCoins(n: number): number {
        let left = 1;
        let right = n;

        let res = 1;

        while (left <= right) {
            let mid = Math.floor((left + right)/2);

            let requiredCoins = (mid/2)*(mid + 1);

            if (requiredCoins > n) {
                right = mid - 1;
            } else if (requiredCoins < n) {
                res = mid;
                left = mid + 1;
            } else {
                res = mid;
                return res;
            }
        }

        return res;
    }
}
