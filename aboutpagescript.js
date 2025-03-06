let aboutusnav = document.querySelector('.about-usnav')
let sitetitle = document.querySelector('.site-title')

function sitehref() {
     window.location.href = 'main.html'
}

function abouthref() {
     window.location.href = 'aboutpage.html'
}

sitetitle.addEventListener("click", sitehref)
aboutusnav.addEventListener("click", abouthref)