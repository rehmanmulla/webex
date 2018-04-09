app.controller('successCtr', ['$scope', "myService", "$location", "$firebaseArray", "$firebaseObject", function ($scope, myService, $location, $firebaseArray, $firebaseObject) {

  $scope.message = "Hi, ";

  $scope.username = myService.getUser();
  if (!$scope.username) {
    $location.path("/login");
  }

  var ref = firebase.database().ref().child('feedback');
  $scope.feedback = $firebaseArray(ref);

  $scope.logout = function () {
    myService.logoutUser();
    console.log("cliked");
  };  //logout()

  $scope.contact = function () {
    var fname = $scope.feedback.fname;
    var email = $scope.feedback.email;
    var message = $scope.feedback.message;
    $scope.feedback.$add({
      fname, 
      email,
      message
    }).then(function (ref) {
      console.log(ref);
      $scope.fd = "Hi " + $scope.feedback.fname + " , Thanks for your feedback";
      window.location.reload();
    })(function (err) {
      console.log(err);
    });
  } // addpost()

  // $scope.editPost = function(id){
  //   var ref = firebase.database().ref().child('feedback/' + id);
  //     $scope.editPostData = $firebaseObject(ref);
     
  // } //edit post
  
  
  // $scope.updatePost = function(id){
  //   var ref = firebase.database().ref().child("articles/" + id);
  //     ref.update({
  //       title:$scope.editPostData.title,
  //       post : $scope.editPostData.post
  //     }).then(function(ref){
  //       console.log(ref);  
  //     }, function(err){
  //       console.log(err);
  //     }
  //   )} // update post
  
  //   $scope.logout = function(){
  //     myService.logoutUser();
  //     console.log("cliked");
  //   };
  
  // $scope.deleteItem = function(article){
  //   $scope.deleteArticle = article; 
  // }
  
  // $scope.deletePost = function(deleteArticle){
  //   $scope.articles.$remove(deleteArticle);
  //   $("#deleteModal").modal('hide');
  // }

}]);