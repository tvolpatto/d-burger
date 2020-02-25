const conn = require("./connection");

const orm = {

    selectAll = function (tableName, callback) {
        conn.query("SELECT * FROM ??", [tableName], function (err, data) {
            if (err) throw err;
            return callback(data);
        });
    },

    insertInto = function () {
        console.log("Not implemented");
    },

    updateOne = function () {
        console.log("Not implemented");
    }

}

module.exports = orm;
