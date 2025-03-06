let lang = 'en'
let gapmoment = document.querySelector('.links')
let langdiv = document.querySelector('.langchange')
let aboutustext = document.querySelector('.maintext')
let langtext = document.querySelector('.langchangetext')
let login = document.querySelector('.login')
let loginpassword = document.querySelector('.loginpassword')
let createtextup = document.querySelector('.createtextup')
let createaccup = document.querySelector('.createaccup')
let signupbtn = document.querySelector('.signupbtn')

let translations = {
     en: {
          description: "Welcome in our shop!",
          login: "Username or Email",
          loginpassword: "Password",
          signupbtn: "Sign up",
          createtextup: "You already have an acoount?",
          createaccup: "<a href = 'signin.html' class='createacc'>Sign in</a>"
     },

     ua: {
          description: "Ласкаво просимо до нашого магазині!",
          login: "Юзернейм або Електронну пошту",
          loginpassword: "Пароль",
          signupbtn: "Створити",
          createtextup: "Ти вже маєш аккаунт?",
          createaccup: "<a href = 'signin.html' class='createacc'>Увійти</a>"
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

     signupbtn.innerHTML = translations[lang].signupbtn
     document.getElementById("description").innerHTML = translations[lang].description
     login.innerHTML = translations[lang].login
     loginpassword.innerHTML = translations[lang].loginpassword
     createtextup.innerHTML = translations[lang].createtextup
     createaccup.innerHTML = translations[lang].createaccup
}
     

langdiv.addEventListener("click", langchanger)
