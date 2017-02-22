

var files=[];
var titles=[];
var plist=[];
var disgsi=0;
var discdn=0;
var data="";


 function build (record){
        files.push(  record.directory +'/'+record.trackname);
var v=record.title;
if(v==null) v='';
if(v=='') v=record.trackname.replace('.mp3','');

        titles.push( v);

};


 function exportbuild (records,iscdn,isgsi){

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

disgsi=isgsi;
discdn=iscdn;

};


if (data=="" ) data=plist;

function dosubmit(prm){

var fm=document.forms.fSubmit;
var c=plist.length;
var i;
var vlist=[];
var autostart;
 autostart="autostart: 'yes',  ";
var imgfolder='';
switch(prm){
case 'pl':

if(c > 0 ) imgfolder=plist[0].file.substring(0,plist[0].file.indexOf("/"))+"/Folder.jpg" ;

for(i=1;i<=c;i++){
v=document.getElementById("s"+i).checked;

if (v ) {

vlist.push({"file": plist[i-1].file, "title": plist[i-1].title , "image" : imgfolder});
};
};

if (vlist.length>0) {  


if (discdn==0) {


jwplayer('myaudio').setup({
'id': 'playerID',
'autostart': true,
'playlist': vlist, 
 'modes': [
    {   
        type: 'flash',
        src: 'player.swf' 
    }
 ]
});
};

} else {


jwplayer('myaudio').setup({
'id': 'playerID',
"autostart": true,
    "playlist":vlist,
'provider': 'rtmp', 
'streamer': 'rtmp://rtmp.cloudfront.net/cfx/st/', 
 'modes': [
    {   
        type: 'flash',
        src: '' 
    },
    {
        type: 'html5',
        config: {
            'file':'', 
            'provider': 'video'
        }
    }
 ]
});


};


break;

case 'cl':
for(i=1;i<=c;i++){
document.getElementById("s"+i).checked=false;
};
return false;
break;

case 'ch':
for(i=1;i<=c;i++){
document.getElementById("s"+i).checked=true;
};
return false;
break;

case 'logout':
return false;
break;
}

  
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
document.getElementById("disclaimer").style.display=u;
document.getElementById("mlib").style.display=u;
if(v=="") {
u="1";
v="show disclaimer";
} 
else 
{
u="";
v="hide disclaimer";
};
document.getElementById("hideadd").value=u;
document.getElementById("bhideadd").value=v;

return false;    
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


