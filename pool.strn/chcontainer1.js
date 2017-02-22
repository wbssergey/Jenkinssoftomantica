

//var strnchannel="aws.softomantica.com/channel.html";
var sindex=1;
var maxindex=3;

var pagetitle="Joe Bonamassa Video";
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

var dir="jbonamassa1";
var ext="mp4";

files.push("Joe+Bonamassa+-+Taxman+-+Live+at+The+Cavern+Club");
titles.push("Joe Bonamassa - Taxman - Live at The Cavern Club");

files.push("Joe+Bonamassa+-+Drive+(Official+Video)");
titles.push("Joe Bonamassa - Drive");

files.push("Joe+Bonamassa+-+Christmas+Date+Blues");
titles.push("Joe Bonamassa - Christmas Date Blues");

files.push("Beth%20Hart%20%2526%20Joe%20Bonamassa%20-%20Nutbush%20City%20Limits");
titles.push("Beth Hart Joe Bonamassa - Nutbush City Limitss");


files.push("Joe%20Bonamassa%20-%20Angel%20Of%20Mercy%20-%20Live%20At%20The%20Greek%20Theatre");
titles.push("Joe Bonamassa - Angel Of Mercy - Live At The Greek Theatre");


files.push("Lazy%20-%20Jimmy%20Barnes%20%2526%20Joe%20Bonamassa");
titles.push("Lazy - Jimmy Barnes, Joe Bonamassa");

files.push("Beth+Hart+-+I+Don't+Need+No+Doctor.+2004");
titles.push("Beth Hart - I Don't Need No Doctor. 2004");

files.push("Beth+Hart+-+Whole+Lotta+Love");
titles.push("Beth Hart - Whole Lotta Love");


var plist=[];

for(var i=0;i<files.length;i++){
var s,v;
s=dir+"/"+ files[i]+"."+ext;
v=titles[i];
v= {    "file": s , "title": v }; 
plist.push(v);
};



