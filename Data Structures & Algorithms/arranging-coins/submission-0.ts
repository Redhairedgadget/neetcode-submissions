class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    arrangeCoins(n: number): number {
        if (n == 1) return 1;

        let built = 1;
        n -= built;
        let curRow = 2;
        while (n >= curRow) {
            n = n - curRow;
            built = curRow;
            curRow++;
        }

        return built;
    }
}
