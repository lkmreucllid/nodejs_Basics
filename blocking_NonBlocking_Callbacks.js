//A callback function is called at the completion of a given task, once the task is finished callback function calls the callee to acknowledge with the data it was called for.

var fs = require("fs");
var data = fs.readFileSync("fileName.txt");
console.log(data.toString());
console.log("Program Ended");
//The above executions takes place sequentially and synchronously  i.e. program first read data from file and print it before printing 'Program Ended'
/* OUTPUT
Data From File
Program Ended
*/

//The below program sends a request to read the file and move to next sequense i.e. 'Program Ended' is printed first and then the file data.
var fs = require("fs");
fs.readFile("fileName.txt",function(err,data){
  if(err){
    return console.error(err);
  }
  console.log(data.toString());
});

/* OUTPUT
Program Ended
Data From File
*/

