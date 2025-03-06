let lang = 'en'
let gapmoment = document.querySelector('.links')
let langdiv = document.querySelector('.langchange')
let aboutustext = document.querySelector('.maintext')
let langtext = document.querySelector('.langchangetext')

let translations = {
     en: {
         title: "Giveaways and Sales",
         description: "We don't have exclusive Giveaways and Sales for now..."},
     ua: {
          title: "Розіграші та розпродажі",
          description: "Наразі у нас немає ексклюзивних розіграшів та розпродажів..."}      
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
     document.getElementById("title").innerHTML = translations[lang].title;
     document.getElementById("description").innerHTML = translations[lang].description;
}
     

langdiv.addEventListener("click", langchanger)
