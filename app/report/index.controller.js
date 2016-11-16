(function () {
    'use strict';

    angular
        .module('app')
        .controller('Report.IndexController', reportController);

    function reportController($window, ReportService, FlashService) {
        var vm = this;

        vm.user = null;
        

        initController();

        function initController() {
            // get current user
            /*UserService.GetCurrent().then(function (user) {
                vm.user = user;
            });*/
            alert("in the reportController");
        } 

        function getReport() {

            alert("in the getReport function");
            
            
        }

                
    }

})();