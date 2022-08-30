// Now to have a controller we need model of our project
const Blog = require('../models/task');

const displayBlogs =  (req,res)=>{
    res.send('get all blogs')
}
/*
const postBlog = async(req,res=>{
    
})

const updateBlog = async(req,res=>{
    
})

const deleteBlog = async(req,res=>{
    
})
*/
module.exports = {
    displayBlogs,
    // postBlog,
    // updateBlog,
    // deleteBlog
}