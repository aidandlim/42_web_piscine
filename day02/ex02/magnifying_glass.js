/*
    Type 
    node magnifying_glass.js [argument] > return file
    in the command line to execute
*/

const fs = require('fs');

main();

function main() {
    var argv = process.argv;

    if(argv.length === 3) {
        fs.readFile(argv[2], (err, data) => {
            if (err) {
                console.log("Invalid File");
                return;
            } else {
                func(data);
            }
        });
    }
}

function func(data) {
    var input = data.toString();

    var matches = input.match(/(<a )(.*?)(<\/a>)/sg);
    if(matches !== null) {
        for(var i = 0; i < matches.length; i++) {
            var newMatches = matches[i].match(/>.*?</sg);
            if(newMatches !== null) {
                for(var j = 0; j < newMatches.length; j++) {
                    var line = newMatches[j];
                    var target = line.match(/>.*?</s)[0];
                    var replace = target.toUpperCase();
                    input = input.replace(line, line.replace(target, replace));
                }
            }
            var newMatches = matches[i].match(/title=".*?"/sg);
            if(newMatches !== null) {
                for(var j = 0; j < newMatches.length; j++) {
                    var line = newMatches[j];
                    var target = line.match(/title="(.*?)"/s)[1];
                    var replace = target.toUpperCase();
                    input = input.replace(line, line.replace(target, replace));
                }
            }
        }
    }

    console.log(input);
}
