
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
    img: "images/self2.jpeg",
    subTitle: "Software Engineer",
  },
  {
    title: "Design Engineer",
    img: "images/river.jpeg",
    subTitle: "River Care Associates",
    // logo: "images/invoke-logo.png",
  },
  {
    title: "Field Engineer",
    img: "images/shell.jpeg",
    subTitle: "Meinhardt EPCM Malaysia",
    // logo: "images/invoke-logo.png",
  },
  {
    title: "Civil Engineer",
    img: "images/dialog2.jpeg",
    subTitle: "Dialog Group Berhad",
    // logo: "images/invoke-logo.png",
  },
  {
    title: "Project Engineer",
    img: "images/dialog.jpeg",
    subTitle: "Dialog Group Berhad",
    // logo: "images/invoke-logo.png",
  },
  {
    title: "Commercial",
    img: "images/invoke.jpeg",
    subTitle: "Invoke",
    // logo: "images/invoke-logo.png",
  },
];

sliderHolder.style.width = sliderList.length * 100 + "vw";

for (var i = 0; i < sliderList.length; i++) {
  var sliderEle = document.createElement("div");
  sliderEle.classList.add("slider");

  var blankDiv = document.createElement("div");
  blankDiv.classList.add("blankDiv");

  var sliderImg = document.createElement("img");
  sliderImg.classList.add("sliderImg");
  sliderImg.src = sliderList[i].img;

  var sliderContent = document.createElement("div");
  sliderContent.classList.add("sliderContent");

  var sliderTitle = document.createElement("h4");
  sliderTitle.innerHTML = sliderList[i].title;

  var sliderSubTitle = document.createElement("h5");
  sliderSubTitle.innerHTML = sliderList[i].subTitle;

  // var sliderLogo = document.createElement("img");
  // sliderLogo.classList.add("sliderLogo");
  // sliderLogo.src = sliderList[i].logo;

  sliderHolder.appendChild(sliderEle);
  sliderEle.appendChild(sliderContent);
  sliderEle.appendChild(blankDiv);
  sliderEle.appendChild(sliderImg);
  sliderContent.appendChild(sliderTitle);
  sliderContent.appendChild(sliderSubTitle);
  // sliderContent.appendChild(sliderLogo);
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
