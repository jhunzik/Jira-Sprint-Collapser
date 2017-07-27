alert("contentScript.js");
var nodeList = [].slice.apply(document.getElementsByClassName("ghx-backlog-container"));
Array.prototype.forEach(nodeList, node => {
node.toggle("ghx-open");
node.toggle("ghx-closed");
});
