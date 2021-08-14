//Settings input handling
function getEntryNodeList(classIdentity) {
    return document.querySelector("#settings-" + classIdentity + "-input").parentNode.childNodes
}


getEntryNodeList("name")[1].value = localStorage.getItem("name");
getEntryNodeList("username")[1].value = localStorage.getItem("username");
getEntryNodeList("contact")[1].value = localStorage.getItem("contact");

function setData(classIdentity) {
    return () => {localStorage.setItem(classIdentity, getEntryNodeList(classIdentity)[1].value)}
}

getEntryNodeList("name")[3].onclick = setData("name");
getEntryNodeList("username")[3].onclick = setData("username");
getEntryNodeList("contact")[3].onclick = setData("contact");

function generateRandUser() {
    fetch('https://randomuser.me/api/').then((response) => return response.json() => return response.json().results)
}
