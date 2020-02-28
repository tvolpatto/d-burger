const express = require("express");

const router = express.Router();

const burger = require("../model/burger");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var result = {
            devoureds: [],
            nonDevoureds: []
        };

        data.map(r => {
            if (r.devoured === 1) {
                r.devoured = true;
                result.devoureds.push(r);
            } else {
                r.devoured = false;
                result.nonDevoureds.push(r);
            }
        });

        res.render("index", result);
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

router.put("/api/devour/:id", function (req, res) {
    burger.devour(req.params.id, function (result) {
      
        if ( result.changedRows ===0 ) {
            console.log("BURGER NOT UPDATED!");
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;