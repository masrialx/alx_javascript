#!/usr/bin/node
const myObject = {
    type: 'object',
    value: 12
  };
  console.log(myObject);
  
  Object.defineProperty(myObject, 'incr', {
    value: function() {
      this.value++;
    },
    enumerable: false, // This prevents the function from being enumerated
  });
  
  myObject.incr();
  console.log(myObject);
  
  myObject.incr();
  console.log(myObject);
  
  myObject.incr();
  console.log(myObject);
  