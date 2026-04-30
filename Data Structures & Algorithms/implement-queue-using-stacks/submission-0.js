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
        while (this.stack.length > 1) {
            let top = this.stack.pop();
            this.bench.push(top)
        }
        let popped = this.stack.pop();

        while (this.bench.length) {
            let top = this.bench.pop();
            this.stack.push(top);
        }

        return popped;
    }

    /**
     * @return {number}
     */
    peek() {
        return this.stack[0];
    }

    /**
     * @return {boolean}
     */
    empty() {
        return !this.stack.length;
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
