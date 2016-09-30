var app = angular.module('app', []);

app.controller('Libros', function($scope, $http){
	$http.get('http://localhost:5000/libros/').
	then(function(response){
		$scope.libros = response.data;
	});
});

app.controller('AgregaLibro', function($scope, $http){
	$scope.EnviarDatos = function(){
		var data = $.param({
			titulo: $scope.titulo,
			descripcion: $scope.descripcion
		});

		var config = {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
			}
		}

		$http.post('http://localhost:5000/libros/', data, config)
		.success(function(data, status, header, config){
			$scope.PostDataResponse = data;
		})
		.error(function(data, status, header, config){
			$scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
		});
	};
});


