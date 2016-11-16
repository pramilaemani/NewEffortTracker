var config = require('config.json');
var express = require('express');
var router = express.Router();
var taskService = require('services/task.service');


/*router.get('/getAllTasks:_id', getAllTasks);*/
router.get('/getAllTasks', getAllTasks);

module.exports = router;

function getAllTasks(req, res) { 

    taskService.getAllTasks()
    .then(function(tasks){
    	if (tasks) {
    		console.log(res.json(tasks));
                res.json(tasks);
            } else {
                res.sendStatus(404);
            }
    })
    .catch(function(err){    	
    	res.status(400).send(err);
    });
}

