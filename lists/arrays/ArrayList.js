class ArrayList {

  constructor(capacity) {
    this.array = new Array(capacity);
    this.capacity = capacity;
    this.length = 0;
  }

  printWhole() {
    for (let i = 0 ; i < this.capacity ; i++) {
      console.log(this.array[i]);
    }
  }

  printLength() {
    for (let i = 0 ; i < this.length ; i++) {
      console.log(this.array[i]);
    }
  }

  push(value) {
    if (this.length < this.capacity) {
      this.array[this.length] = value;
      this.length++;
    } else {
      throw new Error("Cannot add to a full array list.");
    }
  }

  pop() {
    if (this.length > 0) {
      this.array[this.length] = null;
      this.length--;
    } else {
      throw new Error("Cannot delete from an empty data structure.");
    }
  }

  getAt(index) {
    if (index < this.length) {
      return this.array[index];
    } else {
      throw new Error("Cannot access empty index of array list.");
    }
  }

  searchSorted(value) {
    let low = 0;
    let high = this.length;

    do {
      const midpoint = Math.floor(low + ((high - low)/2));
      if (this.array[midpoint] === value) {
        return true;
      } else if (this.array[midpoint] < value) {
        low = midpoint + 1;
      } else if (this.array[midpoint] > value) {
        high = midpoint;
      };
    } while (low < high);

    return false;
  }

  search(value) {
    for (let i = 0; i < this.length ; i++) {
      if (this.array[i] === value) {
        return true;
      }
    }
    return false;
  }

  indexOf(value) {
    for (let i = 0 ; i < this.length ; i++) {
      if (this.array[i] === value) {
        return i;
      }
    };
    return null;
  }

}

const arrayList = new ArrayList(8);
arrayList.push(43);
arrayList.push(45);
arrayList.push(87);
arrayList.push(394);
arrayList.push(400);
arrayList.push(500);
arrayList.push(600);
arrayList.push(700);
arrayList.pop();
console.log(arrayList.searchSorted(700));
// arrayList.printLength();