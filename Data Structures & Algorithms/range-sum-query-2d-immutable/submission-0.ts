class NumMatrix {
    prefSums: number[][];
    
    constructor(matrix: number[][]) {
        const ROWS = matrix.length;
        const COLS = matrix[0].length;
        this.prefSums = Array.from({ length: ROWS + 1 }, () => Array(COLS + 1).fill(0));

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                this.prefSums[r + 1][c + 1] =
                    matrix[r][c] +
                    this.prefSums[r][c + 1] +
                    this.prefSums[r + 1][c] -
                    this.prefSums[r][c];
            }
        }
    }

    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        return (
            this.prefSums[row2 + 1][col2 + 1] -
            this.prefSums[row1][col2 + 1] -
            this.prefSums[row2 + 1][col1] +
            this.prefSums[row1][col1]
        );
    }
}