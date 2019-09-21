/*
    Type 
    node ssap.js [argument]
    in the command line to execute
*/

var arr = [];

for(var i = 2; i < process.argv.length; i++) {
    arr = arr.concat(process.argv[i].trim().split(/\s+/));
}

arr.sort();

for(var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
