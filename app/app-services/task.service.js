(function (){
	'use strict;'

	angular.module('app').factory('TaskService', Service);


	function Service($http, $q){

		var service = {};

		service.getTasks = getTasks;
		service.createTask = createTask;

		return service;
		

		function getTasks(){
			return $http.get('/api/tasks/getAllTasks').then(handleSuccess, handleError);
		}

		function createTask(){
			return $http.post('/api/tasks/createTask', task).then(handleSuccess, handleError);
		}

		//Private functions
		function handleSuccess(res) {			            
            return res.data;
        }

        function handleError(res) {

            return $q.reject(res.data);
        }

	}

})();