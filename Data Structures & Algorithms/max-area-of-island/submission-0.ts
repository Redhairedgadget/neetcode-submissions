class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    visitedLand: Set<string>; // 'row,column'
    constructor(){
        this.visitedLand = new Set();
    }

    exploreIsland (grid: number[][], r: number, c:number): number {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        let area = 1;

        this.visitedLand.add(`${r},${c}`);

        let paths = [[0, 1], [1, 0], [-1, 0], [0, -1]];

        for (let path of paths) {
            let newR = r + path[0];
            let newC = c + path[1];

            if (
                !this.visitedLand.has(`${newR},${newC}`) &&
                newR > -1 && newR < ROWS &&
                newC > -1 && newC < COLS &&
                grid[newR][newC] === 1
            ) {
                area += this.exploreIsland(grid, newR, newC);
            }
        }

        return area;
    }

    maxAreaOfIsland(grid: number[][]): number {
        let ROWS = grid.length;
        let COLS = grid[0].length;
        let maxArea = -Infinity;

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                // explore land
                if (grid[r][c] === 1 && !this.visitedLand.has(`${r},${c}`)) {
                    maxArea = Math.max(this.exploreIsland(grid, r, c), maxArea);
                }
            }
        }

        return Math.max(0, maxArea);
    
    }
}
