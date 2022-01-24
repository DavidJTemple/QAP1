/* The OS object is able to respond with details about the users operating 
   system. Once prompted with the global require() method, there are a 
   number of different methods within the OS module that can be called. */
const osVar = require("os");
/* The .arch() method of the OS object is looking for the architexture
   of the system being used. Specifically is is looking for the size of the
   processor and is simply written in shorthand such as x32, x64, x86*/
console.log("Architecture: " + osVar.arch());
/* The .freemem() method is asking to return the amount of free memory
   memory on the system in bytes.*/
console.log("Free Memory: " + osVar.freemem());
/* The .platform() method is pretty straight forward. The platform here
   is darwin which is the core of OSX used by Apple in the Macbook Pro.*/
console.log("Platform: " + osVar.platform());
/* The .uptime() method refers to amount of time the system has been
   running in seconds by default. */
console.log("Uptime: " + osVar.uptime());

/* In order to get the .uptime() method to return vales that are more in
   line with our conventional way of expressing time values, some steps
   need to be worked into our operation. */

/* Because our default return from .uptime() is expressed in seconds, we
   need to start by initializing seconds and work up.  */
var sec = osVar.uptime();
/* Now that we have initialized the var sec, we simply divide by 60 to 
   initialize the var min to represent the total value in minutes. */
var min = sec / 60;
/* Now that we have the seconds and minutes initialized, it's not a bad
   assumption to think the hours will come next. Again we take the previous
   variable (in this case min) and divide it by 60 to get the value in hours.*/
var hour = min / 60;
/* The only the problem we have now is that we are simply getting the return
   value of the total time in seconds returned for each value. In order to express
   this in a time convential we understand we need to get some remainders in our
   equations.*/

/* So before we get our remainder values we must first must make sure our values
   being passed are whole numbers to avoid any lengthy decimals. So for that we use 
   the Math object and the .floor() method. We can move past this one as it is pretty self
   explanatory.*/
sec = Math.floor(sec);
min = Math.floor(min);
hour = Math.floor(hour);

/* Now that we have these whole numbers, we can now finalize our process.*/

/* At this point we must start woking with hour and pass is down toward our
   smaller values. Again this is pretty self explanatory. The hour divides
   by 60 and passes the reaminder. The min does the same. Then the sec. Anything
   smaller will be discarded as we used our Math.floor() method to return whole 
   numbers. */
hour = hour % 60;
min = min % 60;
sec = sec % 60;

/* Now we simply design a print statement to return our values in a easy, concise
   manner that reads clearly and is to the point.*/
console.log(
  "Up time: " + hour + " Hour(s) " + min + " Minute(s) " + sec + " Second(s) "
);

/* There were some issues with the OS object that I couldn't find clear answers for.
   When calling the .cpus() method, the objects being retuned were [object Object] in 
   place of the information that supposed to be retuned. This also happened with the 
   .userinfo() method. As far as I can tell it may be a security feature of the 
   operating system, but i was unable to retrieve solid information through extensive
   rabbit-hole research */
