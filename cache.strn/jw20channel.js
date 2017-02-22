
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


function strnsetpage() {

document.getElementById("idstrnpagetitle").innerHTML='<center><h2>'+pagetitle+'</h2></center>';
//document.title = pagetitle;
return false;
};

function buildlink () {

var plink=[];
var pclone=[];

for(var i=0;i<files.length;i++){
var s,v;
s= files[i];
v=titles[i];
u=gsi[i];

s='<a href='+'"'+s+'">'+v+'</a>';

v= {    "link": s  }; 
plink.push(v);

s='<a href='+'"'+channelstrn+'?gsi='+u+'">'+u+'</a>';

v= {    "link": s  }; 
pclone.push(v);



};


v="";
for(var i=0;i<files.length;i++){
v=v+"<tr><td>"+(i+1)+"</td><td>"+plink[i].link+"</td><td>"+pclone[i].link+"</td></tr>";
};

dlhtml="<table><th></th><th>Download</th><th>Clone</th>"+v+"</table>";


document.getElementById("download").innerHTML=dlhtml;

};


function getQueryParams(url){
    var qparams = {},
        parts = (url||'').split('?'),
        qparts, qpart,
        i=0;

    if(parts.length <= 1 ){
        return qparams;
    }else{
        qparts = parts[1].split('&');
        for(i in qparts){

            qpart = qparts[i].split('=');
            qparams[decodeURIComponent(qpart[0])] = 
                           decodeURIComponent(qpart[1] || '');
        }
    }

    return qparams;
};



