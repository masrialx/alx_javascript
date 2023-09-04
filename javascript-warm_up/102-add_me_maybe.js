#!/usr/bin/node

function addMeMaybe(number, theFunction) {
    const incrementedValue = number + 1;
    theFunction(incrementedValue);
  }
  
  module.exports.addMeMaybe = addMeMaybe;
  