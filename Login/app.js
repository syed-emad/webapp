//imporitngimporting express
const express = require("express");
//importing ejs
const expressLayouts = require("express-ejs-layouts");
//importing moongooes
const moongoes = require("mongoose");
const app = express();

//db config
const db = require("./config/keys").MongoURI;

//connect to mongo
moongoes
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDb Connected..."))
  .catch(err => console.log(err));

//ejs
app.use(expressLayouts);
app.set("view engine", "ejs");

//bodyparser
app.use(express.urlencoded({ extended: false }));
//routes
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));
//app.use("/register", require("./routes/register"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
