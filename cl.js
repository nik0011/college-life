var page = document.querySelector("#main");
var crsr = document.querySelector("#cursor");

page.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.clientX + "px";
  crsr.style.top = dets.clientY + "px";
  ease: Power3;
});
document.querySelectorAll(".elem")
  .forEach(function (elem) {
    elem.addEventListener("mousemove", function (details) {
      var toploc = details.clientY - elem.getBoundingClientRect().top;

      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        left: details.clientX,
        top: toploc,
        
      });
    });
     elem.addEventListener("mouseleave", function (details) {
       var toploc = details.clientY - elem.getBoundingClientRect().top;

       gsap.to(elem.querySelector("img"), {
         opacity: 0,
         ease: Power3,
       });
     });
})

