
var files=[];
var titles=[];
var plist=[];
var isgsi=0;
var indexgsi=0;
var titlegsi="";
var iscdn=0;
var data="";

var counterror=0;
var jwhandle;

function build (record){

        files.push(  record.directory +'/'+record.trackname);
var v=record.title;
if(v==null) v='';
if(v=='') v=record.trackname.replace('.mp3','');

        titles.push( v);
};

function exportbuild (records,viscdn,visgsi){
var c;
c=0;
for (var i = 0, len = records.length; i < len; i++) {
  build(records[i]);
  if (visgsi==1&&records[i].checked) {
           indexgsi=i;
   };
};


for(var i=0;i<files.length;i++){
var s,v;
s=files[i];
v=titles[i];

v= {    "file": s , "title": v }; 
plist.push(v);
};
isgsi=visgsi;
iscdn=viscdn;

};

if (data=="" ) data=plist;


function dosubmit(prm){
var fm=document.forms.fSubmit;
var c=plist.length;
var i;
var vlist=[];
var imgfolder='';

switch(prm){
case 'pl':

if(c > 0 ) imgfolder=plist[0].file.substring(0,plist[0].file.indexOf("/"))+"/Folder.jpg" ;

for(i=1;i<=c;i++){
v=false;
if(document.getElementById("s"+i)==null) {

if(i==(indexgsi+1)) v=true;

}
else
{
v=document.getElementById("s"+i).checked;
};
if (v) {

v=plist[i-1].file;
//v="https://s3.amazonaws.com/cache.strn/default.mp3";

vlist.push({"file": v, "title": plist[i-1].title , "image" : imgfolder});
};
};


if (vlist.length>0) {  

v='';

if (vlist.indexOf('cdn2')!=-1) {
v='rtmp://rtmp2.cloudfront.net/cfx/st/';
} ;
if (vlist.indexOf('cdn3')!=-1) {
v='rtmp://rtmp3.cloudfront.net/cfx/st/';
} ;
if (vlist.indexOf('cdn4')!=-1) {
v='rtmp://rtmp4.cloudfront.net/cfx/st/';
} ;

if((v=='')&&(plist.indexOf('cdn')!=-1)) {
v='rtmp://rtmp.cloudfront.net/cfx/st/';
};

if(v=='') {

jwhandle=jwplayer('myaudio').setup({
'id': 'playerID',
'autostart': true,
'playlist': vlist,
 'skin' : {
    'url':'http://s3.amazonaws.com/cache.strn/strn.css',
    'name': 'strn'
},

//'events': {
//     'onDisplayClick': function(e){
//     }
//  },  
 'modes': [
    {   
        type: 'flash',
        src: 'player.swf' 
    }
 ]
})

} else {

jwhandle=jwplayer('myaudio').setup({
'id': 'playerID',
"autostart": true,
'playlist':vlist,
'skin' : {
    'url':'http://s3.amazonaws.com/cache.strn/strn.css',
    'name': 'strn'
},
'provider': 'rtmp', 
'streamer': v,
 'modes': [
    {   
        type: 'flash',
        src: 'player.swf' 
    }
 ]
})

};


jwplayer().on('ready', function(event){
counterror=0;
});

jwplayer().on('error', function(event){
counterror++;
if (event.type=="error"){
if(counterror==10) {
jwplayer().stop(); 
} else {
jwplayer().play(true);
};
};
});

jwplayer().on('buffer',function(event){
//
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


function mp3force (){

if(window.location.href.indexOf('gsi')==-1 ) return false;

if ((typeof jwhandle == 'undefined') && (typeof plist !== 'undefined')) {

if (plist.length>0) dosubmit('pl');

};

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


