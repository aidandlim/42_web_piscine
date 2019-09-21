/*
    Type 
    node oddeven.js
    in the command line to execute
*/

var stdin = process.openStdin();

process.stdout.write('Enter a number: ');

stdin.addListener("data", d => {
    var answer = d.toString().trim();

    if(isNaN(answer) || isNaN(parseInt(answer))) {
        console.log(`'${answer}' is not a number`);
	} else {
		if(answer % 2 == 0) {
            console.log(`The number ${answer} is even`);
		} else {
			console.log(`The number ${answer} is odd`);
		}
    }
    
	process.stdout.write('Enter a number: ');
});