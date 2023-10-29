const Tasks = require('../models/tasks');

//Display all tasks
module.exports.mytasks = async(req,res) => {
    const tasks = await Tasks.find({});
    return res.render('tasks',{title: "My Tasks", allTasks: tasks});
}
//Render UI for adding New task
module.exports.addtasks = (req,res) => {
    return res.render('addTask',{title: "Add Tasks"});
}

// Add document in collection "tasks" on submitting add task form
module.exports.createTasks = async(req,res) => {
    const task = await Tasks.create(req.body);
    return res.redirect('my-tasks');
}

//Delete selected ID Task
module.exports.deletetasks = async(req,res) => {
    const task = await Tasks.findByIdAndDelete({_id: req.params.task_id});
    return res.redirect('back')
}

// Render UI to edit Edit selected ID Task
module.exports.edittasks =async(req,res) => {
    const task = await Tasks.findOne({_id: req.params.task_id});
    return res.render('editTask',{title: "Edit Tasks" , filteredTask : task});
}

//Edit selected ID Task
module.exports.modifyTasks = async(req,res) => {
    id = req.body.id;
    const task = await Tasks.findByIdAndUpdate(id, req.body);
    return res.redirect('my-tasks');
}

//Modify the status of task on check & uncheck of the checkbox
module.exports.changeStatus = async(req,res) => {
    const task = await Tasks.findByIdAndUpdate({_id: req.params.task_id}, {status: req.params.status});
    return res.redirect('back');
}

