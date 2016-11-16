(function () {
    'use strict';

    angular
        .module('app')
        .controller('Home.IndexController', Controller);

    function Controller($scope, UserService, TaskService, FlashService) {
        var vm = this;

        vm.user = null;
        vm.tasks = null;
        

        initController();
        getTasks();

        function initController() {
            // get current user
            UserService.GetCurrent().then(function (user) {
                vm.user = user;
            });
        }

        function getTasks(){
            TaskService.getTasks().then(function (tasks){
                vm.tasks = tasks;
            });
        }

        
    }

})();