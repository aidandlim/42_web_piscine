/*
    Type 
    node do_op2.js [arguments]
    in the command line to execute
*/

if(process.argv.length !== 3)
{
    console.log("Incorrect Parameters");
    return;
}

var format = process.argv[2].trim().split(/\s+/).join('');

var op = [];
for(var i = 0; i < format.length; i++) {
    if(operator(format[i]) !== 0)
        op.push(i);
}

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

if(op.length === 0 || op.length > 3) {
    console.log("Syntax Error");
    return;
}

var realop = 0;

if(op.length === 1)
{
    realop = 0;
} else if(op.length === 2) {
    if(op[0] === 0) {
        realop = 1;
    } else {
        realop = 0;
    }
} else {
    realop = 1;
}

for(var i = 0; i < op.length; i++) {
    if(i !== realop && !isSign(format[op[i]]))
    {
        console.log("Syntax Error");
        return;
    }
}

function isSign(c) {
    return (c === '+' || c === '-');
}

var num = op[realop];
op = format[op[realop]];

var a = format.slice(0, num);
var b = format.slice(num + 1, format.length);

if(isNaN(a) || isNaN(b))
{
    console.log("Syntax Error");
    return;
}

if(op === '+')
    console.log(parseInt(a) + parseInt(b));
if(op === '-')
    console.log(parseInt(a) - parseInt(b));
if(op === '*')
    console.log(parseInt(a) * parseInt(b));
if(op === '/')
    console.log(parseInt(a) / parseInt(b));
if(op === '%')
    console.log(parseInt(a) % parseInt(b));

