document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });

  // Prevent horizontal scroll
  document.body.style.overflowX = "hidden";

  // ✅ ScrollSmoother first
  ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.2,
    effects: true,
  });

  // =============================
  // Timeline 1 (Landing animations)
  // =============================
  const timeline = gsap.timeline({
    defaults: { duration: 1, ease: "power1.out" },
  });

  timeline
    .from("nav", { y: -100 })
    .from("#leaf1", { opacity: 0, x: -100 })
    .from("#leaf2", { opacity: 0, y: -50 })
    .from(".landing-div #fanta-can", { opacity: 0, y: 50 }, "showfanta")
    .from("#oranges", { opacity: 0 }, "showfanta")
    .from(
      ".landing-div h1",
      { opacity: 0, y: -50, duration: 1.5 },
      "showfanta"
    );

  gsap.from("#orange-slice", { opacity: 0, duration: 1.5, delay: 2 });

  // =============================
  // Timeline 2 (Content reveal)
  // =============================
  const timeline2 = gsap.timeline({
    defaults: { duration: 1, ease: "power1.out" },
    scrollTrigger: {
      trigger: "#content-div",
      start: "top 80%",
      end: "center 70%",
      scrub: true,
    },
  });

  timeline2
    .from("h2", { opacity: 0, y: 40 })
    .from("#content-div p", { opacity: 0, y: 40 });

  // =============================
  // Timeline 3 (Slice + can move)
  // =============================
  const timeline3 = gsap.timeline({
    defaults: { ease: "power1.out" },
    scrollTrigger: {
      trigger: "#content-div",
      start: "top 80%",
      end: "center 55%",
      scrub: true,
    },
  });

  timeline3
    .to(
      "#fanta-can",
      { xPercent: -65, yPercent: 170, zIndex: 800 },
      "fantaMove"
    )
    .to(
      "#orange-slice",
      { rotation: 360, xPercent: -170, yPercent: 450 },
      "fantaMove"
    )
    .to(
      "#leaf1",
      { xPercent: 300, yPercent: 570, rotation: 90, zIndex: 1 },
      "fantaMove"
    );

  // =============================
  // Timeline 4 (Cards section)
  // =============================
  const timeline4 = gsap.timeline({
    defaults: { ease: "power1.out" },
    scrollTrigger: {
      trigger: "#card-div",
      start: "top 85%",
      end: "center 55%",
      scrub: true,
    },
  });

  timeline4
    .to("#fanta-can", { xPercent: 0, yPercent: 390, width: "25%" }, "fantaMove")
    .to(
      "#orange-slice",
      { xPercent: -40, yPercent: 600, width: "17%" },
      "fantaMove"
    )
    .from(
      "#fanta-apple",
      { xPercent: -50, rotation: -40, opacity: 0 },
      "fantaMove"
    )
    .from(
      "#lemon-fanta",
      { xPercent: 50, rotation: 40, opacity: 0 },
      "fantaMove"
    );

  // =============================
  // Timeline 5 (Footer)
  // =============================
  const timeline5 = gsap.timeline({
    defaults: { ease: "power1.out" },
    scrollTrigger: {
      trigger: "footer",
      start: "top 90%",
      end: "center 70%",
      scrub: true,
    },
  });

  timeline5
    .to(
      "#fanta-can",
      { xPercent: -60, yPercent: 385, width: "40%" },
      "fantaMove"
    )
    .to(
      "#orange-slice",
      { xPercent: -20, yPercent: 420, width: "17%" },
      "fantaMove"
    );
});
