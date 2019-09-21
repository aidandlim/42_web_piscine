/*
    Type 
    node search_it!.js [arguments]
    in the command line to execute
*/

var arr = process.argv;

if(arr.length > 3)
{
    var result = -1;
    for(var i = 3; i < arr.length; i++) {
        if(arr[2] === arr[i].split(':')[0]) {
            var temp = arr[i].split(':');
            if(temp && temp[1] !== undefined)
                result = temp[1];
        }
    }
    if(result !== -1)
        console.log(result);
}
