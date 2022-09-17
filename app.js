const express = require('express');
const connectDB = require('./DB/connect');
const Blog = require('./route/task');
require('dotenv').config(); // to have the env variables
const app = express();
const PORT = 8080;
const {blogs, users} = require('./models/task')

//routing
app.get('/hi', (req,res)=>{
    res.send('<h1> hello </h1>')
})
// Without `express.json()`, `req.body` is undefined.
app.use(express.json())
//Routing
app.use('/blogweb/api',Blog);


//middlewares 
// next : that is use this set of logic before executing other logics .. i.e. It will run or execute the code after all the middleware function is finished.

//app.use(setUser)

//  function setUser(req,res,next){
//     const authorId = req.body.authorId;

//     if(authorId){
//         req.author = users.find(user => user._id == authorId)
//     }
//  }


const start  = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
    app.listen(PORT , console.log(`server is running ${PORT}`));

    }
    catch(err){
        console.log(err);
    }
}

start()






// WITHOUT USING EXPRESS
/*
const http = require('http');
const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
  */