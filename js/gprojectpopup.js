const m1tiger = document.getElementById("m1tiger");
const m1tigerpopup = document.querySelector(".m1tiger_content");
const m1tigeroverlay = document.querySelector(".black_overlay1");
const closeBtn = m1tigerpopup.querySelector(".x");
const closepopupm1 = () => {
  m1tigerpopup.classList.add("hidden");
  m1tigeroverlay.classList.add("hidden");

  console.log('gkgk')
}
const openpopupm1 = () => {
  m1tigerpopup.classList.remove("hidden");
  m1tigeroverlay.classList.remove("hidden");
  console.log('gkgk')
}
m1tigeroverlay.addEventListener("click", closepopupm1);
closeBtn.addEventListener("click", closepopupm1);
m1tiger.addEventListener("click", openpopupm1);

// -----

const m2tiger = document.getElementById("m2tiger");
const m2tigerpopup = document.querySelector(".m2tiger_content");
const m2tigeroverlay = document.querySelector(".black_overlay2");
const closeBtn2 = m2tigerpopup.querySelector(".x");
const closepopupm2 = () => {
  m2tigerpopup.classList.add("hidden");
  m2tigeroverlay.classList.add("hidden");

  console.log('gkgk')
}
const openpopupm2 = () => {
  m2tigerpopup.classList.remove("hidden");
  m2tigeroverlay.classList.remove("hidden");
  console.log('gkgk')
}
m2tigeroverlay.addEventListener("click", closepopupm2);
closeBtn2.addEventListener("click", closepopupm2);
m2tiger.addEventListener("click", openpopupm2);

