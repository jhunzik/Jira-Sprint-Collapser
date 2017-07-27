chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    alert("Other.js");
    // If the received message has the expected format...
    if (msg.text === 'collapse-jira-sprints') {
        var nodeList = document.getElementsByClassName("ghx-backlog-container");
        Array.prototype.forEach(nodeList, node => {
        node.toggle("ghx-open");
        node.toggle("ghx-closed");
    }
});
