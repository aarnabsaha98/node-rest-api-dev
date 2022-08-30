const express = require('express');
const router = express.Router();
const {displayBlogs , postBlog ,updateBlog, deleteBlog} = require('../controller/task')
// Routing structure to add the specified functions we need controllers
router.route('/').get(displayBlogs)
//.post(postBlog)
// router.route('/:Id').patch(updateBlog).delete(deleteBlog)

module.exports = router;