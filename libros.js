var app = angular.module('app', [ngResource]);

app.factory("Post", function($resource){
	return $resource("http://127.0.0.1:5000/libros/:id");
});

app.controller("Libros", function($scope, $http){
	$http.get('http://127.0.0.1:5000/libros').
	then(function(response){
		$scope.libros = response.data;
	});
});