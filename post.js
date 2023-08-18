let form = document.getElementById("form")

//post function
        form.addEventListener("submit", function (e) {
            e.preventDefault()
            let name = document.getElementById("name").value

            fetch("https://64df452371c3335b25825c13.mockapi.io/api/v1/name", {
                method: "POST",
                body: JSON.stringify({
                    name: name
                }),
                headers: {
                    "Content-Type": "application/json",
                }
            })

                .then(res => {
                    return res.json()
                })
                .then(data => {
                    console.log(data);
                    let result = document.getElementById("result")
                    result.innerHTML = `Your name appears on the screen now!`
                }
                )
        })

        

    
