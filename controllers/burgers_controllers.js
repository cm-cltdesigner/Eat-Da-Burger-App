var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hdbarsObj = {
            burgers: data
        };
        console.log(hdbarsObj);
        res.render("index", hdbarsObj);
    });

    router.post("/api/burgers", function (req, res) {
        burger.insertOne(
            ["burgers_name", "devoured"],
            [req.body.burgers_name, req.body.devoured],
            function (result) {
                // Send back the ID of new burger
                res.json({ id: result.insertId });
            }
        );
    });
    router.put("/api/burgers/:id", function (req, res) {
        var condition = "id = " + req.params.id;

        console.log("condition", condition);
        burger.updateOne({ devoured: req.body.devoured }, condition, function (
            result
        ) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });
    router.delete("/api/burgers/:id", function (req, res) {
        var condition = "id = " + req.params.id;
        console.log("condition", condition);

        burger.deleteOne(condition, function (result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });
});
module.exports = router;