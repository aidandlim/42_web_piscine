/*
    Type 
    node who.js
    in the command line to execute
*/

const { spawn } = require('child_process');

main();

function main() {
    var w = spawn('w', ['-h']);
    var d = spawn('date');

    w.stdout.on('data', wData => {
        w = wData.toString().split(/\s+/);
        d.stdout.on('data', dData => {
            d = dData.toString().split(/\s+/);
            for(var i = 0; i < w.length; i++) {
                if(w[i] === w[0]) {
                    process.stdout.write(w[i + 0] + '\t ');
                    process.stdout.write((w[i + 1] !== 'console' ? 'tty' + w[i  + 1] : 'console') + '  ');
                    process.stdout.write(d[1] + ' ');
                    process.stdout.write(d[2] + ' ');
                    process.stdout.write((w[i + 3].length === 4 ? '0' + w[i + 3] : w[i + 3]) + '\n');
                }
            }
        });
    });
}
