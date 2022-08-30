const mongoose = require('mongoose');

const connectDB = (url)=>{
    return mongoose.connect(url,
        { useNewUrlParser: true ,
         useUnifiedTopology: true },(err)=>{
            if(err){
                console.log(err)
            } else{
                console.log('connected')
            }
         })
}

module.exports = connectDB;