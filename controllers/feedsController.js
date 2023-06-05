const posts = require('../model/Feeds');

const getHomePage = (req, res, next) => {
  posts
    .find().sort({ createdAt: -1 })
    .then((result) => res.render('index', { users: result }))
    .catch((err) => {
      console.log(err);
    });
};

const addNew = (req, res) => {
  posts.find()
    .then((err) =>res.render('add-new', {err: err.errors}))
    .catch((err) => console.log(err));
};

const createPost = (req, res) => {
  let newPost = new posts(req.body);
  newPost
    .save()
    .then((result) => res.redirect('/'))
    .catch((err) => res.render('add-new', {err: err.errors}))
};

const getFullPost = (req, res) =>{
    posts.findById(req.params.id)
    .then(result => res.render('fullPost', { user: result }))
    .catch(err =>  console.log(err));
};

const deletePost = (req, res) =>{
    posts.findByIdAndDelete(req.params.id)
    .then(result => res.redirect('/'))
    .catch(err =>  console.log(err))
};

const editPost = (req, res) =>{
    posts.findById(req.params.id)
    .then(result => res.render('edit', { user: result }))
    .catch(err =>  console.log(err));
};

const updatePost = (req, res) =>{
    posts.findByIdAndUpdate(req.params.id, req.body)
    .then(result => res.redirect(`/fullPost/${result._id}`))
    .catch(err =>  console.log(err))
};

module.exports = {
  getHomePage,
  addNew,
  createPost,
  getFullPost,
  deletePost,
  editPost,
  updatePost
};
