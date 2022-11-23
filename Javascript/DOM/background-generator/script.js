var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ","  + color2.value + ")";
    css.textContent = body.style.background + ";";
}

function setGradientRandomly() {
    body.style.background = "linear-gradient(to right, " + Random_rgb() + ","  + Random_rgb() + ")";
    css.textContent = body.style.background + ";";
}

function Random_rgb() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setGradientRandomly);