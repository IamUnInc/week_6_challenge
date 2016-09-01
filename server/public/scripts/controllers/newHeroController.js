app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/heroForm', {
      templateUrl: '/views/partials/heroForm.html',
      controller: "heroController"
    })
    .when('/heroDisplay', {
      templateUrl: '/views/partials/heroDisplay.html',
    });

}]);

app.controller("heroController", ["$scope","$http", function($scope, $http) {

$scope.newhero = {};
$scope.heros = [];

$scope.submitNewHero = function () {
  console.log($scope.newHero);
  var data = $scope.newHero;
  $http.post('/heros', data)
    .then(function () {
      console.log('POST /heros', data);
      getHeros();
    });
};

function getheros() {
  $http.get('/heros')
    .then(function (response) {
      console.log('GET /heros', response.data);

      var heroDataArray = response.data;


      console.log(heroDataArray);
      $scope.heros = heroDataArray;
    });
}

}]);
