"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function login() {
    var checkBox = document.querySelector("#checkbox_id");
    var emailBox = document.querySelector("#login_email");
    $(document).ready(function () {
        emailBox.focus();
        var userInputEmail = getCookie("userInputEmail");
        $("#login_email").val(userInputEmail);
        if ($("#login_email").val() !== "") {
            checkBox.checked = true;
        }
        $("#checkbox_id").change(function () {
            if ($("#checkbox_id").is(":checked")) {
                var userInputEmail_1 = $("#login_email").val();
                setCookie("userInputEmail", userInputEmail_1, 7);
            }
            else {
                deleteCookie("userInputEmail");
            }
        });
        $("login_email").keyup(function () {
            if ($("#checkbox_id").is(":checked")) {
                var userInputEmail_2 = $("login_email").val();
                setCookie("userInputEmail", userInputEmail_2, 7);
            }
        });
    });
    function setCookie(cookieName, value, exdays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var cookieValue = escape(value) + (exdays == null ? "" : "; expires=" + exdate.toUTCString());
        document.cookie = cookieName + "=" + cookieValue;
    }
    function deleteCookie(cookieName) {
        var expireDate = new Date();
        expireDate.setDate(expireDate.getDate() - 1);
        document.cookie = cookieName + "= " + "; expires=" + expireDate.toUTCString();
    }
    function getCookie(cookieName) {
        cookieName = cookieName + "=";
        var cookieData = document.cookie;
        var start = cookieData.indexOf(cookieName);
        var cookieValue = "";
        if (start != -1) {
            start += cookieName.length;
            var end = cookieData.indexOf(";", start);
            if (end == -1)
                end = cookieData.length;
            cookieValue = cookieData.substring(start, end);
        }
        return unescape(cookieValue);
    }
}
exports.default = login;
//# sourceMappingURL=login.js.map