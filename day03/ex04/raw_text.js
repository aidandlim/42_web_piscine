/*
    Type
        curl 'http://127.0.0.1:8080/j03/ex04/raw_text.js'
    in the command line to test this example
*/

module.exports.raw_text = (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('<html><body>Hello</body></html>');
}