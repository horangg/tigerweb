const menuopen = document.getElementById("munu");
const menu = document.querySelector(".menuhover");
const background = menu.querySelector(".popupoverlay");
const closemenu = () => {
  menu.classList.add("hidden");
  console.log('gkgk')
}
const openmenu = () => {
  menu.classList.remove("hidden");
  console.log('gkgk')
}
background.addEventListener("click", closemenu);
menuopen.addEventListener("click", openmenu);
