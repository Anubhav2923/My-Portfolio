// heroBoxImageMove.js
export function heroBoxImageMove() {
    var image = document.querySelector(".hero-box-img img");
    window.addEventListener("mousemove", function (dets) {
      image.style.left = dets.clientX * 0.05 + "px";
      image.style.top = 1 - dets.clientY * 0.005 + "px";
    });
  }