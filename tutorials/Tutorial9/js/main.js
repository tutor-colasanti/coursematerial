function chooseSlide(choice) {
    var i;
    var slides = document.getElementsByClassName("img-card");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "1";
    }
    var slides = document.getElementsByClassName(choice);
    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0.5";
    }
}