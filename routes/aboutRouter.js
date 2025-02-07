const { Router } = require('express');

const aboutRouter = Router();

const links = [
    {href: "/", text: "Home"},
    {href: "about", text: " About"},
    {href: "new", text: " New"},
];

// render ejs template file for 'about' route
aboutRouter.get("/", (req, res) => {
    res.render("about", { message: "This is the about page for my super awesome mini messageboard app!", links: links, });
    console.log("Rendering about view.");

});


module.exports = aboutRouter;













