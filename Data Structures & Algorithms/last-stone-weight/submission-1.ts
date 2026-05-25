class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */

    percolateDown(arr: number[], i: number): void {
        while (i < arr.length) {
            const left = i*2;
            const right = i*2 + 1;

            const hasLeft = left < arr.length;
            const hasRight = right < arr.length;

            const leftIsBigger = hasLeft && arr[left] > arr[i];
            const rightIsBigger = hasRight && arr[right] > arr[i];

            // break if i is already in the right place
            if (!leftIsBigger && !rightIsBigger) break;

            const oneToSwap = 
                hasLeft && hasRight ?
                    (arr[left] > arr[right] ? left : right) :
                hasLeft ? left : right;
            [arr[i], arr[oneToSwap]] = [arr[oneToSwap], arr[i]];
            i = oneToSwap;
        }
    }


    lastStoneWeight(stones: number[]): number {
        let first = stones[0];
        stones[0] = 0;
        stones.push(first);

        let mid = Math.floor((stones.length - 1) / 2);

        // Heapify
        while (mid >= 1) {
            this.percolateDown(stones, mid);
            mid--;
        }

        console.log(stones)
        while (stones.length > 2) {
            // check stones
            const curStone = stones[1];
            let diff = 0;

            if (stones.length >= 4) {
                const leftStone = stones[2];
                const rightStone = stones[3];
                const heaviestChild = Math.max(leftStone, rightStone);
                diff = Math.abs(curStone - heaviestChild);
            } else {
                diff = Math.abs(curStone - stones[2])
            }

            console.log(diff)

            if (diff === 0) {
                let twice = 2;
                while (twice > 0) {
                    let popped = stones.pop();

                    // reached dummy
                    if (stones.length > 1) {
                        stones[1] = popped;
                        this.percolateDown(stones, 1);
                    }
                    twice--;
                }
            } else {
                let popped = stones.pop();
                stones[1] = popped;
                this.percolateDown(stones, 1);
                stones[1] = diff
                this.percolateDown(stones, 1);
            }
        }

        console.log(stones)

        return stones.length > 1 ? stones[1] : stones[0];
    }
}
