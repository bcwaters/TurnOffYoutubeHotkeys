/*global chrome*/
/* src/chromeContent.js */
chrome.runtime.onMessage.addListener(
   function(request, sender, sendResponse) {
 
      if( request.remove != undefined ) {
          if(!request.remove){
               removeYoutubeHotkeys();
     
          }else{
              addYouTubeHotkeys();
     
          }         
      }
   }
)

var hotkeys = document.getElementsByTagName('yt-Hotkey-Manager')[0]
var hotkeysParent = hotkeys?hotkeys.parentNode:false;

function addYouTubeHotkeys(){
    if(hotkeysParent)
    hotkeysParent.appendChild(hotkeys);
}

function removeYoutubeHotkeys(){    
        var x = document.getElementsByTagName('yt-Hotkey-Manager')[0]
        if(x){
             var clone = x.cloneNode(false)
            var parent = x.parentNode
            x.parentNode.replaceChild(clone,x)
            clone.parentNode.removeChild(clone)         
        }
    
        var player = document.getElementById('player');
        if(player){player.blur()}
        var movie_player = document.getElementById('movie_player');
         if(player){movie_player.blur()}
    }
    


