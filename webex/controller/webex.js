var app = angular.module("MyApp" , ["ngRoute" , "firebase"]);


app.config(["$routeProvider" , "$locationProvider" , function($routeProvider , $locationProvider){
    $routeProvider.
    when("/login" , {
        title:"login",
        templateUrl : "views/login.html",
        controller : "registerCtr"
    }).
    when("/register" , {
        title:"register",
        templateUrl : "views/register.html",
        controller : "registerCtr"
    }).
    when("/gallery" , {
        title:"gallery",
        templateUrl : "views/gallery.html",
        controller : "successCtr"
    }).
    when("/services" , {
        title:"services",
        templateUrl : "views/services.html",
        controller : "successCtr"
    }).
    when("/about" , {
        title:"about",
        templateUrl : "views/about.html",
        controller : "successCtr"
    }).
    when("/contact" , {
        title:"contact",
        templateUrl : "views/contact.html",
        controller : "successCtr"
    }).
    when("/home" , {
        title:"welcome to login application ",
        templateUrl : "views/home.html",
        controller : "successCtr"
    }).otherwise({
        redirectTo:"/login",
    });

}])