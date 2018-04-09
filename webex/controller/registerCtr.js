app.controller('registerCtr', ['$scope', '$window', '$firebaseAuth' , '$location' ,  'myService' ,'$firebaseArray',
function($scope, $window , $firebaseAuth , $location , myService, $firebaseArray) {

  $scope.username = myService.getUser();
  if($scope.username){
    $location.path("/home");
  }

  $scope.login = function() {
    // $scope.message = "Welcome" + $scope.user.email;
    var username = $scope.user.email;
    var password = $scope.user.password;
    var auth = $firebaseAuth();

    auth.$signInWithEmailAndPassword(username , password).then(function(){
      console.log("succusfully logged in");
      myService.setUser($scope.user.email);
      $location.path("/home");
    }).catch(function(err){
      console.log(err);
      $scope.errMsg = true;
      $scope.errorMessage = err.message;
      $window.alert("Please enter correct Username or Password");
    });
}; //login

  var auth = $firebaseAuth();
  auth.$onAuthStateChanged(function(firebaseUser){
    if(firebaseUser){
      console.log("signed in " , firebaseUser.uid);
    }else {
      console.log("signed out");
    }
  }); //onAuthMethod

  $scope.register = function() {
    // $scope.message = "Welcome " + $scope.user.email;
    $scope.message = "Hi " + $scope.user.email + " , Thanks for registering";
    var username = $scope.user.email;
    var password = $scope.user.password;
    var auth = $firebaseAuth();
    
    if(username && password){
      auth.$createUserWithEmailAndPassword(username , password).then(function(){
        console.log("succusfully created");
        $location.path("/login");

      }).catch(function(err){
        console.log(err);
        $scope.errMsg = true;
        $scope.errorMessage = err.message;
      });
    };
}; //register
}]); // controller code is ending here

// normal service for set user

app.service("myService" , ["$location" , "$firebaseAuth" , function($location , $firebaseAuth){

  var user = "";
  var auth = $firebaseAuth();
  return {
    getUser : function(){
      if(user == ""){
        user = localStorage.getItem("userEmail");
      }
      return user;
    },
    setUser : function(value){
      localStorage.setItem("userEmail" , value);
      user = value;
    },
    logoutUser : function(){
      auth.$signOut().then(function(){
        console.log("signout");
          user = "";
          localStorage.removeItem("userEmail");
          localStorage.clear();
          $location.path("/login");

      }).catch(function(err){
        console.log(err);
      });
    }
  };
}]); //service code is ending here

app.directive("matchPassword", function () {
  return {
      require: "ngModel",
      scope: {
          otherModelValue: "=matchPassword"
      },
      link: function(scope, element, attributes, ngModel) {

          ngModel.$validators.matchPassword = function(modelValue) {
              return modelValue == scope.otherModelValue;
          };

          scope.$watch("otherModelValue", function() {
              ngModel.$validate();
          });
      }
  };
});