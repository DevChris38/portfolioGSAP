import { gsap } from "gsap";

let img = document.querySelector("img");
let boxLinkedIn = document.querySelector("#linkedIn");
let boxLinkedInLogo = document.querySelector("#linkedInLogo");
let boxGitHub = document.querySelector("#gitHub");
let boxGitHubLogo = document.querySelector("#gitHubLogo");
let boxX = document.querySelector("#X");
let boxXLogo = document.querySelector("#XLogo");
let boxMail = document.querySelector("#mail");
let boxMailLogo = document.querySelector("#mailLogo");

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
  console.log("toto");
  boxMailMove.play();
  boxMailLogoMove.play();
});
boxMail.addEventListener("mouseout", () => {
  boxMailMove.play().reverse();
  boxMailLogoMove.play().reverse();
});
