//Set up for MySQL connection.
const mysql = require("mysql");
let connection;

// Connecting project to JawsDB in Heroku
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "ofcmikjy9x4lroa2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "zoyf0kcn1b8cjt06",
        password: "wbndxwgu5orfylou",
        database: "soszli356f92nije"
    });
};

// Make connection.
connection.connect((err) => {
    if (err) throw err;

    console.log(`Connected as id: ${connection.threadId}`);
});

//Export connection to the ORM to use.
module.exports = connection;