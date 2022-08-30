// Now to have a controller we need model of our project
const Blog = require('../models/task');

const displayBlogs =  async (req,res)=>{
    console.log('hi')
    const blogs = await Blog.find({});
    res.status(200).json({
        blogs
    });
}

const postBlog = async (req,res)=>{
    const blog = await Blog.create(req.body)
    console.log('blog' , req.body.title);
    res.status(200).json({ blog })
}

const getBlog = async (req,res)=>{
    const {Id : blogId } = req.params;
    if(blogId){
        console.log(req.params)
        const blog = await Blog.findOne({_id : blogId})
    
        if(!blog){
            console.log('No blog selected');
            return next(createCustomError(`No task with id : ${TaskId}`, 404))
            
        }
        res.status(200).json({blog})
    }
    
}

const deleteBlog = async (req,res)=>{
    const {Id : blogId } = req.params;
    const blog = await Blog.deleteOne({_id : blogId})
    if(!blog){
        console.log('No blog selected')
    }

    res.status(200).json('blog deleted..')
}

const updateBlog = async (req,res)=>{
    const {Id : blogId } = req.params;
    const blog = await Blog.updateOne({_id : blogId} , req.body)

    if(!blog){
        console.log('No blog selected')
    }
    res.status(200).json({blog})
}

module.exports = {
    displayBlogs,
    postBlog,
    updateBlog,
    deleteBlog,
    getBlog
}