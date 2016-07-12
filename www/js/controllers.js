var eExamCtrl = angular.module('eExam.controllers',[]);

eExamCtrl.controller('InfoController',['$scope', function($scope){
    $scope.test = function(){
        alert("test");
    };
}]);