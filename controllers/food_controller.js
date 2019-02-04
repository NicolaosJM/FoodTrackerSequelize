var express = require("express");

var router = express.Router();

var food = require("../models/food.js");

router.get("/", function (request, response) {
    food.all(function (data) {
        console.log(data);
        response.render("index", {foodtable: data});
    });
});

router.put("/api/update/:id", function (request, response) {
    food.update(request.params.id, function(result) {
        response.render("index", {foodtable: result});
    });
});

router.post("/api/create", function (request, response) {
    food.create([
        "meal_name",
        "calorie_count"
    ], 
        request.body.meal_name,
        request.body.calorie_count
    , function (result) {
        console.log(3)
        response.json({ id: result.insertId});
    });
});

module.exports = router;