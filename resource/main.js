// const nameText = "Class TKJ 2";
// const nameElement = document.getElementById("name-text");
// let index = 0;
// let isTyping = true;
// let cursorVisible = true;

// function updateText() {
//   nameElement.innerHTML = nameText.substring(0, index) + (cursorVisible ? '|' : '');
// }

// function blinkCursor() {
//   cursorVisible = !cursorVisible;
//   updateText();
//   setTimeout(blinkCursor, 500);
// }

// function type() {
//   if (isTyping && index < nameText.length) {
//     index++;
//     updateText();
//     setTimeout(type, 400);
//   } else {
//     isTyping = false;
//     setTimeout(erase, 1000);
//   }
// }

// function erase() {
//   if (!isTyping && index > 0) {
//     index--;
//     updateText();
//     setTimeout(erase, 100);
//   } else {
//     isTyping = true;
//     setTimeout(type, 500);
//   }
// }

// blinkCursor();
// type();

// loaded
// window.addEventListener("load", function () {
//   setTimeout(() => {
//       document.getElementById("preloader").style.opacity = "0";

//           document.getElementById("preloader").style.display = "none";

//           document.querySelectorAll(".animated").forEach(el => {
//               el.style.animation = "none";
//               void el.offsetWidth;
//               el.style.animation = "";
//           });

//   }, 1000);
// });

// Marquee effect
const marquee = document.getElementById("marquee");
const content = document.getElementById("marquee-content");

// Duplikat isi hingga cukup panjang
while (marquee.scrollWidth < window.innerWidth * 2) {
  const clone = content.cloneNode(true);
  marquee.appendChild(clone);
}

// Pause/resume saat hover
marquee.addEventListener("mouseenter", () => {
  marquee.classList.add("paused");
});

marquee.addEventListener("mouseleave", () => {
  marquee.classList.remove("paused");
});

// Scroll up
let lastScrollTop = 0;
const header = document.querySelector("header");
const toTop = document.querySelector(".to-top");
const heroSection = document.querySelector(".image-opacity");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const heroSectionOffsetTop = heroSection.offsetTop;

  if (scrollTop > heroSectionOffsetTop) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }

  if (scrollTop > lastScrollTop) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScrollTop = scrollTop;
});

// gsap
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  const animationStart = () => {
    return gsap
      .timeline()
      .to("marquee1", {
        opacity: 0,
        y: "-2rem",
        scale: 1,
      })
      .to(
        "#name1",
        {
          scale: 0.4,
          y: "2rem",
          x: "200%",
        },
        "-=0.5"
      )
      .to(
        "#name2",
        {
          scale: 3,
          y: "2rem",
        },
        "-=0.5"
      )
      .to(
        "#name3",
        {
          scale: 0.4,
          y: "2rem",
          x: "-200%",
        },
        "-=0.5"
      );
  };

  let masterTi = gsap.timeline({
    scrollTrigger: {
      trigger: "member-class", // ⬅️ Tambahkan trigger yang sesuai
      end: "+=1080 0px",
      scrub: true,
      pin: "member-class",
    },
  });

  masterTi.add(animationStart());
});