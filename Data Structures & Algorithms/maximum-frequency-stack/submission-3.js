class FreqStack {
    constructor() {
        this.freqHash = {} // frequency: [val]
        this.valHash = {} // value: frequency
        this.maxFreq = 0;
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
        const freq = (this.valHash[val] || 0) + 1;
        this.valHash[val] = freq;
        this.maxFreq = Math.max(this.maxFreq, freq);
        if (freq in this.freqHash) {
            this.freqHash[freq].push(val)
        } else {
            this.freqHash[freq] = [val];
        }
    }

    pop() {
        let val = this.freqHash[this.maxFreq].pop();
        
        this.valHash[val]--;
        
        if (this.freqHash[this.maxFreq].length === 0) {
            this.maxFreq--;
        }
        
        return val;
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */