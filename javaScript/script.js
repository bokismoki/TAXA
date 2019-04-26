// SUBSCRIBE EMAIL INPUT PATTERN 

const form1 = document.querySelector(".email1");
const emailInput1 = form1.emailInput11;

emailInput1.addEventListener("keyup", function (e) {

    console.log(emailInput1.value);

    if (pattern.test(e.target.value) && emailInput1.value.indexOf("@") !== -1 && emailInput1.value.indexOf(".") !== -1) {

        emailInput1.style.backgroundColor = "lawngreen";

    } else {

        emailInput1.style.backgroundColor = "lightcoral";

    }

    if (e.keyCode === 13) {

        emailInput1.style.backgroundColor = "#c251da";

    }

});

// FOOTER EMAIL INPUT PATTERN

const form2 = document.querySelector(".email2");
const emailInput2 = form2.emailInput2;

const pattern = /^.{8,}$/;

emailInput2.addEventListener("keyup", function (e) {

    console.log(emailInput2.value);

    if (pattern.test(e.target.value) && emailInput2.value.indexOf("@") !== -1 && emailInput2.value.indexOf(".") !== -1) {

        emailInput2.style.backgroundColor = "lawngreen";

    } else {

        emailInput2.style.backgroundColor = "lightcoral";

    }

});

// AFTER SUBMITING EMAIL, RETURN 'NORMAL' COLORS OF THE INPUT-TEXT

const subscribeInput = document.querySelector(".subscribeInput");
const subscribeBtn = document.querySelector(".subscribeBtn");
const footerInput = document.querySelector(".emailInput");

subscribeBtn.addEventListener("click", function (e) {

    e.preventDefault();

    subscribeInput.value = "";
    subscribeInput.style.backgroundColor = "#c251da";

});

footerInput.addEventListener("keyup", function (e) {

    e.preventDefault();

    if (e.keyCode === 13) {

        footerInput.value = "";
        footerInput.style.backgroundColor = "#fff";
        scrollTo(9999, 9999);
    }

});

// HAMBURGER ICON

const hamburger = document.querySelector(".hamburger");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const specialNav = document.querySelector(".specialNav");

hamburger.addEventListener("click", function () {

    line1.classList.toggle("line1X");
    line2.classList.toggle("line2X");
    line3.classList.toggle("line3X");
    specialNav.classList.toggle("showNav");

});