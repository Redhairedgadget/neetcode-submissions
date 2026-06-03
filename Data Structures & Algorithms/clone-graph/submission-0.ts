/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    private visited = new Map<Node, Node>();

    cloneGraph(node: Node | null): Node {
        if (!node) return null;

        if (this.visited.has(node)) {
            return this.visited.get(node);
        }

        let nodeCopy = new Node(node.val);
        this.visited.set(node, nodeCopy);

        for (let nei of node.neighbors) {
            nodeCopy.neighbors.push(this.cloneGraph(nei));
        }

        return nodeCopy;
    }
}
