
 var app=   angular.module('Container1App',[]);
         app.controller('Container1Ctrl', function($scope,$http,$location) {
 $http.get(querygetstrn).then(function (response) {
  $scope.ChTitle="Strangemic Resource Network Video";
   $scope.pgtitle='Dance';        
        $scope.records=response.data[0]; // requires data[0] if stored procedure else .data;
            $scope.ChIndex = sindexstrn;
            $scope.ChMax =   sindexstrn;

       exportbuild($scope.records);

        $scope.org=$scope.ChTitle + " ( "+($scope.records.length)+" ) "+"[ "+ $scope.ChIndex + " of "+$scope.ChMax +" ]";
       
   $scope.myUrl = $location.absUrl();
//html?resize=1&review=1&auto=1&fscreen=1 
 $scope.bauto=false;
 $scope.bresize=false;
 $scope.breview=false;
 $scope.bfscreen=false;
if($scope.myUrl.indexOf('?')!=-1) {
var v=$scope.myUrl.substring(v);
$scope.bauto=(v.indexOf('auto=1')!=-1);
$scope.bresize=(v.indexOf('resize=1')!=-1);
$scope.breview=(v.indexOf('review=1')!=-1);
$scope.bfscreen=(v.indexOf('fscreen=1')!=-1);
};

           },function (response) {
   $scope.org='unloaded';
    });
     

  });



