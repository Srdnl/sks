let btnin = document.querySelector('.signinbtn')
let inputpass = document.getElementById('password')
let inputemail = document.getElementById('email')
let inputlogin = document.getElementById('login')


function getin(){
     let password = inputpass.value.trim()
     let login = inputlogin.value.trim()
     console.log(password, login)
}


btnin.addEventListener('click', getin)
