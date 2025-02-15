let langdiv = document.querySelector('.langchange')
let langtext = document.querySelector('.langchangetext')
let aboutus = document.querySelector('.abtext')
let textgame = document.querySelector('.textgame')
let lang = 'en'
let searchlink = document.querySelectorAll('.searchlink')


 let langtranslater = {
     'price': {
          'ua': ['600₴','1599₴','1699₴','1199₴'],
          'en': ['29.99$', '29.99$', '59.99$', '59.99$']
     },
     'textonpage': {
          'ua': ['Популярні релізи', 'Про Нас'],
          'en': ['Popular releases', 'About Us']
     },
     'forlinks':{
          'ua': ['Ключі', "Знижки", "Популярне", "Розіграши"],
          'en': ['Keys', 'Sales', 'Popular', 'Giveaways'],
     }
 }

function langchanger(){
     if (lang == 'en') {
     lang = 'ua'
     langtext.innerHTML = 'en'
//     textgame.textContent = langtranslater.textonpage.ua[0]
//     aboutus.textContent = langtranslater.textonpage.ua[1]
     for (let i = 0; i < langtranslater.price.ua.length; i++){pricesteam[i].innerHTML = langtranslater.price.ua[i];}
//    for (let i = 0; i < langtranslater.forlinks.ua.length; i++){searchlink[i].innerHTML = langtranslater.forlinks.ua[i]}


}    else if (lang == 'ua'){
          lang = 'en'
          langtext.innerHTML = 'ua'
//        textgame.textContent = langtranslater.textonpage.en[0]
//        aboutus.textContent = langtranslater.textonpage.en[1]
          for (let i = 0; i < langtranslater.price.en.length; i++){pricesteam[i].innerHTML = langtranslater.price.en[i];}
//        for (let i = 0; i < langtranslater.forlinks.en.length; i++){searchlink[i].innerHTML = langtranslater.forlinks.en[i]}
     }
}
     


langdiv.addEventListener("click", langchanger)
