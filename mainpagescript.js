let snowanim = document.querySelector(".snowactive")
let btnforanim = document.querySelector(".site-title")
let btnsearch = document.querySelector(".searchbtn, .searchimg")
let input = document.getElementById('searchtext')
let gameimg = document.querySelectorAll('.gameimg')
let gametitle = document.querySelectorAll('.gametitle')
let pricesteam = document.querySelectorAll('.pricesteam')
let searchbar = document.querySelector('.searchbar')


let searchinput = ["poe", "path of exile", "Path of exile"] 

function onanim() {
     snowanim.classList.toggle("snow")
     snowanim.classList.toggle("snowinactive")
}

function getsearch() {
     let inputvalue = input.value.toLowerCase()
     if (searchinput.includes(inputvalue)){
          window.location.href = 'game.html';
     }
}


input.addEventListener("keydown", function(event) {
     if (event.key === "Enter") {
         getsearch();
     }
 });

function getsearch() {
     let inputvalue = input.value.toLowerCase()
     if (searchinput.includes(inputvalue)){
          window.location.href = 'game.html';
     }
}

btnforanim.addEventListener("click", onanim)
btnsearch.addEventListener("click", getsearch)

let games = [
     { title: 'Path of Exile 2', img: 'pic-content/poe2.jpg', pc: '29.99$', },
     { title: 'Kingdom Come: Deliverance II', img: 'pic-content/kcd2.jpg', pc: '29.99$', },
     { title: 'Marvel\'s Spider-Man 2', img: 'pic-content/spider2.jpg', pc: '59.99$', },
     { title: 'ELDEN RING NIGHTREIGN(2025)', img: 'pic-content/el.jpg', pc: '59.99$', }
 ];
 

function mainpagecards() {
     for (let i = 0; i < games.length; i++) {
          gametitle[i].innerHTML = games[i].title;
          gameimg[i].src = games[i].img;
          pricesteam[i].innerHTML = games[i].pc;

     let titlelength = games[i].title.length;

     console.log(titlelength)

     if (titlelength > 22) {
          gametitle[i].style.fontSize = '22px';
     } if (titlelength > 26) {
          gametitle[i].style.fontSize = '20px';
     } if (titlelength > 29) {
          gametitle[i].style.fontSize = '18px';
     } if (titlelength > 32) {
          gametitle[i].style.fontSize = '16px';
     }

}}

mainpagecards()



