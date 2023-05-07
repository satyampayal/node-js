const app=require('./app')
const colors=require('colors');
console.log("Red".red);

/*const chalk=require('chalk');
*/console.log(chalk.red("halk in color"))

var x=22;
console.warn(app.z);
// what is filter this filter work only array 
const arr=[10,30,30];
let result=arr.filter((item)=>{
   console.log(item);
   return item;
})
console.log(result);

/* what is core module -- A module which programmer not run only use and don't import any module it's in built
   console is core module 

   non-dlobal module which user import first then use
   */
 const fs=require('fs');// fs-> file sysytem
 fs.writeFileSync("hello.txt"," hii this is non-Global Module");
