$(document).ready(function () {

    $.ajax({
        url: "rest/game/get_current_user",
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
        reset();
        window.location.replace("game.html");
    });

    $("#highscore_btn").click(function () {
        window.location.replace("score.html");
    });

    $("#about_btn").click(function () {
        window.location.replace("about.html");
    });

    $("#logout_btn").click(function () {
        $.ajax({
            url: "rest/game/logout",
            method: 'POST',
            contentType: 'text/plain',
            success: [
                function (data) {
                    console.log(data);
                }
            ],
            error: [
                function (jqXHR, text, error) {
                }
            ]
        });
        window.location.replace("index.html");
    });

});

function reset() {
    $.ajax({
        url: "rest/game/reset_score",
        contentType: "text/plain",
        method: 'POST',
        success: [
            function (data) {
                console.log(data);
            }
        ],
        error: [
            function (jqXHR, text, error) {
                console.log("ERROR");
            }
        ]
    });

    $.ajax({
        url: "rest/game/reset_game",
        contentType: "text/plain",
        method: 'POST',
        success: [
            function (data) {
                console.log(data);
            }
        ],
        error: [
            function (jqXHR, text, error) {
                console.log("ERROR");
            }
        ]
    });
}