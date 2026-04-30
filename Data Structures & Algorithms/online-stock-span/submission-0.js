class StockSpanner {

    constructor() {
        this.stack = [];
    }

    next(price) {
        this.stack.push(price);
        let stackCopy = [...this.stack];
        let span = 0;
        while (stackCopy.length && price >= stackCopy[stackCopy.length -1]) {
            stackCopy.pop();
            span++;
        }

        return span;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
