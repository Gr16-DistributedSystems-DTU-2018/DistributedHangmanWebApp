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
                        alert("Failed log in: " + username + ":" + password);
                        console.log("Failed log in: " + username + ":" + password);
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