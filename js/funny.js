const opennewspaper = document.getElementById("newspaper");
const paper = document.querySelector(".openpaper");
const newsoverlay = paper.querySelector(".popupoverlay");
const closenews = paper.querySelector(".x");

const opennews = () => {
  paper.classList.remove("hidden");
  console.log('gkgk')
  console.log(curIndex2);
}
const closednews = () => {
  paper.classList.add("hidden");
  console.log('gkg')
  slideList2.style.transform = "translate3d(-" + slideWidth2 + "px, 0px, 0px)";
  curIndex2 = 0;
}
newsoverlay.addEventListener("click", closednews);
closenews.addEventListener("click", closednews);
opennewspaper.addEventListener("click", opennews);

// ----------
const slideList2 = document.querySelector('.innerImg2'); // Slide parent dom
const slideContents2 = document.querySelectorAll('.img2'); // each slide dom
const slideBtnNext2 = document.querySelector('.next2'); // next button
const slideBtnPrev2 = document.querySelector('.prev2'); // prev button
const slideLen2 = slideContents2.length; // slide length
const slideWidth2 = 840; // slide width
const slideSpeed2 = 300; // slide speed
const startNum2 = 0; // initial slide index (0 ~ 4)
slideList2.style.width = slideWidth2 * (slideLen2 + 21) + "px";
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
    console.log(curIndex2);
  }
  if (curIndex2 === slideLen2 - 1) {
    setTimeout(function () {
      slideList2.style.transition = "0ms";
      slideList2.style.transform = "translate3d(-" + slideWidth2 + "px, 0px, 0px)";
    }, slideSpeed2);
    curIndex2 = -1;
    console.log(curIndex2);
  }
  curSlide2 = slideContents2[++curIndex2];
});
/** Prev Button Event */
slideBtnPrev2.addEventListener('click', function () {
  if (curIndex2 >= 0) {
    slideList2.style.transition = slideSpeed2 + "ms";
    slideList2.style.transform = "translate3d(-" + (slideWidth2 * curIndex2) + "px, 0px, 0px)";
    console.log(curIndex2);
  }
  if (curIndex2 === 0) {
    setTimeout(function () {
      slideList2.style.transition = "0ms";
      slideList2.style.transform = "translate3d(-" + (slideWidth2 * slideLen2) + "px, 0px, 0px)";
    }, slideSpeed2);
    curIndex2 = slideLen2;
    console.log(curIndex2);
  }
  curSlide2.classList.remove('slide_active2');
  curSlide2 = slideContents2[--curIndex2];
  curSlide2.classList.add('slide_active2');
});