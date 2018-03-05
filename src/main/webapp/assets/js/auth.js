$(document).ready(function () {

    $("#login_btn").click(function () {

        /* Get username and password from the fields */
        var username = $("#username_fld").val();
        var password = $("#password_fld").val();

        var restURL = "rest/auth/login?username=" + username + "&password=" + password;

        $.ajax({
            url: restURL,
            async: false,
            contentType: "text/plain",
            method: 'POST',
            success: [
                function (data) {
                    if (data === username + " logged in successfully.") {
                        console.log("Logged in successfully: " + username + ":" + password);
                    } else {
                        console.log("Failed: " + username + ":" + password);
                    }
                }
            ],
            error: [
                function (jqXHR, text, error) {
                    console.log("Failed: " + username + ":" + password);
                }
            ]
        });

    });

});