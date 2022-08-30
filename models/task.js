const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title :{
        type : String,
       required:[true , 'must be some title'],
        trim:true,

    },
    content:{
        type :String,
        trim :true
    },
    author:{
        type :String,
        trim :true  
    } 

})

module.exports= mongoose.model('Blog', blogSchema);

