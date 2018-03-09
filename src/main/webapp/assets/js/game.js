
$(document).ready(function () {

    $("#btn_a").click(function () {
        console.log("A clicked!");
    });

    $("#btn_b").click(function () {
        console.log("B clicked!");
    });

    $("#btn_c").click(function () {
        console.log("C clicked!");
    });

    $("#btn_d").click(function () {
        console.log("D clicked!");
    });

    $("#btn_e").click(function () {
        console.log("E clicked!");
    });

    $("#btn_f").click(function () {
        console.log("F clicked!");
    });

    $("#btn_g").click(function () {
        console.log("G clicked!");
    });

    $("#btn_h").click(function () {
        console.log("H clicked!");
    });

    $("#btn_i").click(function () {
        console.log("I clicked!");
    });

    $("#btn_j").click(function () {
        console.log("J clicked!");
    });

    $("#btn_k").click(function () {
        console.log("K clicked!");
    });

    $("#btn_l").click(function () {
        console.log("L clicked!");
    });

    $("#btn_m").click(function () {
        console.log("M clicked!");
    });

    $("#btn_n").click(function () {
        console.log("N clicked!");
    });

    $("#btn_o").click(function () {
        console.log("O clicked!");
    });

    $("#btn_p").click(function () {
        console.log("P clicked!");
    });

    $("#btn_q").click(function () {
        console.log("Q clicked!");
    });

    $("#btn_r").click(function () {
        console.log("R clicked!");
    });

    $("#btn_s").click(function () {
        console.log("S clicked!");
    });

    $("#btn_t").click(function () {
        console.log("T clicked!");
    });

    $("#btn_u").click(function () {
        console.log("U clicked!");
    });

    $("#btn_v").click(function () {
        console.log("V clicked!");
    });

    $("#btn_w").click(function () {
        console.log("W clicked!");
    });

    $("#btn_x").click(function () {
        console.log("X clicked!");
    });

    $("#btn_y").click(function () {
        console.log("Y clicked!");
    });

    $("#btn_z").click(function () {
        console.log("Z clicked!");
    });

    $("#btn_ae").click(function () {
        console.log("Æ clicked!");
    });

    $("#btn_oe").click(function () {
        console.log("Ø clicked!");
    });

    $("#btn_aa").click(function () {
        console.log("Å clicked!");
    });

});


function getUser() {
    $.ajax({
        url: "rest/auth/get_current_user",
        contentType: "application/json",
        method: 'GET',
        success: [
            function (data) {
                console.log(data);
                return data;
            }
        ],
        error: [
            function (jqXHR, text, error) {
                console.log("ERROR");
                return null;
            }
        ]
    });
}


function guess(char) {

    $.ajax({
        url: "rest/logic/guess?ch=" + char,
        contentType: "application/json",
        method: 'GET',
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