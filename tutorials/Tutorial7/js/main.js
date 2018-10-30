function showMenu() {
    console.log("here");
    var x = document.getElementById("mainTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}