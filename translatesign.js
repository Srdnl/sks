let lang = 'en'
let gapmoment = document.querySelector('.links')
let langdiv = document.querySelector('.langchange')
let aboutustext = document.querySelector('.maintext')
let langtext = document.querySelector('.langchangetext')
let login = document.querySelector('.login')
let loginpassword = document.querySelector('.loginpassword')
let createtext = document.querySelector('.createtext')
let createacc = document.querySelector('.createacc')
let signinbtn = document.querySelector('.signinbtn')

let translations = {
     en: {
          description: "Welcome in our shop!",
          login: "Username or Email",
          loginpassword: "Password",
          signinbtn: "Sign in",
          createtext: "You don't have an account?",
          createacc: "<a href = 'signup.html' class='createacc'>Create now for free</a>",
     },

     ua: {
          description: "Ласкаво просимо до нашого магазині!",
          login: "Юзернейм або Електронну пошту",
          loginpassword: "Пароль",
          signinbtn: "Увійти",
          createtext: "Ти не маєш аккаунта?",
          createacc: "<a href = 'signup.html' class='createacc'>Сторити зараз, безкоштовно</a>",
     }
}

 
function langchanger(){
     if (lang == 'en'){
          lang = 'ua'
          aboutustext.style.fontSize = "18px"
          langtext.src = 'pic-content/united-kingdom.png'
     }else{
          lang = 'en'
          aboutustext.style.fontSize = "18px"
          langtext.src = 'pic-content/ukraine.png'
     }

     signinbtn.innerHTML = translations[lang].signinbtn
     document.getElementById("description").innerHTML = translations[lang].description
     login.innerHTML = translations[lang].login
     loginpassword.innerHTML = translations[lang].loginpassword
     createtext.innerHTML = translations[lang].createtext
     createacc.innerHTML = translations[lang].createacc
}
     

langdiv.addEventListener("click", langchanger)
