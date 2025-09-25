const express = require('express');
const routes = express.Router();
const authControllers = require('../controllers/auth.controller')
const blogControllers = require('../controllers/blog.controller')

const authMiddleware = require('../middleware/auth.middleware');
//Home API
routes.get("/", authMiddleware, (req, res) => { res.status(200).send("Hello World") })

//auth API
routes.post("/login", authControllers.login)
routes.post("/register", authControllers.register)
routes.get("/user/:id", authMiddleware, authControllers.user)

//blog API
routes.get("/blog", authMiddleware, blogControllers.getAllBlogs)
routes.get("/blog/:title", authMiddleware, blogControllers.getBlogByTitle)
routes.post("/blog", authMiddleware, blogControllers.postBlog)
routes.put("/blog/:id", authMiddleware, blogControllers.editBlog)
routes.delete("/blog/:id", authMiddleware, blogControllers.deleteBlog)


module.exports = routes;