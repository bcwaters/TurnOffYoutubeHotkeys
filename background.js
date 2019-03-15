// Called when the user clicks on the browser action
chrome.browserAction.onClicked.addListener(function(tab) {
    console.log('clicked icon' + isDisabled)
     isDisabled = !isDisabled;
   chrome.tabs.query({active: true, currentWindow:true},
      function(tabs) {
           
            var activeTab = tabs[0];
            if(!isDisabled){
                
               chrome.browserAction.setIcon({path: 'icon48.png'})
            }else{
                  chrome.browserAction.setIcon({path: 'grey32.png'})
            } 
            chrome.tabs.sendMessage(activeTab.id, 
             {"remove": isDisabled}
         );
   });
});


//logic of code is opposite of varibale name... oops
var isDisabled = false;


var hotkeyOff = setInterval(function(){//every second for ten seconds

     chrome.tabs.query({active: true, currentWindow: true},
      function(tabs) {
         var activeTab = tabs[0]
       
        if(activeTab.url.indexOf('youtube') != -1){
             if(!isDisabled){
              chrome.browserAction.setIcon({path: 'icon48.png'})
             }
            appUrl = activeTab.url
            chrome.tabs.sendMessage(activeTab.id, 
                {"remove": isDisabled}
                );
            }else{
                
                 chrome.browserAction.setIcon({path: 'grey32.png'})
                 
            
            }
        });
},1000);

