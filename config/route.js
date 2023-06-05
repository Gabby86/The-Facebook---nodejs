const express = require('express');
const route = express.Router();
const userController = require('../controllers/feedsController');

route.get('/', userController.getHomePage)
route.get('/add-new', userController.addNew);
route.post('/createPost', userController.createPost);
route.get('/fullPost/:id', userController.getFullPost)
route.post('/delete-post/:id', userController.deletePost)
route.get('/edit/:id', userController.editPost)
route.post('/update-post/:id', userController.updatePost);

module.exports = route;
