//imporitngimporting express
const express = require("express");
//importing ejs
const expressLayouts = require("express-ejs-layouts");
//importing moongooes
const moongoes = require("mongoose");
const app = express();

//ejs
app.use(expressLayouts);
app.set("view engine", "ejs");

//routes
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));
//app.use("/register", require("./routes/register"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
