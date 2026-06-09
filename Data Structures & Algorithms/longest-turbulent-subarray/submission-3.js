class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    maxTurbulenceSize(arr) {
        let maxIndexes = [0, 0];
        let curL = 0;
        let curR = 1;

        let maxLen = 1;
        let prevUp = null;

        while (curR < arr.length) {
            // no longer turbulent
            if (arr[curR-1] === arr[curR]) {
                curL = curR;
                prevUp = null;
            } else {
                const curUp = arr[curR] > arr[curR-1];
                // no longer turbulent
                if (curUp === prevUp) {
                    curL = curR - 1;
                }

                prevUp = curUp;
                const curLen = curR - curL + 1;
                if (curLen > maxLen) {
                    maxLen = curLen;
                    [maxIndexes[0], maxIndexes[1]] = [curL, curR];
                }
            }

            curR++;
        }

        return maxIndexes[1] - maxIndexes[0] + 1;
    }
}
