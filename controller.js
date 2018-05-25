var app = angular.module('myApp', []);

app.controller("tabController", function($scope){
	$scope.numList = ["One", "Two", "Three", "Four"];
	$scope.tab = 0;
	
	// set current active tab index
	$scope.clickMe = function(index){
		$scope.tab = index;
	};

	// check if tab index 
	$scope.isSet = function(tabId){
		return $scope.tab ===  tabId;
	};

	$scope.tabInner = 0;

	$scope.clickMeInner = function(index) {
		$scope.tabInner = index;
	}

	$scope.isSetInner = function(tabId) {
		return $scope.tabInner === tabId;
	}
});
