
chrome.webRequest.onBeforeRequest.addListener(
    function(details){
        return 
        { 
            cancel: true}
        },
        {
            urls:["www.youtube.com", "youtube.com","*://*.zedo.com/","*://*.adsterra.com/","youtube.com/*/*","*://*.google.com","*://*.moneycontrol.com/*/*","https://www.googleadservices.com/products/*","*://*.googleadservices.com/*/*","https://www.googleadservices.com/pagead/*"]
        },
        
)