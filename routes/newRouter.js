const { Router } = require('express');
const { messages } = require('../db');


const newRouter = Router();

const links = [
    {href: "/", text: "Home"},
    {href: "about", text: " About"},
    {href: "new", text: " New"},
];

// render ejs template file for 'about' route
newRouter.get("/", (req, res) => {
    res.render("form", { links: links, });
    console.log("Rendering form view.");
});

newRouter.post("/", (req, res) => {
    console.log("Recieved new message POST request");
    console.log(`Author: ${req.body.authorName}`); 
    console.log(`Message: ${req.body.messageText}`); 
    
    messages.push({
        text: req.body.messageText,
        user: req.body.authorName,
        added: new Date()
    })
    
    // redirect to home page
    res.redirect("/"); 
    
});


module.exports = newRouter;













