/*
    Type 
    node one_more_time.js [argument]
    in the command line to execute
*/

main();

function main() {
    var arr = process.argv;

    if(arr.length === 3) {
        var format = arr[2].split(/[: ]/);

        var year = format[3];
        var month = monthCheck(format[2]);
        var date = format[1];
        var day = format[0];
        var hours = format[4];
        var minutes = format[5];
        var seconds = format[6];

        if(month === -1 || generalCheck(year, date, day, hours, minutes, seconds) === -1) {
            console.log('Wrong Format');
            return;
        }

        console.log(Date.UTC(parseInt(year), month, parseInt(date), parseInt(hours) - 1, parseInt(minutes), parseInt(seconds)) / 1000);
    }
}

function monthCheck(str) {
    if(str === undefined)
        return (-1);
    else if(str.match(/[Jj]anvier/))
        return (0);
    else if(str.match(/[Ff]évrier/))
        return (1);
    else if(str.match(/[Mm]ars/))
        return (2);
    else if(str.match(/[Aa]vril/))
        return (3);
    else if(str.match(/[Mm]ai/))
        return (4);
    else if(str.match(/[Jj]uin/))
        return (5);
    else if(str.match(/[Jj]uillet/))
        return (6);
    else if(str.match(/[Aa]oût/))
        return (7);
    else if(str.match(/[Ss]eptembre/))
        return (8);
    else if(str.match(/[Oo]ctobre/))
        return (9);
    else if(str.match(/[Nn]ovembre/))
        return (10);
    else if(str.match(/[Dd]écembre/))
        return (11);
    else
        return(-1);
}

function generalCheck(year, date, day, hours, minutes, seconds) {
    if(isNaN(year) || year.length !== 4 || parseInt(year) < 1970)
        return (-1);
    if(isNaN(date) || parseInt(date) < 0 || parseInt(date) > 31)
        return (-1);
    if(!day.match(/([Ll]undi|[Mm]ardi|[Mm]ercredi|[Jj]eudi|[Vv]endredi|[Ss]amedi|[Dd]imanche)/))
        return (-1);
    if(isNaN(hours) || hours.length !== 2 || !(0 <= parseInt(hours) && parseInt(hours) <= 23))
        return (-1);
    if(isNaN(minutes) || minutes.length !== 2 || !(0 <= parseInt(minutes) && parseInt(minutes) <= 59))
        return (-1);
    if(isNaN(seconds) || seconds.length !== 2 || !(0 <= parseInt(seconds) && parseInt(seconds) <= 59))
        return (-1);
    return (1);
}
