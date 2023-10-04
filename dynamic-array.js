class DynamicArray {

  constructor(defaultSize = 4) {

    // Your code here
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(defaultSize);
  }

  read(index) {

    // Your code here
    return this.data[index];
  }

  push(val) {

    // Your code here
    this.data[this.length] = val;
    if (this.length + 1 > this.capacity) this.resize();
    return ++this.length;
  }


  pop() {

    // Your code here
    if (this.length <= 0) return undefined;
    let lastValidElementIndex = null;
    for (let i = this.data.length; i >= 0; i--) {
      if (this.data[i]) {
        lastValidElementIndex = i;
        break;
      }
    }

    this.data.splice(lastValidElementIndex, 1);
    return this.length--;
  }

  shift() {

    // Your code here
    if (this.length <= 0) return undefined;
    let element = this.data[0]
    this.data.splice(0, 1);
    this.length--;
    return element;
  }

  unshift(val) {

    // Your code here
    if (this.length + 1 > this.capacity) this.resize();
    for (let i = this.data.length - 1; i >= 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;
    return ++this.length;
  }

  indexOf(val) {

    // Your code here
    return this.data.findIndex(element => element === val);
  }

  resize() {

    // Your code here
    this.capacity = this.capacity * 2;
    this.data.length = this.capacity;
  }

}


module.exports = DynamicArray;
