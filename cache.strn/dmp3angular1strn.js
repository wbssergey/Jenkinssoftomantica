

//var querygetstrn='https://f4bpm7t1z1.execute-api.us-east-1.amazonaws.com/beta?csi=';
var querygetstrn='https://98bi5odix6.execute-api.us-east-1.amazonaws.com/beta?csi=';
var sindexstrn =1;
var smaxindexstrn =1;       

 var app=   angular.module('Container1App',[]);
         app.controller('Container1Ctrl', function($scope,$http,$location) {

  $scope.myUrl = $location.absUrl();
  $scope.myparams=getQueryParams($scope.myUrl);

if ($scope.myparams.csi=='undefined')  {$scope.myparams.csi=-1};

querygetstrn=querygetstrn+$scope.myparams.csi;

 $http.get(querygetstrn).then(function (response) {
  $scope.ChTitle="Strangemic Resource Network Audio";
   $scope.pgtitle='loading';        
        $scope.records=response.data[0]; 
       
if( $scope.records.length > 0) {
      if ($scope.records[0].bucket=='') {
           $scope.org="unloaded";
            alert("csi "+$scope.myparams.csi+"not provided on aws");
            $scope.records={};
            return;
       };
      $scope.albumtitle=$scope.records[0].name;
     
     $scope.srcimage=$scope.records[0].bucket+$scope.records[0].directory+"/Folder.jpg";

       $scope.ChIndex = sindexstrn;
       $scope.ChMax =   smaxindexstrn;

   $scope.org=$scope.ChTitle + " ( "+($scope.records.length)+" ) "+"[ "+ $scope.ChIndex + " of "+$scope.ChMax +" ]";

 

       exportbuild($scope.records);

       };


           },function (response) {
   $scope.org='unloaded';
    });
     

  });



