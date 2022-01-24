/* Given the task of looking for a simple package to grab 
   from the extensive NPM libraries, I decided to hit the 
   visuals. Chalk allows the user to excercise the color 
   capabilities from the terminal. One thing to keep in mind
   is that the newest version 5.0.0, requires a more extensive
   setup to access, so you must enter npm i chalk@4.1.0 on the command
   line to ensure the ease of use, and it did not dissappoint.*/

/* Initialize your const with .require("chalk") to access your Chalk
   package.  */
const stringy = require("chalk");

/* Here we are intitalizing some constants to give them some string values. */
const first = "Get";
const second = "a";
const third = "load";
const fourth = "of";
const fifth = "this";
const sixth = "by's!";

/* Here we are going to log our constants to the console in a print statement.
   Now we call our const stringy and attach some methods from our chalk object.
   We also use our string value constants inside the methods. As you can see we 
   used a variety of differnt methods with our stringy const. The output speaks
   for itself!
    */
console.log(
  stringy.green(first),
  stringy.blue(second),
  stringy.yellow(third),
  stringy.red(fourth),
  stringy.cyan(fifth),
  stringy.magenta(sixth)
);

/* I know what you might be saying, "But what else can this package do?" I'll
   tell you. */
/* Here we have a number of constants initialed with strings */
const seventh = "How";
const eigth = "about";
const ninth = "these";
const tenth = "awesome";
const eleventh = "background";
const twelfth = "colors?";

/* Next we call the const values inside some methods. The methods
   are working in conjunction with our original const stringy, that
   has been initialized with the .require("chalk") at the beginning
   of this eye pleasing program. So if you were thinking the 
   backgrounds need some life, I got you covered. the bg in .bgRed
   stands for background. Check these out.*/
console.log(
  stringy.bgRed(seventh),
  stringy.bgGreen(eigth),
  stringy.bgYellow(ninth),
  stringy.bgCyan(tenth),
  stringy.bgMagenta(eleventh),
  stringy.bgRedBright(twelfth)
);

/* If you are finding it hard to control you need to know if they can be
   ran simultaneously, I'm right there with you. Not sure any explanation
   is necessary at this point if you have been following along. Peep this. */
const thirteenth = "Please";
const fourteenth = "say";
const fifteenth = "they";
const sixteenth = "actually";
const seventeenth = "work";
const eighteenth = "together!";

console.log(
  stringy.bgMagenta.cyan(thirteenth),
  stringy.bgRedBright.yellow(fourteenth),
  stringy.bgYellow.black(fifteenth),
  stringy.bgCyan.red(sixteenth),
  stringy.bgGreen.blue(seventeenth),
  stringy.bgRed.green(eighteenth)
);
