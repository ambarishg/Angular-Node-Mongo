function List ($scope, $http) {


$http.get('/wines/all').
    success(
    function(data, status, headers, config) {
       $scope.wines = data;
    });

 }


function CreateController($scope, $http,$location) {

    var wine = 
    {
        name: "",
        year: "",
        grapes: "",
        country: "",
        region: "",
        description: "",
        picture: ""
    }

    $scope.wine = wine; 
    $scope.action = "Add" ;

    $scope.save = function() 
    {
          $http.post('/wines/add', $scope.wine).
          success(
            function(data) {
            $location.path('/');
        });
    }

}

function EditController($scope, $http,$location,$routeParams) {

    var wine = 
    {
        name: "",
        year: "",
        grapes: "",
        country: "",
        region: "",
        description: "",
        picture: ""
    }

    $scope.wine = wine; 
    $scope.action = "Edit" ;

    console.log ( " ID of the wine is " + $routeParams.id) ;
    
    $http.get('/wines/' + $routeParams.id).
    success(
    function(data, status, headers, config) {
       $scope.wine = data;
    });


    $scope.save = function() 
    {
          $http.put('/wines/edit/' + $routeParams.id, $scope.wine).
          success(
            function(data) {
            $location.path('/');
        });
    }

}