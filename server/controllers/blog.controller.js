const Blog = require('../models/blog.model')

const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({})
        if (blogs) {
            res.status(200).json(blogs)
        }
        else {
            res.status(404).json({ message: "no blogs found" })
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
}

const getBlogByTitle = async (req, res) => {
    try {
        const { title } = req.params
        const blogs = await Blog.find({ title });
        if (blogs) {
            res.status(200).json(blogs)
        }
        else {
            res.status(404).json({ message: "no blogs found" })
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

const postBlog = async (req, res) => {

    try {
        const { title, description, img, addedBy } = req.body

        const isBlogExist = await Blog.find({ title });

        if (isBlogExist.length === 0) {
            const newBlog = await Blog.create({ title, description, img, addedBy });
            if (newBlog) {
                res.status(200).json({ message: "Blog added" });
            }
        }
        else {
            res.status(409).json({ message: "Blog with same name found" });
        }
    } catch (error) {
        res.status(500).send(error);
    }

}

const editBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, img, addedBy } = req.body
        console.log(id)
        const blogUpdate = await Blog.findByIdAndUpdate(id, { $set: { title, description, img, addedBy } })
        if (blogUpdate) {
            res.status(200).json({ message: "Blog Updated" });
        }
        else {
            res.status(404).json({ message: "no blogs found" })
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const blogDelete = await Blog.findByIdAndDelete(id)
        if (blogDelete) {
            res.status(200).json({ message: "Blog Deleted" });
        }
        else {
            res.status(404).json({ message: "no blogs found" })
        }
    } catch (error) {
        res.status(500).send(error);
    }
}


module.exports = { getAllBlogs, getBlogByTitle, postBlog, editBlog, deleteBlog }