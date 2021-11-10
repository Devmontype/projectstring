const string_add=require('./code');
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let delim='';
let str='';
//console.log(string_add("23,56,7"))

//console.log(string_add("0.1,-2,9,-3",","))

console.log("To exit from the entry type  exit")

rl.question("delimiter ? ", function(name) {
    delim=name;
});
rl.on('line', function(line){

    if(line=="exit"){
        console.log(str)
        console.log(string_add(str,delim))
        rl.close()
    }else{
        str+=line;
    }
    
    
})

