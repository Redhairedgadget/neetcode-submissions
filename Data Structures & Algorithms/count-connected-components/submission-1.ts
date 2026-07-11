class UnionFind {
    parents = {};
    ranks = {};

    constructor(n: number) {
        for (let i = 0; i< n; i++) {
            this.parents[i] = i;
            this.ranks[i] = 0;
        }

    }

    find(n: number): number {
        while (n != this.parents[n]) {
            n = this.parents[n]
        }

        return n;
    }

    union (n1: number, n2: number) {
        let [p1, p2] = [this.find(n1), this.find(n2)];

        if (p1 === p2) return false;

        if (this.ranks[p1] > this.ranks[p2]) {
            this.parents[p2] = p1;
        } else if (this.ranks[p1] < this.ranks[p2]) {
            this.parents[p1] = p2;
        } else {
            this.parents[p2] = p1;
            this.ranks[p1]++;
        }

        return true;
    }
}

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {
        let uf = new UnionFind(n);
        for (let [s, d] of edges) {
            uf.union(s, d);
        }

        let parSet = new Set();

        for (let i = 0; i < n; i++) {
            parSet.add(uf.find(i));
        }

        return parSet.size;
    }
}
