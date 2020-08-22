let container = document.getElementById('container');

fetch("https://raw.githubusercontent.com/joakimskoog/AnApiOfIceAndFire/master/data/characters.json")
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
    character = characterObject;

    console.log(character[999].Name);
}