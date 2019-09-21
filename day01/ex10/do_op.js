/*
    Type 
    node do_op.js [arguments]
    in the command line to execute
*/

var arr = [];

if(process.argv.length !== 5)
{
    console.log("Incorrect Parameters");
    return;
}

if(isNaN(process.argv[2]) || isNaN(process.argv[4]))
{
    console.log("Incorrect Parameters");
    return;
}

var op = operator(process.argv[3].trim());

function operator(c) {
    if(c === '+')
        return ('+');
    if(c === '-')
        return ('-');
    if(c === '*')
        return ('*');
    if(c === '/')
        return ('/');
    if(c === '%')
        return ('%');
    return (0);
}

if(op === 0)
{
    console.log("Incorrect Parameters");
    return;
}

if(op === '+')
    console.log(parseInt(process.argv[2]) + parseInt(process.argv[4]));
if(op === '-')
    console.log(parseInt(process.argv[2]) - parseInt(process.argv[4]));
if(op === '*')
    console.log(parseInt(process.argv[2]) * parseInt(process.argv[4]));
if(op === '/')
    console.log(parseInt(process.argv[2]) / parseInt(process.argv[4]));
if(op === '%')
    console.log(parseInt(process.argv[2]) % parseInt(process.argv[4]));
