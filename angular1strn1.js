
var channelstrn="ru1.softomantica.com/channel";
var pagetitle="Ru # 1 Video";
var hopbase="https://s3.amazonaws.com/rpool.strn/";
var hopch="http://video1.softomantica.com/achannel2";

var hopnext,hopprior;

function buildhop(sindexstrn,maxindexstrn) {
var v,s,i,c;

v= (sindexstrn+1);
s= (sindexstrn-1);

if (v > maxindexstrn) v="";
if (s <= 1 ) s="";


var hopnextfile="channel"+v+".html";
var hoppriorfile="channel"+s+".html";

hopnext=hopbase + hopnextfile;
hopprior=hopbase + hoppriorfile;

};

var defaultplaylistdirection=1;


var files=[];
var titles=[];
var plist=[];


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
        files.push(  record.directory +'/'+record.trackname);
        titles.push( record.title);
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

if (document.getElementById("checka").checked) {
mclick(defaultplaylistdirection);
return false;
};
jwplayer().playlistItem(0);
return false;
});

jwplayer().on('playlistItem', function(event){
var imax,i;
if(ignoreplaylistitem==1) {
ignoreplaylistitem=0;
return false;
};

i=event.index;

imax=jwplayer().getPlaylist().length;

if((i==imax)&&document.getElementById("checka").checked) {
mclick(defaultplaylistdirection);
};
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
 $scope.acsistrn=501;
 $scope.querygetstrn='https://f4bpm7t1z1.execute-api.us-east-1.amazonaws.com/beta?acsi='+$scope.acsistrn;
 $scope.ChIndex = 1;
 $scope.ChMax =   1;

 $http.get($scope.querygetstrn).then(function (response) {
  $scope.ChTitle="Strangemic Resource Network Video";
   $scope.pgtitle='unloaded';        
        $scope.records=response.data[0]; // requires data[0] if stored procedure else .data;
           
       exportbuild($scope.records,$scope.ChIndex,$scope.ChMax);

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



