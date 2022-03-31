function openCity(evt, cityName) {
    var i, tabcontent, tablinks, tabButtonNavigate;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "flex";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

let tab_nav_intro = document.querySelector(".tab-nav-intro");
let tab_nav_personal = document.querySelector(".tab-nav-personal");
let tab_nav_contact = document.querySelector(".tab-nav-contact");
let tab_nav_work = document.querySelector(".tab-nav-work-authorize");
let tab_nav_statement = document.querySelector(".tab-nav-statement");
let tab_nav_application = document.querySelector(".tab-nav-application");
let tab_nav_summary = document.querySelector(".tab-nav-summary");

let btn_next_intro = document.querySelector(".button-next-intro");
let btn_next_personal = document.querySelector(".button-next-personal");
let btn_back_personal = document.querySelector(".button-back-personal");
let btn_next_contact = document.querySelector(".button-next-contact");
let btn_back_contact = document.querySelector(".button-back-contact");
let btn_next_authorize = document.querySelector(".button-next-work-authorize");
let btn_back_authorize = document.querySelector(".button-back-work-authorize");
let btn_next_statement = document.querySelector(".button-next-statement");
let btn_back_statement = document.querySelector(".button-back-statement");
let btn_next_application = document.querySelector(".button-next-application");
let btn_back_application = document.querySelector(".button-back-application");
let btn_back_summary = document.querySelector(".button-back-summary");

btn_next_intro.addEventListener("click", function () {
    tab_nav_personal.click();
});

btn_next_personal.addEventListener("click", function () {
    tab_nav_contact.click();
});

btn_back_personal.addEventListener("click", function () {
    tab_nav_intro.click();
});

btn_next_contact.addEventListener("click", function () {
    tab_nav_work.click();
});

btn_back_contact.addEventListener("click", function () {
    tab_nav_personal.click();
});

btn_next_authorize.addEventListener("click", function () {
    tab_nav_statement.click();
});

btn_back_authorize.addEventListener("click", function () {
    tab_nav_contact.click();
});

btn_next_statement.addEventListener("click", function () {
    tab_nav_application.click();
});

btn_back_statement.addEventListener("click", function () {
    tab_nav_work.click();
});

btn_next_application.addEventListener("click", function () {
    tab_nav_summary.click();
});

btn_back_application.addEventListener("click", function () {
    tab_nav_statement.click();
});

btn_back_summary.addEventListener("click", function () {
    tab_nav_application.click();
});