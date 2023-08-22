// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    // Adjust this value based on when you want the blur to start
    navbar.classList.add("blur");
  } else {
    navbar.classList.remove("blur");
  }
});

function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.className = "snowflake";
  snowflake.style.left = Math.random() * window.innerWidth + "px";
  snowflake.style.animationDuration = Math.random() * 5 + 5 + "s";

  snowflake.addEventListener("animationiteration", () => {
    snowflake.style.left = Math.random() * window.innerWidth + "px";
  });

  document.querySelector(".snowflakes").appendChild(snowflake);
}

// Create a specified number of snowflakes
const numberOfSnowflakes = 50;
for (let i = 0; i < numberOfSnowflakes; i++) {
  createSnowflake();
}
