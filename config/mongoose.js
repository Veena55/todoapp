const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://0.0.0.0:27017/todo');

const db = mongoose.connection;

db.on('error',(err)=>{console.log("Something went wrong!!"); return})

db.once('open',()=>{console.log("Connection established with database successfully!!");})

module.exports=db;