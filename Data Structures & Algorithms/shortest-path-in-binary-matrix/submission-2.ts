class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid: number[][]): number {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        let visited = new Set<string>();
        let path = 0;
        
        if (grid[0][0] === 1 || grid[ROWS - 1][COLS - 1] === 1) return -1;
        const dirs = [
            [1, 0], [-1, 0], [0, 1], [0, -1],
            [1, 1], [1, -1], [-1, 1], [-1, -1]
        ];

        let queue = [[0, 0]];
        while (queue.length) {
            let levelLength = queue.length;
            path++;
            while (levelLength) {
                let [r, c] = queue.shift();
                if (r === ROWS - 1 && c === COLS - 1) return path;

                for (let [dr, dc] of dirs) {
                    let newR = r + dr;
                    let newC = c + dc;
                    let newKey = `${newR}, ${newC}`;

                    if (newR >=0 && newR < ROWS &&
                        newC >=0 && newC < COLS )
                    if(
                        !visited.has(newKey) &&
                        newR >=0 && newR < ROWS &&
                        newC >=0 && newC < COLS &&
                        grid[newR][newC] === 0
                    ) {
                        visited.add(newKey);
                        queue.push([newR, newC]);
                    }
                }                

                levelLength--;
            }
        }

        return -1
    }
}
