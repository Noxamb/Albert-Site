function toggleNav() {
    var nav = document.getElementById("navBar");
    if (nav.className === "navBar") {
        nav.className += " responsive";
    } else {
        nav.className = "navBar";
    }
}
