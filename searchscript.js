

const items = [
     { name: "Path of Exile", description: "Игра в жанре Action RPG" },
     { name: "Diablo 4", description: "Популярная игра от Blizzard" },
     { name: "Lost Ark", description: "MMORPG с интересным геймплеем" }
 ];

 function searchItems() {
     const query = document.getElementById("searchtext").value.toLowerCase();
     const resultsContainer = document.getElementById("results");
     resultsContainer.innerHTML = "";
     
     const filteredItems = items.filter(item => item.name.toLowerCase().includes(query));
     
     if (filteredItems.length === 0 && query === "") {
         resultsContainer.innerHTML = "<p>Пустой поиск: Path of Exile, Diablo 4, Lost Ark</p>";
     } else {
         filteredItems.forEach(item => {
             const card = document.createElement("div");
             card.classList.add("card");
             card.innerHTML = `<strong>${item.name}</strong><p>${item.description}</p>`;
             resultsContainer.appendChild(card);
         });
     }
 }