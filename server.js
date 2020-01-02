//Required files
let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let exphbs = require("express-handlebars");

let PORT = process.env.PORT || 8080;

app.get("/", function(req, res) {
    res.json(path.join(__dirname, "public/index.html"));
  });

//To server static content for the app from "public" directory
app.use(express.static("public"));

//Parse app
app.use(bodyParser.urlencoded({extended: false}));

//Parse app/JSON
app.use(bodyParser.json());

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Import routes and give the server access
let routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
    console.log(`App now listening at localhost: ${PORT}`)
})