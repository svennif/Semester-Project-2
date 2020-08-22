let container = document.getElementById('result');

fetch("https://raw.githubusercontent.com/svennif/Semester-Project-2/master/data.json?token=AH6GSHWWYXU6M2NHHTUERCS7IEZQY")
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        showObject(json);
    })
    .then(function (error) {
        console.log(error);
    });


function showObject(characterObject) {
    character = characterObject;

    console.log(character[0]);
}