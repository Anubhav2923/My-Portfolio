// toggleCursorVisibility.js
export function toggleCursorVisibility() {
    var cursor = document.querySelector(".cursor");
    var intro = document.querySelector(".herobox .intro");
    var Passion1 = document.querySelector(".herobox .passion1 a");
    var Passion2 = document.querySelector(".herobox .passion2 a");
    var Passion1Outline = document.querySelector(".herobox .passion1_outline a");
    var Passion2Outline = document.querySelector(".herobox .passion2_outline a");
  
    function showCursor() {
      cursor.style.opacity = "1";
      cursor.style.transition = "opacity 0.3s ease";
    }
  
    function hideCursor() {
      cursor.style.opacity = "0";
      cursor.style.transition = "opacity 0.3s ease";
    }
  
    [intro, Passion1, Passion2, Passion1Outline, Passion2Outline].forEach(
      function (element) {
        element.addEventListener("mouseenter", showCursor);
        element.addEventListener("mouseleave", hideCursor);
      }
    );
  
    window.addEventListener("mousemove", function (dets) {
      if (cursor.style.opacity === "1") {
        cursor.style.left = dets.clientX + "px";
        cursor.style.top = dets.clientY + "px";
      }
    });
  }