class TrieNode {
    wordEnd: boolean = false;
    children: {[key: string]: TrieNode} = {};
    word: string = '';
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */

    root: TrieNode = new TrieNode();
    res: Set<string> = new Set();
    insert(word: string) {
        let curNode = this.root;

        for (let char of word) {
            if (!(char in curNode.children)) {
                curNode.children[char] = new TrieNode();
            }
            curNode = curNode.children[char];
        }

        curNode.wordEnd = true;
        curNode.word = word;
    }
    dfs (board: string[][], curNode: TrieNode, row: number, col: number) {
        const ROWS = board.length;
        const COLS = board[0].length;

        if (row < 0 || row >= ROWS || col < 0 || col >= COLS) return;

        const curLetter = board[row][col];
        if (curLetter === '#' || !(curLetter in curNode.children)) return;

        const nextNode = curNode.children[curLetter];

        if (nextNode.wordEnd) {
            this.res.add(nextNode.word);
            nextNode.wordEnd = false;
        }

        board[row][col] = '#';

        this.dfs(board, nextNode, row - 1, col);
        this.dfs(board, nextNode, row + 1, col);
        this.dfs(board, nextNode, row, col - 1);
        this.dfs(board, nextNode, row, col + 1);

        board[row][col] = curLetter;
    }

    findWords(board: string[][], words: string[]): string[] {
        // insert all words
        for (let word of words) {
            this.insert(word);
        }

        // dfs the board for every word in the trie
        const ROWS = board.length;
        const COLS = board[0].length;

        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {
                if (board[row][col] in this.root.children) {
                    this.dfs(board, this.root, row, col);
                }
            }
        }

        return Array.from(this.res);
    }
}
