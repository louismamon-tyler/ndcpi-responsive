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

let tab_modal = document.querySelector(".tab-navigation-container-modal");
let tab_modal_close_btn = document.querySelector(".tab-mobile-close-btn");
let tab_modal_tabs = document.querySelector(".tab-navigation-container-modal .tab");

let tab_step_1 = document.querySelector(".step-tab-1");
let tab_step_2 = document.querySelector(".step-tab-2");
let tab_step_3 = document.querySelector(".step-tab-3");
let tab_step_4 = document.querySelector(".step-tab-4");
let tab_step_5 = document.querySelector(".step-tab-5");
let tab_step_6 = document.querySelector(".step-tab-6");
let tab_step_7 = document.querySelector(".step-tab-7");


let tab_mdl_btn_1 = document.querySelector(".tab_mdl_btn_1");
let tab_mdl_btn_2 = document.querySelector(".tab_mdl_btn_2");
let tab_mdl_btn_3 = document.querySelector(".tab_mdl_btn_3");
let tab_mdl_btn_4 = document.querySelector(".tab_mdl_btn_4");
let tab_mdl_btn_5 = document.querySelector(".tab_mdl_btn_5");
let tab_mdl_btn_6 = document.querySelector(".tab_mdl_btn_6");
let tab_mdl_btn_7 = document.querySelector(".tab_mdl_btn_7");


tab_mdl_btn_1.addEventListener("click", function () {
    tab_nav_intro.click();
});

tab_mdl_btn_2.addEventListener("click", function () {
    tab_nav_personal.click();
});

tab_mdl_btn_3.addEventListener("click", function () {
    tab_nav_contact.click();
});

tab_mdl_btn_4.addEventListener("click", function () {
    tab_nav_work.click();
});

tab_mdl_btn_5.addEventListener("click", function () {
    tab_nav_statement.click();
});

tab_mdl_btn_6.addEventListener("click", function () {
    tab_nav_application.click();
});

tab_mdl_btn_7.addEventListener("click", function () {
    tab_nav_summary.click();
});



tab_modal_tabs.addEventListener("click", function () {
    tab_modal.style.display = "none";
});

tab_step_1.addEventListener("click", function () {
    tab_modal.style.display = "flex";

    tab_mdl_btn_1.classList.add("active");

    tab_mdl_btn_2.classList.remove("active");
    tab_mdl_btn_3.classList.remove("active");
    tab_mdl_btn_4.classList.remove("active");
    tab_mdl_btn_5.classList.remove("active");
    tab_mdl_btn_6.classList.remove("active");
    tab_mdl_btn_7.classList.remove("active");
});

tab_step_2.addEventListener("click", function () {
    tab_modal.style.display = "flex";

    tab_mdl_btn_2.classList.add("active");

    tab_mdl_btn_1.classList.remove("active");
    tab_mdl_btn_3.classList.remove("active");
    tab_mdl_btn_4.classList.remove("active");
    tab_mdl_btn_5.classList.remove("active");
    tab_mdl_btn_6.classList.remove("active");
    tab_mdl_btn_7.classList.remove("active");
});

tab_step_3.addEventListener("click", function () {
    tab_modal.style.display = "flex";

    tab_mdl_btn_3.classList.add("active");

    tab_mdl_btn_1.classList.remove("active");
    tab_mdl_btn_2.classList.remove("active");
    tab_mdl_btn_4.classList.remove("active");
    tab_mdl_btn_5.classList.remove("active");
    tab_mdl_btn_6.classList.remove("active");
    tab_mdl_btn_7.classList.remove("active");
});

tab_step_4.addEventListener("click", function () {
    tab_modal.style.display = "flex";

    tab_mdl_btn_4.classList.add("active");

    tab_mdl_btn_1.classList.remove("active");
    tab_mdl_btn_2.classList.remove("active");
    tab_mdl_btn_3.classList.remove("active");
    tab_mdl_btn_5.classList.remove("active");
    tab_mdl_btn_6.classList.remove("active");
    tab_mdl_btn_7.classList.remove("active");
});

tab_step_5.addEventListener("click", function () {
    tab_modal.style.display = "flex";

    tab_mdl_btn_5.classList.add("active");

    tab_mdl_btn_1.classList.remove("active");
    tab_mdl_btn_2.classList.remove("active");
    tab_mdl_btn_3.classList.remove("active");
    tab_mdl_btn_4.classList.remove("active");
    tab_mdl_btn_6.classList.remove("active");
    tab_mdl_btn_7.classList.remove("active");
});

tab_step_6.addEventListener("click", function () {
    tab_modal.style.display = "flex";

    tab_mdl_btn_6.classList.add("active");

    tab_mdl_btn_1.classList.remove("active");
    tab_mdl_btn_2.classList.remove("active");
    tab_mdl_btn_3.classList.remove("active");
    tab_mdl_btn_4.classList.remove("active");
    tab_mdl_btn_5.classList.remove("active");
    tab_mdl_btn_7.classList.remove("active");
});

tab_step_7.addEventListener("click", function () {
    tab_modal.style.display = "flex";

    tab_mdl_btn_7.classList.add("active");

    tab_mdl_btn_1.classList.remove("active");
    tab_mdl_btn_2.classList.remove("active");
    tab_mdl_btn_3.classList.remove("active");
    tab_mdl_btn_4.classList.remove("active");
    tab_mdl_btn_5.classList.remove("active");
    tab_mdl_btn_6.classList.remove("active");
});


tab_modal_close_btn.addEventListener("click", function () {
    tab_modal.style.display = "none";
});

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