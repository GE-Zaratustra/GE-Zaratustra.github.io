let menuBarButton = document.getElementById("menu-bar-button");
let menuBarLinks = document.getElementById("menu-bar-links");

/**
 * Abre y cierra el menu en dispositivos pequeños como celulares
 */
function openCloseMenu() {
    if (menuBarLinks.style.display != "none" && menuBarLinks.style.display != "") {
        menuBarLinks.style.display = "none";
        menuBarButton.style.transform = "rotate(180deg)";

    } else {
        menuBarButton.style.transform = "rotate(360deg)";
        menuBarLinks.style.display = "block";
    }
}

/**
 * Dada una URL, crea un request y regresa true si esta URL existe. En caso contrario, regresa falso
 */
function UrlExists(url) {
    let http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();

    return http.status != 404;
}