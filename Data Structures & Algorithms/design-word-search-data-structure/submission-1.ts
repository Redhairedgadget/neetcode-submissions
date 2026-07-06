class TrieNode {
    wordEnd: boolean = false;
    children: {[key: string]: TrieNode} = {};
}

class WordDictionary {
    root: TrieNode;
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word: string): void {
        let cur = this.root;
        for (let char of word) {
            if (!(char in cur.children)) {
                cur.children[char] = new TrieNode();
            }
            cur = cur.children[char];
        }

        cur.wordEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */

    search(word: string): boolean {
        let queue: TrieNode[] = [this.root];
        for (let char of word) {
            let curLength = queue.length;
            while (curLength) {
                let cur = queue.shift();
                if (char === '.') {
                    for (let childKey of Object.keys(cur.children)) {
                        queue.push(cur.children[childKey])
                    }
                } else {
                    if (char in cur.children) {
                        let validChild = cur.children[char]
                        queue.push(validChild);
                    }
                }

                curLength--;
            }
        }

        if (queue.length) {
            for (let cur of queue) {
                if (cur.wordEnd) return true
            }
        }

        return false;
    }
}
