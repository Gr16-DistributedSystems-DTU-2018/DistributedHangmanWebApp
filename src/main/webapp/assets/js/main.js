$(document).ready(function () {

    $.ajax({
        url: "rest/auth/get_current_user",
        contentType: "application/json",
        method: 'GET',
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
        window.location.replace("game.html");
    });

    $("#highscore_btn").click(function () {
        window.location.replace("score.html");
    });

    $("#about_btn").click(function () {
        window.location.replace("about.html");
    });

});