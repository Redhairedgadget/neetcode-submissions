class LLNode {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        // Dummy nodes for easier handling of edge cases
        this.head = new LLNode(-1, -1);
        this.tail = new LLNode(-1, -1);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    addToFront(node) {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
    }

    removeNode(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    moveToFront(node) {
        this.removeNode(node);
        this.addToFront(node);
    }

    get(key) {
        if (this.cache.has(key)) {
            const node = this.cache.get(key);
            this.moveToFront(node);
            return node.val;
        }
        return -1;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            const node = this.cache.get(key);
            node.val = value;
            this.moveToFront(node);
        } else {
            if (this.cache.size === this.capacity) {
                const removedNode = this.tail.prev;
                this.removeNode(removedNode);
                this.cache.delete(removedNode.key);
            }
            const newNode = new LLNode(key, value);
            this.addToFront(newNode);
            this.cache.set(key, newNode);
        }
    }
}