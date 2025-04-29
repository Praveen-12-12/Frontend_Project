document.addEventListener("DOMContentLoaded", function () {
    var overlay=document.getElementById("overlay");

    var logindiv=document.getElementById("logindiv");

    var register=document.getElementById("register");
    var regdiv=document.getElementById("regdiv");

    var cancel=document.getElementById("cancel");

    // var login=document.getElementById("login");

    register.addEventListener("click", function(){
        overlay.style.display="block";
        regdiv.style.display="block";
        logindiv.style.display="none";
    });

    cancel.addEventListener("click", function(){
        overlay.style.display="none";
        regdiv.style.display="none";
        logindiv.style.display="block";
    });

    // login.addEventListener("click", function(){
    //     window.open("mobile.html");
    // });
});