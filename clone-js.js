// Method 1: Using the spread operator
function cloneObjectUsingSpread(obj) {
    return { ...obj };
  }
  
  // Method 2: Using the Object.assign() method
  function cloneObjectUsingAssign(obj) {
    return Object.assign({}, obj);
  }
  
  // Method 3: Using JSON methods (only for objects without functions or symbols)
  function cloneObjectUsingJSON(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  
  // Example usage
  const originalObj = { name: "John", age: 30 };
  const clonedObj1 = cloneObjectUsingSpread(originalObj);
  const clonedObj2 = cloneObjectUsingAssign(originalObj);
  const clonedObj3 = cloneObjectUsingJSON(originalObj);
  
  console.log(clonedObj1); // { name: 'John', age: 30 }
  console.log(clonedObj2); // { name: 'John', age: 30 }
  console.log(clonedObj3); // { name: 'John', age: 30 }
  