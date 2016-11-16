var CalculatorService = angular.module('CalculatorService', [])
.service('Calculator', function () {
    this.square = function (a) 
    { return a*a};

});

var myApp = angular.module('myApp', ['CalculatorService']);

myApp.controller('CalculatorController', function ($scope, Calculator) {

    $scope.findSquare = function () {
        $scope.answer = Calculator.square($scope.number);
    }
});

<div class="container">
        <div>
            <div ng-controller="CalculatorController">
                Enter a number:
                <input type="number" ng-model="number">
                <button  ng-click="findSquare()">Square</button>
                <div>{{answer}}</div>
            </div>
        </div>
    </div>

***************************************************************************************************************************************************
var StudentService = angular.module('StudentService', []);
StudentService.factory('StudentDataOp', ['$http', function ($http) {

    var urlBase = 'http://localhost:2307/Service1.svc';
    var StudentDataOp = {};

    StudentDataOp.getStudents = function () {
        return $http.get(urlBase+'/GetStudents');
    };

    StudentDataOp.addStudent = function (stud) {
        return $http.post(urlBase + '/AddStudent', stud);
    };
    return StudentDataOp;

}]);

var myApp = angular.module('myApp', ['StudentService']);

myApp.controller('StudentController', function ($scope, StudentDataOp) {
    $scope.status;
    $scope.students;
    getStudents();

    function getStudents() {
        StudentDataOp.getStudents()
            .success(function (studs) {
                $scope.students = studs;
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    }

    $scope.addStudent = function () {

        var stud = {
            ID: 145,
            FirstName: $scope.fname,
            LastName: $scope.lname
        };
        StudentDataOp.addStudent(stud)
            .success(function () {
                $scope.status = 'Inserted Student! Refreshing Student list.';
                $scope.students.push(stud);
            }).
            error(function (error) {
                $scope.status = 'Unable to insert Student: ' + error.message;
            });
    };
});

<div ng-controller="StudentController">
            <form class="well">               
                <input type="text" name="fname" ng-model="fname" placeholder="first name" /> <br/>       
                <input type="text" name="lname" ng-model="lname" placeholder="last name" />             
                <br /><br/>               
                <input type="button" value="add student" ng-click="addStudent()" />
            </form>
            <br/>
            <table class="table">
                <tr ng-repeat="s in students">
                    <td>{{ s.FirstName }}</td>
                    <td>{{ s.LastName }}</td>
                </tr>
            </table>
        </div>