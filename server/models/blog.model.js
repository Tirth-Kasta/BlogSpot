const mongoose = require('mongoose');
// const { Schema } = mongoose;
const commentSchema = require('./comment.model')

const blogSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true, 
        trim: true, 
        maxlength: 300 
    },
    description: { 
        type: String, 
        required: true 
    },
    img: { 
        type: String, 
        default: null 
    },
    addedBy: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', required: true 
    },
    comments: { 
        type: [commentSchema], 
        default: [] 
    },
    likes: { 
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], 
        default: [] 
    },
}, { timestamps: true });

blogSchema.virtual('likeCount').get(function() { return this.likes?.length || 0; });
blogSchema.virtual('commentCount').get(function() { return this.comments?.length || 0; });


const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog