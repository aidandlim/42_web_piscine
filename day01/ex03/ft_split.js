/*
    Type 
    node ft_split.js
    in the command line to execute
*/

function ft_split(str) {
    if(str) {
        return (str.trim().split(/\s+/).sort());
    }
}

// Example
var example = ft_split("  Hello		World AAA   	");
// var example = ft_split("hello");
// var example = ft_split("");

if(example) {
    console.log('Array\n(');
    for(var i = 0; i < example.length; i++) {
        console.log(`\t[${i}] => ${example[i]}`);
    }
    console.log(')');
}