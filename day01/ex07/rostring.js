/*
    Type 
    node rostring.js [argument]
    in the command line to execute
*/

if(process.argv[2]) {
    var arr = process.argv[2].trim().split(/\s+/);

    for(var i = 1; i < arr.length; i++) {
        process.stdout.write(`${arr[i]} `);
    }
    console.log(arr[0]);
}
