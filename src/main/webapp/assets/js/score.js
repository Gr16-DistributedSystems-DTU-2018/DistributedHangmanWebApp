$(document).ready(function () {

    $.ajax({
        url: "rest/game/get_current_user",
        contentType: "application/json",
        method: 'GET',
        success: [
            function (data) {
                console.log(data);
                setData(data);
            }
        ],
        error: [
            function (jqXHR, text, error) {
                console.log("ERROR");
            }
        ]
    });

});

function setData(userData) {
    $.ajax({
        url: "rest/game/get_user_field?username=" + userData['brugernavn'] + "&password=" + userData['adgangskode'] + "&userFieldKey=s151641_highscore",
        contentType: "application/json",
        method: 'GET',
        success: [
            function (data) {
                console.log(data);
                document.getElementById("username").innerHTML = userData['brugernavn'];
                document.getElementById("highscore").innerHTML = data;
            }
        ],
        error: [
            function (jqXHR, text, error) {
                console.log("ERROR");
            }
        ]
    });
}

$(document).ready(function () {
    $("#back_btn").click(function () {
        window.location.replace("menu.html");
    });
});