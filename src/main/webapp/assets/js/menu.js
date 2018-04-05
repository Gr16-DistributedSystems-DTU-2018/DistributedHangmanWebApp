var username;

$(document).ready(function () {

    if (typeof(Storage) !== "undefined") {
        if (sessionStorage.username) {
            username = sessionStorage.username;
        } else {
            alertify.error("Could not fetch username!");
        }
    }

    $.ajax({
        url: "rest/game/get_logged_in_user?username=" + username,
        contentType: "application/json",
        method: 'GET',
        success: [
            function (data) {
                document.getElementById("welcome_header").innerHTML = "Welcome " + data['fornavn'] + " " + data['efternavn'] + "!";
            }
        ],
        error: [
            function (jqXHR, text, error) {
                alertify.error("Could not fetch username!");
            }
        ]
    })
});

$(document).ready(function () {

    $("#play_btn").on("click", function () {
        resetAndPlay();
    });

    $("#lobby_btn").on("click", function () {
        showLobby();
    });

    $("#highscore_btn").on("click", function () {
        showHighScores();
    });

    $("#send_email_btn").on("click", function () {
        sendEmail()
    });

    $("#change_pass_btn").on("click", function () {
        changePassword();
    });

    $("#user_info_btn").on("click", function () {
        showUserInformation();
    });

    $("#logout_btn").on("click", function () {
        logOut();
    });

});

function showLobby() {
    var scoreText = "<h2>Lobby</h2><br>   User ───────── Live Score<br><br>";

    $.ajax({
        url: "rest/game/get_all_logged_in_users_score",
        contentType: "application/json",
        method: 'GET',
        success: [
            function (data) {
                for (var key in data) {

                    console.log("key: " + key + " : username: " + username)

                    if (key === username) {
                        scoreText += key + ' ───────── ' + data[key] + '<br>';
                    } else {
                        scoreText += key + ' ───────── ' + data[key] + ' <button id=username style="width: 25%; height: 8%">Battle</button><br>';
                    }

                }
                alertify.alert(scoreText);
            }
        ],
        error: [
            function (jqXHR, text, error) {
                alertify.error("Could not show lobby!");
            }
        ]
    });
}

function showHighScores() {
    var scoreText = "<h2>High Scores</h2><br>   User ───────── High Score<br><br>";

    $.ajax({
        url: "rest/game/get_all_users_highscore",
        contentType: "application/json",
        method: 'GET',
        success: [
            function (data) {
                for (var key in data) {
                    scoreText += key + ' ───────── ' + data[key] + '<br>';
                }
                alertify.alert(scoreText);
            }
        ],
        error: [
            function (jqXHR, text, error) {
                alertify.error("Could not show high scores!");
            }
        ]
    });
}

function sendEmail() {
    alertify.defaultValue("Username").prompt("<h2>Send Email</h2><br>Enter the username of the user who you want to send an email to.", function (username, event1) {
        event1.preventDefault();

        alertify.defaultValue("Password").prompt("<h2>Send Email</h2><br>Enter their password.", function (password, event2) {
            event2.preventDefault();

            alertify.defaultValue("Subject").prompt("<h2>Send Email</h2><br>Enter subject of the email.", function (subject, event3) {
                event3.preventDefault();

                alertify.defaultValue("Message").prompt("<h2>Send Email</h2><br>Enter your message.", function (message, event4) {
                    event4.preventDefault();
                    $.ajax({
                        url: "rest/game/send_email?username=" + username + "&password=" + password + "&subject=" + subject + "&msg=" + message + " --- Fra " + username + " --- Sendt via Gruppe 16 - DistributedHangman",
                        method: 'GET',
                        contentType: 'text/plain',
                        success: [
                            function (data) {
                                alertify.success("Successfully sent email to " + username + "!");
                            }
                        ],
                        error: [
                            function (jqXHR, text, error) {
                                alertify.error("Failed to send email to " + username + ". Please try again!");
                            }
                        ]
                    });
                }, function (ev) {
                    ev.preventDefault();
                    alertify.error("Send email cancelled.")
                });
            }, function (ev) {
                ev.preventDefault();
                alertify.error("Send email cancelled.")
            });
        }, function (ev) {
            ev.preventDefault();
            alertify.error("Send email cancelled.")
        });
    }, function (ev) {
        ev.preventDefault();
        alertify.error("Send email cancelled.")
    });
}

function changePassword() {
    alertify.defaultValue("Old password").prompt("<h2>Change Password</h2><br>Enter your old password.", function (oldPassword, event1) {
        event1.preventDefault();
        alertify.defaultValue("New password").prompt("<h2>Change Password</h2><br>Enter your new password.", function (newPassword, event2) {
            event2.preventDefault();
            $.ajax({
                url: "rest/game/change_user_password?username=" + username + "&oldPassword=" + oldPassword + "&changePassword=" + newPassword,
                method: 'POST',
                contentType: 'text/plain',
                success: [
                    function (data) {
                        alertify.success("Successfully changed password!");
                    }
                ],
                error: [
                    function (jqXHR, text, error) {
                        alertify.error("Failed to change password. Please try again!");
                    }
                ]
            });
        }, function (ev) {
            ev.preventDefault();
            alertify.error("Password change cancelled.")
        });
    }, function (ev) {
        ev.preventDefault();
        alertify.error("Password change cancelled.")
    });
}

function showUserInformation() {
    $.ajax({
        url: "rest/game/get_logged_in_user?username=" + username,
        contentType: "application/json",
        method: 'GET',
        success: [
            function (data) {
                alertify.alert("<h2>User Information</h2>" +
                    "<b>CampusNetID:</b> " + data['campusnetId'] +
                    "<br><b>Username:</b> " + data['brugernavn'] +
                    "<br><b>First Name:</b> " + data['fornavn'] +
                    "<br><b>Last Name:</b> " + data['efternavn'] +
                    "<br><b>E-mail:</b> " + data['email'] +
                    "<br><b>Study:</b> " + data['studeretning'] +
                    "<br><b>Last Active:</b> " + data['sidstAktiv']);
            }
        ],
        error: [
            function (jqXHR, text, error) {
                console.log("ERROR: rest/game/get_logged_in_user?username=" + username);
                alertify.error("Could not show user information!");
            }
        ]
    });
}

function logOut() {
    alertify.confirm("<h2>Log Out</h2><br>Are you sure you want to log out?", function () {
        $.ajax({
            url: "rest/game/logout?username=" + sessionStorage.username,
            method: 'POST',
            contentType: 'text/plain',
            success: [
                function (data) {
                    console.log(data);
                }
            ],
            error: [
                function (jqXHR, text, error) {
                    console.log("ERROR: rest/game/logout?username=" + sessionStorage.username + " " + text.toString() + " " + error.toString());
                    alertify.error("Could not log out properly!");
                }
            ]
        });
        window.location.replace("index.html");
    }, function () {
        // user clicked "cancel"
    });
}

function resetAndPlay() {
    $.ajax({
        url: "rest/game/reset_score?username=" + username,
        contentType: "text/plain",
        method: 'POST',
        success: [
            function (data) {
                console.log(data);
                $.ajax({
                    url: "rest/game/reset_game?username=" + username,
                    contentType: "text/plain",
                    method: 'POST',
                    success: [
                        function (data) {
                            console.log(data);
                            window.location.replace("game.html");
                        }
                    ],
                    error: [
                        function (jqXHR, text, error) {
                            console.log("ERROR: reset_game")
                        }
                    ]
                });
            }
        ],
        error: [
            function (jqXHR, text, error) {
                console.log("ERROR: reset_score")
            }
        ]
    });
}