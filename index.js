let menuBarButton = document.getElementById("menu-bar-button");
let menuBarLinks = document.getElementById("menu-bar-links");

function openCloseMenu() {
    if (menuBarLinks.style.display != "none" && menuBarLinks.style.display != "") {
        menuBarLinks.style.display = "none";
        menuBarButton.style.transform = "rotate(180deg)";

    } else {
        menuBarButton.style.transform = "rotate(360deg)";
        menuBarLinks.style.display = "block";
    }
}