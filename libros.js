var app = angular.module('app', []);

app.factory('servicioDatos', function(){
	libros: {}
});

app.controller('Libros', function($scope, $http, $rootScope){
	$http.get('http://localhost:5000/libros/').
	then(function(response){
		$rootScope.libros = response.data;
	});
});

app.controller('AgregaLibro', function($scope, $http, $rootScope){
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
			$http.get('http://localhost:5000/libros/').
			then(function(response){
				$rootScope.libros = response.data;
			});
		})
		.error(function(data, status, header, config){
			$scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
		});
	};
});

app.controller('Libro', function($scope, $http, $rootScope){
	$scope.VerLibro = function(id){
		$http.get('http://localhost:5000/libros/' + id).
		then(function(response){
			$rootScope.libros = response.data;
		});
	};
});


