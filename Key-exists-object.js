// Sample object
var obj = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
  };
  
  // Using hasOwnProperty() method
  if (obj.hasOwnProperty('key2')) {
    console.log('The key2 exists in the object.');
  } else {
    console.log('The key2 does not exist in the object.');
  }
  
  // Using the in operator
  if ('key3' in obj) {
    console.log('The key3 exists in the object.');
  } else {
    console.log('The key3 does not exist in the object.');
  }
  