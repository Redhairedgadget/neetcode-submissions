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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder: number[], inorder: number[]): TreeNode {
        // preorder = root, left, right
        // inorder = left, root, right

        if (!preorder.length || !inorder.length) return null;

        let newNode = new TreeNode(preorder[0]);
        let mid = inorder.indexOf(preorder[0]);
        newNode.left = this.buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
        newNode.right = this.buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

        return newNode;
    }
}
