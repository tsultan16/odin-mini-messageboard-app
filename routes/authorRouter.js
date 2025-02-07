const { Router } = require('express');
const { getAuthorById } = require('../controllers/authorController');

const authorRouter = Router();

// add routes for handling HTTP requests

authorRouter.get('/', (req, res) => {
    res.send("All authors");
});

authorRouter.get('/:authorId', getAuthorById);

module.exports = authorRouter;













