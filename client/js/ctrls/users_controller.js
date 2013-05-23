
function UserCtrl($scope,$http){
  $scope.url = global.url("debug");

  var onSuccess = function(){
    console.log("Success!");
  };
  var showTags = function(){

      $http({method: 'GET',url: $scope.url+"/tags"})
        .success(function(data,status){
          $scope.tags = data.tags;
        })
      .error(function(d,s){
        console.log(s);
      });
  };

  // tag内で全文検索
  $scope.renderTags = function(kwd){
    console.log(kwd);

    $http({method: 'POST',url: $scope.url+"/search/" + kwd})
      .success(function(data,status){
        console.log(data);

        $scope.linkItems = data.data;
      })
    .error(function(d,s){
      console.log(s);
    });
  };


  $scope.search = function(){
    var kwd = $scope.user.keyword;



      $http({method: 'POST',url: $scope.url+"/search/" + kwd})
        .success(function(data,status){
          console.log(data);

          $scope.linkItems = data.data;
        })
      .error(function(d,s){
        console.log(s);
      });
  };

  showTags();
}

