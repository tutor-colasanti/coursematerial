var imgFiles = []
var imgDecade = []

var request = new XMLHttpRequest();
// set request up
request.open('GET', 'data.csv', true);
// what to do when it loads
request.onload = function () {
  // check if it has loaded properly
  if (request.status >= 200 && request.status < 400) {
    parseTxt(request.responseText)

  } else {
    // if load error ie from the server
    console.log("We reached our target server, but it returned an error");
  }
};
// if request error ie cant reach server
request.onerror = function () {
  console.log("There was a connection error of some sort");
};
// send request 
request.send();

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