var WineApp = angular.module('wineApp', [])

WineApp.config(function($routeProvider, $locationProvider) {
  $routeProvider

  	.when('/', {controller: List, templateUrl: '/partials/ListWines.html'})
  	
  	// NewWines
    .when('/NewWines', {controller: CreateController, templateUrl: '/partials/DetailsWines.html'})

    // NewWines
    .when('/EditWines/:id', {controller: EditController, templateUrl: '/partials/DetailsWines.html'})

    .otherwise({redirectTo: '/'})
    
})

