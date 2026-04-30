class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        let hash = {};
        let stack = [];

        while (nums2.length) {
            let cur = nums2.pop();
            if (stack.length) {
                if (cur < stack[stack.length-1]) {
                    hash[cur] = stack[stack.length-1];
                } else {
                    let assumption = -1;
                    let trail = stack[stack.length -1];
                    // backtrack
                    while (trail in hash) {
                        let next = hash[trail];
                        if (next > cur) {
                            assumption = next;
                            break;
                        } else {
                            trail = next;
                        }
                    }
                    hash[cur] = assumption;
                }
            } else {
                hash[cur] = -1;
            }
            stack.push(cur)
        }
        let res = [];

        for (let num of nums1) {
            res.push(hash[num])
        }

        return res;
    }
}
