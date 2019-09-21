/*
    Type
        curl -c cook.txt 'http://127.0.0.1:8080/j03/ex03/cookie_crisp.js?action=set&name=plat&value=choucroute'
        curl -b cook.txt 'http://127.0.0.1:8080/j03/ex03/cookie_crisp.js?action=get&name=plat'
        curl -c cook.txt 'http://127.0.0.1:8080/j03/ex03/cookie_crisp.js?action=del&name=plat'
    in the command line to test this example
*/

module.exports.cookie_crisp = (req, res) => {
    try {
        var q = req.query;
        if(q.action === 'get' && q.name)
            res.send(req.cookies[q.name]);
        else if(q.action === 'set' && q.name && q.value)
            res.cookie(q.name, q.value).send();
        else if(q.action === 'del' && q.name)
            res.clearCookie(q.name).send();
        else
            throw 'error';
    } catch {
        res.send('Invalid Parameter');
    }
}