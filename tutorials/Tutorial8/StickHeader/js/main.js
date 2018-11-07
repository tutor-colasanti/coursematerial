window.onscroll = function () {
    stickFunction()
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

function loadSnippet(fileName){
        $("#content").load("snippets/"+fileName+".html");
}
loadSnippet("home")