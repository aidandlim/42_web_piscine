/*
    Type 
    cat [file] | node agent_stats.js [option]
    in the command line to execute
*/

var stdin = process.openStdin();
var param = process.argv;

if(param.length === 3) {
    stdin.addListener('data', d => {
        var input = d.toString().trim();
        var line = input.split('\n');

        if(param[2] === 'average' || param[2] === 'moyenne') {
            var sum = 0;
            var num = 0;
            for(var i = 1; i < line.length; i++) {
                var temp = line[i].split(';');
                if(temp[2] !== 'moulinette' && temp[1].length !== 0) {
                    sum += parseInt(temp[1]);
                    num++;
                }
            }
            console.log((sum / num).toFixed(13));
        } else if(  param[2] === 'average_user' || param[2] === 'moyenne_user' ||
                    param[2] === 'moulinette_variance' || param[2] === 'ecart_moulinette') {
            var users = [];
            for(var i = 1; i < line.length; i++) {
                var temp = line[i].split(';');
                if(temp[1].length !== 0) {
                    var check = 0;
                    for(var j = 0; j < users.length; j++) {
                        if(users[j].name === temp[0]) {
                            if(temp[2] !== 'moulinette') {
                                users[j].sum = users[j].sum + parseInt(temp[1]);
                                users[j].num = users[j].num + 1;
                            } else {
                                users[j].moul = parseInt(temp[1]);
                            }
                            check++;
                            break;
                        }
                    }
                    if(check === 0) {
                        users.push({
                            name: temp[0],
                            sum: parseInt(temp[1]),
                            num: 1,
                            moul: parseInt(temp[3])
                        });
                    }
                }
            }
            users.sort((a, b) => (a.name > b.name) ? 1 : -1);
            if(param[2] === 'average_user' || param[2] === 'moyenne_user') {
                for(var i = 0; i < users.length; i++) {
                    var res = (users[i].sum / users[i].num).toFixed(13).replace(/(0+$)/, "");
                    if(res.slice(res.length - 1) === '.')
                        res = res + '0';
                    console.log(`${users[i].name}:${res}`);
                }
            } else {
                for(var i = 0; i < users.length; i++) {
                    var res = ((users[i].sum / users[i].num) - users[i].moul).toFixed(13).replace(/0+$/, "");
                    if(res.slice(res.length - 1) === '.')
                        res = res + '0';
                    console.log(`${users[i].name}:${res}`);
                }
            }
        }
    });
}
