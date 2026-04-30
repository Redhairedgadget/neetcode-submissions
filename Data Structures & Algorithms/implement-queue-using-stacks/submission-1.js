class MyQueue {
    constructor() {
        this.stack = [];
        this.bench = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.stack.push(x);
    }

    /**
     * @return {number}
     */
    pop() {
        if (!this.bench.length) {
            while (this.stack.length) {
                let top = this.stack.pop();
                this.bench.push(top)
            }
        }
        let popped = this.bench.pop();

        return popped;
    }

    /**
     * @return {number}
     */
    peek() {
        return this.bench[this.bench.length-1] || this.stack[0];
    }

    /**
     * @return {boolean}
     */
    empty() {
        return !this.stack.length && !this.bench.length;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
