const connection = require("./connection");

// selectAll()
const orm = {
    select: ((whatToSelect, tableInput)=>{
        let queryString = "SELECT ?? from ??";
        connection.query(queryString, [whatToSelect, tableInput])
    })
}

// insertOne()


// updateOne()


module.exports = orm;