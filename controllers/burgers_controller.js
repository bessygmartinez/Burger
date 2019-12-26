let express = require("express");
let app = express();
require("../models/burger.js");

app.get('/', function(req, res) {
    burger.selectAll(function(data) {
        let hbsObj = {
            burgers: data
        };
        res.render('index', hbsObj);
    });
});

module.exports = app;