class UsageNode {
    constructor(val=0, next=null, prev=null) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class LRUCache {

    constructor(capacity) {
        this.cache = {};
        this.capacity = capacity;
        this.usageCurrent = new UsageNode(-1);
        this.head = this.usageCurrent;
    }

    get(key) {
        if (!(key in this.cache) || this.cache[key][0] === -1) return -1;
        let updatedUsage = this.cache[key][1];
        if (updatedUsage === this.usageCurrent) return this.cache[key][0];
        
        updatedUsage.prev.next = updatedUsage.next;
        if (updatedUsage.next) updatedUsage.next.prev = updatedUsage.prev;

        updatedUsage.next = null;
        updatedUsage.prev = this.usageCurrent;
        this.usageCurrent.next = updatedUsage;
        this.usageCurrent = updatedUsage;
        
        return this.cache[key][0];
    }

    put(key, value) {
        if (key in this.cache && this.cache[key][0] !== -1) {
            this.cache[key][0] = value;
            this.get(key);
            return;
        }

        if (this.capacity > 0) {
            this.capacity--;
        } else {
            let nodeToDelete = this.head.next;
            let deletedKey = nodeToDelete.val;
            this.head.next = nodeToDelete.next;
            if (nodeToDelete.next) nodeToDelete.next.prev = this.head;
            if (this.usageCurrent === nodeToDelete) this.usageCurrent = this.head;
            delete this.cache[deletedKey];
        }

        let newUsageNode = new UsageNode(key);
        this.cache[key] = [value, newUsageNode];
        newUsageNode.prev = this.usageCurrent;
        this.usageCurrent.next = newUsageNode;
        this.usageCurrent = newUsageNode;
    }
}