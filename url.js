/* In the URL module we are able to ultize the object to eplore 
   the URL addresses we use into much greater detail by breaking
   their sections down into their corresponding properties. */

/* Again we start by intializing our const to call the .require() method 
   in order to access the URL object.   */
const url = require("url");

/* Here we set in a vaiable for the address we wish to use. Easy enough. */
const addy = "https://www.w3schools.com/nodejs/nodejs_url.asp";
/* Now we need to intialze a new const to return some values when we use our
   .parse() method to break down our url. As you see we throw our addy const
   inside the .parse() method. */
const newRl = url.parse(addy);
/* Now when we call newRl to our print statement, voila. A breakdown
   of our addy url. For more info visit the url we have used here.*/
console.log(newRl);

/* ********************* */

/* Ok maybe you might be saying, "Dave man, that's too many steps." Well
   you might be right.  */
// Initialize the const stuRl to access the URL object methods... check
const stuRl = require("url");
/* Skip the intitalizing of another const... check.
   Use the const addy initalized in the previous exmple.... check
   Use the .parse(addy) from our previous example, but insted attach it to
   our on const and put it in a print statement.... check. 
   And here we get the same breakdown but we were able to omit the use of the
   second const. However it may be valuable in a larger operation to initalize
   more constants to make your program more dynamic*/
console.log(stuRl.parse(addy));
