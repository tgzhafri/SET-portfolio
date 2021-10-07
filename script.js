
window.onload = function () {
  window.scrollTo(0, 0);
}

// typewriter banner starts here
var bannerText = document.getElementById("banner-text");
var bannerLine = document.getElementById("banner-line");
var textPos = 0;

var testText = "Hello, I'm Tengku Zhafri";

var numAni = setInterval(function () {
  textPos += 1;

  var typewriter = testText.substr(0, textPos);
  bannerText.innerHTML = typewriter;

  if (textPos >= testText.length) {
    var num = testText.length;
    bannerText.style.textAlign = "center";
    bannerLine.style.display = "none";
    // textPos = 0;
  } else {
    num += 1;
  }
}, 100);

// typewriter banner ends here

var sliderHolder = document.getElementById("slider-holder");

var sliderList = [
  {
    title: "Tengku Zhafri",
    img: "cropimages/self2.jpg",
    subTitle: "Software Engineer",
    description: "long text",
  },
  {
    title: "Design Engineer",
    img: "cropimages/river.png",
    subTitle: "River Care Associates",
    description: "long text",
  },
  {
    title: "Field Engineer",
    img: "cropimages/shell.jpg",
    subTitle: "Meinhardt EPCM Malaysia",
    description: "long text",
  },
  {
    title: "Civil Engineer",
    img: "cropimages/dialog2.png",
    subTitle: "Dialog Group Berhad",
    description: "long text",
  },
  {
    title: "Project Engineer",
    img: "cropimages/dialog.jpg",
    subTitle: "Dialog Group Berhad",
    description: "long text",
  },
];

sliderHolder.style.width = sliderList.length * 100 + "vw";

for (var i = 0; i < sliderList.length; i++) {
  var sliderEle = document.createElement("div");
  sliderEle.classList.add("slider");

  var blankDiv = document.createElement("div");
  blankDiv.classList.add("blankDiv");

  // var sliderImg = document.createElement('div');
  // sliderImg.classList.add('sliderImg');
  // sliderImg.style.backgroundImage = sliderList[i].img;

  var sliderImg = document.createElement("img");
  sliderImg.classList.add("sliderImg");
  sliderImg.src = sliderList[i].img;

  var sliderContent = document.createElement("div");
  sliderContent.classList.add("sliderContent");

  var sliderTitle = document.createElement("h4");
  sliderTitle.innerHTML = sliderList[i].title;

  var sliderSubTitle = document.createElement("h5");
  sliderSubTitle.innerHTML = sliderList[i].subTitle;

  // var sliderDesc = document.createElement('p');
  // sliderDesc.innerHTML = sliderList[i].description;

  sliderHolder.appendChild(sliderEle);
  sliderEle.appendChild(sliderContent);
  sliderEle.appendChild(blankDiv);
  sliderEle.appendChild(sliderImg);
  sliderContent.appendChild(sliderTitle);
  sliderContent.appendChild(sliderSubTitle);
  // sliderContent.appendChild(sliderDesc);
}

var pos = 0;
var sliderTimerId = null;

function moveSlider(posNum) {
  console.log("clicked");
  pos += posNum;

  if (pos < -(sliderList.length - 1) * 100) {
    pos = 0;
  } else if (pos > 0) {
    pos = -(sliderList.length - 1) * 100;
  }
  sliderHolder.style.transform = `translateX(${pos}vw)`;
}

sliderTimerId = setInterval(sliderTimer, 3000);

function sliderTimer() {
  pos -= 100;

  if (pos < -((sliderList.length - 1) * 100)) {
    pos = 0;
  }
  sliderHolder.style.transform = `translateX(${pos}vw)`;
}

function stopTimer() {
  clearInterval(sliderTimerId);
}

function resumeTimer() {
  console.log("mouse out");
  sliderTimerId = setInterval(sliderTimer, 3000);
}
