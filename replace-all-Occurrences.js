function replaceAll(str, searchValue, replaceValue) {
    return str.replace(new RegExp(searchValue, 'g'), replaceValue);
  }
  
 
  const originalString = 'Hello World! Hello Universe!';
  const modifiedString = replaceAll(originalString, 'Hello', 'Hi');
  console.log(modifiedString); 
  