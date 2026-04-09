const populatedb = require('./database/populatedb');
const path = require('node:path');
const express = require('express');
const app = express();
const itemRouter = require("./routers/items")
const categoryRouter = require('./routers/categories')

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

populatedb();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use('/items', itemRouter);
app.use('/categories', categoryRouter);
app.use('/', itemRouter);

app.listen(3000, (err) => {
    if(err){
        throw(err);
    }
});