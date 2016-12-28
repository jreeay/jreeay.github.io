
// “部门也是以模块形式存在的”

angular.module('Ctrls', [])

.controller('DemoController', ['$scope', function ($scope) {

	console.log('我是入职的第一名员工，我属于控制器');
}]);