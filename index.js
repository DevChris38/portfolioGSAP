let img = document.querySelector("img");
let boxLinkedIn = document.querySelector("#linkedIn");
let boxLinkedInLogo = document.querySelector("#linkedInLogo");
let boxGitHub = document.querySelector("#gitHub");
let boxGitHubLogo = document.querySelector("#gitHubLogo");
let boxX = document.querySelector("#X");
let boxXLogo = document.querySelector("#XLogo");
let boxMail = document.querySelector("#mail");
let boxMailLogo = document.querySelector("#mailLogo");
let boxCV = document.querySelector("#CV");
let boxCVLogo = document.querySelector("#CVLogo");

let boxLinkedInLogoMove = gsap.to(boxLinkedInLogo, {
  paused: false,
  x: "7.5vw",
  y: "7.5vw",
});

boxLinkedInLogoMove.pause();

let boxLinkedInMove = gsap.to(boxLinkedIn, {
  paused: false,
  x: "2.5vw",
  y: "2.5vw",
  scale: 2,
  rotate: 180,
  borderRadius: "100%",
});
boxLinkedInMove.pause();

let boxGitHubLogoMove = gsap.to(boxGitHubLogo, {
  paused: false,
  x: "-7.5vw",
  y: "7.5vw",
});

boxGitHubLogoMove.pause();

let boxGitHubMove = gsap.to(boxGitHub, {
  paused: false,
  x: "-2.5vw",
  y: "2.5vw",
  scale: 2,
  rotate: -180,
  borderRadius: "100%",
});
boxGitHubMove.pause();

let boxMailLogoMove = gsap.to(boxMailLogo, {
  paused: false,
  x: "7.5vw",
  y: "-7.5vw",
});

boxMailLogoMove.pause();

let boxMailMove = gsap.to(boxMail, {
  paused: false,
  x: "2.5vw",
  y: "-2.5vw",
  scale: 2,
  rotate: 180,
  borderRadius: "100%",
});
boxMailMove.pause();

let boxCVLogoMove = gsap.to(boxCVLogo, {
  paused: false,
  x: "-7.5vw",
  y: "-7.5vw",
});

boxMailLogoMove.pause();

let boxCVMove = gsap.to(boxCV, {
  paused: false,
  x: "-2.5vw",
  y: "-2.5vw",
  scale: 2,
  rotate: 180,
  borderRadius: "100%",
});
boxMailMove.pause();

boxLinkedInLogo.addEventListener("mousemove", () => {
  boxLinkedInMove.play();
  boxLinkedInLogoMove.play();
});
boxLinkedIn.addEventListener("mouseout", () => {
  boxLinkedInMove.play().reverse();
  boxLinkedInLogoMove.play().reverse();
});

boxGitHubLogo.addEventListener("mousemove", () => {
  boxGitHubMove.play();
  boxGitHubLogoMove.play();
});
boxGitHub.addEventListener("mouseout", () => {
  boxGitHubMove.play().reverse();
  boxGitHubLogoMove.play().reverse();
});

boxMailLogo.addEventListener("mousemove", () => {
  boxMailMove.play();
  boxMailLogoMove.play();
});
boxMail.addEventListener("mouseout", () => {
  boxMailMove.play().reverse();
  boxMailLogoMove.play().reverse();
});
boxCVLogo.addEventListener("mousemove", () => {
  boxCVMove.play();
  boxCVLogoMove.play();
});
boxCV.addEventListener("mouseout", () => {
  boxCVMove.play().reverse();
  boxCVLogoMove.play().reverse();
});

gsap.to("#descendre", {
  scrollTrigger: {
    trigger: ".two",
    start: "top bottom",
    end: "top top",
    scrub: true,
  },
  opacity: 0,
});
gsap.to("#first", {
  scrollTrigger: {
    trigger: ".two",
    start: "center bottom",
    scrub: true,
  },
  opacity: 100,
});
gsap.to("#first", {
  scrollTrigger: {
    trigger: ".two",
    start: "center center",
    scrub: true,
  },
  opacity: 0,
});
gsap.to("#second", {
  scrollTrigger: {
    trigger: ".two",
    start: "center center",
    scrub: true,
  },
  opacity: 100,
});

gsap.to("#second", {
  scrollTrigger: {
    trigger: ".two",
    start: "center top",
    scrub: true,
  },
  opacity: 0,
});
gsap.to("#third", {
  scrollTrigger: {
    trigger: ".two",
    start: "center top",
    scrub: true,
  },
  opacity: 100,
});

gsap.to("#third", {
  scrollTrigger: {
    trigger: ".three",
    start: "center center",
    scrub: true,
  },
  opacity: 0,
});
gsap.to("#forth", {
  scrollTrigger: {
    trigger: ".three",
    start: "center center",
    scrub: true,
  },
  opacity: 100,
});
gsap.to("#forth", {
  scrollTrigger: {
    trigger: ".three",
    start: "center top",
    scrub: true,
  },
  opacity: 0,
});
gsap.to("#fifth", {
  scrollTrigger: {
    trigger: ".three",
    start: "center top",
    scrub: true,
  },
  opacity: 100,
});

gsap.to("#fifth", {
  scrollTrigger: {
    trigger: ".four",
    start: "center center",
    scrub: true,
  },
  opacity: 0,
});
gsap.to("#sixth", {
  scrollTrigger: {
    trigger: ".four",
    start: "center center",
    scrub: true,
  },
  opacity: 100,
});

gsap.to("#sixth", {
  scrollTrigger: {
    trigger: ".four",
    start: "center top",
    scrub: true,
  },
  opacity: 0,
});
gsap.to("#seventh", {
  scrollTrigger: {
    trigger: ".four",
    start: "center top",
    scrub: true,
  },
  opacity: 100,
});

gsap.to("#arrow", {
  scrollTrigger: {
    trigger: ".four",
    start: "center top",
    scrub: true,
  },
  opacity: 100,
});
