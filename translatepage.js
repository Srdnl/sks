let langdiv = document.querySelector('.langchange')
let langtext = document.querySelector('.langchangetext')
let aboutus = document.querySelector('.abtext')
let textgame = document.querySelector('.textgame')
let lang = 'en'
let searchlink = document.querySelectorAll('.searchlink')
let inputtext = document.getElementById('searchtext')
let gapmoment = document.querySelector('.links')

let langtranslater = {
    'price': {
         'ua': ['1499₴','1499₴','1899₴','1899₴'],
         'en': ['29.99$', '29.99$', '59.99$', '59.99$']
    },
    'priceshop': {
         'ua': ['1299₴','1299₴','1499₴','1499₴'],
         'en': ['27.99$', '27.99$', '54.99$', '54.99$']
    },
    'textonpage': {
         'ua': ['Популярні релізи', 'Про Нас', 'Пошук'],
         'en': ['Popular releases', 'About Us', 'Search']
    },
    'forlinks':{
         'ua': ['Ключі', "Знижки", "Популярне", "Розіграши"],
         'en': ['Keys', 'Sales', 'Popular', 'Giveaways'],
    }
}


function langchanger(){
     if (lang == 'en') {
     lang = 'ua'
     langtext.src = 'pic-content/united-kingdom.png'
     gapmoment.style.gap = '15px'
     textgame.textContent = langtranslater.textonpage.ua[0]
     aboutus.textContent = langtranslater.textonpage.ua[1]
     inputtext.placeholder = langtranslater.textonpage.ua[2]
     for (let i = 0; i < langtranslater.price.ua.length; i++){pricesteam[i].innerHTML = langtranslater.price.ua[i];}
     for (let i = 0; i < langtranslater.priceshop.ua.length; i++){price[i].innerHTML = langtranslater.priceshop.ua[i];}
     for (let i = 0; i < langtranslater.forlinks.ua.length; i++){searchlink[i].innerHTML = langtranslater.forlinks.ua[i]}
     for(let i = 0; i < langtranslater.price.en.length; i++){
          let pc = parseFloat(langtranslater.price.ua[i].replace('$', ''))
          let price = parseFloat(langtranslater.priceshop.ua[i].replace('$', ''))
          let percents = ((pc - price) / pc) * 100
          discount[i].innerHTML = '-' + Math.round(percents) + '%'}
}    else if (lang == 'ua'){
          lang = 'en'
          langtext.src = 'pic-content/ukraine.png'
          gapmoment.style.gap = '27px'
          textgame.textContent = langtranslater.textonpage.en[0]
          aboutus.textContent = langtranslater.textonpage.en[1]
          inputtext.placeholder = langtranslater.textonpage.en[2]
          for (let i = 0; i < langtranslater.price.en.length; i++){pricesteam[i].innerHTML = langtranslater.price.en[i];}
          for (let i = 0; i < langtranslater.priceshop.en.length; i++){price[i].innerHTML = langtranslater.priceshop.en[i];}
          for (let i = 0; i < langtranslater.forlinks.en.length; i++){searchlink[i].innerHTML = langtranslater.forlinks.en[i]}
          for(let i = 0; i < langtranslater.price.ua.length; i++){
               let pc = parseFloat(langtranslater.price.en[i].replace('$', ''))
               let price = parseFloat(langtranslater.priceshop.en[i].replace('$', ''))
               let percents = ((pc - price) / pc) * 100
               discount[i].innerHTML = '-' + Math.round(percents) + '%'}
     }
}
     
langdiv.addEventListener("click", langchanger)
