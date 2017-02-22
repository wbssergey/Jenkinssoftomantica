'use strict';

var app = angular.module('strn-s3-view', [
    'controllers1'
]);

var controllers = angular.module('controllers1', []);

controllers.controller('ViewController',['$scope', function($scope) {

 $scope.rawaccess_key = 'U2FsdGVkX19AUuR6WZLyrtEfpLYu7/s3T4C929rBlpB7OL2OU0oe3erKfC6D40SZ';

 $scope.rawsecret_key = 'U2FsdGVkX187qJZy9GLSX+Cd9wk1W6oZojMuiZ+/wXT5Hea9+Od5+pVClw/gMDZNlb52FzRgdr82kOTemabmoA=='

  $scope.list = function() {


$scope.decryptedaccess_key = CryptoJS.AES.decrypt($scope.rawaccess_key, $scope.creds.passphrase).toString(CryptoJS.enc.Utf8).toString();

 $scope.decryptedsecret_key = CryptoJS.AES.decrypt($scope.rawsecret_key, $scope.creds.passphrase).toString(CryptoJS.enc.Utf8).toString();

 $scope.creds  = {access_key:$scope.decryptedaccess_key,
 secret_key: $scope.decryptedsecret_key,bucket:$scope.creds.bucket};
 
    AWS.config.update({ accessKeyId: $scope.creds.access_key, secretAccessKey: $scope.creds.secret_key });
    AWS.config.region = 'us-east-1';
    var bucket = new AWS.S3({ params: { Bucket: $scope.creds.bucket } });
  
            var prefix = '';

            bucket.listObjects({
                Prefix: prefix
            }, function (err, data) {
                if (err) {
                    results.innerHTML = 'ERROR: ' + err;
                } else {
                    var objKeys = "";
                    data.Contents.forEach(function (obj) {
                        objKeys += obj.Key + "<br>";
                    });
 
                    results.innerHTML = objKeys;
                }
            });
   
    };

 
}]);
