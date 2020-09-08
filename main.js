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
    let cardContainer = document.querySelector(".card-container");

    for (let i = 0; i < cardData.length; i++) {
        cardContainer.innerHTML += "<div class='card'>" +
            "<input class='stretched-link checkbox' type='checkbox'" + "id='" + cardData[i].Id + "' value='" + cardData[i].Id + "'>" +
            "<label class='card-body' for='" + cardData[i].Id + "'>" +
            "<h2 class='card-title'>" + cardData[i].Name + "</h2>" +
            "<p class='card-text'><b>Played by: </b>" + cardData[i].PlayedBy + "</p>" +
            "<p class='card-text'><b>Known aliases: </b>" + cardData[i].Aliases[0] + "</p>" +
            "</div>" +
            "</div>" +
            "</label>";
    }

    $("input[type=checkbox]").change(function () {
        var max = 2;
        if ($("input[type=checkbox]:checked").length == max) {
            $("input[type=checkbox]").attr('disabled', 'disabled');
            $("input[type=checkbox]:checked").removeAttr('disabled');
            $(".btn").css('visibility', 'visible');
        } else {
            $("input[type=checkbox]").removeAttr('disabled');
            $(".btn").css('visibility', 'hidden');
        }
    })
}

function btn() {
    window.location.replace('game.html');
}