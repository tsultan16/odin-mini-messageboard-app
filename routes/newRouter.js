const { Router } = require('express');

const newRouter = Router();

const links = [
    {href: "/", text: "Home"},
    {href: "about", text: " About"},
    {href: "new", text: " New"},
];

// render ejs template file for 'about' route
newRouter.get("/", (req, res) => {
    res.render("form", { links: links, });
});

newRouter.post("/", (req, res) => {
    res.render("form", { links: links, });
});


module.exports = newRouter;













