
var channelstrn="http://direstraits.softomantica.com/1/media.html";
var pagetitle="Dire Straits #1 Video";
var hopbase="https://s3.amazonaws.com/pool3.strn/";
var hopch="http://bonamassa.softomantica.com";

var hopnext,hopprior;

function buildhop(sindexstrn,maxindexstrn) {
var v,s,i,c;

v= (sindexstrn+1);
s= (sindexstrn-1);

if (v > maxindexstrn) v="";
if (s <= 1 ) s="";


var hopnextfile="1/media"+v+".html";
var hoppriorfile="1/media"+s+".html";

hopnext=hopbase + hopnextfile;
hopprior=hopbase + hoppriorfile;

};

var defaultplaylistdirection=1;


var files=[];
var titles=[];
var plist=[];
var gsi=[];

var x0=100;
var y0=100;
var x=0;
var y=0;


var counterror=0;

var error1='unknown';

var ignoreplaylistitem=0;


var limit =  40;
var time = 0;

 function build (record){
  files.push(  '../'+record.directory +'/'+record.trackname);
        titles.push( record.title);
        gsi.push( record.gsi);
};


function strnmess (text) {
 ihtml="<div>?</div><br><div>Perhaps latency fault, try next time or download track</div><div>@<div>";
document.getElementById("idstrnpagetitle").innerHTML=ihtml.replace('?',pagetitle).replace('@',text);
};

 function exportbuild (records,sindexstrn,maxindexstrn){

buildhop(sindexstrn,maxindexstrn) 

for (var i = 0, len = records.length; i < len; i++) {
  build(records[i]);
};


for(var i=0;i<files.length;i++){
var s,v;
s=files[i];
v=titles[i];
v= {    "file": s , "title": v }; 
plist.push(v);
};



jwplayer("my-video").setup({
"autostart": true,
    "playlist": plist,
 "skin" : {
    "url":"https://s3.amazonaws.com/cache.strn/strn.css",
    "name": "strn"
},
   primary: "flash_video"
});

jwplayer().on('setupError'), function(event){
document.getElementById("idstrnpagetitle").innerHTML='<h2>System provisionning error</h2>';
counterror=100;
};


jwplayer().on('ready', function(event){

strnignore=0;
y0=jwplayer().getHeight();
x0=jwplayer().getWidth();
if (typeof x0 === 'undefined'){
x0=480;
y0=270;
};

x=0;y=0;
strnsetpage() ;
buildlink();


jwplayer().on('error', function(event){
counterror++;
if(counterror >=100 ||counterror < 105) {strnmess('[overloaded]');; return false;};
if (event.type=="error"){
if(counterror==1) error1=event.message;
if (counterror>8) return false;

if(counterror==6) jwplayer().stop;
jwplayer().play();
strnmess(error1);
};

return false;
});

jwplayer().on('playlistComplete', function(event){

document.getElementById("idstrnitemtitle").innerHTML='';

if (document.getElementById("checka").checked) {
mclick(defaultplaylistdirection);
return false;
};
jwplayer().playlistItem(0);
return false;
});

jwplayer().on('playlistItem', function(event){
var imax,i,v;
if(ignoreplaylistitem==1) {
ignoreplaylistitem=0;
return false;
};

i=event.index;

imax=jwplayer().getPlaylist().length;

if((i==imax)&&document.getElementById("checka").checked) {
mclick(defaultplaylistdirection);
};
v=jwplayer().getPlaylistItem(i).title;
document.title=v;
v='bookmark: <a href="'+channelstrn+'?gsi='+gsi[i]+'" target=_blank>'+v+'</a>';
document.getElementById("idstrnitemtitle").innerHTML=v;
return false;
});


jwplayer().on('time', function(event){
var imax,i;
if (document.getElementById("checkp").checked) {
time= Math.floor(event.position);
if (time > limit){
i=jwplayer().getPlaylistIndex();
imax=jwplayer().getPlaylist().length;

if((i==(imax-1))&&document.getElementById("checka").checked) {
mclick(defaultplaylistdirection);
return false;
};

ignoreplaylistitem=1;
jwplayer().next();
time =0;

};
};
return false;
});
 

});



};

 var app=   angular.module('Container1App',[]);
         app.controller('Container1Ctrl', function($scope,$http,$location) {
 $scope.acsistrn=305;
 $scope.agsistrn='';
 $scope.querygetstrn='https://f4bpm7t1z1.execute-api.us-east-1.amazonaws.com/beta?';
 $scope.ChIndex = 1;
 $scope.ChMax =   1;
 
 $scope.myUrl = $location.absUrl();

 $scope.myparams=getQueryParams($scope.myUrl);

if (typeof $scope.myparams.csi !== 'undefined' )  {$scope.acsistrn=$scope.myparams.csi;};

if (typeof $scope.myparams.gsi !== 'undefined')  {$scope.agsistrn=$scope.myparams.gsi;};


if ($scope.agsistrn!='') {
$scope.querygetstrn=$scope.querygetstrn+'agsi='+$scope.agsistrn;
} else {
$scope.querygetstrn=$scope.querygetstrn+'acsi='+$scope.acsistrn;
};


 $http.get($scope.querygetstrn).then(function (response) {
  $scope.ChTitle="Strangemic Resource Network Video";
   $scope.pgtitle='loading';        
        $scope.records=response.data[0]; 
           
         exportbuild($scope.records,$scope.ChIndex,$scope.ChMax);

        $scope.org=$scope.ChTitle + " ( "+($scope.records.length)+" ) "+"[ "+ $scope.ChIndex + " of "+$scope.ChMax +" ]";
       


           },function (response) {
   $scope.org='unloaded';
    });
     

  });




