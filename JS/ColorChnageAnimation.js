// ColorChnageAnimation.js
export function ColorChnageAnimation() {
    var Passion1 = document.querySelector(".herobox .passion1 a");
    var Passion2 = document.querySelector(".herobox .passion2 a");
    var Passion1Outline = document.querySelector(".herobox .passion1_outline a");
    var Passion2Outline = document.querySelector(".herobox .passion2_outline ");
  
    Passion2.addEventListener("mouseenter", function () {
      Passion1.style.color = "transparent";
      Passion2.style.color = "#191919";
      Passion1Outline.style.display = "none";
      Passion2Outline.style.display = "block";
    });
    Passion2.addEventListener("mouseleave", function () {
      Passion1.style.color = "#191919";
      Passion2.style.color = "transparent";
      Passion1Outline.style.display = "block";
      Passion2Outline.style.display = "none";
    });
  }