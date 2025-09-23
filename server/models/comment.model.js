const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'User', 
    },
    text: { 
        type: String, required: true, 
        trim: true 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
}, { timestamps: true });

// const Comment = mongoose.model('Comment', commentSchema);
module.exports = commentSchema