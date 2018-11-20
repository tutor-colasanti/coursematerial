function chooseSlide(choice) {
    var i;
    var slides = document.getElementsByClassName("img-card");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    var slides = document.getElementsByClassName(choice);
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "block";
    }
}
var imgFiles = ["timeline_computers_1940.cnc.jpg", "timeline_computers_1949.manchestermark1.jpg",
    "timeline_computers_1950.ace.jpg", "timeline_computers_1941.zusez3.jpg",
    "timeline_computers_1950.era1101.jpg", "timeline_computers_1942.abc.jpg",
    "timeline_computers_1950.seac-swac.jpg", "timeline_computers_1943.whirlwind.jpg",
    "timeline_computers_1951.leo.jpg", "timeline_computers_1944.colossus.jpg",
    "timeline_computers_1951.univacI.jpg", "timeline_computers_1944.harvardmarkI.jpg",
    "timeline_computers_1952.maniac.jpg", "timeline_computers_1946.eniac.jpg",
    "timeline_computers_1953.ibm701.jpg", "timeline_computers_1948.manchesterbaby.jpg",
    "timeline_computers_1953.manchestertc.jpg", "timeline_computers_1948.ssec.jpg",
    "timeline_computers_1954.ibm650.jpg", "timeline_computers_1949.edsac.jpg"
]

imgDecade = ["1940", "1940", "1950", "1940", "1950", "1940", "1950", "1940", "1950", "1940", "1950", "1940",
    "1950", "1940", "1950", "1940", "1950", "1940", "1950", "11940"
]

function addImage(index, modElem, elem) {
    var htmlStr = '<div class="img-card ' + imgDecade[index] + '"'
    htmlStr += 'onclick="openModal();currentSlide(' + (index + 1) + ')">'
    htmlStr += '<img src="img/' + imgFiles[index] + '" style="width:100%">'
    htmlStr += '</div>'
    elem.innerHTML += htmlStr
    var modHtmlStr = '<div class="mySlides"><div class="numbertext">' + index + '/' + imgFiles.length + '</div>'
    modHtmlStr += '<img class="center" src="img/' + imgFiles[index] + '"></div>'
    modElem.innerHTML += modHtmlStr
}

var modElement = document.getElementById("modal-content-id")

var element = document.getElementById("col1")
for (i = 0; i < 5; i++) {
    addImage(i, modElement, element)
}

var element = document.getElementById("col2")
for (i = 5; i < 10; i++) {
    addImage(i, modElement, element)
}

var element = document.getElementById("col3")
for (i = 10; i < 15; i++) {
    addImage(i, modElement, element)
}

var element = document.getElementById("col4")
for (i = 15; i < imgFiles.length; i++) {
    addImage(i, modElement, element)
}