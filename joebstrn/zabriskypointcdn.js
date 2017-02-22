jwplayer('mediaplayer1').setup({
'id': 'playerID',
"autostart": true,
    "playlist": [{
        "file": file,
        "title": title
    }
     ],
'provider': 'rtmp', 
'streamer': 'rtmp://s3eayl9712b4bh.cloudfront.net/cfx/st/', 
 'modes': [
    {   
        type: 'flash',
             src: '' 
    },
    {
        type: 'html5',
        config: {
            'file': baseURL + '', 
            'provider': 'video'
        }
    }
 ]
});


var x0,y0;
var x,y;
jwplayer().on('ready', function(event){
y0=jwplayer().getHeight();
x0=jwplayer().getWidth();
x=0;y=0;
});


function mclick() {
 window.location=hop;
return false;
};

 jwplayer().on('playlistComplete', function(event){
if (document.getElementById("check1").checked) mclick();
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


