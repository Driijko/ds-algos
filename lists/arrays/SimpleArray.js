class SimpleArray {
  constructor(capacity) {
    this.array = new Array(capacity);
    this.capacity = capacity;
  }

  insertAt(value, index) {
    this.array[index] = value;
  }
}