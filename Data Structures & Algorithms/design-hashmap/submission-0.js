class HashEntry {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

const TOMBSTONE = "TOMBSTONE";

class MyHashMap {
    constructor() {
        this.size = 0;
        this.capacity = 2;
        this.map = [undefined, undefined];
    }

    hash(key) {
        return key % this.capacity;
    }

    rehash() {
        const oldMap = this.map;
        this.capacity = 2 * this.capacity;
        this.map = new Array(this.capacity).fill(undefined);
        this.size = 0;

        for (let j = 0; j < oldMap.length; j++) {
            const slot = oldMap[j];
            if (slot !== undefined && slot !== TOMBSTONE) {
                const {key, value} = slot;
                this.put(key, value);
            }
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let i = this.hash(key);
        let firstTombstoneIndex = null;

        while (true) {
            const slot = this.map[i];

            if (slot === undefined) {
                // Found a truly empty slot
                const insertIndex = firstTombstoneIndex !== null ? firstTombstoneIndex : i;
                this.map[insertIndex] = new HashEntry(key, value);
                this.size++;
                if (this.size * 2 > this.capacity) {
                    this.rehash();
                }
                return;
            }

            if (slot === TOMBSTONE) {
                // Remember first tombstone but keep probing for duplicate
                if (firstTombstoneIndex === null) {
                    firstTombstoneIndex = i;
                }
            } else {
                const entry = slot;
                if (entry.key === key) {
                    entry.value = value;
                    return;
                }
            }

            i = (i + 1) % this.capacity;
        }
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let i = this.hash(key);
        while (this.map[i] !== undefined) {
            const slot = this.map[i];
            if (slot !== TOMBSTONE && slot !== undefined) {
                const entry = slot;
                if (entry.key === key) {
                    return entry.value;
                }
            }
            i = (i + 1) % this.capacity;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let i = this.hash(key);
        while (this.map[i] !== undefined) {
            const slot = this.map[i];
            if (slot !== TOMBSTONE && slot !== undefined) {
                const entry = slot;
                if (entry.key === key) {
                    this.map[i] = TOMBSTONE;
                    this.size--;
                    return;
                }
            }
            i = (i + 1) % this.capacity;
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
