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

module.exports = router;