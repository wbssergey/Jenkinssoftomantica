

//var strnchannel="aws1.softomantica.com/channel.html";
var sindex=3;
var maxindex=3;

var pagetitle="King Crimson Video";
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



var hopnextname=""; // trex
var hoppriorname=""; // marc bolan;


var defaultplaylistdirection=1;

hopnext=hopbase + hopnextfile;
hopprior=hopbase + hoppriorfile;


var files=[];
var titles=[];

var dir="kc";
var ext="mp4";


files.push("King+Crimson+-+Top+Of+The+Pops+-+Cat+Food+(March+1970)");
titles.push("King Crimson - Cat Food (March 1970)");


files.push("King+Crimson+-+Cirkus+-+London+(1971)+SBD");
titles.push("King Crimson - Cirkus - London (1971)");

files.push("King+Crimson+Lizard-Prince+Rupert+Awakes");
titles.push("King+Crimson+Lizard-Prince+Rupert+Awakes");

files.push("Melody+Lament");
titles.push("King Crimson - Lament");

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


