const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Invalid email']
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        default: null
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
},{timestamps:true});

const User = mongoose.model('User',userSchema);
module.exports = User