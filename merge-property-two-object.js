function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
  }
  
  // Example usage
  const obj1 = { name: 'John', age: 30 };
  const obj2 = { occupation: 'Developer', country: 'USA' };
  
  const mergedObj = mergeObjects(obj1, obj2);
  console.log(mergedObj);
  