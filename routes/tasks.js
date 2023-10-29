const express = require('express');
const router = express.Router();
const allTasktsController = require('../controllers/tasks');

router.get('/my-tasks', allTasktsController.mytasks);
router.get('/add-task', allTasktsController.addtasks);
router.get('/edit-task/:task_id', allTasktsController.edittasks);
router.get('/delete-task/:task_id', allTasktsController.deletetasks);
router.get('/my-tasks/:task_id/:status', allTasktsController.changeStatus);
router.post('/create-task', allTasktsController.createTasks);
router.post('/modify-task', allTasktsController.modifyTasks);

module.exports = router;