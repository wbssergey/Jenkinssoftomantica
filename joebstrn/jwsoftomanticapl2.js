
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
});



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
if (v!='') { 
window.location=v;
};
return false;
};


jwplayer().on('playlistComplete', function(event){
if (document.getElementById("checka").checked) {
mclick(defaultplaylistdirection);
return false;
};
jwplayer().play();
return false;
});


var limit =  40;
var time = 0;
jwplayer().on('time', function(event){
if (document.getElementById("checkp").checked) {
time= Math.floor(event.position);
if (time > limit){
jwplayer().next();
time =0;
};
};
return false;
});
/*
jwplayer().on('beforePlay' function(event){
jwplayer().on('error', null);
});
*/

/*
jwplayer().on('error', function(event){
return false;
});
*/
	
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



