alert("contentScript.js");
[].forEach.call(document.getElementsByClassName("ghx-backlog-container"), node => {
    node.classList.remove("ghx-open");
    node.classList.add("ghx-closed");
});
