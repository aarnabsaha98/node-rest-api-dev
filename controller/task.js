// Now to have a controller we need model of our project
const {
    Blog,
    User
} = require('../models/task');

const displayBlogs = async (req, res) => {
    console.log('hi')
    const blogs = await Blog.find({});
    res.status(200).json({
        blogs
    });
}

const postBlog = async (req, res) => {
    const blog = await Blog.create(req.body)
    console.log('blog', req.body.title);
    res.status(200).json({
        blog
    })
}

const getBlog = async (req, res, next) => {
    const {
        Id: blogId
    } = req.params;

    if (blogId) {
        console.log(req.params)
        const blog = await Blog.findOne({
            _id: blogId
        })

        if (!blog) {
            console.log('No blog selected');
            return next(createCustomError(`No task with id : ${TaskId}`, 404))

        }
        res.status(200).json({
            blog
        })
    }

}

const deleteBlog = async (req, res) => {
    const {
        Id: blogId
    } = req.params;

    const blog = await Blog.findById(blogId);

    if (req.body.author == blog.author) {
        console.log('delete start')
        try {
            await Blog.deleteOne({_id : blogId});
            res.status(200).json('blog has been deleted ... ');
            console.log('deleted')
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(401).json("You can delete only your post!");
    }
}

const updateBlog = async (req, res) => {
    console.log('update started');
    const {
        Id: blogId
    } = req.params;
    console.log('blog ID ' , blogId);
    //const blog = await Blog.updateOne({_id : blogId} , req.body)
    const blog = await Blog.findById(blogId);
    console.log(req.body.author == blog.author);

    if (req.body.author == blog.author) {
        console.log('matched')
        try {
            console.log('matched -02')
            const updatedBlog = await Blog.findByIdAndUpdate({_id : blogId} , req.body)
            console.log('updatedBlog :' , updatedBlog)
            // const updatedPost = await Post.findByIdAndUpdate(
            //     req.params, {
            //         $set: req.body,
            //     }, {
            //         new: true
            //     }
            // );
            res.status(200).json(updatedBlog);
            console.log('updated')
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(401).json("You can update only your post!");
    }

}

module.exports = {
    displayBlogs,
    postBlog,
    updateBlog,
    deleteBlog,
    getBlog
}