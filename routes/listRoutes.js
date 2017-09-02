const express = require('express');
const listController = require('../controllers/listController');
const viewController = require('../controllers/viewcontroller')

//invokes the Router()
const listRouter = express.Router();

//listing routes
listRouter.get('/:id/edit', listController.getOne, viewController.showEditForm, viewController.show404);

listRouter.get('/new', viewController.showAddForm);

listRouter.route('/:id')
    .get(listController.getOne, viewController.showOne, viewController.show404)
    .delete(listController.destroy, viewController.handleDelete, viewController.show404);

listRouter.route('/')
    .get(listController.index, viewController.showLists, viewController.show404)
    .post(listController.create, viewController.handleCreate, viewController.show404);


module.exports = listRouter;
