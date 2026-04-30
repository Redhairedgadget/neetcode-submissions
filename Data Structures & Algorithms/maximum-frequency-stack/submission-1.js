class FreqStack {
    constructor() {
        this.freqHash = {} // frequency: [val]
        this.valHash = {} // value: frequency
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    removeByValue(array, value) {
        var index = array.indexOf(value);
            if (index !== -1) {
            array.splice(index, 1);
        }
    }

    deleteFreqsOnEmpty (freq) {
        if (!this.freqHash[freq].length) {
            delete this.freqHash[freq];
        }
    }

    deleteValsOnZero(val) {
        if (!this.valHash[val]) {
            delete this.valHash[val];
        }
    }

    push(val) {
        this.stack.push(val);

        if (val in this.valHash) {
            this.removeByValue(this.freqHash[this.valHash[val]]);
            this.deleteFreqsOnEmpty(this.valHash[val]);
            this.valHash[val]++;
        } else {
            this.valHash[val] = 1;
        }

        let freq = this.valHash[val];
        if (freq in this.freqHash) {
            this.freqHash[freq].push(val)
        } else {
            this.freqHash[freq] = [val];
        }
    }

    /**
     * @return {number}
     */
    pop() {
        let mostFrequent = Math.max(...Object.keys(this.freqHash));

        for (let i = this.stack.length - 1; i > -1; i--) {
            if (this.freqHash[mostFrequent].includes(this.stack[i])) {
                let popped = this.freqHash[mostFrequent].pop();
                this.deleteFreqsOnEmpty(mostFrequent);
                this.valHash[popped]--;
                this.deleteValsOnZero(popped);
                return popped;
            }
        }
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
