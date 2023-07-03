// Sample object
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
  console.log('Before:', person);
  
  // Remove the 'age' property
  delete person.age;
  
  console.log('After:', person);
  