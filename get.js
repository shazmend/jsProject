
//get names from the API
function getNames() {
fetch("https://64df452371c3335b25825c13.mockapi.io/api/v1/name")
    .then(response => response.json())
    .then(data => {
         // console.log(data[i].name)
        for (let i = 0; i < data.length; i++) {     
            let name = document.createElement("p") 
            name.innerText=data[i].name    
            let names = document.getElementById("names")//div in html    
            names.appendChild(name);
            name.classList.add('name');
        }
    }).catch(err => {
        console.log(err);
    })
}
//call the function
getNames()


//reload the page using the reload icon
function reload() {
    document.location.reload();
}

//generate random name from the API
function randomName() {
    fetch("https://64df452371c3335b25825c13.mockapi.io/api/v1/name")
    .then(response => response.json())
    .then(data => {
        let random = Math.floor(Math.random() * data.length);
        let name = document.getElementById("name") 
        name.innerText=data[random].name   
        let container = document.getElementById("playerName")  
        container.appendChild(name);
        name.classList.add('playerName');

        // localStorage.setItem("name", data[random].name )
    }).catch(err => {
        console.log(err);
    })    
}

//generate random challenge from the API
function randomChallenge() {
    // let name = document.getElementById("name") 
    // name.innerText=localStorage.getItem("name");
    fetch("https://64df452371c3335b25825c13.mockapi.io/api/v1/challenge")
    .then(response => response.json())
    .then(data => {
        let random = Math.floor(Math.random() * data.length);

        let challenge = document.getElementById("challenge") 
        challenge.innerText=data[random].challenge   
        let container = document.getElementById("challenges")  
        container.appendChild(challenge);
        challenge.classList.add('playerName');
    }).catch(err => {
        console.log(err);
    })    
}