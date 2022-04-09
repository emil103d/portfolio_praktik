const ScrollToTop = document.querySelector("#btnScrollToTop");

// Burger menu
const menuKnap = document.querySelector(".menuknap");
let menuOpen = false;

menuKnap.addEventListener("click", () => {
  if (!menuOpen) {
    menuKnap.classList.add("open");
    menuOpen = true;
    document.querySelector("#menu").classList.remove("hidden");
  } else {
    menuKnap.classList.remove("open");
    menuOpen = false;
    document.querySelector("#menu").classList.add("hidden");
  }
});

// Scrool to top

ScrollToTop.addEventListener("click", () => {
  // window.scrollTo(0, 0);
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Based of youtube tutorial by Garry Simon
// https://www.youtube.com/watch?v=FJ44qmE5odc

let path = document.querySelector(".path1");
let pathLength = path.getTotalLength();
// The height of the VW
let height = window.innerHeight * 2;

path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = pathLength;

path.style.height = height;

console.log(pathLength, height);

window.addEventListener("scroll", () => {
  // What % down is it
  var scrollPercentage =
    (document.documentElement.scrollTop + document.body.scrollTop) /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);
  // Length to offset the dashes
  var drawLength = pathLength * scrollPercentage;
  //Draw in reverse
  path.style.strokeDashoffset = pathLength - drawLength;

  // Paralax effect txt
  paralax();
});

function paralax() {
  const target = document.querySelectorAll(".scroll");

  for (i = 0; i < target.length; i++) {
    var pos = window.pageYOffset * target[i].dataset.rate;

    if (target[i].dataset.direction === "vertical") {
      target[i].style.transform = "translate3d(0px," + pos + "px, 0px)";
    } else {
      var posX = window.pageYOffset * target[i].dataset.ratex;
      var posY = window.pageYOffset * target[i].dataset.ratey;
      target[i].style.transform =
        "translate3d(" + posX + "px, " + posY + "px, 0px)";
    }
  }
}
