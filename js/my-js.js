let toggleShowDetails = document.querySelector(".showdetails");

let booleanSHow = false;


toggleShowDetails.addEventListener("click", function () {
    booleanSHow = !booleanSHow;
    if (booleanSHow) {
        toggleShowDetails.textContent = "Hide Details";
    } else {
        toggleShowDetails.textContent = "Show Details";
    }
});
