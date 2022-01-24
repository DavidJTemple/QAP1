/* So I decided to also try the Lodash package for the QAP. 
   What i see is some very practical features for everyday
   programming tasks. This is the concept of lodash. Allows
   the programmer to write and maintain more concise code */

/* So we simply intialize our underscore or 'lodash' with the 
   require() method.*/
const _ = require("lodash");

/* So for this example, I'm using an array of string values. I have
   also chose to assign myArray to a variable for ease of change.*/
var myArray = [
  "baseball",
  "basketbll",
  "hockey",
  "golf",
  "football",
  "soccer",
  "tennis",
  "vollyball",
];
/* Here we are logging to the console with the const _ plus the .nth()
   method which accepts two parameters. The first is the array, and
   the second is the index number you wish to access in the array.
   The .nth() method is an operator that calls a specified index number.
   In this case we have called, the index[5] and it should return "soccer".*/
console.log(_.nth(myArray, 5));
/* In this example we used a negative number to access the index starting
   from the last value in the array, moving left. This -5 value should
   return "golf"*/
console.log(_.nth(myArray, -5));

/* */

/* In the next example, we'll be looking at the .chunk() method of lodash.
   The function of this method is to split a larger array into smaller
   arrays or 'chunks' the length of a specified size.*/

/* Here we have an array with some strange looking strings.*/
var thisArray = [
  "can",
  "cel",
  "every",
  "thing",
  "dav",
  "id",
  "no",
  "one's",
  "list",
  "ening",
];

/* Here we are intializing a new const chunky, to group the
   values from myArray into smaller arrays of 2 using .chunk() 
   method which is accepting two parameters. The original array
   and the required size of the new smaller arrays.*/
const chunky = _.chunk(thisArray, 2);
// Then we print some chunks.
console.log(chunky);
