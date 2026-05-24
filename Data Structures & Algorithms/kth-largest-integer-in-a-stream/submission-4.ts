class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    k: number;
    heap: number[];
    largest: number[];

    constructor(k: number, nums: number[]) {
        this.k = k;
        // generate heap
        this.heap = [-Infinity];
        this.largest = [];

        for (let num of nums) {
            this.percolate(num)
        }
    }

    percolate(val: number): void {
        this.heap.push(val);

        // Percolate up
        let i = this.heap.length - 1;

        while (this.heap[i] < this.heap[Math.floor(i/2)]) {
            [this.heap[i], this.heap[Math.floor(i/2)]] = [this.heap[Math.floor(i/2)], this.heap[i]];
            i = Math.floor(i/2)
        }

        while (this.heap.length - 1 > this.k) {
            this.pop();
        }
    }

    pop(): void {
        if (this.heap.length <= 2) {
            this.heap.length = 1;
            return;
        }

        // Move last element to root
        this.heap[1] = this.heap.pop()!;

        let i = 1;

        while (true) {
            let smallest = i;
            let left = i * 2;
            let right = i * 2 + 1;

            if (
                left < this.heap.length &&
                this.heap[left] < this.heap[smallest]
            ) {
                smallest = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right] < this.heap[smallest]
            ) {
                smallest = right;
            }

            if (smallest === i) break;

            [this.heap[i], this.heap[smallest]] =
                [this.heap[smallest], this.heap[i]];

            i = smallest;
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        this.percolate(val);
        console.log(this.heap)

        return this.heap[1]
    }
}
