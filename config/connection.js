//Set up for MySQL connection.
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
});

// Make connection.
connetion.connect((err)=>{
    if (err) throw err;
    
    console.log(`Connected as id: ${connection.threadId}`); 
});

//Export connection to the ORM to use.
module.exports = connection;