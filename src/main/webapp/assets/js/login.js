$(document).ready(function () {

    $("#login_form").on('submit', function (e) {
        e.preventDefault();

        /* Get username and password from the fields */
        var username = $("#username_fld").val();
        var password = $("#password_fld").val();

        var postData = $('#login_form').serializeJSON();

        var restURL = "rest/auth/login?username=" + username + "&password=" + password;

        $.ajax({
            url: restURL,
            contentType: "text/plain",
            method: 'POST',
            data: postData,
            success: [
                function (data) {
                    if (data === username + " logged in successfully.") {
                        console.log(data);
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
                    }
                }
            ],
            error: [
                function (jqXHR, text, error) {
                    console.log("ERROR: " + username + ":" + password);
                }
            ]
        });

    });

});

$(document).ready(function () {
    $("#forgot_pass_btn").click(function () {
        var username = $("#username_fld").val();

        if (username.size < 5 || username.size > 7) {
            alert("Please type a valid username so I can reset your password.")
        } else {

        }

    });
});

function reset($elem) {
    $elem.before($elem.clone(true));
    var $newElem = $elem.prev();
    $elem.remove();
    return $newElem;
}