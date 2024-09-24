function simpleFunctioOne() {
  // Code Here
  document.getElementById("changeTxt").innerHTML =
    "Don't change this paragraph";
}

simpleFunctioOne();

function simpleFunctioTwo() {
  document.querySelector("body").innerHTML +=
    "This function does not take parameters.";
}
simpleFunctioTwo();

function sayHelloWorld() {
  console.log("Hello, world");
}

sayHelloWorld();

function sayFavoriteBand(bandName) {
  document.getElementById("favBand").innerHTML += bandName + "<br/>";
}

sayFavoriteBand("Three Days Grace");
sayFavoriteBand("Maroon 5");
sayFavoriteBand("The Wanted");
sayFavoriteBand("Backstreet Boys");

function sayMyName(myName) {
  console.log(myName);
}

sayMyName("Say my name");
sayMyName("Say my name");
sayMyName("If no one is around you");

//Function that do calculations

function calcRectPerimeter(height, width) {
  const perimeter = 2 * height + 2 * width;
  // document.querySelector("#panswer").innerHTML += perimeter;
  document.querySelector("#panswer").innerHTML += perimeter;
}

calcRectPerimeter(2, 4);

function calcArea() {
  const height = document.getElementById("height").value;
  const width = document.getElementById("width").value;
  console.log("height", height);
  console.log("width", width);
  document.querySelector("#answer").innerHTML +=
    "Area: " + height * width + "<br/>";
}

function calcRectAreaAndPeri(height, width) {
  const perimeter = 2 * (height + width);
  const area = height * width;

  document.getElementById("multiAnswer").innerHTML += `
    Height:  ${height} <br />
    Width: ${width} <br />
    Perimeter: ${perimeter} <br/>
    Area: ${area} <br/>
    `;

  document.getElementById("multiAnswer").innerHTML +=
    "Height: " + height + "<br />";
  document.getElementById("multiAnswer").innerHTML +=
    "Width: " + width + "<br />";
  document.getElementById("multiAnswer").innerHTML +=
    "Perimeter: " + perimeter + "<br />";
  document.getElementById("multiAnswer").innerHTML +=
    "Area: " + area + "<br />";
}

calcRectAreaAndPeri(5, 4);
calcRectAreaAndPeri(2, 8);

function myFunction() {
  alert("Who goes there?");
}

function wizard(name, occupation) {
  confirm(`Welcome ${name}, the ${occupation}!`);
  document.getElementById;
  "future".innerHTML += `Welcome ${name}, the ${occupation}`;
}

function addItem() {
  const newItem = prompt("Add Item:");
  console.log(newItem);
}

function returnValue(Color) {
  return Color;
}

alert(returnValue("green"));

function calCircleArea(radius) {
  return 2 * Math.PI * radius;
}

document.getElementById("useOne").innerHTML += calcCircleArea(2);
document.getElementById("useTwo").innerHTML += calcCircleArea(4);
