var orm = require("../config/orm.js");

var food = {
    all: function (callback) {
        orm.all("foodtable", function (response) {
            callback(response);
        });
    },
    update: function (id, callback) {
        orm.update("foodtable", id, callback);
    },
    create: function (columns, nameValues, calorieValues, callback) {
        orm.create("foodtable", columns, nameValues, calorieValues, function(response) {
            callback(response);
        });
    }
};

module.exports = food;