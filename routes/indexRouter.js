const { Router } = require('express');

const indexRouter = Router();

const links = [
    {href: "/", text: "Home"},
    {href: "about", text: " About"},
];
const users = ["Rose", "Cake", "Biff"];

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
    }
];


// render ejs template file for '/' route
indexRouter.get("/", (req, res) => {
    res.render("index", { links: links, messages: messages, users: users });
});



module.exports = indexRouter;













