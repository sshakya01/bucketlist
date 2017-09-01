const express = require('express');
const listController = require('../controllers/listController');

//invokes the Router()
const listRouter = express.Router();

//listing routes
listRouter.route('/')
    .get(listController.index)
    // .post(listController.create);

listRouter.route('/:id')
    .get(listController.getOne)



module.exports = listRouter;
