// app.controller('contactCtr', ['$scope', "myService", "$location", "$firebaseArray", "$firebaseObject", function ($scope, myService, $location, $firebaseArray, $firebaseObject) {

//     $scope.contact = function () {
//       var fname = $scope.feedback.fname;
//       var email = $scope.feedback.email;
//       var message = $scope.feedback.message;
//       $scope.feedback.$add({
//         fname, 
//         email,
//         message
//       }).then(function (ref) {
//         console.log(ref);
//         $scope.message = "Hi " + $scope.feedback.fname + " , Thanks for your feedback";
//         $location.path("/contact");
//       })(function (err) {
//         console.log(err);
//       });
//     } // addpost()
// }]);