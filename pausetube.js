chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.query({}, function(tabs) {
    tabs.forEach(function(tab) {
       chrome.tabs.executeScript(tab.id, {
         code: 'document.querySelector("video").paused ? document.querySelector("video").play() : document.querySelector("video").pause();'
       });
    });
  });
});
