class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m: number, n: number): number {
        let prevRow = new Array(n).fill(0);
        
        while (m) {
            let newRow = new Array(n).fill(0);
            newRow[n-1] = 1;
            for (let i = n - 2; i > -1; i--) {
                newRow[i]= newRow[i + 1] + prevRow[i];
            }
            prevRow = newRow;
            m--;
        }

        return prevRow[0]
    }
}
