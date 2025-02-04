// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on("scroll", (e) => {
  console.log(e);
});

const logoImg = document.querySelector(".nav-logo img"); // Select the image inside the nav-logo

logoImg.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default anchor behavior

  // Redirect to index.html
  window.location.href = "/index.html"; // Adjust the path if necessary
});

const tl = gsap.timeline();
tl.to(".top-box-intro .circle2", {
  x: "-200%",
  duration: 2,
  ease: "power2.out",
});
tl.to(".top-box-intro .circle2", {
  y: 10,
  y: -10,
  duration: 0.5,
  repeat: -1,
  yoyo: true,
});

const aboutText = document.querySelector(".about-text"); // Select the about-text element
const cornerDiv = document.querySelector(".cover-div"); // Select the corner-div element

// Check if the element exists/ Select the corner-div element

// Check if the element exists
if (cornerDiv) {
  // Set the initial height to 0
  gsap.set(cornerDiv, { height: "0vh" });

  // Create the scroll-triggered animation
  ScrollTrigger.create({
    trigger: cornerDiv,
    start: "end bottom",
    end: "bottom -5%",
    scrub: 1,
    onUpdate: (self) => {
      const progress = self.progress;
      const newHeight = progress * 58;
      gsap.to(cornerDiv, {
        height: `${newHeight}vh`,
        duration: 0.1,
        ease: "power2.out",
      });
    },
    
  });
}

const socialLinkContainer = document.querySelector(".social-link-container");

if (socialLinkContainer) {
  gsap.set(socialLinkContainer, {
    position: "absolute",
    top: "90vh",
    right: '-20%',
    display: 'none',
  });

  ScrollTrigger.create({
    trigger: socialLinkContainer,
    start: "top 100px", // Trigger when the top of the container is 100px from the top
    end: "+=100",
    onEnter: () => {
      gsap.to(socialLinkContainer, {
        position: "fixed", // Change to fixed position
        top: "100px",
        display: 'block',
        right :'0%', // Stick to 100px from the top
        duration: 0.3,
        ease: "power2.out",
      });
    },
    onLeaveBack: () => {
      gsap.to(socialLinkContainer, {
        position: "absolute",
        display: 'none',
        right: "-20%", // Reset to initial position
        duration: 0.5,
        ease: "power2.out",
      });
    },
    // markers: true,
  
  });
}


const menuBtn = document.querySelector('.checkmark');
menuBtn.addEventListener('click', function(){
    console.log('btn is clicked');
})