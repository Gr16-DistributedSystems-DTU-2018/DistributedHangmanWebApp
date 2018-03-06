$(document).ready(function () {

    var postData;

    $.ajax({
        url: "rest/auth/get_current_user",
        contentType: "application/json",
        method: 'GET',
        data: postData,
        success: [
            function (data) {
                console.log(data);
                document.getElementById("welcome_header").innerHTML = "Welcome " + data['fornavn'] + " " + data['efternavn'] + "!";
            }
        ],
        error: [
            function (jqXHR, text, error) {
                console.log("ERROR");
            }
        ]
    });

});

$(document).ready(function () {

    $("#play_btn").click(function () {
        console.log("Play clicked!")
        window.location.replace("game.html");
    });

    $("#highscore_btn").click(function () {
        console.log("Highscore clicked!")
    });

    $("#about_btn").click(function () {
        console.log("About clicked!")
        window.location.replace("about.html");
    });

});