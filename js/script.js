// navbar

const trigger = document.querySelector(".trigger");
const navOpen = document.querySelector(".nav-open");
const navContent = document.querySelectorAll(".nav-open h1");
const navSocials = document.querySelector(".headerSocials");

const tl = new TimelineMax({
  paused: true,
  reversed: true,
});

tl.to(navOpen, 0.5, {
  y: 0,
})
  .fromTo(
    navContent,
    0.5,
    {
      opacity: 0,
      y: 10,
    },
    {
      opacity: 1,
      y: 0,
    },
    "-=0.1"
  )
  .fromTo(
    navSocials,
    0.5,
    {
      opacity: 0,
      y: 10,
    },
    {
      opacity: 1,
      y: 0,
    },
    "-=0.5"
  )

  .fromTo(
    ".trigger span",
    0.5,
    {
      opacity: 0,
      display: "none",
      y: 10,
    },
    {
      opacity: 1,
      display: "inline-block",
      y: 0,
    },
    "-=0.5"
  )

  .to(
    trigger,
    0.2,
    {
      color: "#3A304B",
    },
    "-=1"
  );

trigger.addEventListener("click", () => {
  tl.reversed() ? tl.play() : tl.reverse();
});

// home page animation

const trigger2 = document.querySelector(".hero");
const twenty = document.querySelector(".animated p");

const tl2 = new TimelineMax({
  paused: true,
  reversed: true,
  scrollTrigger: {
    trigger: ".animated",
    pin: true,
    start: "20% 20%",
    end: "+=300%",
    scrub: 1,
  },
});

tl2.to(twenty, {
  scale: 20,
  x: "-500%",
});

gsap.to(".words", {
  scrollTrigger: {
    trigger: ".words",
    scrub: true,
    start: "200% 10%",
    end: "300%",
  },
  opacity: 0,
});

gsap.to(".afterAnimation", {
  scrollTrigger: {
    trigger: ".afterAnimation",
    scrub: true,
    start: "top 70%",
    end: "bottom 70%",
  },
  opacity: 1,
});

gsap.to(".servicehero3", {
  backgroundPosition: `50% ${-innerHeight / 2}px`,
  ease: "none",
  scrollTrigger: {
    trigger: ".servicehero3",
    scrub: true,
  },
});

const aniOff = window.matchMedia("(min-width: 1000px)");
const aniOne = window.matchMedia("(min-width: 1500px)");

if (aniOne.matches) {
  gsap.to(".image1", {
    scrollTrigger: {
      trigger: ".image1",
      scrub: 0.5,
      start: "top bottom",
      end: "+=100%",
    },
    backgroundSize: "100%",
  });

  gsap.to(".image2", {
    scrollTrigger: {
      trigger: ".image2",
      scrub: 0.5,
      start: "top bottom",
      end: "+=100%",
    },
    backgroundSize: "100%",
  });

  gsap.to(".image3", {
    scrollTrigger: {
      trigger: ".image3",
      scrub: 0.5,
      start: "top bottom",
      end: "+=100%",
    },
    backgroundSize: "100%",
  });
}

if (aniOff.matches) {
  gsap.to(".image1", {
    scrollTrigger: {
      trigger: ".image1",
      scrub: 0.5,
      start: "top bottom",
      end: "+=100%",
    },
    backgroundSize: "100%",
  });

  gsap.to(".image2", {
    scrollTrigger: {
      trigger: ".image2",
      scrub: 0.5,
      start: "top bottom",
      end: "+=150%",
    },
    backgroundSize: "150%",
  });

  gsap.to(".image3", {
    scrollTrigger: {
      trigger: ".image3",
      scrub: 0.5,
      start: "top bottom",
      end: "+=150%",
    },
    backgroundSize: "150%",
  });
}

gsap.to(".pinned1", {
  scrollTrigger: {
    trigger: ".pinned1",
    anticipatePin: 1,
    scrub: true,
    start: "top",
    end: "+=100%",
  },
  backgroundAttachment: "scroll",
});

gsap.to(".pinned2", {
  scrollTrigger: {
    trigger: ".pinned2",
    anticipatePin: 1,
    scrub: true,
    start: "top",
    end: "+=100%",
    markers: true,
  },
  backgroundAttachment: "scroll",
});

gsap.to(".pinned3", {
  scrollTrigger: {
    trigger: ".pinned3",
    anticipatePin: 1,
    scrub: true,
    start: "top",
    end: "+=100%",
  },
  backgroundAttachment: "scroll",
});

// parallax images for pages

gsap.to(".tenantHero", {
  backgroundPosition: `50% ${-innerHeight / 2}px`,
  ease: "none",
  scrollTrigger: {
    trigger: ".tenantHero",
    scrub: true,
  },
});

gsap.to(".destinationHero", {
  backgroundPosition: `50% ${-innerHeight / 1.25}px`,
  ease: "none",
  scrollTrigger: {
    trigger: ".destinationHero",
    scrub: true,
  },
});

gsap.to(".landlordHero", {
  backgroundPosition: `50% ${-innerHeight / 2}px`,
  ease: "none",
  scrollTrigger: {
    trigger: ".landlordHero",
    scrub: true,
  },
});

gsap.to(".propertyHero", {
  backgroundPosition: `50% ${-innerHeight / 2}px`,
  ease: "none",
  scrollTrigger: {
    trigger: ".propertyHero",
    scrub: true,
  },
});

gsap.to(".leaseHero", {
  backgroundPosition: `50% ${-innerHeight / 2}px`,
  ease: "none",
  scrollTrigger: {
    trigger: ".leaseHero",
    scrub: true,
  },
});

gsap.to(".commissionHero", {
  backgroundPosition: `50% ${-innerHeight / 2}px`,
  ease: "none",
  scrollTrigger: {
    trigger: ".commissionHero",
    scrub: true,
  },
});

gsap.to(".passHero", {
  backgroundPosition: `50% ${-innerHeight / 2}px`,
  ease: "none",
  scrollTrigger: {
    trigger: ".passHero",
    scrub: true,
  },
});

gsap.to(".personalHero", {
  backgroundPosition: `50% ${-innerHeight / 2}px`,
  ease: "none",
  scrollTrigger: {
    trigger: ".personalHero",
    scrub: true,
  },
});

gsap.to(".oopHero", {
  backgroundPosition: `50% ${-innerHeight / 4}px`,
  ease: "none",
  scrollTrigger: {
    trigger: ".oopHero",
    scrub: true,
  },
});

// scrolltrigger boxes

gsap.to(".boxanimate", {
  scrollTrigger: ".boxanimate",
  y: 0,
  opacity: 1,
  duration: 1,
});

// footer animations

const btn = document.querySelector(".backToTop");

btn.addEventListener("click", () => {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    "300"
  );
});
