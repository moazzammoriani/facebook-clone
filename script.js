async function createRandomPost() {
    
    // Fetch a random quote from the Quotable API
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
      // Update DOM elements
        fetch('https://randomuser.me/api/').then((response) => {
            return response.json()
        })
            .then((randUser) => {
                return randUser.results[0]
            })
            .then((randUser) => {
                let newPost = createPostElement(randUser.name, randUser.picture.medium, data.content);
                document.querySelector('.main-content').appendChild(newPost);
                });
    } else {
        quote.textContent = "An error occured";
    }
}

function createPostElement(name, imageSrc, quote) {
    let postTemplate = document.querySelector(".post-card");
    let myPost = postTemplate.cloneNode(true);
    let image = myPost.childNodes[1].childNodes[1].childNodes[1];
    let posterName = myPost.childNodes[1].childNodes[5];
    let postContent = myPost.childNodes[3].childNodes[1];

    image.setAttribute("src", imageSrc);
    posterName.innerText = name.first + " " + name.last;
    postContent.innerText = quote;
    return myPost
}

//Dropdown functonality
dropdown = document.querySelector(".dropdown")
dropdown.onclick = function() {document.querySelector(".dropdown-content").classList.toggle("hide-dropdown")}

//Adding the name in all the appropriate places
namePlaces = document.querySelectorAll(".name-place")

for (let i =0; i<namePlaces.length; i++) {
    namePlaces[i].innerText = localStorage.getItem("name");
}

firstNamePlaces = document.querySelectorAll(".first-name-place");
nameArr = localStorage.getItem("name").split(" ");

for (let i = 0; i < firstNamePlaces.length; i++) {
    firstNamePlaces[i].innerText = nameArr[0];
}

// Make the "Feeling/Activity button an trigger for generating new users
feelingAndActivityBtn = document.querySelector(".feeling-activity-btn")
feelingAndActivityBtn.onclick = createRandomPost
