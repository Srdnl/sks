let snowanim = document.querySelector(".snowactive")
let btnforanim = document.querySelector(".textgamediv")
let btnsearch = document.querySelector(".searchbtn, .searchimg")
let input = document.getElementById('searchtext')
let gameimg = document.querySelectorAll('.gameimg')
let gametitle = document.querySelectorAll('.gametitle')
let pricesteam = document.querySelectorAll('.pricesteam')
let price = document.querySelectorAll('.price')
let aboutusnav = document.querySelector('.about-usnav')
let sitetitle = document.querySelector('.site-title')
let dropdown = document.getElementById("dropdown")
let discount = document.querySelectorAll('.discount')

let searchinput = ["Path of Exile", "Elden Ring", "Kingdom Come", "Spider-Man 2"]

function onanim() {
    snowanim.classList.toggle("snow")
    snowanim.classList.toggle("snowinactive")
}

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        getsearch()
    }
})

function sitehref() {
    window.location.href = 'main.html'
}

function abouthref() {
    window.location.href = 'aboutpage.html'
}

btnforanim.addEventListener("click", onanim)
btnsearch.addEventListener("click", getsearch)
sitetitle.addEventListener("click", sitehref)
aboutusnav.addEventListener("click", abouthref)

let games = [
    { title: 'Path of Exile 2', img: 'pic-content/poe2.jpg', pc: '29.99$', price: '27.99$' },
    { title: 'Kingdom Come: Deliverance II', img: 'pic-content/kcd2.jpg', pc: '29.99$', price: '27.99$' },
    { title: 'Marvel\'s Spider-Man 2', img: 'pic-content/spider2.jpg', pc: '59.99$', price: '54.99$' },
    { title: 'ELDEN RING NIGHTREIGN(2025)', img: 'pic-content/el.jpg', pc: '59.99$', price: '54.99$' }
]

function getpercents() {
    for(let i = 0; i < games.length; i++){
        let pc = parseFloat(games[i].pc.replace('$', ''))
        let price = parseFloat(games[i].price.replace('$', ''))
        let percents = ((pc - price) / pc) * 100
        discount[i].innerHTML = '-' + Math.round(percents) + '%'

}}

function mainpagecards() {
    for (let i = 0; i < games.length; i++) {
        gametitle[i].innerHTML = games[i].title
        gameimg[i].src = games[i].img
        pricesteam[i].innerHTML = games[i].pc
        price[i].innerHTML = games[i].price
        let titlelength = games[i].title.length
        if (titlelength > 22) {
          gametitle[i].style.fontSize = '22px'
     } if (titlelength > 26) {
          gametitle[i].style.fontSize = '20px'
     } if (titlelength > 29) {
          gametitle[i].style.fontSize = '18px'
     } if (titlelength > 32) {
          gametitle[i].style.fontSize = '16px'
     }
    }
}

getpercents()
mainpagecards()

function showDropdown() {
    dropdown.style.display = "block"
    updateList("")
}
function hideDropdown() {
    setTimeout(() => dropdown.style.display = "none", 200)
}

function updateList(query) {
    dropdown.innerHTML = ""
    const filtered = searchinput.filter(item => item.toLowerCase().includes(query.toLowerCase()))
    if (filtered.length === 0) {
        dropdown.innerHTML = "<div class='item'>None</div>"
        return
    }

    filtered.forEach(item => {
        const div = document.createElement("div")
        div.textContent = item
        div.classList.add("item")
        div.onclick = () => {
            input.value = item
            dropdown.style.display = "none"
        }
        dropdown.appendChild(div)
    })
}

function getsearch() {
     let inputvalue = input.value.toLowerCase().trim()
     let foundGame = games.find(game => game.title.toLowerCase().includes(inputvalue))
     if (foundGame) {
         window.location.href = 'game.html'
     } else {
         alert("No")
     }
 }
 

input.addEventListener("focus", showDropdown)
input.addEventListener("blur", hideDropdown)
input.addEventListener("input", () => updateList(input.value))



