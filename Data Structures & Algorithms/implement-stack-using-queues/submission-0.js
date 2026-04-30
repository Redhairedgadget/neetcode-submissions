class ListNode { 
    constructor(val=0, prev=null, next=null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

class MyStack {

    constructor() {
        this.dummy = new ListNode();
        this.currTop = this.dummy;
    }

    push(x) {
        const newNode = new ListNode(x, this.currTop);
        this.currTop.next = newNode;
        this.currTop = this.currTop.next;
    }

    pop() {
        const val = this.currTop.val;
        this.currTop = this.currTop.prev;
        this.currTop.next = null;
        return val;
    }

    top() {
        return this.currTop.val;
    }

    empty() {
        return this.currTop === this.dummy;
    }
}