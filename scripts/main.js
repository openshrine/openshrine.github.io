let myImage = document.querySelector("img");

myImage.addEventListener("click", function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/cannondale.jpeg") {
    myImage.setAttribute("src", "images/cannondale2.jpeg");
  } else {
    myImage.setAttribute("src", "images/cannondale.jpeg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Veuillez saisir votre nom.");
    localStorage.setItem("nom", myName);
    myHeading.textContent = "Le Cannondale Track 1992, " + myName;
  }

  if (!localStorage.getItem("nom")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("nom");
    myHeading.textContent = "Le Cannondale Track 1992, " + storedName;
  }

  myButton.addEventListener("click", function () {
    setUserName();
  });
  