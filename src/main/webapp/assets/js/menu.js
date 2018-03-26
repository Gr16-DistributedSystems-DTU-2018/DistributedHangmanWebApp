var username;

$(document).ready(function () {

    if (typeof(Storage) !== "undefined") {
        if (sessionStorage.username) {
            username = sessionStorage.username;
        } else {
            document.getElementById("welcome_header").innerHTML = "Something has gone terribly, TERRIBLY wrong!";
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
                console.log("ERROR: rest/game/get_logged_in_user?username=" + username);
            }
        ]
    })
});

$(document).ready(function () {

    $("#play_btn").on("click", function () {
        reset();
        window.location.replace("game.html");
    });

    $("#lobby_btn").on("click", function () {

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
        alertify.confirm("Log out?", function () {
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
                    }
                ]
            });
            window.location.replace("index.html");
        }, function () {
            // user clicked "cancel"
        });
    });

});

function sendEmail() {
    alertify.defaultValue("Enter Username").prompt("Enter the username of the user whom you want to send an email to", function (username, event1) {
        event1.preventDefault();

        alertify.defaultValue("Enter Password").prompt("Enter the password of same user", function (password, event2) {
            event2.preventDefault();

            alertify.defaultValue("Enter Subject").prompt("Enter email subject", function (subject, event3) {
                event3.preventDefault();

                alertify.defaultValue("Enter Message").prompt("Enter email message", function (message, event4) {
                    event4.preventDefault();
                    $.ajax({
                        url: "rest/game/send_email?username=" + username + "&password=" + password + "&subject=" + subject + "&msg=" + message + " --- Sendt via Gruppe 16 - DistributedHangman",
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

function changePassword() {
    alertify.defaultValue("Enter Old Password").prompt("Enter your old password", function (oldPassword, event1) {
        event1.preventDefault();
        alertify.defaultValue("Enter New Password").prompt("Enter your new password", function (newPassword, event2) {
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
                alertify.alert("CampusNetID: " + data['campusnetId'] +
                    " Username: " + data['brugernavn'] +
                    ", First Name: " + data['fornavn'] +
                    ", Last Name: " + data['efternavn'] +
                    ", E-mail: " + data['email'] +
                    ", Study: " + data['studeretning'] +
                    ", Last Active: " + data['sidstAktiv']);
            }
        ],
        error: [
            function (jqXHR, text, error) {
                console.log("ERROR: rest/game/get_logged_in_user?username=" + username);
            }
        ]
    });
}

function showHighScores() {
    $.ajax({
        url: "rest/game/get_all_users_highscore",
        contentType: "text/plain",
        method: 'GET',
        success: [
            function (data) {
                alertify.alert(data);
            }
        ],
        error: [
            function (jqXHR, text, error) {

            }
        ]
    });
}