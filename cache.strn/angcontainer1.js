  var mod1=      angular.module('Container1', [
        ]);

  mod1.controller('ContainerCtrl1', function($scope,playlistService ) {

            $scope.Org="Strangemic Resource Network Video";
            document.title=$scope.Org; 
            $scope.PageTitle="David Sylvian Video";

playlistService.setDir("jbonamassa1");
playlistService.setExt("mp4");

playlistService.addItem("Joe+Bonamassa+-+Taxman+-+Live+at+The+Cavern//+Club","Joe Bonamassa - Taxman - Live at The Cavern Club");

playlistService.addItem("Joe+Bonamassa+-+Drive+(Official+Video)","Joe Bonamassa - Drive");


playlistService.addItem("Joe+Bonamassa+-+Christmas+Date+Blues","Joe Bonamassa - Christmas Date Blues");

playlistService.addItem("Beth%20Hart%20%2526%20Joe%20Bonamassa%20-%20Nutbush%20City%20Limits","Beth Hart Joe Bonamassa - Nutbush City Limitss");


playlistService.addItem("Joe%20Bonamassa%20-%20Angel%20Of%20Mercy%20-%20Live%20At%20The%20Greek%20Theatre","Joe Bonamassa - Angel Of Mercy - Live At The Greek Theatre");


playlistService.addItem("Lazy%20-%20Jimmy%20Barnes%20%2526%20Joe%20Bonamassa","Lazy - Jimmy Barnes, Joe Bonamassa");

playlistService.addItem("Beth+Hart+-+I+Don't+Need+No+Doctor.+2004","Beth Hart - I Don't Need No Doctor. 2004");

playlistService.addItem("Beth+Hart+-+Whole+Lotta+Love","Beth Hart - Whole Lotta Love");

 });

  mod1.service('playlistService', function() {
  this.plist = [];
  this.dir="";
  this.ext="";
 
  this.addItem = function(file,title) {
  var s,v;
    s=this.dir+"/"+ file+"."+this.ext;
v={    "file": s , "title": title };
    this.plist.push(v); 
  };

  this.setDir = function(setdir) {
        this.dir = setdir;
  };

  this.setExt = function(setext) {
        this.ext = setext;
  };

});


