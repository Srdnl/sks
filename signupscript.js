let btn = document.querySelector('.signupbtn')
let inputpass = document.getElementById('password')
let inputemail = document.getElementById('email')
let inputlogin = document.getElementById('login')
let cu = document.getElementById('description')
let signnav = document.querySelector('.sign-in')


function getup(){
     let password = inputpass.value.trim()
     let email = inputemail.value.trim()
     let username = inputlogin.value.trim()
     console.log(password, email, username)
     if (email.includes('@gmail.com') && email){
          console.log('nice')
          document.cookie = `username=${username}; path=/; expires=20`
          window.open = "account.html"
          accountlol()
     } else {alert('Wrong Email!')}
}



function getCookie(name) {
     let value = "; " + document.cookie;
     let parts = value.split("; " + name + "=");
     if (parts.length == 2) return parts.pop().split(";").shift();
 }

function accountlol(){
     let cookies = getCookie('username')
     cu.innerHTML = `Username: ${cookies}`
}



btn.addEventListener('click', getup)