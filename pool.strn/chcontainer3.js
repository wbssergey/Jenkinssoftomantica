

//var strnchannel="aws.softomantica.com/channel.html";
var sindex=3;
var maxindex=3;

var pagetitle="King Crimson Video";
var hopbase="https://s3.amazonaws.com/pool.strn/";
var hopch="http://aws1.softomantica.com/channel.html";
var hopnext,hopprior;
var v,s,i,c;


v= (sindex+1);
s= (sindex-1);

if (v > maxindex) v="";
if (s < 0) s="";


var hopnextfile="channel"+v+".html";
var hoppriorfile="channel"+s+".html";



var hopnextname=""; // 
var hoppriorname=""; // 

var defaultplaylistdirection=1;

hopnext=hopbase + hopnextfile;
hopprior=hopbase + hoppriorfile;


var files=[];
var titles=[];

var dir="kc2";
var ext="mp4";

files.push("kingcrimson-sex,sleep,eat,drink,dream");
titles.push("king crimson - sex , sleep, eat, drink, dream");

files.push("PROMOFILM-ExposureRobertFripp");
titles.push("PROMO FILM - Exposure, Robert Fripp");


files.push("KingCrimson-StarlessToronto(1974)2013SBD");
titles.push("King Crimson - Starless - Toronto (1974)");

var plist=[];


for(var i=0;i<files.length;i++){
var s,v;
s=dir+"/"+ files[i]+"."+ext;
v=titles[i];
v= {    "file": s , "title": v }; 
plist.push(v);
};


function strnsetpage() { 
document.getElementById("idstrnpagetitle").innerHTML='<center><h2>'+pagetitle+'</h2></center>';
document.title = pagetitle;
return false;
};


