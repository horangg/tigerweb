var firstImage = document.getElementById("firstImage");
var firstimageArray = ["https://user-images.githubusercontent.com/94329609/147407274-11609ef0-d0b4-493e-a627-9d8d6fd3be4c.jpg", "https://user-images.githubusercontent.com/94329609/147407279-fe36eedc-be78-4cfe-8d5b-67a3c1821f7e.jpg", "https://user-images.githubusercontent.com/94329609/147407300-2bf59d61-da1f-42d5-951a-f89dffbdcb4a.jpg", "https://user-images.githubusercontent.com/94329609/147407283-d6d10568-37dc-4ad9-bfbc-63bde4e68113.jpg", "https://user-images.githubusercontent.com/94329609/147407289-2e7f0c91-1d2d-4d51-a97b-a838bf57f48b.jpg", "https://user-images.githubusercontent.com/94329609/147407295-0a7497fc-5a06-476c-89a3-9c6ff95568e3.jpg"];
var firstimageIndex = 0;

function changefirstImage() {
  firstImage.setAttribute("src", firstimageArray[firstimageIndex]);
  firstimageIndex++;
  if (firstimageIndex >= firstimageArray.length) {
    firstimageIndex = 0;
  }
}
setInterval(changefirstImage, 2000);

// -----------------------------------------------

var secImage = document.getElementById("secImage");
var secimageArray = ["https://user-images.githubusercontent.com/94329609/147408541-3ffdfdae-4fa8-4bcc-b57e-b6bb3582b794.jpg", "https://user-images.githubusercontent.com/94329609/147408545-0f4439eb-c2b5-40ba-bdb6-87b8f49909c6.jpg", "https://user-images.githubusercontent.com/94329609/147408549-81f5514c-c550-4a84-b11e-3acf35768893.jpg", "https://user-images.githubusercontent.com/94329609/147408805-528250ca-ab68-49f4-a261-4e0b37030a82.jpg", "https://user-images.githubusercontent.com/94329609/147408559-491ea481-317f-48bd-9290-091e52853386.jpg", "https://user-images.githubusercontent.com/94329609/147408564-b3f17441-e578-4bd1-a7b7-3eef6606edb8.jpg"];
var secimageIndex = 0;

function changesecImage() {
  secImage.setAttribute("src", secimageArray[secimageIndex]);
  secimageIndex++;
  if (secimageIndex >= secimageArray.length) {
    secimageIndex = 0;
  }
}
setInterval(changesecImage, 2000);

// -----------------------------------------------

var thrImage = document.getElementById("thrImage");
var thrimageArray = ["https://user-images.githubusercontent.com/94329609/147408884-94399b8b-4a22-4b7c-8acc-40f802044c5c.jpg", "https://user-images.githubusercontent.com/94329609/147408885-1923f2e5-6691-45a8-88a6-8fe210e96bf3.jpg", "https://user-images.githubusercontent.com/94329609/147408887-f6b8de7f-d992-4872-8e74-90ac2709f959.jpg", "https://user-images.githubusercontent.com/94329609/147408891-da8716ed-0d40-4efd-b1d8-f7755b37f2c0.jpg", "https://user-images.githubusercontent.com/94329609/147408896-43ebac71-d14c-4fe8-862d-1667affcc60f.jpg", "https://user-images.githubusercontent.com/94329609/147408899-d1cb2850-3319-4c7d-82f2-4626cce022f1.jpg"];
var thrimageIndex = 0;

function changethrImage() {
  thrImage.setAttribute("src", thrimageArray[thrimageIndex]);
  thrimageIndex++;
  if (thrimageIndex >= thrimageArray.length) {
    thrimageIndex = 0;
  }
}
setInterval(changethrImage, 2000);
