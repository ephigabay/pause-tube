chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.query({}, function(tabs) {
    tabs.forEach(function(tab) {
       chrome.tabs.executeScript(tab.id, {
         code: 'var pauseVideoElement = document.querySelector("video"); if(pauseVideoElement !== null){pauseVideoElement.paused ? pauseVideoElement.play() : pauseVideoElement.pause();}'
       });
    });
  });
});
