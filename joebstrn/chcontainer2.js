
//var strnchannel="aws1.softomantica.com/channel.html";
var sindex=2;
var maxindex=3;
var pagetitle="Mark Bolan & T-Rex Video";
var hopbase="https://cdn.softomantica.com/";
var hopch="http://aws.softomantica.com/channel.html";

var hopnext,hopprior;
var v,s,i,c;

v= (sindex+1);
s= (sindex-1);

if (v > maxindex) v="";
if (s <= 1) s="";


var hopnextfile="channel"+v+".html";
var hoppriorfile="channel"+s+".html";


var defaultplaylistdirection=1;

hopnext=hopbase + hopnextfile;
hopprior=hopbase + hoppriorfile;

var files=[];
var titles=[];

var dir="mbolan";
var ext="mp4";


files.push("TREXLightOfLove");
titles.push("T.Rex - Light Of Love - Marc Bolan");

files.push("T+Rex++-+The+Motivator");
titles.push("T-Rex - The Motivator");

files.push("T.REX+-+METAL+GURU(STUDIO+LIVE)");
titles.push("T.REX - METAL GURU");

files.push("TRex_StandByMe_MarcBolan");
titles.push("T.Rex - Stand By Me - Marc Bolan");

var plist=[];


for(var i=0;i<files.length;i++){
var s,v;
s=dir+"/"+ files[i]+"."+ext;
v=titles[i];
v= {    "file": s , "title": v }; 
plist.push(v);
};

