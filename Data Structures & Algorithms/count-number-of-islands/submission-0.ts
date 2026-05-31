class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */

    visitedLand: Set<string>; // 'row,column'
    constructor(){
        this.visitedLand = new Set();
    }

    exploreIsland (grid: string[][], r: number, c:number): void {
        const ROWS = grid.length;
        const COLS = grid[0].length;

        this.visitedLand.add(`${r},${c}`);

        let paths = [[0, 1], [1, 0], [-1, 0], [0, -1]];

        for (let path of paths) {
            let newR = r + path[0];
            let newC = c + path[1];

            if (
                !this.visitedLand.has(`${newR},${newC}`) &&
                newR > -1 && newR < ROWS &&
                newC > -1 && newC < COLS &&
                grid[newR][newC] === '1'
            ) {
                this.exploreIsland(grid, newR, newC);
            }
        }
    }

    numIslands(grid: string[][]): number {
        let ROWS = grid.length;
        let COLS = grid[0].length;
        let islands = 0;

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                // explore land
                if (grid[r][c] === '1' && !this.visitedLand.has(`${r},${c}`)) {
                    this.exploreIsland(grid, r, c);
                    islands++;
                }
            }
        }

        return islands;
    }
}
