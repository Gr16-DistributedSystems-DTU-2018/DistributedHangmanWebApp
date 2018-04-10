var username;
var password;

$(document).ready(function () {

    var container = $("#border_container");
    container.removeClass("animated bounceIn");

    if (typeof(Storage) !== "undefined") {
        if (sessionStorage.username) {
            username = sessionStorage.username;
        } else {

        }
    }

    if (typeof(Storage) !== "undefined") {
        if (sessionStorage.password) {
            password = sessionStorage.password;
        } else {

        }
    }

    checkHighscore(true);

    $.ajax({
        url: "rest/game/get_logged_in_user?username=" + username,
        contentType: "application/json",
        method: 'GET',
        success: [
            function (data) {
                document.getElementById("user").innerHTML = data['fornavn'] + " " + data['efternavn'];
            }
        ],
        error: [
            function (jqXHR, text, error) {
                alertify.error("Could not show user information!");
            }
        ]
    });

    $("#back_btn").click(function () {
        backBtn();
    });

});

$(document).ready(function () {
    updateData();

    $("#btn_a").click(function () {
        buttonClick('a');
    });

    $("#btn_b").click(function () {
        buttonClick('b');
    });

    $("#btn_c").click(function () {
        buttonClick('c');
    });

    $("#btn_d").click(function () {
        buttonClick('d');
    });

    $("#btn_e").click(function () {
        buttonClick('e');
    });

    $("#btn_f").click(function () {
        buttonClick('f');
    });

    $("#btn_g").click(function () {
        buttonClick('g');
    });

    $("#btn_h").click(function () {
        buttonClick('h');
    });

    $("#btn_i").click(function () {
        buttonClick('i');
    });

    $("#btn_j").click(function () {
        buttonClick('j');
    });

    $("#btn_k").click(function () {
        buttonClick('k');
    });

    $("#btn_l").click(function () {
        buttonClick('l');
    });

    $("#btn_m").click(function () {
        buttonClick('m');
    });

    $("#btn_n").click(function () {
        buttonClick('n');
    });

    $("#btn_o").click(function () {
        buttonClick('o');
    });

    $("#btn_p").click(function () {
        buttonClick('p');
    });

    $("#btn_q").click(function () {
        buttonClick('q');
    });

    $("#btn_r").click(function () {
        buttonClick('r');
    });

    $("#btn_s").click(function () {
        buttonClick('s');
    });

    $("#btn_t").click(function () {
        buttonClick('t');
    });

    $("#btn_u").click(function () {
        buttonClick('u');
    });

    $("#btn_v").click(function () {
        buttonClick('v');
    });

    $("#btn_w").click(function () {
        buttonClick('w');
    });

    $("#btn_x").click(function () {
        buttonClick('x');
    });

    $("#btn_y").click(function () {
        buttonClick('y');
    });

    $("#btn_z").click(function () {
        buttonClick('z');
    });

    $("#btn_æ").click(function () {
        buttonClick('æ');
    });

    $("#btn_ø").click(function () {
        buttonClick('ø');
    });

    $("#btn_å").click(function () {
        buttonClick('å');
    });

});

function updateData() {
    console.log("########### updateData ###########")
    $.ajax({
        url: "rest/game/get_word?username=" + username,
        contentType: "text/plain",
        method: 'GET',
        success: [
            function (data) {
                document.getElementById("word").innerHTML = data;
            }
        ],
        error: [
            function (jqXHR, text, error) {
                console.log("ERROR: get_word")
                alertify.error("Could not fetch the word!");
            }
        ]
    });

    $.ajax({
        url: "rest/game/get_guessed_chars?username=" + username,
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
                console.log("ERROR: get_guessed_chars")
            }
        ]
    });

    $.ajax({
        url: "rest/game/get_score?username=" + username,
        contentType: "text/plain",
        method: 'GET',
        success: [
            function (data) {
                console.log("Got score: " + data);
                document.getElementById("score").innerHTML = data;
            }
        ],
        error: [
            function (jqXHR, text, error) {
                console.log("ERROR: get_score")
            }
        ]
    });

    $.ajax({
        url: "rest/game/get_life?username=" + username,
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
                console.log("ERROR: get_life")
            }
        ]
    });

    $.ajax({
        url: "rest/game/is_game_won?username=" + username,
        contentType: "text/plain",
        method: 'GET',
        success: [
            function (data) {
                if (data === "true") {
                    // confirm dialog
                    alertify.confirm("<h2 style='color: black'>You won!</h2><br>Congratulations! Would you like to play again?", function () {
                        resetGame();
                        location.reload();
                    }, function () {
                        window.location.replace("menu.html")
                    });
                }
            }
        ],
        error: [
            function (jqXHR, text, error) {
                console.log("ERROR: is_game_won")
            }
        ]
    });

    $.ajax({
        url: "rest/game/is_game_lost?username=" + username,
        contentType: "text/plain",
        method: 'GET',
        success: [
            function (data) {
                if (data === "true") {
                    // confirm dialog
                    alertify.confirm("<h2 style='color: black'>You lost!</h2><br>Sorry, you lost! Would you like to play again?", function () {
                        reset();
                        location.reload();
                    }, function () {
                        window.location.replace("menu.html")
                    });
                }
            }
        ],
        error: [
            function (jqXHR, text, error) {
                console.log("ERROR: is_game_lost")
            }
        ]
    });
    console.log("#####################################")
}

