/*import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);*/

// PROJET UN

let tl = gsap.timeline({
  scrollTrigger: {
    immediateRender: true,
    trigger: "#projectOne",
    start: "top bottom",
    end: "top center",
    scrub: true,
    ease: "none",
  },
});

tl.add("start").fromTo(
  "#CSSLogo",
  {
    y: "0vh",
    x: "0vw",
  },
  {
    y: "120vh",
    x: "5vw",
  },
  "start"
);

tl.fromTo(
  "#HTMLLogo",
  {
    y: "0vh",
    x: "0vw",
  },
  {
    y: "120vh",
    x: "30vw",
  },
  "start"
);

tl.fromTo(
  "#JSLogo",
  {
    y: "0vh",
    x: "0vw",
  },
  {
    y: "120vh",
    x: "55vw",
  },
  "start"
);

// PROJET DEUX

gsap
  .timeline({
    scrollTrigger: {
      immediateRender: false,
      paused: true,
      trigger: "#projectTwo",
      start: "top bottom",
      end: "top center",
      scrub: true,
    },
  })
  .to(
    "#CSSLogo",
    {
      y: "220vh",
      x: "20vw",
    },
    ">"
  )
  .to(
    "#HTMLLogo",
    {
      y: "220vh",
      x: "55vw",
    },
    "<"
  );

// PROJET TROIS

gsap
  .timeline({
    scrollTrigger: {
      immediateRender: false,
      paused: true,
      trigger: "#projectThree",
      start: "top bottom",
      end: "top center",
      scrub: true,
    },
  })
  .to(
    "#CSSLogo",
    {
      y: "320vh",
      x: "10vw",
    },
    ">"
  )
  .to(
    "#HTMLLogo",
    {
      y: "320vh",
      x: "15vw",
    },
    "<"
  )
  .to(
    "#JSLogo",
    {
      y: "320vh",
      x: "20vw",
    },
    "<"
  )
  .to(
    "#ReactLogo",
    {
      y: "320vh",
      x: "25vw",
    },
    "<"
  )
  .to(
    "#GSAPLogo",
    {
      y: "320vh",
      x: "30vw",
    },
    "<"
  );
