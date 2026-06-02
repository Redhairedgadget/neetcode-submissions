class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid: number[][]): number {
        const ROWS = grid.length;
        const COLS = grid[0].length;

        let queue = [];
        let fresh = 0;
        // populate queue with rotten oranges
        for (let row = 0; row < ROWS; row++) {
            for (let col=0; col < COLS; col++) {
                if (grid[row][col] === 2) {
                    queue.push([row, col]);
                }

                else if (grid[row][col] === 1) {
                    fresh++;
                }
            }
        }

        let minutes = 0;
        let dirs = [[1,0], [0, 1], [-1, 0], [0, -1]];

        while (queue.length && fresh > 0) {
            let curLevel = queue.length;
            while (curLevel) {
                let [r, c] = queue.shift();

                for (let [dr, dc] of dirs) {
                    let newR = r + dr;
                    let newC = c + dc;

                    if (
                        newR >=0 && newR < ROWS &&
                        newC >=0 && newC < COLS &&
                        grid[newR][newC] === 1
                    ) {
                        grid[newR][newC] = 2;
                        fresh--;
                        queue.push([newR, newC])
                    };
                }

                curLevel--;
            }
            minutes++;
        }

        return fresh === 0 ? minutes : -1;
    }
}
