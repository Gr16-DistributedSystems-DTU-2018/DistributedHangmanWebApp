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

    $("#btn_a").click(function () {
        console.log("A clicked!");
        guess('a');
        updateData();
    });

    $("#btn_b").click(function () {
        console.log("B clicked!");
        guess('b');
        updateData();
    });

    $("#btn_c").click(function () {
        console.log("C clicked!");
        guess('c');
        updateData();
    });

    $("#btn_d").click(function () {
        console.log("D clicked!");
        guess('d');
        updateData();
    });

    $("#btn_e").click(function () {
        console.log("E clicked!");
        guess('e');
        updateData();
    });

    $("#btn_f").click(function () {
        console.log("F clicked!");
        guess('f');
        updateData();
    });

    $("#btn_g").click(function () {
        console.log("G clicked!");
        guess('g');
        updateData();
    });

    $("#btn_h").click(function () {
        console.log("H clicked!");
        guess('h');
        updateData();
    });

    $("#btn_i").click(function () {
        console.log("I clicked!");
        guess('i');
        updateData();
    });

    $("#btn_j").click(function () {
        console.log("J clicked!");
        guess('j');
        updateData();
    });

    $("#btn_k").click(function () {
        console.log("K clicked!");
        guess('k');
        updateData();
    });

    $("#btn_l").click(function () {
        console.log("L clicked!");
        guess('l');
        updateData();
    });

    $("#btn_m").click(function () {
        console.log("M clicked!");
        guess('m');
        updateData();
    });

    $("#btn_n").click(function () {
        console.log("N clicked!");
        guess('n');
        updateData();
    });

    $("#btn_o").click(function () {
        console.log("O clicked!");
        guess('o');
        updateData();
    });

    $("#btn_p").click(function () {
        console.log("P clicked!");
        guess('p');
        updateData();
    });

    $("#btn_q").click(function () {
        console.log("Q clicked!");
        guess('q');
        updateData();
    });

    $("#btn_r").click(function () {
        console.log("R clicked!");
        guess('r');
        updateData();
    });

    $("#btn_s").click(function () {
        console.log("S clicked!");
        guess('s');
        updateData();
    });

    $("#btn_t").click(function () {
        console.log("T clicked!");
        guess('t');
        updateData();
    });

    $("#btn_u").click(function () {
        console.log("U clicked!");
        guess('u');
        updateData();
    });

    $("#btn_v").click(function () {
        console.log("V clicked!");
        guess('v');
        updateData();
    });

    $("#btn_w").click(function () {
        console.log("W clicked!");
        guess('w');
        updateData();
    });

    $("#btn_x").click(function () {
        console.log("X clicked!");
        guess('x');
        updateData();
    });

    $("#btn_y").click(function () {
        console.log("Y clicked!");
        guess('y');
        updateData();
    });

    $("#btn_z").click(function () {
        console.log("Z clicked!");
        guess('z');
        updateData();
    });

    $("#btn_ae").click(function () {
        console.log("Æ clicked!");
        guess('æ');
        updateData();
    });

    $("#btn_oe").click(function () {
        console.log("Ø clicked!");
        guess('ø');
        updateData();
    });

    $("#btn_aa").click(function () {
        console.log("Å clicked!");
        guess('å');
        updateData();
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
                    document.hangman_pic.src = 'assets/img/forkert6.png';
                } else if (data === "1") {
                    document.hangman_pic.src = 'assets/img/forkert5.png';
                } else if (data === "2") {
                    document.hangman_pic.src = 'assets/img/forkert4.png';
                } else if (data === "3") {
                    document.hangman_pic.src = 'assets/img/forkert3.png';
                } else if (data === "4") {
                    document.hangman_pic.src = 'assets/img/forkert2.png';
                } else if (data === "5") {
                    document.hangman_pic.src = 'assets/img/forkert1.png';
                } else if (data === "6") {
                    document.hangman_pic.src = 'assets/img/galge.png';
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