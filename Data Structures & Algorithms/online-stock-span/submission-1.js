class StockSpanner {

    constructor() {
        this.stack = [];
    }

    next(price) {
        let spanCount = 0;
        while (this.stack.length && this.stack[this.stack.length - 1][0] <= price) {
            let prev = this.stack.pop();
            spanCount += prev[1];
        }

        this.stack.push([price, spanCount + 1]);

        return this.stack[this.stack.length-1][1]
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
