var username;

$(document).ready(function () {

    if (typeof(Storage) !== "undefined") {
        if (sessionStorage.username) {
            username = sessionStorage.username;
            document.getElementById("username_fld").value = username;
        } else {

        }
    }

    $("#login_form").on('submit', function (e) {
        e.preventDefault();

        /* Get username and password from the fields */
        var username = $("#username_fld").val();
        var password = $("#password_fld").val();

        var postData = $('#login_form').serializeJSON();

        var restURL = "rest/game/login?username=" + username + "&password=" + password;

        $.ajax({
            url: restURL,
            contentType: "text/plain",
            method: 'POST',
            data: postData,
            success: [
                function (data) {
                    if (data === username + " logged in successfully.") {
                        console.log(data);
                        saveSessionUsername(username);
                        window.location.replace("menu.html");
                    } else {
                        var usernameEle = $("#username_fld");
                        usernameEle.removeClass();
                        usernameEle = reset(usernameEle);
                        usernameEle.addClass("animated shake");

                        var passwordEle = $("#password_fld");
                        passwordEle.removeClass();
                        passwordEle = reset(passwordEle);
                        passwordEle.addClass("animated shake");
                        alertify.error("Invalid credentials!");
                    }
                }
            ],
            error: [
                function (jqXHR, text, error) {
                    var usernameEle = $("#username_fld");
                    usernameEle.removeClass();
                    usernameEle = reset(usernameEle);
                    usernameEle.addClass("animated shake");

                    var passwordEle = $("#password_fld");
                    passwordEle.removeClass();
                    passwordEle = reset(passwordEle);
                    passwordEle.addClass("animated shake");
                    alertify.error("Invalid credentials!");
                }
            ]
        });
    });
});

$(document).ready(function () {
    $("#forgot_pass_btn").click(function () {
        alertify.defaultValue("Enter Username").prompt("<h2>Forgot Password</h2><br>Enter your username, and you'll get an email with your password.", function (username, event) {
            // The click event is in the event variable, so you can use it here.
            event.preventDefault();
            $.ajax({
                url: "rest/game/send_forgot_password_email?username=" + username + "&msg=Hilsen Gruppe 16 - DistributedHangman",
                contentType: "text/plain",
                method: 'GET',
                success: [
                    function (data) {
                        alertify.success("Your password has been sent.\nPlease check your email.");
                    }
                ],
                error: [
                    function (jqXHR, text, error) {
                        alertify.error("Failed to send password to " + username + ". Please try again.");
                    }
                ]
            });
        }, function (ev) {
            // The click event is in the event variable, so you can use it here.
            ev.preventDefault();
        });
    });
});

function saveSessionUsername(username) {
    sessionStorage.username = username
}

function reset($elem) {
    $elem.before($elem.clone(true));
    var $newElem = $elem.prev();
    $elem.remove();
    return $newElem;
}