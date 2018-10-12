function openNav() {
	element1 = document.getElementById("mySidenav");
	console.log(element1);
	element1.style.width = "250px";
	console.log(element1);
	element2 = document.getElementById("hburger");
	element2.style.opacity=0;
}

function closeNav() {
	element1 = document.getElementById("mySidenav");
	element1.style.width = "0px";
	element2 = document.getElementById("hburger");
	element2.style.opacity=1;
}

function openCity(cityName) {
	closeNav();
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    element = document.getElementById(cityName);
    element.style.display = "block";
    window.scroll({top: 0,behavior: 'smooth'});
}