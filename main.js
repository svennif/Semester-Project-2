fetch("https://raw.githubusercontent.com/svennif/Semester-Project-2/master/data.json?token=AH6GSHSIZS3REN3LDQ5D5VS7KGF7W")
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


    for (let i = 0; i < cardData.length; i++) {
        card.innerHTML += "<div class='col card'>" +
        "<div class='card-body'>" +
        "<h2 class='card-title'>" + cardData[i].Name + "</h2>" +
        "<p class='card-text'>" + cardData[i].PlayedBy + "</p>" +
        "<p class='card-text'>" + cardData[i].Aliases[0] + "</p>" +
        //"<p class='card-text'>" + cardData[i].PlayedBy + "</p>" +
        "</div>" +
        "</div>";
    }
}