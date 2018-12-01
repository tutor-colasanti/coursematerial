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
    "1950", "1940", "1950", "1940", "1950", "1940", "1950"
]

    var modElem = document.getElementById("modal-content-id")
    for (var i = 0; i < imgFiles.length; i++) {
        var elem = document.getElementById("col" + Math.floor(i / 5))
        slideNumber = i + 1
        var htmlStr = '<div class="img-card ' + imgDecade[i] + '"'
        htmlStr += 'onclick="openModal();currentSlide(' + slideNumber + ')">'
        htmlStr += '<img src="img/' + imgFiles[i] + '" style="width:100%">'
        htmlStr += '</div>'
        elem.innerHTML += htmlStr

        var modHtmlStr = '<div class="mySlides"><div class="numbertext">' + slideNumber + '/' + imgFiles.length + '</div>'
        modHtmlStr += '<img class="center" src="img/' + imgFiles[i] + '"></div>'
        modElem.innerHTML += modHtmlStr
    }
