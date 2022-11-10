class Stack {
  constructor() {
    this.head;
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
  
  push(value) {
    const node = new this.node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  pop() {
    if (!this.head) {
      throw new Error("Cannot delete from an empty data-structure.");
    } else {
      const result = this.head.value;
      this.head = this.head.next;
      return result;
    }
  }
}

const stack = new Stack();
stack.push(32);
stack.push(89);
stack.pop();
stack.pop();
stack.print();