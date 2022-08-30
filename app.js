const express = require('express');
const connectDB = require('./DB/connect');
const Blog = require('./route/task');
require('dotenv').config(); // to have the env variables
const app = express();
const PORT = 8080;

//routing
app.get('/hi', (req,res)=>{
    res.send('<h1> hello </h1>')
})
app.use(express.json())
app.use('/blogweb/api',Blog);

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