
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
        console.log('====================================');
        console.log(err);
        console.log('====================================');
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
        console.log(data[random].name);
        let name = document.getElementById("name") 
        name.innerText=data[random].name   
        let container = document.getElementById("playerName")//div in html    
        container.appendChild(name);
        name.classList.add('playerName');
    }).catch(err => {
        console.log('====================================');
        console.log(err);
        console.log('====================================');
    })    
}