var page = document.querySelector("#main");
var crsr = document.querySelector("#cursor");
page.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.clientX + "px";
  crsr.style.top = dets.clientY + "px";
  ease: Power4;
});
