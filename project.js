document.addEventListener("DOMContentLoaded", function () {
    var overlay1 = document.getElementById("overlay1");
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var div3 = document.getElementById("div3");
    var div4 = document.getElementById("div4");
    var div5 = document.getElementById("div5");
    var div6 = document.getElementById("div6");
    var div7 = document.getElementById("div7");
    var div8 = document.getElementById("div8");

    var front1 = document.getElementById("front1");
    var front2 = document.getElementById("front2");
    var front3 = document.getElementById("front3");
    var front4 = document.getElementById("front4");
    var front5 = document.getElementById("front5");
    var front6 = document.getElementById("front6");
    var front7 = document.getElementById("front7");
    var front8 = document.getElementById("front8");

    

    overlay1.addEventListener("click", function () {
        overlay1.style.display = "none";
        div1.style.display = "none";
        div2.style.display = "none";
        div3.style.display = "none";
        div4.style.display = "none";
        div5.style.display = "none";
        div6.style.display = "none";
        div7.style.display = "none";
        div8.style.display = "none";
    });

    

    front1.addEventListener("click", function () {
        overlay1.style.display = "block";
        div1.style.display = "block";
    });
    front2.addEventListener("click", function () {
        overlay1.style.display = "block";
        div2.style.display = "block";
    });
    front3.addEventListener("click", function () {
        overlay1.style.display = "block";
        div3.style.display = "block";
    });
    front4.addEventListener("click", function () {
        overlay1.style.display = "block";
        div4.style.display = "block";
    });
    front5.addEventListener("click", function () {
        overlay1.style.display = "block";
        div5.style.display = "block";
    });
    front6.addEventListener("click", function () {
        overlay1.style.display = "block";
        div6.style.display = "block";
    });
    front7.addEventListener("click", function () {
        overlay1.style.display = "block";
        div7.style.display = "block";
    });
    front8.addEventListener("click", function () {
        overlay1.style.display = "block";
        div8.style.display = "block";
    });


    div1.addEventListener("click", function () {
        overlay1.style.display = "none";
        div1.style.display = "none";
    });
    div2.addEventListener("click", function () {
        overlay1.style.display = "none";
        div2.style.display = "none";
    });
    div3.addEventListener("click", function () {
        overlay1.style.display = "none";
        div3.style.display = "none";
    });
    div4.addEventListener("click", function () {
        overlay1.style.display = "none";
        div4.style.display = "none";
    });
    div5.addEventListener("click", function () {
        overlay1.style.display = "none";
        div5.style.display = "none";
    });
    div6.addEventListener("click", function () {
        overlay1.style.display = "none";
        div6.style.display = "none";
    });
    div7.addEventListener("click", function () {
        overlay1.style.display = "none";
        div7.style.display = "none";
    });
    div8.addEventListener("click", function () {
        overlay1.style.display = "none";
        div8.style.display = "none";
    });
});