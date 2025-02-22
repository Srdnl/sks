let lang = 'en'
let gapmoment = document.querySelector('.links')
let langdiv = document.querySelector('.langchange')
let aboutustext = document.querySelector('.maintext')
let langtext = document.querySelector('.langchangetext')

let translations = {
     en: {
         title: "About Us",
         description: "Welcome to Steam Keys Shop, your trusted destination for Steam keys and digital game content. <br>Founded by gamers, for gamers, we are passionate about bringing you the best gaming experiences at unbeatable prices. <br>At Steam Keys Shop, we believe that gaming should be accessible to everyone. <br>That’s why we offer a wide selection of official game keys, from the latest AAA titles to hidden indie gems. <br>Whether you’re a casual player or a hardcore gamer, you’ll find something here to fuel your passion.",
         authenticity: "Authenticity Guaranteed: We only provide legitimate and officially licensed game keys.",
         delivery: "Instant Delivery: Get your keys delivered instantly via email. No delays, no hassle.",
         prices: "Competitive Prices: Enjoy exclusive discounts and deals that fit every budget.",
         support: "Customer Support: Our friendly support team is here 24/7 to assist you with any questions or issues.",
         community: '<a href="https://discord.gg/4QDHBJTM" class="community">Join our growing community</a> of satisfied gamers and discover why Steam Keys Shop is the go-to shop for Steam keys. <br>Let’s level up your gaming experience together!'
     },
     ua: {
          title: "Про Нас",
          description: "Ласкаво просимо до Steam Keys Shop — вашого надійного джерела Steam-ключів та цифрового ігрового контенту. <br>Створений геймерами для геймерів, наш магазин прагне надати вам найкращий ігровий досвід за доступними цінами. <br>У Steam Keys Shop ми вважаємо, що ігри повинні бути доступні для всіх. <br>Саме тому ми пропонуємо широкий вибір офіційних ключів: від останніх AAA-релізів до маловідомих інді-проєктів. <br>Чи ви казуальний гравець, чи хардкорний геймер — у нас знайдеться щось для вас!",
          authenticity: "Гарантія автентичності: Ми надаємо лише офіційні та ліцензійні ключі.",
          delivery: "Миттєва доставка: Отримуйте свої ключі моментально на email. Жодних затримок, жодних проблем.",
          prices: "Вигідні ціни: Насолоджуйтесь ексклюзивними знижками та пропозиціями на будь-який бюджет.",
          support: "Служба підтримки: Наша дружня команда підтримки доступна 24/7, щоб допомогти вам із будь-якими питаннями.",
          community: '<a href="https://discord.gg/4QDHBJTM" class="community">Приєднуйтесь до нашої спільноти</a> задоволених геймерів та дізнайтеся, чому Steam Keys Shop — це найкраще місце для покупки Steam-ключів. <br>Давайте покращувати ігровий досвід разом!'
      }      
 };

 
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
     document.getElementById("authenticity").innerHTML = translations[lang].authenticity;
     document.getElementById("delivery").innerHTML = translations[lang].delivery;
     document.getElementById("prices").innerHTML = translations[lang].prices;
     document.getElementById("support").innerHTML = translations[lang].support;
     document.getElementById("community").innerHTML = translations[lang].community;
}
     

langdiv.addEventListener("click", langchanger)
