let connection = require("../config/connection.js");
require("dotenv").config();

function printQuestion(num) {
    let arr = [];

    for (let i = 0; i < num; i++){
        arr.push("?");
    }

    return arr.toString();
};

function objToSQL(ob) {
    let arr = [];
    for (let key in ob) {
        let value = ob[key];
        if(Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = `'${value}'`;
            }
            arr.push(`${key} = ${value}`)
        }
    }
    return arr.toString();
};

let orm = {
    selectAll: function (table, cb) {
        let query = `SELECT * FROM ${process.env.dbTable};`
        connection.query(query, [table], function(err, res) {
            if (err) {
                console.log(err);
                throw err;
            }
            console.log(res);
            cb(res);
        });
    },

    insertOne: function(table, cols, vals, cb) {
        let query = `INSERT INTO ${process.env.dbTable}`;
        query += ' (';
        query += cols.toString();
        query += ') ';
        query += 'VALUES (';
        query += printQuestion(vals.length);
        query += ') ';

        connection.query(query, vals, function(err, res) {
            if (err) {
                console.log(err);
                throw err;
            }
            cb(res);
        });
    },

    updateOne: function(table, obj, condition, cb) {
        let query = `UPDATE ${process.env.dbTable}`;
        query += ' SET ';
        query += objToSQL(obj);
        query += ' WHERE ';
        query += condition;

        connection.query(query, function(err, res) {
            if (err) {
                console.log(err);
                throw err;
            }
            cb(res);
        });
    }
};

module.exports = orm;