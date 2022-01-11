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