function guess(char) {
    $.ajax({
        url: "rest/game/guess?username=" + username + "&ch=" + char,
        contentType: "plain/text",
        method: 'POST',
        success: [
            function (data) {
                console.log("Guessed: " + char + ": Was in word: " + data);
            }
        ],
        error: [
            function (jqXHR, text, error) {
                console.log("ERROR: guess")
            }
        ]
    });
}


function resetScore() {
    $.ajax({
        url: "rest/game/reset_score?username=" + username,
        contentType: "text/plain",
        method: 'POST',
        success: [
            function (data) {
                console.log(data);
            }
        ],
        error: [
            function (jqXHR, text, error) {
                console.log("ERROR: reset_score")
            }
        ]
    });
}

function resetGame() {
    $.ajax({
        url: "rest/game/reset_game?username=" + username,
        contentType: "text/plain",
        method: 'POST',
        success: [
            function (data) {
                console.log(data);
            }
        ],
        error: [
            function (jqXHR, text, error) {
                console.log("ERROR: reset_game")
            }
        ]
    });
}

function reset() {
    resetScore();
    resetGame();
}

function buttonClick(char) {
    console.log(char + " clicked!");
    $.ajax({
        url: "rest/game/is_char_guessed?username=" + username + "&ch=" + char,
        contentType: "text/plain",
        method: 'GET',
        success: [
            function (data) {
                console.log("already guessed: " + data);
                if (data === 'false') {
                    location.reload();
                    guess(char);
                    updateData();
                    alertify.success(char + ' guessed!')
                } else {
                    alertify.error(char + ' has already been guessed!')
                }
            }
        ],
        error: [
            function (jqXHR, text, error) {
                alertify.error("Error occurred pressing button " + char + "!");
            }
        ]
    });
}

function checkHighscore(isShowing) {
    $.ajax({
        url: "rest/game/is_highscore?username=" + username + "&password=" + password,
        contentType: "text/plain",
        method: 'GET',
        success: [
            function (data) {
                if (data === 'true') {
                    $.ajax({
                        url: "rest/game/get_score?username=" + username,
                        contentType: "text/plain",
                        method: 'GET',
                        success: [
                            function (score_data) {
                                $.ajax({
                                    url: "rest/game/set_user_highscore?username=" + username + "&highscore=" + score_data,
                                    contentType: "text/plain",
                                    method: 'POST',
                                    success: [
                                        function (data) {
                                            alertify.success("New high score: " + score_data + "!");
                                        }
                                    ],
                                    error: [
                                        function (jqXHR, text, error) {
                                            alertify.error("Failed to set high score!");
                                        }
                                    ]
                                });
                            }
                        ],
                        error: [
                            function (jqXHR, text, error) {
                                console.log("ERROR: get_score")
                            }
                        ]
                    });
                }
            }
        ],
        error: [
            function (jqXHR, text, error) {
                alertify.error("Failed to check highscore!");
            }
        ]
    });
}

function backBtn() {
    alertify.confirm("<h2 style='color: black'>Back</h2><br>Are you sure you want to go back?<br><br>All your progress will be lost for this game!", function () {
        reset();
        window.location.replace("menu.html");
    }, function () {

    });
}