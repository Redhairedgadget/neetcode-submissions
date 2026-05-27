class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */

    percolateDown(arr: number[], i: number) {
        while (i < arr.length) {
            let hasLeftChild = i*2 < arr.length;
            let hasRightChild = i*2 + 1 < arr.length;

            // no children
            if (!hasLeftChild && !hasRightChild) break;

            // two children
            else if (hasLeftChild && hasRightChild) {
                let smallestChildI = arr[i*2] <= arr[i*2 + 1] ? i*2: i*2 + 1;
                if (arr[i] <= arr[smallestChildI]) break;
                [arr[i], arr[smallestChildI]] = [arr[smallestChildI], arr[i]];
                i = smallestChildI;
            }

            // one child
            else {
                let childI = hasLeftChild ? i*2 :i*2 + 1;
                if (arr[i] <= arr[childI]) break;
                [arr[i], arr[childI]] = [arr[childI], arr[i]];
                i = childI;
            }
        }
    }

    findKthLargest(nums: number[], k: number): number {
        // heapify nums
        nums.push(0);
        [nums[0], nums[nums.length-1]] = [nums[nums.length-1], nums[0]];

        let mid = Math.floor((nums.length - 1) / 2);

        while (mid > 0) {
            this.percolateDown(nums, mid);
            mid--;
        }

        // get rid of extras
        while (nums.length - 1 > k) {
            let popped = nums.pop();
            nums[1] = popped;
            this.percolateDown(nums, 1);
        }

        return nums[1]
    }
}
