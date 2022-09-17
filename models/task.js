const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'must be some title'],
        trim: true,

    },
    content: {
        type: String,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    }

})

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: [true, 'must be some title'],
        trim: true,

    },
    email: {
        type: String,
        required: [true, 'must be some title'],
        trim: true,
        unique: true
    }


})

const Blog = mongoose.model('Blog', blogSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
    Blog,
    User
}