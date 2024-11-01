// Considering there is no [] in javascript

class MyArrayList {
  constructor() {
    this.length = 0;
    this.arrayList = {};
  }

  push(value) {
    this.arrayList = { ...this.arrayList, [this.length]: value };
    this.length += 1;
  }

  pop() {
    delete this.arrayList[this.length - 1];
    this.length--;
  }

  get(index) {
    return this.arrayList[index];
  }

  delete(index) {
    console.log("Before: ", this.arrayList);

    for (let i = index + 1; i < this.length; i++) {
      this.arrayList[i - 1] = this.arrayList[i];
    }

    this.pop();
  }
}

const array = new ArrayList();

array.push(1);
array.push(2);
array.push(3);
array.push(4);
array.push(5);

// array.pop();

// console.log(array.get(0));

array.delete(1);
console.log("After: ", array.arrayList);

class ArrayList {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
  }

  pop() {
    const response = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;

    return response;
  }

  get(index) {
    return this.data[index];
  }

  delete(index) {
    const response = this.data[index];

    this._collapseTo(index);

    return response;
  }

  _collapseTo(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data(this.length);
    this.length--;
  }
}
