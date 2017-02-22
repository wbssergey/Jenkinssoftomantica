

//var strnchannel="aws1.softomantica.com/channel.html";
var sindex=1;
var maxindex=3;

var pagetitle="Frank Zappa Video";
var hopbase="https://s3.amazonaws.com/joebstrn/";
var hopch="http://aws.softomantica.com/channel.html";
var hopnext,hopprior;
var v,s,i,c;

v= (sindex+1);
s= (sindex-1);

if (v > maxindex) v="";
if (s <= 1) s="";


var hopnextfile="channel"+v+".html";
var hoppriorfile="channel"+s+".html";

var hopnextname=""; // mark bolan;
var hoppriorname=""; //"king crimson";


var defaultplaylistdirection=1;

hopnext=hopbase + hopnextfile;
hopprior=hopbase + hoppriorfile;


var files=[];
var titles=[];

var dir="zappa";
var ext="mp4";

files.push("Frank+Zappa+-+You+are+what+You+Is");
titles.push("Frank Zappa - You are what You Is");

files.push("CAPTAIN+BEEFHEART+~+DIDDY+WAH+DIDDY");
titles.push("Captain Beefheart ~ DIDDY WAH DIDDY");

var plist=[];


for(var i=0;i<files.length;i++){
var s,v;
s=dir+"/"+ files[i]+"."+ext;
v=titles[i];
v= {    "file": s , "title": v }; 
plist.push(v);
};



