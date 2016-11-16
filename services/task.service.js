var config = require('config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('tasks');

var service = {};

service.createTask = createTask;
service.getAllTasks = getAllTasks;

/*service.getById = getById;
service.update = update;
service.delete = _delete;*/

module.exports = service;


function getAllTasks(){
	var deferred = Q.defer();    
	db.tasks.find().toArray(function(err, result){
		if (err) 
			deferred.reject(err.message);
		if (result){            
            deferred.resolve(result);
		}        
	});    
	return deferred.promise;
}

function createTask(taskParam){
   var deferred = Q.defer();
   //check if the task exists
   db.tasks.findOne({"TaskName":taskParam.taskName, 
                     "TaskStatus":taskParam.taskStatus, 
                     "TaskType":taskParam.taskType}, function(err, task){
            if (err) deferred.reject(err.name + ': ' + err.message);
            if (task) {
                deferred.reject("TaskName " +taskParam.taskName+" already exists");
            }   else {
                create();
                    }
                });
   
   function create(){

    db.tasks.insert(
            task,
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });

   }
   return deferred.promise;
}

