const { Router } = require('express');
const { getMessageById, messages, links } = require('../db');

const indexRouter = Router();




// render ejs template file for '/' route
indexRouter.get("/", (req, res) => {
    res.render("index", { links: links, title: "Mini Messageboard", messages: messages});
    console.log("Rendering index view.");
});

indexRouter.get("/:messageId", getMessage);


async function getMessage(req, res) {
    const id = req.params.messageId;
    console.log(`Received GET request for message id: ${id}`);

    try{
        const message = await getMessageById(id);
        if(!message) {
            res.status(404).send('Message not found');
            return;
        }
        
        res.render("messageDetails", { links: links, message: message});
        console.log("Rendering message details view.");

    } catch (error) {
        console.error('Error retrieving message: ', error);
        res.status(500).send("Internal Server Error");    
    }
};




module.exports = indexRouter;













