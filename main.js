fetch("https://raw.githubusercontent.com/svennif/AnApiOfIceAndFire/master/data/characters.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        showObject(json);
    })
    .catch(function (error) {
        console.log(error);
    });


function showObject(characterObject) {
    cardData = characterObject;
    let card = document.querySelector(".card-container");

    for (let i = 0; i <= 10; i++) {
        card.innerHTML += "<div class='col card'>" +
            "<div class='card-body'>" +
            "<h2 class='card-title'>" + cardData[i].Name + "</h2>" +
            "<p class='card-text'>" + cardData[i].PlayedBy + "</p>" +
            "<p class='card-text'>" + cardData[i].Aliases[0] + "</p>" +
            "</div>" +
            "</div>";
    }
}