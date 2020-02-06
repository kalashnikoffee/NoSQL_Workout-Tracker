const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("./public"));
app.use(express.static(__dirname + '/public'));

// const db = require('./app/models');

require("./application/routes/api-routes.js")(app);
require("./application/routes/html-routes.js")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness", { useNewUrlParser: true });

//Uncomment for sample data
// require('./seeders/seed.js')(db);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

// //dependencies 
// const express = require("express");
// const mongoose = require("mongoose");
// // const dotenv = require("dotenv");

// // Sets up the Express App
// const app = express();
// const PORT = process.env.PORT || 8080;

// // Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Static directory
// app.use(express.static("public"));

// // mongoose.connect(process.env.MONGODB_URI || "mongodb://jiahuiwang:1990Lucky@ds315359.mlab.com:15359/heroku_3s1j9x2z", {
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout"
// mongoose.connect(MONGODB_URI, {
// useNewUrlParser: true,
//   useFindAndModify: false
// });

// // Requiring our models for syncing
// const db = require("./app/models");

// // Routes---app.use
// app.use(require("./App/routes/api-routes.js"));
// app.use(require("./App/routes/html-routes.js"));

// app.listen(PORT, () => {
//     console.log(`App running on port ${PORT}!`);
//   });