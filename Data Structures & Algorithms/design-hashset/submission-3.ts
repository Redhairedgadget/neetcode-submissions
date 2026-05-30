class HashEntry {
    key: number;
    constructor(key: number) {
        this.key = key;
    }
}

const TOMBSTONE = "TOMBSTONE";

type Slot = HashEntry | typeof TOMBSTONE | undefined;

class MyHashSet {
    size: number;
    capacity: number;
    map: Slot[];

    constructor() {
        this.size = 0;
        this.capacity = 2;
        this.map = [undefined, undefined];
    }

    hash(key: number): number {
        return key % this.capacity;
    }

    rehash(): void {
        const oldMap = this.map;
        this.capacity = 2 * this.capacity;
        this.map = new Array(this.capacity).fill(undefined);
        this.size = 0;

        for (let j = 0; j < oldMap.length; j++) {
            const slot = oldMap[j];
            if (slot !== undefined && slot !== TOMBSTONE) {
                const key = (slot as HashEntry).key;
                this.add(key);
            }
        }
    }

    add(key: number): void {
        let i = this.hash(key);
        let firstTombstoneIndex: number | null = null;

        while (true) {
            const slot = this.map[i];

            if (slot === undefined) {
                // Found a truly empty slot
                const insertIndex = firstTombstoneIndex !== null ? firstTombstoneIndex : i;
                this.map[insertIndex] = new HashEntry(key);
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
                // slot is definitely a HashEntry here
                const entry = slot as HashEntry;
                if (entry.key === key) {
                    // Already exists
                    return;
                }
            }

            i = (i + 1) % this.capacity;
        }
    }

    remove(key: number): void {
        let i = this.hash(key);
        while (this.map[i] !== undefined) {
            const slot = this.map[i];
            if (slot !== TOMBSTONE && slot !== undefined) {
                const entry = slot as HashEntry;
                if (entry.key === key) {
                    this.map[i] = TOMBSTONE;
                    this.size--;
                    return;
                }
            }
            i = (i + 1) % this.capacity;
        }
    }

    contains(key: number): boolean {
        let i = this.hash(key);
        while (this.map[i] !== undefined) {
            const slot = this.map[i];
            if (slot !== TOMBSTONE && slot !== undefined) {
                const entry = slot as HashEntry;
                if (entry.key === key) {
                    return true;
                }
            }
            i = (i + 1) % this.capacity;
        }
        return false;
    }
}