chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    var currentTab = tabs[0];
    var title = currentTab.title;
var button = document.getElementById("buttn");
button.addEventListener("click", function(){

    document.getElementById("windowTitle").textContent = title;
  });
});