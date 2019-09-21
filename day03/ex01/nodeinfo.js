/*
    Type
        http://127.0.0.1:8080/j03/ex01/nodeinfo.js
    in the web browser to access
*/

const nodeinfo = require('../ex00/node_modules/nodejs-info');

module.exports.nodeinfo = (req, res) => {
    res.send(nodeinfo(res));
}