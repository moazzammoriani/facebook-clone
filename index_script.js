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

// Make the "Feeling/Activity button a trigger for generating new users
feelingAndActivityBtn = document.querySelector(".feeling-activity-btn")
feelingAndActivityBtn.onclick = createRandomPost
