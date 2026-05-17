/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */

    private rank: number = 0;
    private result: number = 0;

    kthSmallest(root: TreeNode | null, k: number): number {
        this.rank = 0;
        this.result = 0;
        this.inorder(root, k);
        return this.result;
    }

    private inorder(root: TreeNode | null, k: number): void {
        if (!root) return;

        this.inorder(root.left, k);
        this.rank++;
        if (this.rank === k) {
            this.result = root.val;
            return;
        }
        this.inorder(root.right, k);
    }
}
