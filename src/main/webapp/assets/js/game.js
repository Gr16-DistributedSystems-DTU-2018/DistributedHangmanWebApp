$(document).ready(function () {

    $.ajax({
        url: "rest/auth/get_current_user",
        contentType: "application/json",
        method: 'GET',
        success: [
            function (data) {
                console.log(data);
                document.getElementById("user").innerHTML = data['brugernavn'] + " " + data['fornavn'] + " " + data['efternavn'];
            }
        ],
        error: [
            function (jqXHR, text, error) {
                console.log("ERROR");
            }
        ]
    });

    updateData();

    var key = $(this).attr("name");

    console.log(key + "clicked!");

    $.ajax({
        url: "rest/logic/is_char_guessed?ch=" + key,
        contentType: "text/plain",
        method: 'GET',
        success: [
            function (data) {
                console.log("Data: " + data);
                if (data === 'false') {
                    location.reload();
                    guess(key);
                    updateData();
                } else {
                    alert(key + 'is already guessed.')
                }
            }
        ],
        error: [
            function (jqXHR, text, error) {
                console.log("ERROR isCharGuessed");
            }
        ]
    });

    $("#back_btn").click(function () {
        window.location.replace("menu.html");
    });

});

function updateData() {
    $.ajax({
        url: "rest/logic/get_guessed_word",
        contentType: "text/plain",
        method: 'GET',
        success: [
            function (data) {
                console.log("Word: " + data);
                document.getElementById("word").innerHTML = data;
            }
        ],
        error: [
            function (jqXHR, text, error) {
                console.log("ERROR");
            }
        ]
    });

    $.ajax({
        url: "rest/logic/get_guessed_chars",
        contentType: "text/plain",
        method: 'GET',
        success: [
            function (data) {
                console.log("Guessed characters: " + data);
                document.getElementById("used_characters").innerHTML = data;
            }
        ],
        error: [
            function (jqXHR, text, error) {
                console.log("ERROR");
            }
        ]
    });

    $.ajax({
        url: "rest/logic/get_score",
        contentType: "text/plain",
        method: 'GET',
        success: [
            function (data) {
                console.log("Got score: + " + data);
                document.getElementById("score").innerHTML = data;
            }
        ],
        error: [
            function (jqXHR, text, error) {
                console.log("ERROR");
                return null;
            }
        ]
    });

    $.ajax({
        url: "rest/logic/get_life",
        contentType: "text/plain",
        method: 'GET',
        success: [
            function (data) {
                console.log("Got life: " + data);
                document.getElementById("life").innerHTML = data;

                if (data === "0") {
                    document.hangman_pic.src = 'assets/img/wrong_6.png';
                } else if (data === "1") {
                    document.hangman_pic.src = 'assets/img/wrong_5.png';
                } else if (data === "2") {
                    document.hangman_pic.src = 'assets/img/wrong_4.png';
                } else if (data === "3") {
                    document.hangman_pic.src = 'assets/img/wrong_3.png';
                } else if (data === "4") {
                    document.hangman_pic.src = 'assets/img/wrong_2.png';
                } else if (data === "5") {
                    document.hangman_pic.src = 'assets/img/wrong_1.png';
                } else if (data === "6") {
                    document.hangman_pic.src = 'assets/img/wrong_0.png';
                }

            }
        ],
        error: [
            function (jqXHR, text, error) {
                console.log("ERROR");
            }
        ]
    });

    $.ajax({
        url: "rest/logic/is_game_won",
        contentType: "text/plain",
        method: 'GET',
        success: [
            function (data) {
                if (data === "true") {
                    var result = confirm("You won! Congratulations!\nWould you like to play again?");
                    if (result === true) {
                        reset();
                        location.reload();
                    } else {
                        alert("Okay :(")
                    }
                }
            }
        ],
        error: [
            function (jqXHR, text, error) {
                console.log("ERROR");
            }
        ]
    });

    $.ajax({
        url: "rest/logic/is_game_lost",
        contentType: "text/plain",
        method: 'GET',
        success: [
            function (data) {
                if (data === "true") {
                    var result = confirm("You lost! :(\nWould you like to play again?");
                    if (result === true) {
                        reset();
                        location.reload();
                    } else {
                        alert("Okay :(")
                    }
                }
            }
        ],
        error: [
            function (jqXHR, text, error) {
                console.log("ERROR");
            }
        ]
    });
}

function guess(char) {
    $.ajax({
        url: "rest/logic/guess?ch=" + char,
        contentType: "plain/text",
        method: 'POST',
        success: [
            function (data) {
                console.log("Guessed: " + char + ": Result: " + data);
            }
        ],
        error: [
            function (jqXHR, text, error) {
                console.log("ERROR");
            }
        ]
    });
}

function reset() {
    $.ajax({
        url: "rest/logic/reset_score",
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
        url: "rest/logic/reset_game",
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

function isCharGuessed(char) {
    $.ajax({
        url: "rest/logic/is_char_guessed?ch=",
        contentType: "text/plain",
        method: 'GET',
        success: [
            function (data) {
                return data;
            }
        ],
        error: [
            function (jqXHR, text, error) {
                console.log("ERROR isCharGuessed");
            }
        ]
    });

}