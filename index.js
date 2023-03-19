// Import stylesheets
import './style.css';

/*
Implicit Context
---------------

There are four main contexts in which the value of this can be implicitly inferred:

1- the global context
2- as a method within an object
3- as a constructor on a function or class
4- as a DOM event handler

*/

/*
 Global
------------

1- In the global context, 'this' refers to the global object.
2. When you'r working in a browser, the global context is would be 'window'.
3. When you're working in Node.js, the global context is 'global'.

*/

console.log(this);  //<prototype>: Object

// 'this' withing a function
// -----------------------------

//in 'strict mode'
function printThis(){
  console.log(this);
}

printThis();  //undefined

/* 
An Object Method
********************

1. A method is a function on an object, or a task that an object can perform. 
2. A method uses 'this' to refer to the properties of the object.
3. In a nested object, this refers to the current object scope of the method. 

*/

const country = {
  name: 'USA',
  yearFounded: 1776,

  describe(){
    console.log(`${this.name} was founded in ${this.yearFounded}.`)
  },
}

country.describe();   //USA was founded in 1776.

//nested object
const usa = {
  name: "The United States of America",
  yearFounded: 1776,
  details: {
    name:'eagle',
    currency:"USD",
    printDetails(){
      console.log( `The symbol is the ${this.name} and the currency is ${this.currency}.`)
    },
  },
}

usa.details.printDetails();
//The symbol is the eagle and the currency is USD.
// ? Why eagle? 
// why not 'The United States of America'