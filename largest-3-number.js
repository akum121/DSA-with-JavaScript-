
// const num1 = 50;
// const num2 = 49;
// const num3 = 55;

// const largest = Math.max(num1, num2, num3);

// console.log("The largest number is " + largest);

const prompt = require('prompt-sync')();

let n = prompt("Enter the length of th array = ");

 function createUserInputArray (n){
    const arr = [];
    for(let i = 0; i<n ; i++){
        let element = prompt(`Enter the element ${i + 1}: `);
        arr.push(element);
    }
    return arr;
 }

 let userInputArray = createUserInputArray(n);
 console.log("Input array:", userInputArray);

 function print2largest(userInputArray) {
    // Initialize variables to keep track of the largest and second largest elements
    let largest = -1;
    let secondLargest = -1;
  
    // Traverse through the array and update the largest and second largest elements
    for (let i = 0; i < userInputArray.length; i++) {
      // If current element is larger than the largest, update both largest and second largest
      if (userInputArray[i] > largest) {
        secondLargest = largest;
        largest = userInputArray[i];
        
      }
      // If current element is smaller than the largest but larger than the second largest, update only second largest
      else if (userInputArray[i] > secondLargest && userInputArray[i] < largest) {
        secondLargest = userInputArray[i];
      }
    }
  
    // Return the second largest element
    return secondLargest;
    
  }


  let secondLargest = print2largest(userInputArray);

  // console.log("First Largest:", largest);
  console.log("Second Largest:", secondLargest);
