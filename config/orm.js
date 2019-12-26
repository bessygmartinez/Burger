require("../config/connection.js");

let orm = {
    selectAll: function (table, cb) {
        let query = `SELECT * FROM ${process.dbTable};`
        connection.query(query, [table], function(err, res) {
            if (err) {
                console.log(err);
                throw err;
            }
            console.log(res);
            cb(res);
        })
    }
}

module.exports = orm;