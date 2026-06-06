class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        const ROWS = text1.length;
        const COLS = text2.length;

        const dp = new Array(ROWS + 1).fill().map(() => new Array(COLS + 1).fill(0));
        for (let row = ROWS - 1; row > -1; row--) {
            for (let col = COLS - 1; col > -1; col--) {
                if (text1[row] === text2[col]) {
                    dp[row][col] = 1 + dp[row + 1][col + 1];
                } else {
                    dp[row][col] = Math.max(dp[row][col+1], dp[row+1][col])
                }
            }
        }

        return dp[0][0];
    }
}
