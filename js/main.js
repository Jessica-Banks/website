
// Create gsap timeline for the homepage animation
const tlFeature = gsap.timeline({
    scrollTrigger:{
        trigger: ".feature",
        start: "top",
        end: "bottom -50%",
        toggleActions: "restart none none reverse", 
        scrub: 1.5, 
    }
});

// Animate the ingredients 
tlFeature.to(".orange", {y: 20, x: -350, rotation: -95})
             .to(".orange3", {y: -150, x: 300, rotation: -55}, 0) 
            // 0 value to animate at the same time as previous animation 
             .to(".leaf2", {y: 150, x: 250, rotation: 5}, 0) 
             .to(".leaf3", {y: -100, x: 300, rotation: 5}, 0) 
             .to(".leaf", {y:-80, x: -40, rotation: -55},0) 
             .to(".leaves", {y: 250, x:-300, rotation: -70}, 0)
             .to(".ginger", {y: 120, x: -455, rotation: 1}, 0)
             .to(".ginger2", {y: 200, x: 280, rotation: 345}, 0)
             .to(".orange2", {y: 50, x: 300, rotation: 50}, 0)
             .to(".ginger3", {y: -50, x: 200, rotation: -140}, 0);

// Animate feature bottle 
function createTimeline() {
  //get elements
  let contentWrap = document.querySelector('.content-wrap');
  let featureBottle = document.querySelector('.feature-bottle');          
   //calculate the y value to make the feature bottle stop with the content section
  let yValue = contentWrap.offsetTop + contentWrap.offsetHeight / 3 - featureBottle.offsetHeight / 2;
  //gsap timeline           
  const tlBottle = gsap.timeline({
      scrollTrigger: {
          trigger: ".feature-bottle",
          start: "top",
          end: "bottom -50%",
          scrub: 0.25, 
      }
  });
  //animate bottle          
  tlBottle.to(".feature-bottle", {y: yValue, ease: "slow(0.7,0.6, false)"});
}

  // Call function to start animation          
  createTimeline();
       
  // Disable ScrollTrigger for screens smaller than 768px
      ScrollTrigger.matchMedia({
        "(max-width: 768px)": function () {
        ScrollTrigger.disable();
      },
  });


// gsap timeline for text animation
  const tlText = gsap.timeline({
    scrollTrigger: {
      trigger: '.content-wrap',
      start: "+=-150%",
      end: "+=-150%",
      toggleActions: "restart none none reverse", 
      }
  });
    //animate elements      
    tlText.from('.content', {y: 100, opacity: 0, duration: 2, ease: "power4.out", delay: 1, stagger: 0.3})
    .from('.content-wrap h3', {y: 100, opacity: 0, duration: 2, ease: "power4.out", delay: 0.5}, 0)
    .from('.title', {y: 100, opacity: 0, duration: 2, ease: "power4.out", delay: 0.5}, 0)
    .from('.feature-button', {y: 100, opacity: 0, duration: 2, ease: "power4.out", delay: 1}, 0);
  


// SWIPER

var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    thumbs: {
    swiper: swiper,
    },
  });
  


// Animating Contact Section
  //gsap timeline
  const tlAnimate = gsap.timeline({
    scrollTrigger: {
      trigger: "#contact",
      start: "top 70%",
      end: "bottom 10%",
      toggleActions: "play none none none",
    },
  });
  //animate elements
  tlAnimate.from(".contact .contact-form", {opacity: 0, x: 100, duration: 2})
  .from(".form-image img", {opacity: 0.5, x: -300, duration: 2},0)
  .from(".contact h2, .contact h5", {opacity: 0, x: 100, duration: 2},0);
  



// RESPONSIVE MOBILE MENU
//get elements
const hamburgerBtn = document.querySelector('.hamburger-btn');
const navMenu = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links a');

hamburgerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});


// Closing menu when item is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show');
  });
});





