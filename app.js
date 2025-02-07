const express = require('express');
const newRouter = require('./routes/newRouter');
const aboutRouter = require('./routes/aboutRouter');
const indexRouter = require('./routes/indexRouter');
const path = require("node:path");

// create server
const app = express();

// folder containing static assets
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// add views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use(express.urlencoded({ extended: true }));

app.use('/about', aboutRouter);
app.use('/new', newRouter);
app.use('/', indexRouter);


app.listen(3000, () => {
    console.log("App is listening on port 3000...");
});





