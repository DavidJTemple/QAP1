/* Here we are using the Node global Buffer object. This object is able to
   access the binary data of specific information */
/* I entered a lengthy string to test the Buffer objects .byteLength() method and
   its ability to calculate the amount of bytes in a given string. Given that 
   each character and space is equal to 1 byte, the answer of 56 is correct
   for the following string. The Buffer object does not need to call the module
   via require(). */

// Applying the .byteLength() method to the Buffer object
const funTimes = Buffer.byteLength(
  // A long string is typed with varying characters
  "4 ~ Missippi ~ moments ~ on ~ a ~ mega ~ money ~ mash-up"
);
/* Here we are simply logging the const funTimes to the console to see result.
   It returns the amount of bytes used in the string.*/
console.log(funTimes);
/* 



*/
/* In this use of the Buffer objects .from method, we are
   able to convert the any string to its binary alpha/numeric 
   data type. This is the character representation in the binary
   data system. Each character typed has a corresponding data set. */

// The only change from the first example is the .from() method to show binary data.
const funTimes1 = Buffer.from(
  "4 ~ Missippi ~ moments ~ on ~ a ~ mega ~ money ~ mash-up"
);
console.log(funTimes1);
