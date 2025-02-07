const { Router } = require('express');

const aboutRouter = Router();

const links = [
    {href: "/", text: "Home"},
    {href: "about", text: " About"},
];

// render ejs template file for 'about' route
aboutRouter.get("/", (req, res) => {
    res.render("about", { message: "This is the about page", links: links, });
});


module.exports = aboutRouter;













