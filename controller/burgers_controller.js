const express = require("express");

const router = express.Router();

const burger = require("../model/burger");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {

        var result = {
            burgers: data,
        };
        console.log(result);

    });
});

router.post("/api/burger", function (req, res) {
    burger.insert(req.body, function (result) {
        // Send back the ID of the new quote
        if ( result.affectedRow ===0 ) {
            console.log("BURGER NOT INSERTED!");
            res.status(500).end();
        } else {
            res.json({id: result.insertId});
        }
    });
});

module.exports = router;