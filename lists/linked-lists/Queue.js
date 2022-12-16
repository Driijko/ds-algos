class Queue {
  constructor() {
    this.head;
    this.tail;
    this.node = class Node {
      constructor(value) {
        this.value = value;
        this.next;
      }
    }
  }

  print() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  enqueue(value) {
    const node = new this.node(value);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
    }
  }

  dequeue() {
    if (!this.head) {
      throw new Error("Cannot delete from empty data-structure");
    } else {
      const result = this.head.value;
      this.head = this.head.next;
      return result;
    }
  }
}

const queue = new Queue();
queue.enqueue(45);
queue.enqueue(15);
queue.dequeue(15);
queue.print();