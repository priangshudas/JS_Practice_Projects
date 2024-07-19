let elem = document.querySelectorAll(".elem");
let elemImg = document.querySelectorAll(".elemImg");
let cursor = document.querySelector("#cursor");
let hero = document.querySelector(".hero");
let h1 = document.querySelector("h1");
let i = document.querySelector("i");
let nav = document.querySelector("nav");

elem.forEach((val) => {
  val.addEventListener("mouseenter", () => {
    val.childNodes[3].style.opacity = 1;
  });
  val.addEventListener("mouseleave", () => {
    val.childNodes[3].style.opacity = 0;
  });

  val.addEventListener("mousemove", (dets) => {
    val.childNodes[3].style.left = dets.x + -70 + "px";
    // val.childNodes[3].style.top = dets.y + -70 + "px";
  });
});

hero.addEventListener("mouseover", (dets) => {
  cursor.style.width = 20 + "px";
  cursor.style.height = 20 + "px";
});

hero.addEventListener("mousemove", (dets) => {
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
});

h1.addEventListener("mousemove", () => {
  cursor.style.width = 90 + "px";
  cursor.style.height = 90 + "px";
});
i.addEventListener("mousemove", () => {
  cursor.style.width = 50 + "px";
  cursor.style.height = 50 + "px";
});

i.addEventListener("click", () => {
  nav.style.display = "initial";
  console.log("hello");
});
