class DoublyCircularLinkedList {
    constructor() {
        this.head = null;
    }

    // Node class
    createNode(data) {
        return { data, next: null, prev: null };
    }

    // Insert Methods
    insertAtEnd(data) {
        const newNode = this.createNode(data);
        if (!this.head) {
            this.head = newNode;
            newNode.next = newNode;
            newNode.prev = newNode;
        } else {
            const tail = this.head.prev;
            tail.next = newNode;
            newNode.prev = tail;
            newNode.next = this.head;
            this.head.prev = newNode;
        }
    }

    insertAtBeginning(data) {
        const newNode = this.createNode(data);
        if (!this.head) {
            this.head = newNode;
            newNode.next = newNode;
            newNode.prev = newNode;
        } else {
            const tail = this.head.prev;
            newNode.next = this.head;
            newNode.prev = tail;
            tail.next = newNode;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    // Delete Methods
    deleteAtBeginning() {
        if (!this.head) {
            console.log("List is empty!");
            return;
        }
        if (this.head.next === this.head) { // Single node case
            this.head = null;
        } else {
            const tail = this.head.prev;
            this.head = this.head.next;
            this.head.prev = tail;
            tail.next = this.head;
        }
    }

    deleteAtEnd() {
        if (!this.head) {
            console.log("List is empty!");
            return;
        }
        if (this.head.next === this.head) { // Single node case
            this.head = null;
        } else {
            const tail = this.head.prev;
            const newTail = tail.prev;
            newTail.next = this.head;
            this.head.prev = newTail;
        }
    }

    // Display
    display() {
        if (!this.head) {
            console.log("List is empty!");
            return;
        }
        let current = this.head;
        const elements = [];
        do {
            elements.push(current.data);
            current = current.next;
        } while (current !== this.head);
        console.log(elements.join(" <-> "));
    }
}

// Example Usage
const dcll = new DoublyCircularLinkedList();
console.log("Doubly Circular Linked List Operations:");
dcll.insertAtEnd(1);
dcll.insertAtEnd(2);
dcll.insertAtBeginning(0);
dcll.display();
dcll.deleteAtBeginning();
dcll.deleteAtEnd();
dcll.display();
