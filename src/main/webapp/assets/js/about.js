$(document).ready(function () {

    var postData;

    $.ajax({
        url: "rest/auth/get_current_user",
        contentType: "application/json",
        method: 'GET',
        data: postData,
        success: [
            function (data) {
                console.log(data);
                document.getElementById("cn_id").innerHTML = data['campusnetId'];
                document.getElementById("username").innerHTML = data['brugernavn'];
                document.getElementById("password").innerHTML = data['adgangskode'];
                document.getElementById("first_name").innerHTML = data['fornavn'];
                document.getElementById("last_name").innerHTML = data['efternavn'];
                document.getElementById("email").innerHTML = data['email'];
                document.getElementById("study_field").innerHTML = data['studeretning'];
                document.getElementById("last_active").innerHTML = data['sidstAktiv'];
            }
        ],
        error: [
            function (jqXHR, text, error) {
                console.log("ERROR");
            }
        ]
    });

});

$(document).ready(function () {
    $("#back_btn").click(function () {
        window.location.replace("menu.html");
    });
});