export function homePageElementAnimation() {
    const passion1 = document.querySelector(".passion1 a");
    const passion2 = document.querySelector(".passion2 a");
    const designerBtn = document.querySelector(".designer-btn button");
    const developerBtn = document.querySelector(".developer-btn button");
    const passion1_outline = document.querySelector(".passion1_outline");
    const passion2_outline = document.querySelector(".passion2_outline");
    const locationP = document.querySelector(".herobox p");
    const nav = document.querySelector("nav");
    // Set initial positions off-screen
    gsap.set(passion1, { x: 350, opacity: 0 }); // Start from the left
    gsap.set(passion2, { x: -350, opacity: 0 }); // Start from the right
    gsap.set(designerBtn, { y: 100, opacity: 0 });
    gsap.set(developerBtn, { y: 100, opacity: 0 });
    gsap.set(passion1_outline, { opacity: 0 });
    gsap.set(passion2_outline, { opacity: 0 });
    gsap.set(locationP, { x: -350, opacity: 0 });
    gsap.set(nav, { y: -200, opacity: 0 });
  
    const tl = gsap.timeline();
    // Animate the elements into view
    gsap.to(
      passion1,
      {
        x: 0,
        opacity: 1,
        duration: 0.5, // Duration of the animation
        ease: "power2.inOut",
        delay: -.5
      },
      "a"
    );
  
    gsap.to(
      passion2,
      {
        x: 0,
        opacity: 1,
        duration: 0.5, // Duration of the animation
        ease: "power2.inOut",
        delay: -.5
      },
      "a"
    );
    gsap.to(
      locationP,
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
      },
      "a"
    );
    gsap.to(
      passion1_outline,
      {
        delay: 1,
        opacity: 1,
        duration: 0.5, // Duration of the animation
        ease: "power2.inOut",
      },
      "a"
    );
  
    gsap.to(
      passion2_outline,
      {
        delay: 1,
        opacity: 1,
        duration: 0.5, // Duration of the animation
        ease: "power2.inOut",
      },
      "a"
    );
  
    gsap.to(nav, {
      y: 0,
      opacity: 1,
      duration: 1.5,
      delay: 1.8,
      ease: "power2.inOut",
    });
    gsap.to(
      ".intro a",
      {
        duration: 1,
        opacity: 1,
      },
      "a"
    );
  
    tl.to(
      ".hero-box-img img",
      {
        duration: 1,
        delay: 3,
        opacity: 1,
      },
      "b"
    );
    tl.to(
      designerBtn,
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 2,
        ease: "power2.inOut",
      },
      "b"
    );
    tl.to(developerBtn, {
      y: 0,
      opacity: 1,
      delay: -1.5,
      ease: "power2.inOut",
    });
  }
  