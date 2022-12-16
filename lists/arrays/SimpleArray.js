class SimpleArray {
  constructor(capacity) {
    this.array = new Array(capacity);
    this.capacity = capacity;
  }

  print() {
    for (let i = 0 ; i < this.capacity ; i++) {
      console.log(this.array[i]);
    };
    console.log("-------------")
  }

  insertAt(index, value) {
    if (index > this.capacity - 1) {
      throw new Error("Cannot insert into a Simple Array beyond it's initial capacity.");
    } else {
      this.array[index] = value;
    };
  }

  deleteAt(index) {
    this.array[index] = null;
  }

  readAt(index) {
    return this.array[index];
  }

  randomFill(min, max) {
    for (let i = 0 ; i < this.capacity ; i++) {
      this.insertAt(i, Math.round((Math.random() * (max - min)) + min ));
    }
  }

  swap(index1, index2) {
    [this.array[index1], this.array[index2]] = [this.array[index2], this.array[index1]];
  }

  bubbleSort() {
    for (let i = 0 ; i < this.capacity ; i++) {
      for (let j = 0 ; j < this.capacity - i - 1 ; j++) {
        if (this.array[j] > this.array[j + 1]) {
          this.swap(j, j + 1)
        }
      }
    }
  }

  selectionSort() {
    for (let i = 0 ; i < this.capacity ; i++) {
      let lowestNumberIndex = i;
      for (let j = i + 1 ; j < this.capacity ; j++) {
        if (this.array[lowestNumberIndex] > this.array[j]) {
          lowestNumberIndex = j;
        }
      }
      if (lowestNumberIndex !== i) {
        this.swap(i, lowestNumberIndex);
      }
    }
  }

  insertionSort() {
    for(let i = 1; i < this.capacity ; i++) {
      let tempValue = this.array[i];
      for (let j = i - 1; j >= 0 ; j--) {
        if (this.array[j] > tempValue) {
          this.array[j + 1] = this.array[j];
          if (j === 0) {
            this.array[j] = tempValue;
          }          
        }
        else if (this.array[j] <= tempValue) {
          this.array[j + 1] = tempValue;
          break;
        }
      }
    }
  }

  partition(left, right) {
    const pivotPosition = left + Math.floor((right - left) / 2);
    const pivot = this.array[pivotPosition];

    while (left <= right) {
      while (this.array[left] < pivot) {
        left++;
      }

      while (this.array[right] > pivot) {
        right--;
      }

      if (left <= right) {
        this.swap(left, right);
        left++;
        right--;
      }
    }

    return left;
  }

  recursivePartition(left, right) {
    if (left < right) {
      let index = this.partition(left, right);
      if (left < index - 1) {
        this.recursivePartition(left, index - 1);
      }
      if (right > index) {
        this.recursivePartition(index, right);
      }
    }
  }

  quickSort() {
    this.recursivePartition(0, this.capacity - 1);
  }

  quickSelect(kthLowestValue, left, right) {
    if (right - left <= 0) {
      return this.array[left];
    }

    const pivotPosition = this.partition(left, right);

    if (kthLowestValue < pivotPosition) {
      this.quickSelect(kthLowestValue, left, pivotPosition - 1);
    } else if (kthLowestValue > pivotPosition) {
      this.quickSelect(kthLowestValue, pivotPosition + 1, right);
    } else {
      return this.array[pivotPosition];
    }
  }

  linearSearch(value) {
    for (let i = 0 ; i < this.capacity ; i++) {
      if (this.array[i] === value) {
        return i;
      }
    }
    return -1;
  }

  binarySearch(value) {
    let high = this.capacity;
    let low = 0;

    do {
      const midpoint = Math.floor(low + (high - low) / 2);
      const midpointValue = this.readAt(midpoint);

      if (midpointValue === value) {
        return midpoint;
      } else if (midpointValue > value) {
        high = midpoint;
      } else if (midpointValue < value) {
        low = midpoint + 1;
      }
    } while (low < high);

    return -1;
  }

}

const simpleArray = new SimpleArray(8);
simpleArray.randomFill(0, 10);
simpleArray.print();
simpleArray.insertionSort();
simpleArray.print();
// console.log(simpleArray.binarySearch(0));