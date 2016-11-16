/*var config = require('config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('tasks');*/
var express = require('express');
var router = express.Router();
// To connect the database from mongodb
var config = require('config.json');

var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });

router.get('/getAllTasks', getAllTasks);
router.post('/createTask', createTask);
router.get('/getSelTasks', getSelTasks);


module.exports = router;

function getAllTasks (req, res){
	console.log(db);

var tasks = db.get("tasks");
 tasks.find({}, function(err,tasks){
 	if (tasks) {
            // return tasks 
            console.log("tasks found");		
            
        } else {
            // no task found
            console.log("No tasks found");
            console.log(err);

        }
        return tasks;
      });
}

function createTask(req, res){
	console.log(task);
	var tasks = db.get("tasks");
	tasks.insert(task, function(err, doc){
		if (err){
			console.log("Error !!!"+err);
		}
	});
}

function getSelTasks(req, res){
	console.log(taskParam);
	var tasks = db.get("tasks");
	var project = taskParam.project;
	tasks.find({"Project":project}, function(err, tasks){
		if (tasks) {
			console.log("tasks for given project found"+tasks);
		} else {
			console.log("No tasks found"+err);
		}
	});
}

