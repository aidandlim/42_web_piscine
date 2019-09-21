/*
    Type 
    node another_world.js [argument]
    in the command line to execute
*/

main();

function main() {
    var arr = process.argv;

    if(arr.length > 2) {
        console.log(arr[2].trim().split(/\s+/).join(' '));
    }
}
