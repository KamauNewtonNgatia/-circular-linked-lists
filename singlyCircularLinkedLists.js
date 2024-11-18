class SinglyCircularLinkedList {
    constructor() {
        this.tail = null;
    }

    // Node class
    createNode(data) {
        return { data, next: null };
    }

    // Insert Methods
    insertAtEnd(data) {
        const newNode = this.createNode(data);
        if (!this.tail) {
            this.tail = newNode;
            this.tail.next = newNode; // Circular link
        } else {
            newNode.next = this.tail.next;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    insertAtBeginning(data) {
        const newNode = this.createNode(data);
        if (!this.tail) {
            this.tail = newNode;
            this.tail.next = newNode;
        } else {
            newNode.next = this.tail.next;
            this.tail.next = newNode;
        }
    }

    // Delete Methods
    deleteAtBeginning() {
        if (!this.tail) {
            console.log("List is empty!");
            return;
        }
        if (this.tail.next === this.tail) { // Single node case
            this.tail = null;
        } else {
            this.tail.next = this.tail.next.next;
        }
    }

    deleteAtEnd() {
        if (!this.tail) {
            console.log("List is empty!");
            return;
        }
        if (this.tail.next === this.tail) { // Single node case
            this.tail = null;
        } else {
            let current = this.tail.next;
            while (current.next !== this.tail) {
                current = current.next;
            }
            current.next = this.tail.next;
            this.tail = current;
        }
    }

    // Display
    display() {
        if (!this.tail) {
            console.log("List is empty!");
            return;
        }
        let current = this.tail.next;
        const elements = [];
        do {
            elements.push(current.data);
            current = current.next;
        } while (current !== this.tail.next);
        console.log(elements.join(" -> "));
    }
}

// Example Usage
const scll = new SinglyCircularLinkedList();
console.log("Singly Circular Linked List Operations:");
scll.insertAtEnd(1);
scll.insertAtEnd(2);
scll.insertAtBeginning(0);
scll.display();
scll.deleteAtBeginning();
scll.deleteAtEnd();
scll.display();
