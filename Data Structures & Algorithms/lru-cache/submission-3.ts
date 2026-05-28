class LRUCache {
    /**
     * @param {number} capacity
     */

    capacity: number;
    dict: {[key: number]: number};
    cache: number[];

    constructor(capacity: number) {
        this.capacity = capacity
        this.dict = {};
        this.cache = [];
    }

    /**
     * @param {number} key
     * @return {number}
     */

    reorderCache(key: number) {
        let bench = [];

        if ((key in this.dict)) {
            while (this.cache.length && this.cache[this.cache.length - 1] != key) {
                bench.push(this.cache.pop())
            }

            // pop the key
            this.cache.pop();
            while (bench.length) {
                this.cache.push(bench.pop());
            }
        }

        this.cache.push(key);
    }

    get(key: number): number {
        if (!(key in this.dict)) return -1;

        this.reorderCache(key);
        return this.dict[key];
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        if (!(key in this.dict)) {
            this.cache.push(key)
        } else {
            this.reorderCache(key)
        }

        this.dict[key] = value;

        if (this.cache.length > this.capacity) {
            let toDelete = this.cache.shift();
            delete this.dict[toDelete];
        }
    }
}
