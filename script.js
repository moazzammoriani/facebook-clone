//Dropdown functonality
dropdown = document.querySelector(".dropdown")
dropdown.onclick = function() {document.querySelector(".dropdown-content").classList.toggle("hide-dropdown")}

//Adding the name in all the appropriate places
namePlaces = document.querySelectorAll(".name-place")

for (let i =0; i<namePlaces.length; i++) {
    namePlaces[i].innerText = localStorage.getItem("name");
}

firstNamePlaces = document.querySelectorAll(".first-name-place");
if (localStorage.getItem("name") != null){
    nameArr = localStorage.getItem("name").split(" ");
    for (let i = 0; i < firstNamePlaces.length; i++) {
       firstNamePlaces[i].innerText = nameArr[0];
    }
}

