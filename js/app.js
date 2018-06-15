function myFunction() {
    var x = document.getElementById("nav-item");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}
