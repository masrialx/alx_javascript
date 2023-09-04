#!/usr/bin/node

const myObject = {
    type: 'object',
    value: 12
  };
  
  // Define the incr function as a named function
  myObject.incr = function incr() {
    this.value++;
  };
  
  console.log(myObject);
  
  myObject.incr();
  console.log(myObject);
  
  myObject.incr();
  console.log(myObject);
  
  myObject.incr();
  console.log(myObject);
  