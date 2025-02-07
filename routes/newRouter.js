const { Router } = require('express');
const { messages, links } = require('../db');


const newRouter = Router();

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
        id: messages.length, 
        text: req.body.messageText,
        user: req.body.authorName,
        added: new Date()
    })
    
    // redirect to home page
    res.redirect("/"); 
    
});


module.exports = newRouter;













