class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        // Find row
        let validRow = null;
        let leftRow = 0; 
        let rightRow = matrix.length - 1;

        while (leftRow <= rightRow) {
            let mid = Math.floor((leftRow + rightRow)/2)
            let curRow = matrix[mid]

            if (target < curRow[0]) rightRow = mid - 1;
            else if (target > curRow[curRow.length-1]) leftRow = mid + 1;
            else {
                validRow = curRow;
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
