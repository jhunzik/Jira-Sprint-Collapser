chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id, {
            "file": "contentScript.js"
        }, function () { // Execute your code
            console.log("Sprints collapsed..."); // Notification on Completion
        });
    alert("Background.js");
});
