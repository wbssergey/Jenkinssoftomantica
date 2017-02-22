<script>
        angular.module('strnt1App', [])
        .controller('strnt1Ctrl', function($scope) {

            $scope.itemIndex = 1;
           
            $scope.ReferenceId = 0;
            $scope.ReferenceDescription = 'unset';  
        });


var app = angular.module('strnt1App', []);
app.controller('strnt1Ctrl', function($scope,$location) {
var v;
    $scope.ReferenceId= "0";
    $scope.ReferenceDescriprion= "Unset";
    $scope.myUrl = $location.absUrl();
    $Scope.myParameters ='Unset';
//test2.html?resize=1&review=1&auto=1&fscreen=1 
 $scope.bauto=false;
 $scope.bresize=false;
 $scope.breview=false;
 $scope.bfscreen=false;
v=$scope.myUrl.indexOf('?');
if(v!=-1) {
$Scope.myParameters=$scope.myUrl.substring(v);
$scope.bauto=(v.indexOf('auto=1')!=-1);
$scope.bresize=(v.indexOf('resize=1')!=-1);
$scope.breview=(v.indexOf('review=1')!=-1);
$scope.bfscreen=(v.indexOf('fscreen=1')!=-1);
};


});


</script>

