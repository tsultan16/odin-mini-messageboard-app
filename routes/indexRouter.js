const { Router } = require('express');
const { messages } = require('../db');

const indexRouter = Router();


const links = [
    {href: "/", text: "Home"},
    {href: "about", text: " About"},
    {href: "new", text: " New"},
];

const users = ["Rose", "Cake", "Biff"];


// render ejs template file for '/' route
indexRouter.get("/", (req, res) => {
    res.render("index", { links: links, title: "Mini Messageboard", messages: messages});
    console.log("Rendering index view.");
});



module.exports = indexRouter;













