var bigImage, containerAll, hide, holderElement, image, images, makeFasionTile, makeRequest, setClickEvent, show;

images = [];

makeFasionTile = function(tileInfo) {
  var containerElement, tileInnerHTML;
  tileInnerHTML = "<img src=\"" + tileInfo.source + "\" alt=\"" + tileInfo.title + "\">";
  containerElement = document.createElement("div");
  containerElement.classList.add("container");
  containerElement.classList.add("unFocusedTile");
  containerElement.style.width = tileInfo.tileSize.width + "px";
  containerElement.style.height = tileInfo.tileSize.height + "px";
  containerElement.innerHTML = tileInnerHTML;
  return containerElement;
};

image = document.getElementById("picView");

containerAll = document.getElementById("totalCon");

bigImage = document.getElementById("bigImg");

show = function(imgSrc) {
  bigImage.setAttribute("src", imgSrc);
  image.style.visibility = "visible";
  return containerAll.style.opacity = .2;
};

hide = function() {
  image.style.visibility = "hidden";
  return containerAll.style.opacity = 1;
};

setClickEvent = function(tiles, tileInfo) {
  return tiles.addEventListener("click", function(event) {
    return show(tileInfo.source);
  });
};

image.addEventListener("click", hide);

makeRequest = function(url, cbFunc) {
  var alertContents, httpRequest;
  alertContents = function() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        cbFunc(httpRequest.responseText);
      } else {
        alert("There was a problem with the request to " + url);
      }
    }
  };
  httpRequest = new XMLHttpRequest;
  if (!httpRequest) {
    alert('Giving up :( Cannot create an XMLHTTP instance');
    return false;
  } else {
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', url);
    httpRequest.send();
  }
};

holderElement = document.getElementById("tileHolder");

makeRequest("http://localhost:3000/gettingTiles", function(res) {
  var i, img, len, ref, resObject, results, tileElement;
  resObject = JSON.parse(res);
  if (resObject.success) {
    ref = resObject.tiles;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      img = ref[i];
      tileElement = makeFasionTile(img);
      setClickEvent(tileElement, img);
      results.push(holderElement.appendChild(tileElement));
    }
    return results;
  } else {
    return alert("There was a error when loading tiles");
  }
});
