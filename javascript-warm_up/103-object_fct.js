#!/usr/bin/node
const myObject = {
    type: 'object',
    value: 12
  };
  console.log(myObject);
  
  myObject.incr = function() {
    this.value++;
  };
  
  myObject.incr();
  console.log(myObject);
  
  myObject.incr();
  console.log(myObject);
  
  myObject.incr();
  console.log(myObject);
  
  // Ensuring the incr property is shown as [Function]
  Object.defineProperty(myObject, 'incr', {
    value: myObject.incr,
    enumerable: true,
    configurable: true,
    writable: true
  });
  