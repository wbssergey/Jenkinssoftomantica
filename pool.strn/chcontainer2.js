
//var strnchannel="aws.softomantica.com/channel.html";
var sindex=2;
var maxindex=3;
var pagetitle="Joy Division Video";
var hopbase="https://s3.amazonaws.com/pool.strn/";
var hopch="http://aws1.softomantica.com/channel.html";

var hopnext,hopprior;
var v,s,i,c;


var hopnextname="" ; // 
var hoppriorname=""; // 
v= (sindex+1);
s= (sindex-1);

if (v > maxindex) v="";
if (s < 0) s="";


var hopnextfile="channel"+v+".html";
var hoppriorfile="channel"+s+".html";


var defaultplaylistdirection=1;

hopnext=hopbase + hopnextfile;
hopprior=hopbase + hoppriorfile;

var files=[];
var titles=[];

var dir="joydivision";
var ext="mp4";


files.push("JoyDivision-Transmission");
titles.push("Joy Division - Transmission");


files.push("JoyDivision-Disorder");
titles.push("Joy Division - Disorder");

files.push("JoyDivision-LoveWillTearUsApart");
titles.push("Joy Division - Love Will Tear Us Apart");


var plist=[];


for(var i=0;i<files.length;i++){
var s,v;
s=dir+"/"+ files[i]+"."+ext;
v=titles[i];
v= {    "file": s , "title": v }; 
plist.push(v);
};

