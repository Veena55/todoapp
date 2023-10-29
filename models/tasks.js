const mongoose = require('mongoose');

// Declare the Schema of the Mongo model
var taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    deadline:{
        type:String,
    },
    status:{
        type:String,
        default: "In Progress"
    },
}, {
    timestamps: true
});

//Export the model
module.exports = mongoose.model('Tasks', taskSchema);