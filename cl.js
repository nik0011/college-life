var page = document.querySelector("#main");
function circleMouseFollower(){
  window.addEventListener("mousemove", function (dets) {
    document.querySelector("#cursor").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`
  })
}
function MouseFollower() {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector("#crsr").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`;
  });
}
circleMouseFollower();
MouseFollower();
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

