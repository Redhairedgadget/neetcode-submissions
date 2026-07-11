class UnionFind {
    parents = {};
    ranks = {};

    constructor(n: number) {
        for (let i = 0; i < n; i++) {
            this.parents[i] = i;
            this.ranks[i] = 0;
        }
    }

    find(n: number): number {
        while (n != this.parents[n]) {
            this.parents[n] = this.parents[this.parents[n]];
            n = this.parents[n];
        }

        return n;
    }

    union(n1: number, n2: number): boolean {
        let [p1, p2] = [this.find(n1), this.find(n2)];
        if (p1 === p2) return false;

        if(this.ranks[p1] > this.ranks[p2]) {
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
     * @param {string[][]} accounts
     * @return {string[][]}
     */

    accountsMerge(accounts: string[][]): string[][] {
        const uf = new UnionFind(accounts.length);
        const emailToAccount: {[key:string]: number} = {} // email -> accountI

        for (let i = 0; i < accounts.length; i++) {
           let emails = accounts[i].slice(1);

           for (let email of emails) {
            if (email in emailToAccount) {
                uf.union(i, emailToAccount[email]);
            } else {
                emailToAccount[email] = i;
            }
           }
        }
        const emailGroup: {[key: number]: string[]} = {}; // accountI -> email[]

        for (let [email, accountI] of Object.entries(emailToAccount)) {
            let leader = uf.find(accountI);
            if (!(leader in emailGroup)) emailGroup[leader] = [];
            emailGroup[leader].push(email)
        }

        let res = [];

        for (let [accountI, emails] of Object.entries(emailGroup)) {
            res.push([accounts[accountI][0], ...emails.sort((a, b) => a.localeCompare(b))]);
        }

        return res;
    }
}
