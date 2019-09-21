/*
    Type
        curl 'http://127.0.0.1:8080/j03/ex02/print_get.js?gdb=pied2biche&barry=barreamine'
    in the command line to test this example
*/

module.exports.print_get = (req, res) => {
    res.set('Content-Type', 'text/plain');
    var ret = '';
    for (const key in req.query) {
        ret += `${key}: ${req.query[key]}\n`;
    }
    res.send(ret);
}