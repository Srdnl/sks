let snowanim = document.querySelector(".snowactive")
let btnforanim = document.querySelector(".site-title")
let btnsearch = document.querySelector(".searchbtn, .searchimg")

function onanim() {
     snowanim.classList.toggle("snow")
     snowanim.classList.toggle("snowinactive")
}

function getsearch() {
     let input = document.getElementById('searchtext')
     let inputvalue = input.value
     let value = inputvalue 
     if (value == "poe"){
          window.location.href = 'poe.html';
     }
}

btnforanim.addEventListener("click", onanim)
btnsearch.addEventListener("click", getsearch)


