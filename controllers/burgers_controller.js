let express = require("express");
let app = express();
let burger = require("../models/burger.js");

app.get('/', function(req, res) {
    burger.selectAll(function(data) {
        let hbsObj = {
            burgers: data
        };
        res.render('index', hbsObj);
    });
});

app.post("/api/burgers", function(req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(data) {
        res.json({id: data.insertId});
    });
});

app.put("/api/burgers/:id", function(req, res) {
    let condition = `id = ${req.params.id}`

    console.log(`condition: ${condition}`);

    burger.updateOne({
        devoured: req.body.devoured
    },
    condition,
    function(result) {
        if (result.chagedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = app;