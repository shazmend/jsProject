let form = document.getElementById("form")

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
                    // let result = document.getElementById("result")
                    // result.innerHTML = `<p>the title of post is ${data.name}</p>
                    // <p> the content of post is ${data.content}</p>`
                })
        })