var bigImage, containerAll, hide, holderElement, i, image, images, img, len, makeFasionTile, setClickEvent, show, tileElement;

images = [
  {
    src: "./assets/pics/Fasionairy.png",
    title: "Fasion",
    tileSize: {
      width: 250,
      height: 250
    }
  }, {
    src: "./assets/pics/menStyle.jpg",
    title: "menStyle",
    tileSize: {
      width: 300,
      height: 300
    }
  }, {
    src: "./assets/pics/walkThrough.jpg",
    title: "walkThrough",
    tileSize: {
      width: 250,
      height: 250
    }
  }, {
    src: "./assets/pics/sweetHome.jpg",
    title: "sweetHome",
    tileSize: {
      width: 500,
      height: 300
    }
  }, {
    src: "./assets/pics/babies.jpg",
    title: "babies",
    tileSize: {
      width: 400,
      height: 300
    }
  }, {
    src: "./assets/pics/coool.jpg",
    title: "cool",
    tileSize: {
      width: 500,
      height: 345
    }
  }, {
    src: "./assets/pics/beautiful.png",
    title: "beautiful",
    tileSize: {
      width: 320,
      height: 320
    }
  }
];

makeFasionTile = function(tileInfo) {
  var containerElement, tileInnerHTML;
  tileInnerHTML = "<img src=\"" + tileInfo.src + "\" alt=\"" + tileInfo.title + "\">";
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
    return show(tileInfo.src);
  });
};

image.addEventListener("click", hide);

holderElement = document.getElementById("tileHolder");

for (i = 0, len = images.length; i < len; i++) {
  img = images[i];
  tileElement = makeFasionTile(img);
  setClickEvent(tileElement, img);
  holderElement.appendChild(tileElement);
}
