class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */

    par: {[key: number]: number} = {};
    rank: {[key: number]: number} = {};

    find(node: number): number {
        let p = this.par[node];
        while (p !== this.par[p]) {
            this.par[p] = this.par[this.par[p]];
            p = this.par[p]
        }

        return p;
    }

    union(node1: number, node2: number) {
        let p1 = this.find(node1);
        let p2 = this.find(node2);

        // cannot join
        if (p1 === p2) {
            return false;
        }

        if (this.rank[p1] > this.rank[p2]) {
            this.par[p2] = p1;
        } else if (this.rank[p1] < this.rank[p2]) {
            this.par[p1] = p2;
        } else {
            this.par[p1] = p2;
            this.rank[p2]++;
        }

        return true;
    }

    findRedundantConnection(edges: number[][]): number[] {
        // init parents and ranks
        for (let i = 1; i <= edges.length; i++) {
            this.par[i] = i;
            this.rank[i] = 0;
        }

        for (let edge of edges) {
            if (!this.union(edge[0], edge[1])) return edge;
        }

        return [-1, -1]
    }
}
