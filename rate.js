let rateContainer = document.getElementById("rateContainer")
let quistion = document.getElementById("quistion")
let text = document.getElementById("text")
let yes = document.getElementById("yes")
let no = document.getElementById("no")


yes.addEventListener('click', ()=>{
    quistion.innerText= '🤍شكراً'
    text.innerText = ''
})

no.addEventListener("mouseover", ()=>{
    const i = Math.floor(Math.random() * 500) + 1
    const j = Math.floor(Math.random() * 500) + 1

    no.style.left = i + 'px';
    no.style.top = j + 'px';
})