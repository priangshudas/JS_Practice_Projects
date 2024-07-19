let main = document.querySelector("main");
let cursor = document.getElementById("cursor");
let h1div = document.querySelector(".h1-div");

let flag = 0;

main.addEventListener("mousemove", (dets) => {
  let x = dets.x;
  let y = dets.y;

  cursor.style.left = x + -10 + "px";
  cursor.style.top = y + -10 + "px";
});

main.addEventListener("mouseover", () => {
  cursor.style.width = "20px";
  cursor.style.height = "20px";
});

h1div.addEventListener("mousemove", () => {
  cursor.style.width = "80px";
  cursor.style.height = "80px";
});
