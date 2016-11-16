(function () {
    'use strict';

    angular
        .module('app')
        .controller('Task.IndexController', taskController);

    function taskController($window, $scope, FlashService) {
        var vm = this;

        initController();

        function initController() {            
            $scope.date= "2013-01-14T23:00:00.000Z";
            alert("in the Taskcontroller");}                 
    }

})();