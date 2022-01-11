const openButton = document.getElementById("poster");
const popup = document.querySelector(".popup");
const overlay = popup.querySelector(".popupoverlay1");
const closeBtn = popup.querySelector(".x");
const closepopup = () => {
  popup.classList.add("hidden3");
  console.log('gkgk')
}
const openpopup = () => {
  popup.classList.remove("hidden3");
  console.log('gkgk')
}
overlay.addEventListener("click", closepopup);
closeBtn.addEventListener("click", closepopup);
openButton.addEventListener("click", openpopup);

// -------------------------------------------------

const slideList = document.querySelector('.innerImg'); // Slide parent dom
const slideContents = document.querySelectorAll('.img'); // each slide dom
const slideBtnNext = document.querySelector('.next'); // next button
const slideBtnPrev = document.querySelector('.prev'); // prev button
const slideLen = slideContents.length; // slide length
const slideWidth = 561.6; // slide width
const slideSpeed = 300; // slide speed
const startNum = 0; // initial slide index (0 ~ 4)
slideList.style.width = slideWidth * (slideLen + 2) + "px";
// Copy first and last slide
let firstChild = slideList.firstElementChild;
let lastChild = slideList.lastElementChild;
let clonedFirst = firstChild.cloneNode(true);
let clonedLast = lastChild.cloneNode(true);
// Add copied Slides
slideList.appendChild(clonedFirst);
slideList.insertBefore(clonedLast, slideList.firstElementChild);
slideList.style.transform = "translate3d(-" + (slideWidth * (startNum + 1)) + "px, 0px, 0px)";
let curIndex = startNum; // current slide index (except copied slide)
let curSlide = slideContents[curIndex]; // current slide dom
curSlide.classList.add('slide_active');
/** Next Button Event */
slideBtnNext.addEventListener('click', function() {
if (curIndex <= slideLen - 1) {
slideList.style.transition = slideSpeed + "ms";
slideList.style.transform = "translate3d(-" + (slideWidth * (curIndex + 2)) + "px, 0px, 0px)";
}
if (curIndex === slideLen - 1) {
setTimeout(function() {
slideList.style.transition = "0ms";
slideList.style.transform = "translate3d(-" + slideWidth + "px, 0px, 0px)";
}, slideSpeed);
curIndex = -1;
}
curSlide.classList.remove('slide_active');
curSlide = slideContents[++curIndex];
curSlide.classList.add('slide_active');
});
/** Prev Button Event */
slideBtnPrev.addEventListener('click', function() {
if (curIndex >= 0) {
slideList.style.transition = slideSpeed + "ms";
slideList.style.transform = "translate3d(-" + (slideWidth * curIndex) + "px, 0px, 0px)";
}
if (curIndex === 0) {
setTimeout(function() {
slideList.style.transition = "0ms";
slideList.style.transform = "translate3d(-" + (slideWidth * slideLen) + "px, 0px, 0px)";
}, slideSpeed);
curIndex = slideLen;
}
curSlide.classList.remove('slide_active');
curSlide = slideContents[--curIndex];
curSlide.classList.add('slide_active');
});


const openButton2 = document.getElementById("exhidi");
const modal = document.querySelector(".popup2");
const overlay2 = modal.querySelector(".popupoverlay1");
const closeBtn2 = modal.querySelector(".x2");

const openModal = () => {
  modal.classList.remove("hidden2");
  console.log('gkgk')
}
const closeModal = () => {
  modal.classList.add("hidden2");
  console.log('gkgk')
}
overlay2.addEventListener("click", closeModal);
closeBtn2.addEventListener("click", closeModal);
openButton2.addEventListener("click", openModal);
// -------------------------------------------------

const slideList2 = document.querySelector('.innerImg2'); // Slide parent dom
const slideContents2 = document.querySelectorAll('.img2'); // each slide dom
const slideBtnNext2 = document.querySelector('.next2'); // next button
const slideBtnPrev2 = document.querySelector('.prev2'); // prev button
const slideLen2 = slideContents2.length; // slide length
const slideWidth2 = 840; // slide width
const slideSpeed2 = 300; // slide speed
const startNum2 = 0; // initial slide index (0 ~ 4)
slideList2.style.width = slideWidth2 * (slideLen2 + 18) + "px";
// Copy first and last slide
let firstChild2 = slideList2.firstElementChild;
let lastChild2 = slideList2.lastElementChild;
let clonedFirst2 = firstChild2.cloneNode(true);
let clonedLast2 = lastChild2.cloneNode(true);
// Add copied Slides
slideList2.appendChild(clonedFirst2);
slideList2.insertBefore(clonedLast2, slideList2.firstElementChild);
slideList2.style.transform = "translate3d(-" + (slideWidth2 * (startNum2 + 1)) + "px, 0px, 0px)";
let curIndex2 = startNum2; // current slide index (except copied slide)
let curSlide2 = slideContents2[curIndex2]; // current slide dom
curSlide2.classList.add('slide_active2');
/** Next Button Event */
slideBtnNext2.addEventListener('click', function () {
  if (curIndex2 <= slideLen2 - 1) {
    slideList2.style.transition = slideSpeed2 + "ms";
    slideList2.style.transform = "translate3d(-" + (slideWidth2 * (curIndex2 + 2)) + "px, 0px, 0px)";
  }
  if (curIndex2 === slideLen2 - 1) {
    setTimeout(function () {
      slideList2.style.transition = "0ms";
      slideList2.style.transform = "translate3d(-" + slideWidth2 + "px, 0px, 0px)";
    }, slideSpeed2);
    curIndex2 = -1;
  }
  curSlide2 = slideContents2[++curIndex2];
});
/** Prev Button Event */
slideBtnPrev2.addEventListener('click', function () {
  if (curIndex2 >= 0) {
    slideList2.style.transition = slideSpeed2 + "ms";
    slideList2.style.transform = "translate3d(-" + (slideWidth2 * curIndex2) + "px, 0px, 0px)";
  }
  if (curIndex2 === 0) {
    setTimeout(function () {
      slideList2.style.transition = "0ms";
      slideList2.style.transform = "translate3d(-" + (slideWidth2 * slideLen2) + "px, 0px, 0px)";
    }, slideSpeed2);
    curIndex2 = slideLen2;
  }
  curSlide2.classList.remove('slide_active2');
  curSlide2 = slideContents2[--curIndex2];
  curSlide2.classList.add('slide_active2');
});