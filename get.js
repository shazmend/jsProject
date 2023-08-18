



fetch("https://64df452371c3335b25825c13.mockapi.io/api/v1/name")
    .then(response => response.json())
    .then(data => {
         // console.log(data[i].name)
        for (let i = 0; i < data.length; i++) {     
            let name = document.createElement("p") 
            name.innerText=data[i].name    
            let names = document.getElementById("square")//div in html    
            names.appendChild(name)

            name.classList.add('name');

        }
    }).catch(err => {
        console.log('====================================');
        console.log(err);
        console.log('====================================');
    })
    