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
            return callback(data);
        });
    },

    updateOne : function (tableName, fields, callback) {
        conn.query("UPDATE ?? SET ?? = ? where ?? = ?", 
            [tableName, fields.set.name, fields.set.value, fields.where.name, fields.where.value],
            function (err, data) {
                if (err) throw err;
                return callback(data);
            }
        );
    }

}

module.exports = orm;
