var imgFiles = []
var imgDecade = []

$.get("data.csv", function (data, status) {
    parseTxt(data);
});

function parseTxt(text) {
    var rows = text.split('\n'); // each line is separated ny a cr
    var modElem = document.getElementById("modal-content-id")
    for (var i = 0; i < rows.length; i++) {
        var elem = document.getElementById("col" + Math.floor(i / 5))
        
        cols = rows[i].split(',');
        imgFile = cols[0]
        imgTag = cols[1]

        slideNumber = i+1
        
        var htmlStr = '<div class="img-card ' + imgTag+'"'
        htmlStr += 'onclick="openModal();currentSlide(' + slideNumber + ')">'
        htmlStr += '<img src="img/' + imgFile + '" style="width:100%">'
        htmlStr += '</div>'
        elem.innerHTML += htmlStr
        
        var modHtmlStr = '<div class="mySlides"><div class="numbertext">' + slideNumber + '/' + rows.length + '</div>'
        modHtmlStr += '<img class="center" src="img/' + imgFile + '"></div>'
        modElem.innerHTML += modHtmlStr
    }
}