import { homePageElementAnimation } from "./homePageElementAnimation.js";
import { loadingAnimation, unloadLoadingAnimation } from "./loadinAnimation.js";

export function LinkSetupHomePage() {
    const logoImg = document.querySelector('.nav-logo');

    logoImg.addEventListener('click', function() {
      unloadLoadingAnimation();
      setTimeout(homePageElementAnimation, 2000)
      setTimeout(()=> {
        window.location.reload();
      }, 2000)
    })
}

