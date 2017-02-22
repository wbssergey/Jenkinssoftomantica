
var channelstrn="video1.softomantica.com/achannel.html";
var sindexstrn=1;
var maxindexstrn=3;
var pagetitle="Dancing Video";
var hopbase="https://s3.amazonaws.com/pool.strn/";
var hopch="http://aws1.softomantica.com/channel.html";

var hopnext,hopprior;


var v,s,i,c;

v= (sindexstrn+1);
s= (sindexstrn-1);

if (v > maxindexstrn) v="";
if (s < 0) s="";


var hopnextfile="achannel"+v+".html";
var hoppriorfile="achannel"+s+".html";

var hopnextname=""; // 
var hoppriorname=""; //


var defaultplaylistdirection=1;

hopnext=hopbase + hopnextfile;
hopprior=hopbase + hoppriorfile;

var files=[];
var titles=[];
var plist=[];


var x0=100;
var y0=100;
var x=0;
var y=0;

 function build (record){
        files.push(  record.directory +'/'+record.trackname);
        titles.push( record.title);
};


 function exportbuild (records){

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

jwplayer().on('ready', function(event){
strnignore=0;
y0=jwplayer().getHeight();
x0=jwplayer().getWidth();
x=0;y=0;
strnsetpage() ;
buildlink();
});



};

