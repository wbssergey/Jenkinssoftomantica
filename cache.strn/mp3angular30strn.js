
//var querygetstrn='http://api2.softomantica.net/beta?';
var querygetstrn='https://f4bpm7t1z1.execute-api.us-east-1.amazonaws.com/beta?';

var sindexstrn =1;
var smaxindexstrn =1;       
var iscdn=0;
var isgsi = 0;

 var app=   angular.module('Container1App',[]);
         app.controller('Container1Ctrl', function($scope,$http,$location) {

  $scope.myUrl = $location.absUrl();
  $scope.myparams=getQueryParams($scope.myUrl);


if (typeof $scope.myparams.csi !== 'undefined' )  {

querygetstrn=querygetstrn+'csi='+$scope.myparams.csi;

};

if (typeof $scope.myparams.gsi !== 'undefined' )  {

querygetstrn=querygetstrn+'gsi='+$scope.myparams.gsi;
isgsi=1;
};


 $http.get(querygetstrn).then(function (response) {
  $scope.ChTitle="Strangemic Resource Network Audio";
   $scope.pgtitle='loading';  

        $scope.records=response.data[0]; // requires data[0] if stored procedure else .data;
       
if( $scope.records.length > 0) {
      if ($scope.records[0].bucket=='') {
           $scope.org="unloaded";
            alert("csi "+$scope.myparams.csi+"not provided on node rds");
            $scope.records={};
            return;
       };
      $scope.albumtitle=$scope.records[0].name;
     
     $scope.srcimage=$scope.records[0].bucket+$scope.records[0].directory+"/Folder.jpg";

       $scope.ChIndex = sindexstrn;
       $scope.ChMax =   smaxindexstrn;

   exportbuild($scope.records,iscdn,isgsi);
            
       };


           },function (response) {
   $scope.org='unloaded';
    });
     
  });






