/* In this .js file, we are looking at the fs or file system part of the 
   node global objects modules. Here we utilize the node to access the
   file system on our computer and perform any of the CRUD (Create, Read, 
   Update, Delete) operations.
   */

/* Here we are using the .readfile method in the File System object to read 
   the file from a specified folder. As you can see we are looking at the 
   current working dirrectory fs.js to analyze */

/* We need to use the 'require()' method to access the File System module 
   When we initlaize our const 'look', we are telling node that we 'require' 
   the fs module for the operation to follow.  */
const look = require("fs");
/* Here we are calling our .readFile() method from our fs module. We are 
   stating the filename, encoding value, and callback function. The callback
   function takes two parameters err(in case of errors), and data(file contents). */
look.readFile("./example.html", "utf8", function (err, data) {
  /* Here we are simply logging the file data to the console once the function
     has been called */
  console.log(data);
});
/* This console.log statement gets printed while the the file is being read.
   The function then gets executed*/
console.log("\n Let us have a look at our example.html file, shall we?\n");

/*
 */

/* In this next example, we are looking at the same .readFile data set, 
   only this time we are omitting the encoding default value of "utfb". 
   Now we are going to see the same data set in its binary alpha/numeric 
   form. We have decalred 'binary' as our const in this example. Our Buffer
   object doesn't need to be called so it automatically handles the stream 
   and is then printed when we log the data to the console*/
const binary = require("fs");
binary.readFile("./example.html", function (err, data) {
  console.log(data);
});
console.log("\n Let us have a look at our example.html file, shall we?\n");
