class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        // Find row (maybe should be also binary searched)
        let validRow = null;

        for (let row of matrix) {
            if (row[0] <= target && row[row.length-1] >= target) {
                validRow = row;
                break;
            }
        }

        if (!validRow) return false;

        // Search row
        let left = 0;
        let right = validRow.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right)/2);

            if (validRow[mid] > target) right = mid - 1;
            else if (validRow[mid] < target) left = mid + 1;
            else return true
        }

        return false
    }
}
