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
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/trackerAppDB');


router.get('/', getAllTasks);


module.exports = router;

//GET all tasks from DB
function getAllTasks (req, res){
	var tasks = db.get("tasks");
 	tasks.find({}, function(err,tasks){
 	if (tasks) {
            // return tasks 
            console.log("tasks found");		
            
        } else {
            // no task found
            console.log("No tasks found"+err);
        }
        return tasks;
      });
}





 //Get all projects from DB
 exports.getAllProjects = function(){
 	var projects = db.get("projects");
 	projects.find({}, function(err, projects){
 		if (projects) {
 			console.log("projects found");
 		} else {
 			console.log("No Projects found"+err);
 		}

 		return projects;
 	});
 }

 //Get all users from DB
 exports.getAllUsers = function(){
 	var users = db.get("users");
 	users.find({}, function(err, users){
 		if (users) {
 			console.log("users found");
 		} else {
 			console.log("No user found"+err);
 		}
 	})
 }


