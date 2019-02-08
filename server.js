const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

// Serve static content for the app from the "public" directory.
app.use(express.static("public"));

// Parse application body as JSON.
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Set handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controller");

app.use(routes);

// Starts the server and listens to client requests.
app.listen(PORT, ()=>{
    console.log(`Server is listen on: http://localhost:${PORT}`);
});
