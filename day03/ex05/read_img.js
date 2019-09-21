/*
    Type
        http://127.0.0.1:8080/j03/ex05/read_img.js
    in the web browser to access
*/

const path = require('path');

module.exports.read_img = (req, res) => {
    res.set('Content-Type', 'image/png');
    res.sendFile(path.join(__dirname, '../', 'img', '42.png'));
}