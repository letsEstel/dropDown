// index.js
const dropDownBtn = document.querySelector(".dropDownButton");
const dropDownContent = document.querySelector(".dropDownContent");

dropDownContent.style.display = "none";
dropDownBtn.addEventListener("mouseover", () => {
  dropDownBtn.style.color = "orange";
  dropDownContent.style.display = "";
});

dropDownContent.addEventListener("mouseleave", () => {
  dropDownBtn.style.color = "black";
  dropDownContent.style.display = "none";
});
