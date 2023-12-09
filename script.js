gsap.to("header", {
  backgroundColor: "#222",
  duration: 0.5,
  height: "60px",
  scrollTrigger: {
    trigger: "header",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.from(".project-item", {
  scale: 0.8,
  opacity: 0,
  duration: 1,

  scrollTrigger: {
    trigger: ".project-item",
    scroller: "body",
    // marker:true,
    start: "top 80%",
    end: "top 65%",
    scrub: 2,
  },
});
