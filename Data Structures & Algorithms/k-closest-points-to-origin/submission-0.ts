class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */

    calculateDistance(destination: number[]): number {
        let xDistance = 0 - destination[0];
        let yDistance = 0 - destination[1];

        return (xDistance*xDistance) + (yDistance*yDistance);
    }

    percolateDown(heap: number[][], i: number): void {
        while (i < heap.length) {
            let hasLeftChild = i*2 < heap.length;
            let hasRightChild = i*2 + 1 < heap.length;

            // break if root is already a leaf
            if (!hasLeftChild && !hasRightChild) break;

            let rootDistance = this.calculateDistance(heap[i]);

            // both children
            if (hasLeftChild && hasRightChild) {
                let leftChildDistance =  this.calculateDistance(heap[i*2]);
                let rightChildDistance = this.calculateDistance(heap[i*2 + 1]);

                if (rootDistance >= leftChildDistance && rootDistance >= rightChildDistance) break;

                else {
                    if (leftChildDistance >= rightChildDistance) {
                        [heap[i], heap[i*2]] = [heap[i*2], heap[i]];
                        i = i * 2
                    } else {
                        [heap[i], heap[i*2 + 1]] = [heap[i*2 + 1], heap[i]];
                        i = i * 2 + 1
                    }
                }
            }

            // one child
            else {
                if (hasLeftChild) {
                    let leftChildDistance =  this.calculateDistance(heap[i*2]);
                    if (rootDistance >= leftChildDistance) break;
                    else {
                        [heap[i], heap[i*2]] = [heap[i*2], heap[i]];
                        i = i * 2;
                    }
                }

                if (hasRightChild) {
                    let rightChildDistance = this.calculateDistance(heap[i*2 + 1]);
                    if (rootDistance >= rightChildDistance) break;
                    else {
                        [heap[i], heap[i*2 + 1]] = [heap[i*2 + 1], heap[i]];
                        i = i * 2 + 1
                    }
                }
            }
        }
    }

    kClosest(points: number[][], k: number): number[][] {
        // there are less or same points as k
        if (points.length <= k) return points;

        // heapify points
        let prevZero = points[0];
        points[0] = [0, 0];
        points.push(prevZero);

        let mid = Math.floor(points.length - 1 / 2);

        while (mid > 0) {
            this.percolateDown(points, mid);
            mid--;
        }

        // remove extra points
        while (points.length - 1 > k) {
            let popped = points.pop();
            points[1] = popped;
            this.percolateDown(points, 1);
        }


        return points.slice(1);
    }
}
