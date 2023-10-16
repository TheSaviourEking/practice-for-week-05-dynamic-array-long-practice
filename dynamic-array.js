class DynamicArray {

  constructor(defaultSize = 4) {

    // Your code here
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(this.capacity);
  }

  read(index) {

    // Your code here
    return this.data[index];
  }

  push(val) {

    // Your code here
    this.data[this.length] = val;
    this.length++;
    if (this.length > this.capacity) {
      this.resize();
    }
  }


  pop() {

    // Your code here
    let returnValue = this.data[this.length - 1];
    this.data[this.length - 1] = undefined;
    this.length--;
    if (this.length < 0) this.length = 0;
    return returnValue;
  }

  shift() {

    // Your code here
    let returnValue = this.data[0];
    for (let i = 0; i < this.data.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.length--;
    if (this.length < 0) this.length = 0;
    return returnValue;
  }

  unshift(val) {

    // Your code here
    for (let i = this.data.length; i >= 1; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;
    this.length++;
    if (this.length > this.capacity) {
      this.resize();
    }
  }

  indexOf(val) {

    // Your code here
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === val) return i;
    }
    return -1;
  }

  resize() {

    // Your code here
    let newArray = new Array(this.capacity*2);
    for (let i = 0; i < this.length; i++) {
      newArray[i] = this.data[i];
    }
    this.data = newArray;
    this.capacity *= 2;
  }

}

module.exports = DynamicArray;
