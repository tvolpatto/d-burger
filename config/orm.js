const conn = require("./connection");

const orm = {

    selectAll : function (tableName, callback) {
        conn.query("SELECT * FROM ??", [tableName], function (err, data) {
            if (err) throw err;
            return callback(data);
        });
    },

    insertInto : function (tableName, newObj, callback) {
        conn.query("INSERT INTO ?? SET ?", [tableName, newObj], function (err, data) {
            if (err) throw err;
            return callback({id: data.insertId});
        });
    },

    updateOne : function () {
        console.log("Not implemented");
    }

}

module.exports = orm;
