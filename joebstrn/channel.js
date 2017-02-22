
jwplayer("my-video").setup({
"autostart": true,
    "playlist": plist,
 primary: "flash_video"
});

var x0,y0;
var x,y;

jwplayer().on('ready', function(event){
 strnignore=0;
y0=jwplayer().getHeight();
x0=jwplayer().getWidth();
x=0;y=0;
strnsetpage() ;
buildlink();
});


function strnsetpage() {

document.getElementById("idstrnpagetitle").innerHTML='<center><h2>'+pagetitle+'</h2></center>';
document.title = pagetitle;
return false;
};

function buildlink () {

var plink=[];

for(var i=0;i<files.length;i++){
var s,v;
s=hopbase+dir+"/"+ files[i]+"."+ext;
v=titles[i];

s='<a href='+'"'+s+'">'+v+'</a>';

v= {    "link": s , "title": v }; 
plink.push(v);
};

v="";
for(var i=0;i<files.length;i++){
v=v+"<tr><td>"+(i+1)+"</td><td>"+plink[i].link+"</td></tr>";
};

dlhtml="<table><th></th><th>Download</th>"+v+"</table>";


document.getElementById("download").innerHTML=dlhtml;

};

function skip(prm) {

if (prm < 10) {
jwplayer().next();
};
if (prm > 10) {
mclick(1);
};
if (prm == 10 ) {

if (typeof hopch === 'undefined') return false;
if (hopch=="") return false;

window.location=hopch;
};
return false;
};

function mclick(prm) {
var v='';
if (prm==1) {
if (typeof hopnext === 'undefined') return false;
v=hopnext;
};
if (prm==-1) {
if (typeof hopprior === 'undefined') return false;
v=hopprior;
};
if (prm==1000) {
location.reload(true) 
};

if(v!='') window.location=v;

return false;
};

jwplayer().on('playlistComplete', function(event){

if (document.getElementById("checka").checked) {
mclick(defaultplaylistdirection);
return false;
};
jwplayer().playlistItem(0);
return false;
});
var ignoreplaylistitem=0;
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



var limit =  40;
var time = 0;
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
 
var counterror=0;
var error1='unknown';

jwplayer().on('setupError'), function(event){
document.getElementById("idstrnpagetitle").innerHTML='<h2>System provisionning error</h2>';
counterror=100;
};

function strnmess (text) {
 ihtml="<div>?</div><br><div>Perhaps latency issue, try next time or download track</div><div>@<div>";
document.getElementById("idstrnpagetitle").innerHTML=ihtml.replace('?',pagetitle).replace('@',text);
};

jwplayer().on('error', function(event){
counterror++;
if(counterror >=100 ||counterror < 105) {strnmess('[overloaded]');; return false;};
if (event.type=="error"){
if(counterror==1) error1=event.message;
if (counterror>8) return false;

if(counterror==4) jwplayer().stop;
jwplayer().play();
strnmess(error1);
};

return false;
});
	
function resize() {
if(x==0){
y=jwplayer().getHeight();
x=jwplayer().getWidth();
jwplayer().resize(x+x, y+y);
} else
{
jwplayer().resize(x0, y0);
x=0;
};

return false;
};



function hideadd(prm){
var u;
var v=document.getElementById("hideadd").value;

if(v=="") { 
u="none";
 } 
else 
{
u="block";
};
document.getElementById("setup").style.display=u;
if(v=="") {
u="1";
v="show setup";
} 
else 
{
u="";
v="hide setup";
};
document.getElementById("hideadd").value=u;
document.getElementById("bhideadd").value=v;

return false;    
};



