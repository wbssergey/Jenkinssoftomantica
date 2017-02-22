
//var querygetstrn='http://api2.softomantica.net/beta?';
var querygetstrn='https://f4bpm7t1z1.execute-api.us-east-1.amazonaws.com/beta?';

var vindexstrn =1;
var vmaxindexstrn =1;       
var viscdn=0;
var visgsi=0;

var app=   angular.module('Container1App',[]);

function examinejr(r) {
 return true;
};

app.service('cService', function() {
    this.doAsync = function (config) {
if(config.method=="GET") return true;
            return false;
    };
});

app.factory('ContainerReqInterceptor',  function($q,cService) {  
   
var ContainerReqInterceptor = {
        request: function(config) {
            var deferred = $q.defer();
            if (cService.doAsync(config)) {
                 deferred.resolve(config);
            }
           else {
                 deferred.resolve(config);
            };
            return deferred.promise;
        }
    };
    return ContainerReqInterceptor;

});

app.factory('ContainerRespInterceptor',  function($q) {  
    var ContainerRespInterceptor = {
                 response: function (response) {
            // do something on success
            if(response.headers()['content-type'] === "application/json; charset=utf-8"){
                // Validate response, if not ok reject
                var data = examinejr(response); 
                if(!data)
                    return $q.reject(response);
            }
            return response;
        },
        responseError: function (response) {
            // do something on error
            return $q.reject(response);
        }
    };
    return ContainerRespInterceptor;
});

app.config(['$httpProvider', function($httpProvider) {  
    $httpProvider.interceptors.push('ContainerReqInterceptor');
    $httpProvider.interceptors.push('ContainerRespInterceptor');
}]);


app.controller('Container1Ctrl', function($scope,$http,$location) {

  $scope.myUrl = $location.absUrl();
  if($scope.myUrl.indexOf('cdn')!=-1) viscdn=1;

  $scope.myparams=getQueryParams($scope.myUrl);

if (typeof $scope.myparams.csi !== 'undefined' )  {
querygetstrn=querygetstrn+'csi='+$scope.myparams.csi;
};

if (typeof $scope.myparams.gsi !== 'undefined' )  {
querygetstrn=querygetstrn+'gsi='+$scope.myparams.gsi;
visgsi=1;
};


 $http.get(querygetstrn).then(function (response) {
  $scope.ChTitle="Strangemic Resource Network Audio";
   $scope.pgtitle='loading';  

   $scope.records=response.data[0]; // requires data[0] if stored procedure else .data;
       
if( $scope.records.length > 0) {
      if ($scope.records[0].bucket=='') {
           document.title="loading...";
            alert("csi "+$scope.myparams.csi+" - not provided on rds");
            $scope.records={};
            return;
       };
      $scope.albumtitle=$scope.records[0].name;
      
     $scope.srcimage=$scope.records[0].bucket+$scope.records[0].directory+"/Folder.jpg";

       $scope.ChIndex = vindexstrn;
       $scope.ChMax =   vmaxindexstrn;

document.title=$scope.ChTitle + " ( "+($scope.records.length)+" ) "+"[ "+ $scope.ChIndex + " of "+$scope.ChMax +" ]";
 
exportbuild($scope.records,viscdn,visgsi);

if(visgsi==1) { document.title=titles[indexgsi]; window.onload=mp3force() }; 
            
       };


           },function (response) {
  document.title='unloaded';
    });
     
  });






