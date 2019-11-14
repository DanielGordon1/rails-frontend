import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Change your life", "Learn to code", "Finish lecture"],
    typeSpeed: 1,
    loop: true
  });
}

export { loadDynamicBannerText };
