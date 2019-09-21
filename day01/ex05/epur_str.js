/*
    Type 
    node epur_str.js [argument]
    in the command line to execute
*/

if(process.argv.length === 3)
{
    console.log(process.argv[2].trim().split(/\s+/).join(' '));
}
