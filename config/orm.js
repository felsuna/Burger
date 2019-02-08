// Import MySQL connection.
const connection = require("./connection");

// Helper function for SQL syntax.  
// Loops through and creates an array of question marks and turns it into a string.
function printQuestionMarks(num) {
    const burgerArray = [];

    for (var i = 0; i < num; i++) {
        burgerArray.push("?");
    };
    return burgerArray.toString();
};

// Function to convert object key and value pairs to SQL syntax.
function objectToSql(object) {
    const burgerArray = [];

    // Loop through keys and push key/vale as a string integer array.
    for (let key in object) {
        const value = object[key];
        if (Object.hasOwnProperty.call(object, key)) {
            // If string has spaces, add quotations.
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            };
            burgerArray.push(key + "=" + value);
        };
    };
    return burgerArray.toString();
};

// Object for all SQL statement functions.
const orm = {

    // selectAll()
    all: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, (err, result) => {
            if (err) throw err;

            cb(result);
        });
    },
    // insertOne()
    create: function (table, cols, vals, cb) {
        const queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, (err, result) => {
            if (err) throw err;

            cb(result);
        });
    },
    // updateOne()
    update: function (table, objColVals, condition, cb) {
        const queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objectToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(result);

        connection.query(queryString, (err, result) => {
            if (err) throw err;

            cb(result);
        });
    }
};

// Export the orm object to the model (burgers.js).
module.exports = orm;