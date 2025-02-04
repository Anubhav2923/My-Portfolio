// loadinAnimation.js
export  function loadingAnimation() {
    const loadingLogo = document.querySelector(".loading-logo");
    const loadingWrapper = document.querySelector(".loader-wrapper");
  
    const tl = gsap.timeline({
      onComplete: () => {
        loadingWrapper.style.pointerEvents = "none";
      },
    });
  
    tl.to(
      loadingLogo,
      {
        y: "200%",
        duration: 2,
        ease: "power2.out",
        delay: 0.5,
      },
      "a"
    );
  
    tl.to(
      ".left-screen",
      {
        duration: 1.5, // Duration of animation (1.5 seconds)
        x: "-100%", // Moves red-div to the left
        ease: "power2.inOut", // Smooth easing
        delay: 0.8,
      },
      "a"
    );
  
    tl.to(
      ".right-screen",
      {
        duration: 1.5, // Duration of animation (1.5 seconds)
        x: "100%", // Moves blue-div to the right
        ease: "power2.inOut", // Smooth easing
        delay: 0.8,
      },
      "a"
    );
  }


  export function unloadLoadingAnimation(){
    const tl = gsap.timeline();

    tl.to('.left-screen', {
      x: '0%',
      duration: 1.5,
      ease: 'power2.inOut',
      delay: 0.8,
    }, 'a');
    tl.to('.right-screen', {
      duration: 1.5, // Duration of animation (1.5 seconds)
        x: "0%", // Moves blue-div to the right
        ease: "power2.inOut", // Smooth easing
        delay: 0.8,
    },'a')

    // tl.to(
    //   ".left-screen",
    //   {
    //     duration: 1.5, // Duration of animation (1.5 seconds)
    //     x: "-100%", // Moves red-div to the left
    //     ease: "power2.inOut", // Smooth easing
    //     delay: 0.8,
    //   },
    //   "b"
    // );
  
    // tl.to(
    //   ".right-screen",
    //   {
    //     duration: 1.5, // Duration of animation (1.5 seconds)
    //     x: "100%", // Moves blue-div to the right
    //     ease: "power2.inOut", // Smooth easing
    //     delay: 0.8,
    //   },
    //   "b"
    // );
  }