class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    uniquePathsWithObstacles(grid: number[][]): number {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        
        // entrance or exit are blocked
        if (grid[0][0] === 1 || grid[ROWS-1][COLS-1] === 1) return 0;

        let prevRow = new Array(COLS).fill(0);

        for (let row = ROWS - 1; row > -1; row--) {
            let curRow = new Array(COLS).fill(0);
            // Start with no path if last one is blocked
            curRow[COLS - 1] = grid[row][COLS-1] === 1 ? 0 : (
                row < ROWS-1 ? prevRow[COLS-1]: 1
            );
            console.log(curRow)
            for (let col = COLS - 2; col > -1; col--) {
                if (grid[row][col] !== 1) {
                    curRow[col] = curRow[col + 1] + prevRow[col]
                } else {
                    curRow[col] = 0;
                }
            }

            prevRow = curRow;
        }

        return prevRow[0];
    }
}
