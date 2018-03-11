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

        $.ajax({
            url: "rest/logic/is_char_guessed?ch=a",
            contentType: "text/plain",
            method: 'GET',
            success: [
                function (data) {
                    console.log("Data: " + data);
                    if (data === 'false') {
                        location.reload();
                        guess('a');
                        updateData();
                    } else {
                        alert('A is already guessed.')
                    }
                }
            ],
            error: [
                function (jqXHR, text, error) {
                    console.log("ERROR isCharGuessed");
                }
            ]
        });
    });

    $("#btn_b").click(function () {
        console.log("B clicked!");

        $.ajax({
            url: "rest/logic/is_char_guessed?ch=b",
            contentType: "text/plain",
            method: 'GET',
            success: [
                function (data) {
                    console.log("Data: " + data);
                    if (data === 'false') {
                        location.reload();
                        guess('b');
                        updateData();
                    } else {
                        alert('B is already guessed.')
                    }
                }
            ],
            error: [
                function (jqXHR, text, error) {
                    console.log("ERROR isCharGuessed");
                }
            ]
        });
    });

    $("#btn_c").click(function () {
        console.log("C clicked!");

        $.ajax({
            url: "rest/logic/is_char_guessed?ch=c",
            contentType: "text/plain",
            method: 'GET',
            success: [
                function (data) {
                    console.log("Data: " + data);
                    if (data === 'false') {
                        location.reload();
                        guess('c');
                        updateData();
                    } else {
                        alert('C is already guessed.')
                    }
                }
            ],
            error: [
                function (jqXHR, text, error) {
                    console.log("ERROR isCharGuessed");
                }
            ]
        });
    });

    $("#btn_d").click(function () {
        console.log("D clicked!");

        $.ajax({
            url: "rest/logic/is_char_guessed?ch=d",
            contentType: "text/plain",
            method: 'GET',
            success: [
                function (data) {
                    console.log("Data: " + data);
                    if (data === 'false') {
                        location.reload();
                        guess('d');
                        updateData();
                    } else {
                        alert('D is already guessed.')
                    }
                }
            ],
            error: [
                function (jqXHR, text, error) {
                    console.log("ERROR isCharGuessed");
                }
            ]
        });
    });

    $("#btn_e").click(function () {
        console.log("E clicked!");

        $.ajax({
            url: "rest/logic/is_char_guessed?ch=e",
            contentType: "text/plain",
            method: 'GET',
            success: [
                function (data) {
                    console.log("Data: " + data);
                    if (data === 'false') {
                        location.reload();
                        guess('e');
                        updateData();
                    } else {
                        alert('E is already guessed.')
                    }
                }
            ],
            error: [
                function (jqXHR, text, error) {
                    console.log("ERROR isCharGuessed");
                }
            ]
        });
    });

    $("#btn_f").click(function () {
        console.log("F clicked!");

        $.ajax({
            url: "rest/logic/is_char_guessed?ch=f",
            contentType: "text/plain",
            method: 'GET',
            success: [
                function (data) {
                    console.log("Data: " + data);
                    if (data === 'false') {
                        location.reload();
                        guess('f');
                        updateData();
                    } else {
                        alert('F is already guessed.')
                    }
                }
            ],
            error: [
                function (jqXHR, text, error) {
                    console.log("ERROR isCharGuessed");
                }
            ]
        });
    });

    $("#btn_g").click(function () {
        console.log("G clicked!");

        $.ajax({
            url: "rest/logic/is_char_guessed?ch=g",
            contentType: "text/plain",
            method: 'GET',
            success: [
                function (data) {
                    console.log("Data: " + data);
                    if (data === 'false') {
                        location.reload();
                        guess('g');
                        updateData();
                    } else {
                        alert('G is already guessed.')
                    }
                }
            ],
            error: [
                function (jqXHR, text, error) {
                    console.log("ERROR isCharGuessed");
                }
            ]
        });
    });

    $("#btn_h").click(function () {
        console.log("H clicked!");

        $.ajax({
            url: "rest/logic/is_char_guessed?ch=h",
            contentType: "text/plain",
            method: 'GET',
            success: [
                function (data) {
                    console.log("Data: " + data);
                    if (data === 'false') {
                        location.reload();
                        guess('h');
                        updateData();
                    } else {
                        alert('H is already guessed.')
                    }
                }
            ],
            error: [
                function (jqXHR, text, error) {
                    console.log("ERROR isCharGuessed");
                }
            ]
        });
    });

    $("#btn_i").click(function () {
        console.log("I clicked!");

        $.ajax({
            url: "rest/logic/is_char_guessed?ch=i",
            contentType: "text/plain",
            method: 'GET',
            success: [
                function (data) {
                    console.log("Data: " + data);
                    if (data === 'false') {
                        location.reload();
                        guess('i');
                        updateData();
                    } else {
                        alert('I is already guessed.')
                    }
                }
            ],
            error: [
                function (jqXHR, text, error) {
                    console.log("ERROR isCharGuessed");
                }
            ]
        });
    });

    $("#btn_j").click(function () {
        console.log("J clicked!");

        $.ajax({
            url: "rest/logic/is_char_guessed?ch=j",
            contentType: "text/plain",
            method: 'GET',
            success: [
                function (data) {
                    console.log("Data: " + data);
                    if (data === 'false') {
                        location.reload();
                        guess('j');
                        updateData();
                    } else {
                        alert('J is already guessed.')
                    }
                }
            ],
            error: [
                function (jqXHR, text, error) {
                    console.log("ERROR isCharGuessed");
                }
            ]
        });
    });

    $("#btn_k").click(function () {
        console.log("K clicked!");

        $.ajax({
            url: "rest/logic/is_char_guessed?ch=k",
            contentType: "text/plain",
            method: 'GET',
            success: [
                function (data) {
                    console.log("Data: " + data);
                    if (data === 'false') {
                        location.reload();
                        guess('k');
                        updateData();
                    } else {
                        alert('K is already guessed.')
                    }
                }
            ],
            error: [
                function (jqXHR, text, error) {
                    console.log("ERROR isCharGuessed");
                }
            ]
        });
    });

    $("#btn_l").click(function () {
        console.log("L clicked!");

        $.ajax({
            url: "rest/logic/is_char_guessed?ch=l",
            contentType: "text/plain",
            method: 'GET',
            success: [
                function (data) {
                    console.log("Data: " + data);
                    if (data === 'false') {
                        location.reload();
                        guess('l');
                        updateData();
                    } else {
                        alert('L is already guessed.')
                    }
                }
            ],
            error: [
                function (jqXHR, text, error) {
                    console.log("ERROR isCharGuessed");
                }
            ]
        });
    });

    $("#btn_m").click(function () {
        console.log("M clicked!");

        $.ajax({
            url: "rest/logic/is_char_guessed?ch=m",
            contentType: "text/plain",
            method: 'GET',
            success: [
                function (data) {
                    console.log("Data: " + data);
                    if (data === 'false') {
                        location.reload();
                        guess('m');
                        updateData();
                    } else {
                        alert('M is already guessed.')
                    }
                }
            ],
            error: [
                function (jqXHR, text, error) {
                    console.log("ERROR isCharGuessed");
                }
            ]
        });
    });

    $("#btn_n").click(function () {
        console.log("N clicked!");

        $.ajax({
            url: "rest/logic/is_char_guessed?ch=n",
            contentType: "text/plain",
            method: 'GET',
            success: [
                function (data) {
                    console.log("Data: " + data);
                    if (data === 'false') {
                        location.reload();
                        guess('n');
                        updateData();
                    } else {
                        alert('N is already guessed.')
                    }
                }
            ],
            error: [
                function (jqXHR, text, error) {
                    console.log("ERROR isCharGuessed");
                }
            ]
        });
    });

    $("#btn_o").click(function () {
        console.log("O clicked!");

        $.ajax({
            url: "rest/logic/is_char_guessed?ch=o",
            contentType: "text/plain",
            method: 'GET',
            success: [
                function (data) {
                    console.log("Data: " + data);
                    if (data === 'false') {
                        location.reload();
                        guess('o');
                        updateData();
                    } else {
                        alert('O is already guessed.')
                    }
                }
            ],
            error: [
                function (jqXHR, text, error) {
                    console.log("ERROR isCharGuessed");
                }
            ]
        });
    });

    $("#btn_p").click(function () {
        console.log("P clicked!");

        $.ajax({
            url: "rest/logic/is_char_guessed?ch=p",
            contentType: "text/plain",
            method: 'GET',
            success: [
                function (data) {
                    console.log("Data: " + data);
                    if (data === 'false') {
                        location.reload();
                        guess('p');
                        updateData();
                    } else {
                        alert('P is already guessed.')
                    }
                }
            ],
            error: [
                function (jqXHR, text, error) {
                    console.log("ERROR isCharGuessed");
                }
            ]
        });
    });

    $("#btn_q").click(function () {
        console.log("Q clicked!");

        $.ajax({
            url: "rest/logic/is_char_guessed?ch=q",
            contentType: "text/plain",
            method: 'GET',
            success: [
                function (data) {
                    console.log("Data: " + data);
                    if (data === 'false') {
                        location.reload();
                        guess('q');
                        updateData();
                    } else {
                        alert('Q is already guessed.')
                    }
                }
            ],
            error: [
                function (jqXHR, text, error) {
                    console.log("ERROR isCharGuessed");
                }
            ]
        });
    });

    $("#btn_r").click(function () {
        console.log("R clicked!");

        $.ajax({
            url: "rest/logic/is_char_guessed?ch=r",
            contentType: "text/plain",
            method: 'GET',
            success: [
                function (data) {
                    console.log("Data: " + data);
                    if (data === 'false') {
                        location.reload();
                        guess('r');
                        updateData();
                    } else {
                        alert('R is already guessed.')
                    }
                }
            ],
            error: [
                function (jqXHR, text, error) {
                    console.log("ERROR isCharGuessed");
                }
            ]
        });
    });

    $("#btn_s").click(function () {
        console.log("S clicked!");

        $.ajax({
            url: "rest/logic/is_char_guessed?ch=s",
            contentType: "text/plain",
            method: 'GET',
            success: [
                function (data) {
                    console.log("Data: " + data);
                    if (data === 'false') {
                        location.reload();
                        guess('s');
                        updateData();
                    } else {
                        alert('S is already guessed.')
                    }
                }
            ],
            error: [
                function (jqXHR, text, error) {
                    console.log("ERROR isCharGuessed");
                }
            ]
        });
    });

    $("#btn_t").click(function () {
        console.log("T clicked!");

        $.ajax({
            url: "rest/logic/is_char_guessed?ch=t",
            contentType: "text/plain",
            method: 'GET',
            success: [
                function (data) {
                    console.log("Data: " + data);
                    if (data === 'false') {
                        location.reload();
                        guess('t');
                        updateData();
                    } else {
                        alert('T is already guessed.')
                    }
                }
            ],
            error: [
                function (jqXHR, text, error) {
                    console.log("ERROR isCharGuessed");
                }
            ]
        });
    });

    $("#btn_u").click(function () {
        console.log("U clicked!");

        $.ajax({
            url: "rest/logic/is_char_guessed?ch=u",
            contentType: "text/plain",
            method: 'GET',
            success: [
                function (data) {
                    console.log("Data: " + data);
                    if (data === 'false') {
                        location.reload();
                        guess('u');
                        updateData();
                    } else {
                        alert('U is already guessed.')
                    }
                }
            ],
            error: [
                function (jqXHR, text, error) {
                    console.log("ERROR isCharGuessed");
                }
            ]
        });
    });

    $("#btn_v").click(function () {
        console.log("V clicked!");

        $.ajax({
            url: "rest/logic/is_char_guessed?ch=v",
            contentType: "text/plain",
            method: 'GET',
            success: [
                function (data) {
                    console.log("Data: " + data);
                    if (data === 'false') {
                        location.reload();
                        guess('v');
                        updateData();
                    } else {
                        alert('V is already guessed.')
                    }
                }
            ],
            error: [
                function (jqXHR, text, error) {
                    console.log("ERROR isCharGuessed");
                }
            ]
        });
    });

    $("#btn_w").click(function () {
        console.log("W clicked!");

        $.ajax({
            url: "rest/logic/is_char_guessed?ch=w",
            contentType: "text/plain",
            method: 'GET',
            success: [
                function (data) {
                    console.log("Data: " + data);
                    if (data === 'false') {
                        location.reload();
                        guess('w');
                        updateData();
                    } else {
                        alert('W is already guessed.')
                    }
                }
            ],
            error: [
                function (jqXHR, text, error) {
                    console.log("ERROR isCharGuessed");
                }
            ]
        });
    });

    $("#btn_x").click(function () {
        console.log("X clicked!");

        $.ajax({
            url: "rest/logic/is_char_guessed?ch=x",
            contentType: "text/plain",
            method: 'GET',
            success: [
                function (data) {
                    console.log("Data: " + data);
                    if (data === 'false') {
                        location.reload();
                        guess('x');
                        updateData();
                    } else {
                        alert('X is already guessed.')
                    }
                }
            ],
            error: [
                function (jqXHR, text, error) {
                    console.log("ERROR isCharGuessed");
                }
            ]
        });
    });

    $("#btn_y").click(function () {
        console.log("Y clicked!");

        $.ajax({
            url: "rest/logic/is_char_guessed?ch=y",
            contentType: "text/plain",
            method: 'GET',
            success: [
                function (data) {
                    console.log("Data: " + data);
                    if (data === 'false') {
                        location.reload();
                        guess('y');
                        updateData();
                    } else {
                        alert('Y is already guessed.')
                    }
                }
            ],
            error: [
                function (jqXHR, text, error) {
                    console.log("ERROR isCharGuessed");
                }
            ]
        });
    });

    $("#btn_z").click(function () {
        console.log("Z clicked!");

        $.ajax({
            url: "rest/logic/is_char_guessed?ch=z",
            contentType: "text/plain",
            method: 'GET',
            success: [
                function (data) {
                    console.log("Data: " + data);
                    if (data === 'false') {
                        location.reload();
                        guess('z');
                        updateData();
                    } else {
                        alert('Z is already guessed.')
                    }
                }
            ],
            error: [
                function (jqXHR, text, error) {
                    console.log("ERROR isCharGuessed");
                }
            ]
        });
    });

    $("#btn_ae").click(function () {
        console.log("Æ clicked!");

        $.ajax({
            url: "rest/logic/is_char_guessed?ch=æ",
            contentType: "text/plain",
            method: 'GET',
            success: [
                function (data) {
                    console.log("Data: " + data);
                    if (data === 'false') {
                        location.reload();
                        guess('æ');
                        updateData();
                    } else {
                        alert('Æ is already guessed.')
                    }
                }
            ],
            error: [
                function (jqXHR, text, error) {
                    console.log("ERROR isCharGuessed");
                }
            ]
        });
    });

    $("#btn_oe").click(function () {
        console.log("Ø clicked!");

        $.ajax({
            url: "rest/logic/is_char_guessed?ch=ø",
            contentType: "text/plain",
            method: 'GET',
            success: [
                function (data) {
                    console.log("Data: " + data);
                    if (data === 'false') {
                        location.reload();
                        guess('ø');
                        updateData();
                    } else {
                        alert('Ø is already guessed.')
                    }
                }
            ],
            error: [
                function (jqXHR, text, error) {
                    console.log("ERROR isCharGuessed");
                }
            ]
        });
    });

    $("#btn_aa").click(function () {
        console.log("Å clicked!");

        $.ajax({
            url: "rest/logic/is_char_guessed?ch=å",
            contentType: "text/plain",
            method: 'GET',
            success: [
                function (data) {
                    console.log("Data: " + data);
                    if (data === 'false') {
                        location.reload();
                        guess('å');
                        updateData();
                    } else {
                        alert('Å is already guessed.')
                    }
                }
            ],
            error: [
                function (jqXHR, text, error) {
                    console.log("ERROR isCharGuessed");
                }
            ]
        });
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