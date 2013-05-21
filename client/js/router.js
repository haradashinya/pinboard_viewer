angular.module("app",[]).
  config(['$routeProvider',function($routeProvider){
    $routeProvider.
    when('/users',
      {
        templateUrl: "templates/signup.html",
        controller: UsersCtrl}
    );
  }]);
