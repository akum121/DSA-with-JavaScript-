const protoObj = {
  method() {
    // code here
  },
};

const objCreate = Object.create(protoObj);
objCreate.property1 = value1;
objCreate.property2 = value2;

class MyClass {
  constructor(property1, property2) {
    this.property1 = property1;
    this.property2 = property2;
  }

  method() {
    // code here
  }
}

const objClass = new MyClass(value1, value2);

const objLiteral = {
  property1: value1,
  property2: value2,
  method: function () {
    // code here
  },
};
