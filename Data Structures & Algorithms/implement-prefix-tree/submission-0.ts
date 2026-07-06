class TrieNode {
    wordEnd: boolean = false;
    children: {[key: string]: TrieNode} = {};
}

class PrefixTree {
    root: TrieNode;
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word: string): void {
        let curNode = this.root;

        for (let char of word) {
            if (!(char in curNode.children)) {
                curNode.children[char] = new TrieNode();
            }
            curNode = curNode.children[char];
        }

        curNode.wordEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        let curNode = this.root;

        for (let char of word) {
            if (!(char in curNode.children)) return false;
            curNode = curNode.children[char];
        }

        return curNode.wordEnd;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix: string): boolean {
        let curNode = this.root;

        for (let char of prefix) {
            if (!(char in curNode.children)) return false;
            curNode = curNode.children[char];
        }

        return true;
    }
}
